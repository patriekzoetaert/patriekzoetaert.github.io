package javazoom.jlGui.applet;

/**
 * BasicPlayer.
 *
 *-----------------------------------------------------------------------
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU Library General Public License as published
 *   by the Free Software Foundation; either version 2 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Library General Public License for more details.
 *
 *   You should have received a copy of the GNU Library General Public
 *   License along with this program; if not, write to the Free Software
 *   Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 *----------------------------------------------------------------------
 */
import java.io.*;
import java.util.*;
import java.net.URL;
import javazoom.jlGui.BasicPlayerListener;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioFileFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.SourceDataLine;
import javax.sound.sampled.UnsupportedAudioFileException;
import javax.sound.sampled.FloatControl;
import javax.sound.sampled.Control;
import javazoom.Util.Debug;

/**
 * BasicPlayer implements basics features of a player. The playback is done
 * with a thread.
 * BasicPlayer is the result of jlGui 0.5 from JavaZOOM and BaseAudioStream
 * from Matthias Pfisterer JavaSound examples.
 *
 * @author	E.B from JavaZOOM
 *
 * Homepage : http://www.javazoom.net
 *
 */
public class BasicPlayer implements Runnable
{

  private static final int EXTERNAL_BUFFER_SIZE = 4000 * 4;

  private Thread m_thread = null;
  private Object m_dataSource;
  private AudioInputStream m_audioInputStream;
  private AudioFileFormat m_audioFileFormat;
  private SourceDataLine m_line;
  private FloatControl m_gainControl;
  private FloatControl m_panControl;

  /**
   * These variables are used to distinguish stopped, paused, playing states.
   * We need them to control Thread.
   */
  public static final int PAUSED = 1;
  public static final int PLAYING = 0;
  public static final int STOPPED = 2;
  public static final int READY = 3;
  private int m_status = READY;
  private long doSeek = -1;
  private File _file = null;
  private BasicPlayerListener m_bpl = null;

  // Applet UGLY workaround.
  public static String OGGEXTENSIONS = "ogg";
  public static boolean isOgg = false;
  public static boolean forceOgg = false;

  /**
   * Constructs a Basic Player.
   */
  public BasicPlayer()
  {
    m_dataSource = null;
    m_audioInputStream = null;
    m_audioFileFormat = null;
    m_line = null;
    m_gainControl = null;
    m_panControl = null;
  }

  /**
   * Constructs a Basic Player with a BasicPlayerListener.
   */
  public BasicPlayer(BasicPlayerListener bpl)
  {
    this();
    m_bpl = bpl;
  }

  /**
   * Returns BasicPlayer status.
   */
  public int getStatus()
  {
    return m_status;
  }

  /**
   * Sets the data source as a file.
   */
  public void setDataSource(File file) throws UnsupportedAudioFileException, LineUnavailableException, IOException
  {
    if (file != null)
    {
      m_dataSource = file;
      initAudioInputStream();
    }
  }

  /**
   * Sets the data source as an url.
   */
  public void setDataSource(URL url) throws UnsupportedAudioFileException, LineUnavailableException, IOException
  {
    if (url != null)
    {
      m_dataSource = url;
      initAudioInputStream();
    }
  }

  /**
   * Sets the data source as an InputStream
   */
  public void setDataSource(InputStream inputStream) throws UnsupportedAudioFileException, LineUnavailableException, IOException
  {
    if (inputStream != null)
    {
      m_dataSource = inputStream;
      initAudioInputStream();
    }
  }

  /**
   * Inits Audio ressources from the data source.<br>
   * - AudioInputStream <br>
   * - AudioFileFormat
   */
  private void initAudioInputStream() throws UnsupportedAudioFileException, LineUnavailableException, IOException
  {
    if (m_dataSource instanceof URL)
    {
      initAudioInputStream( (URL) m_dataSource);
    }
    else if (m_dataSource instanceof File)
    {
      initAudioInputStream( (File) m_dataSource);
    }
    else if (m_dataSource instanceof InputStream)
    {
      initAudioInputStream( (InputStream) m_dataSource);
    }
  }

