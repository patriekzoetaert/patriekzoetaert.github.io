/*
 * AppletVorbisSPIWorkaround.
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
package javazoom.jlGui.applet;

import java.net.*;
import java.io.*;
import javax.sound.sampled.*;

import javazoom.spi.vorbis.sampled.convert.*;

/**
 * From JRE/JDK 1.3.0_01 on, applets can not use provided service
 * providers. Obviously, in these later releases of the Java 2 platform
 * the service providers are only searched on the system/boot classloader
 * and NOT on the classloader of the applet.
 * Workaround found by Tritonus Team.
 */

public class AppletVorbisSPIWorkaround
{
  public static boolean DEBUG = false;

  public static AudioInputStream getAudioInputStream(AudioFormat targetFormat,
      AudioInputStream sourceStream)
  {
    try
    {
      return AudioSystem.getAudioInputStream(targetFormat, sourceStream);
    }
    catch (IllegalArgumentException iae)
    {
      if (DEBUG == true)
      {
        System.err.println("Using AppletVorbisSPIWorkaround to get codec");
      }
      try
      {

        Class.forName(
            "javazoom.spi.vorbis.sampled.convert.VorbisFormatConversionProvider");
        return new javazoom.spi.vorbis.sampled.convert.
            VorbisFormatConversionProvider().getAudioInputStream(targetFormat,
            sourceStream);
      }
      catch (ClassNotFoundException cnfe)
      {
        throw new IllegalArgumentException(
            "Vorbis codec not properly installed");
      }
    }
  }

  public static AudioFileFormat getAudioFileFormat(File file) throws
      UnsupportedAudioFileException, IOException
  {
    InputStream inputStream = new BufferedInputStream(new FileInputStream(file));
    try
    {
      if (DEBUG == true)
      {
        System.err.println(
            "Using AppletVorbisSPIWorkaround to get codec (AudioFileFormat:file)");
      }

      return getAudioFileFormat(inputStream);
    }
    finally
    {
      inputStream.close();
    }
  }

  public static AudioInputStream getAudioInputStream(File file) throws
      UnsupportedAudioFileException, IOException
  {
    InputStream inputStream = new BufferedInputStream(new FileInputStream(file));
    try
    {
      if (DEBUG == true)
      {
        System.err.println(
            "Using AppletVorbisSPIWorkaround to get codec (AudioInputStream:file)");
      }

      return getAudioInputStream(inputStream);
    }
    catch (UnsupportedAudioFileException e)
    {
      inputStream.close();
      throw e;
    }
    catch (IOException e)
    {
      inputStream.close();
      throw e;
    }
  }

  public static AudioInputStream getAudioInputStream(URL url) throws
      UnsupportedAudioFileException, IOException
  {
    InputStream inputStream = new BufferedInputStream(url.openStream());
    try
    {
      if (DEBUG == true)
      {
        System.err.println(
            "Using AppletVorbisSPIWorkaround to get codec (AudioInputStream:url)");
      }
      return getAudioInputStream(inputStream);
    }
    catch (UnsupportedAudioFileException e)
    {
      inputStream.close();
      throw e;
    }
    catch (IOException e)
    {
      inputStream.close();
      throw e;
    }
  }

  public static AudioFileFormat getAudioFileFormat(URL url) throws
      UnsupportedAudioFileException, IOException
  {
    InputStream inputStream = new BufferedInputStream(url.openStream());
    try
    {
      if (DEBUG == true)
      {
        System.err.println(
            "Using AppletVorbisSPIWorkaround to get codec AudioFileFormat(url)");
      }
      return getAudioFileFormat(inputStream);
    }
    finally
    {
      inputStream.close();
    }
  }

  public static AudioFileFormat getAudioFileFormat(InputStream is) throws
      UnsupportedAudioFileException, IOException
  {
    try
    {
      // return AudioSystem.getAudioFileFormat(is);
      throw new Exception();
    }
    catch (Exception iae)
    {
      if (DEBUG == true)
      {
        System.err.println("Using AppletVorbisSPIWorkaround to get codec");
      }
      try
      {
        Class.forName("javazoom.spi.vorbis.sampled.file.VorbisAudioFileReader");
        return new javazoom.spi.vorbis.sampled.file.VorbisAudioFileReader().
            getAudioFileFormat(is);
      }
      catch (ClassNotFoundException cnfe)
      {
        throw new IllegalArgumentException(
            "Vorbis codec not properly installed");
      }
    }
  }

  public static AudioInputStream getAudioInputStream(InputStream is) throws
      UnsupportedAudioFileException, IOException
  {
    try
    {
      // return AudioSystem.getAudioInputStream(is);
      throw new Exception();
    }
    catch (Exception iae)
    {
      if (DEBUG == true)
      {
        System.err.println("Using AppleVorbisSPIWorkaround to get codec");
      }
      try
      {
        Class.forName("javazoom.spi.vorbis.sampled.file.VorbisAudioFileReader");
        return new javazoom.spi.vorbis.sampled.file.VorbisAudioFileReader().
            getAudioInputStream(is);
      }
      catch (ClassNotFoundException cnfe)
      {
        throw new IllegalArgumentException(
            "Vorbis codec not properly installed:" + cnfe.getMessage());
      }
    }
  }
}