  /**
   * Inits Audio ressources from file.
   */
  private void initAudioInputStream(File file) throws UnsupportedAudioFileException, IOException
  {
    _file = file;
    // Applet UGLY workaround.
    if ((file.getName().toLowerCase().endsWith(OGGEXTENSIONS)) || (forceOgg==true))
    {
      m_audioInputStream = AppletVorbisSPIWorkaround.getAudioInputStream(file);
      m_audioFileFormat = AppletVorbisSPIWorkaround.getAudioFileFormat(file);
      isOgg = true;
    }
    else
    {
      m_audioInputStream = AppletMpegSPIWorkaround.getAudioInputStream(file);
      m_audioFileFormat = AppletMpegSPIWorkaround.getAudioFileFormat(file);
      isOgg = false;
    }
    // m_audioInputStream = AudioSystem.getAudioInputStream(file);
    // m_audioFileFormat = AudioSystem.getAudioFileFormat(file);
  }

  /**
   * Inits Audio ressources from URL.
   */
  private void initAudioInputStream(URL url) throws UnsupportedAudioFileException, IOException
  {
    // Applet UGLY workaround.
    if ((url.toString().toLowerCase().endsWith(OGGEXTENSIONS))  || (forceOgg==true))
    {
      m_audioInputStream = AppletVorbisSPIWorkaround.getAudioInputStream(url);
      m_audioFileFormat = AppletVorbisSPIWorkaround.getAudioFileFormat(url);
      isOgg = true;
    }
    else
    {
      m_audioInputStream = AppletMpegSPIWorkaround.getAudioInputStream(url);
      m_audioFileFormat = AppletMpegSPIWorkaround.getAudioFileFormat(url);
      isOgg = false;
    }
    //m_audioInputStream = AudioSystem.getAudioInputStream(url);
    //m_audioFileFormat = AudioSystem.getAudioFileFormat(url);
  }

  /**
   * Inits Audio ressources from InputStream.
   */
  private void initAudioInputStream(InputStream inputStream) throws UnsupportedAudioFileException, IOException
  {
    // Applet UGLY workaround.
    if (forceOgg==true)
    {
      m_audioInputStream = AppletVorbisSPIWorkaround.getAudioInputStream(inputStream);
      m_audioFileFormat = AppletVorbisSPIWorkaround.getAudioFileFormat(inputStream);
      isOgg = true;
    }
    else
    {
      m_audioInputStream = AppletMpegSPIWorkaround.getAudioInputStream(inputStream);
      m_audioFileFormat = AppletMpegSPIWorkaround.getAudioFileFormat(inputStream);
      isOgg = false;
    }
    //m_audioInputStream = AudioSystem.getAudioInputStream(inputStream);
    //m_audioFileFormat = AudioSystem.getAudioFileFormat(inputStream);
  }

  /**
   * Inits Audio ressources from AudioSystem.<br>
   * DateSource must be present.
   */
  protected void initLine() throws LineUnavailableException
  {
    if (m_line == null)
    {
      createLine();
      trace(1, getClass().getName(), "Create Line OK ");
      openLine();
    }
    else
    {
      AudioFormat lineAudioFormat = m_line.getFormat();
      AudioFormat audioInputStreamFormat = m_audioInputStream == null ? null : m_audioInputStream.getFormat();
      if (!lineAudioFormat.equals(audioInputStreamFormat))
      {
        m_line.close();
        openLine();
      }
    }
  }

  /**
   * Inits a DateLine.<br>
   *
   * We check if the line supports Volume and Pan controls.
   *
   * From the AudioInputStream, i.e. from the sound file, we
   * fetch information about the format of the audio data. These
   * information include the sampling frequency, the number of
   * channels and the size of the samples. There information
   * are needed to ask JavaSound for a suitable output line
   * for this audio file.
   * Furthermore, we have to give JavaSound a hint about how
   * big the internal buffer for the line should be. Here,
   * we say AudioSystem.NOT_SPECIFIED, signaling that we don't
   * care about the exact size. JavaSound will use some default
   * value for the buffer size.
   */
  private void createLine() throws LineUnavailableException
  {
    if (m_line == null)
    {
      AudioFormat sourceFormat = m_audioInputStream.getFormat();
      trace(1, getClass().getName(), "Source format : ", sourceFormat.toString());
      AudioFormat targetFormat = new AudioFormat(AudioFormat.Encoding.PCM_SIGNED,
                                                 sourceFormat.getSampleRate(),
                                                 16,
                                                 sourceFormat.getChannels(),
                                                 sourceFormat.getChannels() * 2,
                                                 sourceFormat.getSampleRate(),
                                                 false);

      trace(1, getClass().getName(), "Target format: " + targetFormat);

      // Applet UGLY workaround.
      if ((isOgg == true) || (forceOgg == true))  m_audioInputStream = AppletVorbisSPIWorkaround.getAudioInputStream(targetFormat,m_audioInputStream);
      else m_audioInputStream = AppletMpegSPIWorkaround.getAudioInputStream(targetFormat,m_audioInputStream);
      //m_audioInputStream = AudioSystem.getAudioInputStream(targetFormat, m_audioInputStream);

      AudioFormat audioFormat = m_audioInputStream.getFormat();
      trace(1, getClass().getName(), "Create Line : ", audioFormat.toString());
      DataLine.Info info = new DataLine.Info(SourceDataLine.class, audioFormat, AudioSystem.NOT_SPECIFIED);
      m_line = (SourceDataLine) AudioSystem.getLine(info);

      /*-- Display supported controls --*/
      Control[] c = m_line.getControls();
      for (int p = 0; p < c.length; p++)
      {
        trace(2, getClass().getName(), "Controls : " + c[p].toString());
      }
      /*-- Is Gain Control supported ? --*/
      if (m_line.isControlSupported(FloatControl.Type.MASTER_GAIN))
      {
        m_gainControl = (FloatControl) m_line.getControl(FloatControl.Type.MASTER_GAIN);
        trace(1, getClass().getName(), "Master Gain Control : [" + m_gainControl.getMinimum() + "," + m_gainControl.getMaximum() + "]", "" + m_gainControl.getPrecision());
      }

      /*-- Is Pan control supported ? --*/
      if (m_line.isControlSupported(FloatControl.Type.PAN))
      {
        m_panControl = (FloatControl) m_line.getControl(FloatControl.Type.PAN);
        trace(1, getClass().getName(), "Pan Control : [" + m_panControl.getMinimum() + "," + m_panControl.getMaximum() + "]", "" + m_panControl.getPrecision());
      }
    }
  }

  /**
   * Opens the line.
   */
  private void openLine() throws LineUnavailableException
  {
    if (m_line != null)
    {
      AudioFormat audioFormat = m_audioInputStream.getFormat();
      trace(1, getClass().getName(), "AudioFormat : " + audioFormat);
      m_line.open(audioFormat, m_line.getBufferSize());
    }
  }

  /**
   * Stops the playback.<br>
   *
   * Player Status = STOPPED.<br>
   * Thread should free Audio ressources.
   */
  public void stopPlayback()
  {
    if ( (m_status == PLAYING) || (m_status == PAUSED))
    {
      if (m_line != null)
      {
        m_line.flush();
        m_line.stop();
      }
      m_status = STOPPED;
      // Fix to unlock file.
      try
      {
        m_audioInputStream.close();
      }
      catch (IOException ioe)
      {
        trace(1, getClass().getName(), "Cannot close stream : " + ioe.getMessage());
      }
      trace(1, getClass().getName(), "Stop called");
    }
  }

  /**
   * Pauses the playback.<br>
   *
   * Player Status = PAUSED.
   */
  public void pausePlayback()
  {
    if (m_line != null)
    {
      if (m_status == PLAYING)
      {
        m_line.flush();
        m_line.stop();
        m_status = PAUSED;
        trace(1, getClass().getName(), "Pause called");
      }
    }
  }

  /**
   * Resumes the playback.<br>
   *
   * Player Status = PLAYING.
   */
  public void resumePlayback()
  {
    if (m_line != null)
    {
      if (m_status == PAUSED)
      {
        m_line.start();
        m_status = PLAYING;
        trace(1, getClass().getName(), "Resume called");
      }
    }
  }

  /**
   * Starts playback.
   */
  public String startPlayback()
  {
    if ( (m_status == STOPPED) || (m_status == READY))
    {
      trace(1, getClass().getName(), "Start called");
      if (! (m_thread == null || !m_thread.isAlive()))
      {
        trace(1, getClass().getName(), "WARNING: old thread still running!!");
        int cnt = 0;
        while (m_status != READY)
        {
          try
          {
            if (m_thread != null)
            {
              cnt++;
              m_thread.sleep(1000);
              if (cnt > 2)
              {
                m_thread.interrupt();
              }
            }
          }
          catch (Exception e)
          {
            trace(1, getClass().getName(), "Waiting Error : " + e.getMessage());
          }
          trace(1, getClass().getName(), "Waiting ... " + cnt);
        }
      }
      try
      {
        initLine();
      }
      catch (Exception e)
      {
        trace(0, getClass().getName(), "Cannot init Line", e.getMessage());
        //e.printStackTrace();
        return "ERROR";
      }
      trace(1, getClass().getName(), "Creating new thread");
      m_thread = new Thread(this);
      m_thread.start();
      if (m_line != null)
      {
        m_line.start();
      }
    }
    return null;
  }

  /**
   * Main loop.
   *
   * Player Status == STOPPED => End of Thread + Freeing Audio Ressources.<br>
   * Player Status == PLAYING => Audio stream data sent to Audio line.<br>
   * Player Status == PAUSED => Waiting for another status.
   */
  public void run()
  {
    trace(1, getClass().getName(), "Thread Running");
    //if (m_audioInputStream.markSupported()) m_audioInputStream.mark(m_audioFileFormat.getByteLength());
    //else trace(1,getClass().getName(), "Mark not supported");
    int nBytesRead = 1;
    m_status = PLAYING;
    int nBytesCursor = 0;
    byte[] abData = new byte[EXTERNAL_BUFFER_SIZE];
    float nFrameSize = (float) m_line.getFormat().getFrameSize();
    float nFrameRate = m_line.getFormat().getFrameRate();
    float bytesPerSecond = nFrameSize * nFrameRate;
    int secondsTotal = Math.round( (float) m_audioFileFormat.getByteLength() / bytesPerSecond);
    // E.B.
    secondsTotal = (int) Math.round(getTotalLengthInSeconds());
    while ( (nBytesRead != -1) && (m_status != STOPPED))
    {
      if (m_status == PLAYING)
      {
        try
        {
          if (doSeek > -1)
          {
            // Seek implementation. WAV format only !
            if ( (getAudioFileFormat() != null) && (getAudioFileFormat().getType().toString().startsWith("WAV")))
            {
              if ( (secondsTotal != AudioSystem.NOT_SPECIFIED) && (secondsTotal > 0))
              {
                m_line.flush();
                m_line.stop();
                //m_audioInputStream.reset();
                m_audioInputStream.close();
                m_audioInputStream = AudioSystem.getAudioInputStream(_file);
                nBytesCursor = 0;
                if (m_audioFileFormat.getByteLength() - doSeek < abData.length)
                {
                  doSeek = m_audioFileFormat.getByteLength() - abData.length;
                }
                doSeek = doSeek - doSeek % 4;
                int toSkip = (int) doSeek;
                // skip(...) instead of read(...) runs out of memory ?!
                while ( (toSkip > 0) && (nBytesRead > 0))
                {
                  if (toSkip > abData.length)
                  {
                    nBytesRead = m_audioInputStream.read(abData, 0, abData.length);
                  }
                  else
                  {
                    nBytesRead = m_audioInputStream.read(abData, 0, toSkip);
                  }
                  toSkip = toSkip - nBytesRead;
                  nBytesCursor = nBytesCursor + nBytesRead;
                }
                m_line.start();
              }
              else
              {
                trace(1, getClass().getName(), "Seek not supported for this InputStream : " + secondsTotal);
              }
            }
            else
            {
              trace(1, getClass().getName(), "Seek not supported for this InputStream : " + secondsTotal);
            }
            doSeek = -1;
          }
          nBytesRead = m_audioInputStream.read(abData, 0, abData.length);
        }
        catch (Exception e)
        {
          trace(1, getClass().getName(), "InputStream error : (" + nBytesRead + ")", e.getMessage());
          e.printStackTrace();
          m_status = STOPPED;
        }
        if (nBytesRead >= 0)
        {
          if (m_bpl != null)
          {
            m_bpl.updateMediaData(abData);
          }
          int nBytesWritten = m_line.write(abData, 0, nBytesRead);
          nBytesCursor = nBytesCursor + nBytesWritten;
          if (m_bpl != null)
          {
            m_bpl.updateCursor( (int) Math.round( (float) nBytesCursor / bytesPerSecond), secondsTotal);
          }
        }
      }
      else
      {
        try
        {
          Thread.sleep(1000);
        }
        catch (Exception e)
        {
          trace(1, getClass().getName(), "Thread cannot sleep : ", e.getMessage());
        }
      }
    }
    if (m_line != null)
    {
      try
      {
        m_line.drain();
        m_line.stop();
        m_line.close();
      }
      catch (Exception e)
      {
        trace(1, getClass().getName(), "Cannot Free Audio ressources", e.getMessage());
      }
      finally
      {
        m_line = null;
      }
    }
    trace(1, getClass().getName(), "Thread Stopped");
    m_status = READY;
    if (m_bpl != null && nBytesRead == -1)
    {
      m_bpl.updateMediaState("EOM");
    }
  }

  /*----------------------------------------------*/
  /*--               Gain Control               --*/
  /*----------------------------------------------*/

  /**
   * Returns true if Gain control is supported.
   */
  public boolean hasGainControl()
  {
    return m_gainControl != null;
  }

  /**
   * Sets Gain value.
   * Linear scale 0.0  <-->  1.0
   * Threshold Coef. : 1/2 to avoid saturation.
   */
  public void setGain(double fGain)
  {
    if (hasGainControl())
    {
      double minGainDB = getMinimum();
      double ampGainDB = ( (10.0f / 20.0f) * getMaximum()) - getMinimum();
      double cste = Math.log(10.0) / 20;
      double valueDB = minGainDB + (1 / cste) * Math.log(1 + (Math.exp(cste * ampGainDB) - 1) * fGain);
      //trace(1,getClass().getName(), "Gain : "+valueDB);
      m_gainControl.setValue( (float) valueDB);
    }
  }

  /**
   * Returns Gain value.
   */
  public float getGain()
  {
    if (hasGainControl())
    {
      return m_gainControl.getValue();
    }
    else
    {
      return 0.0F;
    }
  }

  /**
   * Gets max Gain value.
   */
  public float getMaximum()
  {
    if (hasGainControl())
    {
      return m_gainControl.getMaximum();
    }
    else
    {
      return 0.0F;
    }
  }

  /**
   * Gets min Gain value.
   */
  public float getMinimum()
  {
    if (hasGainControl())
    {
      return m_gainControl.getMinimum();
    }
    else
    {
      return 0.0F;
    }
  }

  /*----------------------------------------------*/
  /*--               Pan Control                --*/
  /*----------------------------------------------*/

  /**
   * Returns true if Pan control is supported.
   */
  public boolean hasPanControl()
  {
    return m_panControl != null;
  }

  /**
   * Returns Pan precision.
   */
  public float getPrecision()
  {
    if (hasPanControl())
    {
      return m_panControl.getPrecision();
    }
    else
    {
      return 0.0F;
    }
  }

  /**
   * Returns Pan value.
   */
  public float getPan()
  {
    if (hasPanControl())
    {
      return m_panControl.getValue();
    }
    else
    {
      return 0.0F;
    }
  }

  /**
   * Sets Pan value.
   * Linear scale : -1.0 <--> +1.0
   */
  public void setPan(float fPan)
  {
    if (hasPanControl())
    {
      //trace(1,getClass().getName(), "Pan : "+fPan);
      m_panControl.setValue(fPan);
    }
  }

  /*----------------------------------------------*/
  /*--                   Seek                   --*/
  /*----------------------------------------------*/

  /**
   * Sets Seek value.
   * Linear scale : 0.0 <--> +1.0
   */
  public void setSeek(double seek) throws IOException
  {
    double length = -1;
    if ( (m_audioFileFormat != null) && (m_audioFileFormat.getByteLength() != AudioSystem.NOT_SPECIFIED))
    {
      length = (double) m_audioFileFormat.getByteLength();
    }
    long newPos = (long) Math.round(seek * length);
    doSeek = newPos;
  }

  /*----------------------------------------------*/
  /*--               Audio Format               --*/
  /*----------------------------------------------*/

  /**
   * Returns source AudioFormat.
   */
  public AudioFormat getAudioFormat()
  {
    if (m_audioFileFormat != null)
    {
      return m_audioFileFormat.getFormat();
    }
    else
    {
      return null;
    }
  }

  /**
   * Returns source AudioFileFormat.
   */
  public AudioFileFormat getAudioFileFormat()
  {
    if (m_audioFileFormat != null)
    {
      return m_audioFileFormat;
    }
    else
    {
      return null;
    }
  }

  /**
   * Returns total length in seconds.
   */
  public double getTotalLengthInSeconds()
  {
    double lenghtInSecond = 0.0;
    if (getAudioFileFormat() != null)
    {
      int FL = (getAudioFileFormat()).getFrameLength();
      int FS = (getAudioFormat()).getFrameSize();
      float SR = (getAudioFormat()).getSampleRate();
      float FR = (getAudioFormat()).getFrameRate();
      int TL = (getAudioFileFormat()).getByteLength();
      String type = (getAudioFileFormat()).getType().toString();
      String encoding = (getAudioFormat()).getEncoding().toString();
      if ( (FL != -1) && ( (type.startsWith("MP3")) || (type.startsWith("VORBIS"))))
      {
        // No accurate formula :-(
        // Alternative dirty solution with SPI
        StringTokenizer st = new StringTokenizer(type, "x");
        st.nextToken();
        st.nextToken();
        String totalMSStr = st.nextToken();
        lenghtInSecond = Math.round( (Integer.parseInt(totalMSStr)) / 1000);
      }
      else
      {
        int br = getBitRate();
        if (br > 0)
        {
          lenghtInSecond = TL * 8 / br;
        }
        else
        {
          lenghtInSecond = TL / (FS * SR);

        }
      }
      trace(2, getClass().getName(), "Type=" + type + " Encoding=" + encoding + " FL=" + FL + " FS=" + FS + " SR=" + SR + " FR=" + FR + " TL=" + TL, " lenghtInSecond=" + lenghtInSecond);
    }
    if (lenghtInSecond < 0.0)
    {
      lenghtInSecond = 0.0;
    }
    return lenghtInSecond;
  }

  /**
   * Returns bit rate.
   */
  public int getBitRate()
  {
    int bitRate = 0;
    if (getAudioFileFormat() != null)
    {
      int FL = (getAudioFileFormat()).getFrameLength();
      int FS = (getAudioFormat()).getFrameSize();
      float SR = (getAudioFormat()).getSampleRate();
      float FR = (getAudioFormat()).getFrameRate();
      int TL = (getAudioFileFormat()).getByteLength();
      String type = (getAudioFileFormat()).getType().toString();
      String encoding = (getAudioFormat()).getEncoding().toString();
      // Assumes that type includes xBitRate string.
      if ( (type != null) && ( (type.startsWith("MP3")) || (type.startsWith("VORBIS"))))
      {
        // BitRate string appended to type.
        // Another solution ?
        StringTokenizer st = new StringTokenizer(type, "x");
        if (st.hasMoreTokens())
        {
          st.nextToken();
          String bitRateStr = st.nextToken();
          bitRate = Math.round( (Integer.parseInt(bitRateStr)));
        }
      }
      else
      {
        bitRate = Math.round(FS * FR * 8);
      }
      trace(2, getClass().getName(), "Type=" + type + " Encoding=" + encoding + " FL=" + FL + " FS=" + FS + " SR=" + SR + " FR=" + FR + " TL=" + TL, " bitRate=" + bitRate);
    }
    // N/A so computes bitRate for output.
    if ( (bitRate <= 0) && (m_line != null))
    {
      bitRate = Math.round( ( (m_line.getFormat()).getFrameSize()) * ( (m_line.getFormat()).getFrameRate()) * 8);
    }
    return bitRate;
  }

  /**
   * Gets an InputStream from File.
   */
  protected InputStream openInput(File file) throws IOException
  {
    InputStream fileIn = new FileInputStream(file);
    BufferedInputStream bufIn = new BufferedInputStream(fileIn);
    return bufIn;
  }

  /*----------------------------------------------*/
  /*--                   Misc                   --*/
  /*----------------------------------------------*/

  /**
   * Sends traces to Debug.
   */
  private void trace(int level, String msg1, String msg2)
  {
    Debug dbg = Debug.getInstance();
    dbg.log(level, msg1 + ":" + msg2);
  }

  private void trace(int level, String msg1, String msg2, String msg3)
  {
    Debug dbg = Debug.getInstance();
    dbg.log(level, msg1 + ":" + msg2 + "," + msg3);
  }

}
