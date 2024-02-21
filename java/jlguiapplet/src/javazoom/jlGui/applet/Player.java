package javazoom.jlGui.applet;

/*
* Player.
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

import java.awt.*;
import java.applet.*;
import java.io.*;
import java.net.*;
import java.util.*;
import java.awt.event.*;
import java.awt.dnd.*;
import java.awt.datatransfer.*;
import javax.swing.ImageIcon;
import javax.sound.sampled.*;
import javazoom.jlGui.BasicPlayerListener;
import javazoom.jlGui.skin.*;
import javazoom.jlGui.playlist.*;
import javazoom.jlGui.playlist.ui.*;
import javazoom.Util.*;

/*
* Player is the UI core of jlGui.
* <br>
* Homepage : http://www.javazoom.net
 */
public class Player extends Applet implements ActionListener, BasicPlayerListener, DropTargetListener, WindowListener
{
  private static int         TEXT_LENGTH_MAX = 30;
  private static String      TITLETEXT = "jlGui Applet 2.2 ";
  private static String	     initConfig="jlgui.ini";
  private static String	     initSong=null;
  private static String	     showPlaylist=null;
  private static String	     userAgent=null;
  private static String      skinVersion = "1" ;   // 1, 2, for different Volume.bmp
  private static int         volumeHeight = 0 ;    // some volume skin may not want 11 button height
  private static boolean     autoRun=false;
  private MP3Files           fileList = null ;

  private String 	     currentFileOrURL = null;
  private String             currentSongName = null;
  private boolean	     currentIsFile;

    /*-- Window Parameters --*/
  private Image               offScreenImage;
  private Graphics            offScreenGraphics;
  private int                 WinWidth, WinHeight;
  private int                 OrigineX = 0, OrigineY = 0;
  private int		      screenWidth = -1, screenHeight = -1;
  private String	      thePath="";
  private String      	      theMain="main.bmp";

 /*-- Buttons Panel members --*/
  private String	      theButtons="cbuttons.bmp";
  private Image		      imMain,imButtons;
  private activeComponent     acPrevious,acPlay,acPause,acStop,acNext,acEject;
  private Image	              imPrevious,imPlay,imPause,imStop,imNext,imEject;
  private Image[]	      releasedImage = {imPrevious,imPlay,imPause,imStop,imNext,imEject};
  private Image[]	      pressedImage = {imPrevious,imPlay,imPause,imStop,imNext,imEject};
  private int[]	              releasedPanel = {0,0,23,18, 23,0,23,18, 46,0,23,18, 69,0,23,18, 92,0,22,18, 114,0,22,16};
  private int[]	    	      pressedPanel  = {0,18,23,18, 23,18,23,18, 46,18,23,18, 69,18,23,18, 92,18,22,18, 114,16,22,16};
  private int[]               panelLocation = {16,88, 39,88, 62,88, 85,88, 108,88, 137,89};

    /*-- Title members --*/
  private boolean     	      FirstDrag = true;
  private int                 XDrag = 0, YDrag = 0;
  private String	      theTitleBar="titlebar.bmp";
  private Image		      imTitleBar;
  private activeComponent     acTitleBar;
  private Image	              imTitleB;
  private Image[]	      releasedTitleIm = {imTitleB};
  private Image[]	      pressedTitleIm = {imTitleB};
  private int[]	              releasedTitlePanel = {27,0,264-20,14}; // -20 for the two button add by me
  private int[]	    	      pressedTitlePanel  = {27,15,264-20,14};// -20 for the two button add by me
  private int[]               titleBarLocation = {0,0};

    /*-- Exit member --*/
  private activeComponent     acExit;
  private int[]	              releasedExitPanel = {18,0,9,9};
  private int[]	    	      pressedExitPanel  = {18,9,9,9};
  private Image[]	      releasedExitIm = {null};
  private Image[]	      pressedExitIm = {null};
  private int[]               exitLocation = {264,3};

    /*-- Minimize member --*/
  private activeComponent     acMinimize;
  private int[]	              releasedMinimizePanel = {9,0,9,9};
  private int[]	    	      pressedMinimizePanel  = {9,9,9,9};
  private Image[]	      releasedMinimizeIm = {null};
  private Image[]	      pressedMinimizeIm = {null};
  private int[]               minimizeLocation = {244,3};

 /*-- Text Members --*/
  private int                 fontWidth = 5;
  private int                 fontHeight = 6;
  private String              theText = "text.bmp";
  private Image               imText;
  private String              fontIndex =   "ABCDEFGHIJKLMNOPQRSTUVWXYZ\"@a  "
                                        + "0123456789  :()-'!_+ /[]^&%.=$#"
                                        + "   ?*";
  private Image               sampleRateImage;
  private String              sampleRateClearText = "  ";
  private Image               sampleRateClearImage;
  private int[]               sampleRateLocation = {156,43};
  private String              bitsRateClearText = "    ";
  private Image               bitsRateClearImage;
  private Image               bitsRateImage;
  private int[]               bitsRateLocation = {107,43};
  private String              titleText = TITLETEXT.toUpperCase();
  private String              clearText = "                                     ";
  private Image               clearImage;
  private Image               titleImage;
  private int[]               titleLocation = {111,27};

 /*-- Numbers Members --*/
  private int                 numberWidth = 9;
  private int                 numberHeight = 13;
  private String              theNumbers = "numbers.bmp" ;
  private String              theNumEx = "nums_ex.bmp" ;
  private Image               imNumbers;
  private String              numberIndex = "0123456789 ";
  private Image               minuteImage;
  private Image               secondImage;
  private Image               minuteDImage;
  private Image               secondDImage;
  private Image[]             timeImage = {null,null,null,null,null,null,null,null,null,null,null};
  private int[]               minuteDLocation = {48,26};
  private int[]               minuteLocation = {60,26};
  private int[]               secondDLocation = {78,26};
  private int[]               secondLocation = {90,26};

 /*-- Mono/Stereo Members --*/
  private String              theMode = "monoster.bmp";
  private Image               imMode;
  private int[]	              activeModePanel = {0,0,28,12, 29,0,27,12};
  private int[]	              passiveModePanel = {0,12,28,12, 29,12,27,12};
  private Image               imSA,imMA,imSI,imMI;
  private Image[]             activeModeImage = {imSA,imMA};
  private Image[]             passiveModeImage = {imSI,imMI};
  private int[]               monoLocation = {212,40};
  private int[]               stereoLocation = {239,40};

 /*-- Volume/Balance Panel members --*/
  private boolean     	      FirstVolumeDrag = true;
  private int                 XVolumeDrag = 0;
  private String	      theVolume="volume.bmp";
  private Image		      imVolume;
  private activeComponent     acVolume, acBalance;
  private Image[]	      volumeImage = {null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null};
  private String              fakeIndex = "abcdefghijklmnopqrstuvwxyz01";
  private int[]               volumeBarLocation = {107,57};
  private Image[]             releasedVolumeImage = {null};
  private Image[]	      pressedVolumeImage = {null};
  private int[]	              releasedVolumePanel0 = {15,422,14,11};
  private int[]	    	      pressedVolumePanel0  = {0,422,14,11};
  private int[]	              releasedVolumePanel1 = {75,376,14,11};
  private int[]	    	      pressedVolumePanel1  = {90,376,14,11};
  private int     	      minGain = 0;
  private int		      maxGain = 100;
  private int		      gainValue   = 80;
  private int                 deltaVolume = 50;
  private int[]               volumeLocation = {107+deltaVolume*gainValue/maxGain,58};
  private int[]               volumeBounds = {107,107+deltaVolume};

  private Image[]	      balanceImage = {null};
  private boolean     	      FirstBalanceDrag = true;
  private int                 XBalanceDrag = 0;
  private double     	      minBalance = -1.0;
  private double	      maxBalance = +1.0;
  private double	      balanceValue = 0.0;
  private int                 deltaBalance = 24;
  private int[]               balanceLocation = {177+deltaBalance/2,58};
  private int[]               balanceBounds = {177,177+deltaBalance};
  private int[]               balanceBarLocation = {177,57};

    /*-- Play/Pause Icons --*/
  private String	      theIcons="playpaus.bmp";
  private Image		      imIcons;
  private Image[]	      iconsImage = {null,null,null,null,null};
  private int[]	              iconsPanel = {0,0,9,9 ,9,0,9,9, 18,0,9,9, 36,0,3,9, 27,0,2,9};
  private int[]               iconsLocation = {26,27, 24,27};


    /*-- PosBar members --*/
  private boolean     	      FirstPosBarDrag = true;
  private int                 XPosBarDrag = 0;
  private String	      thePosBar="posbar.bmp";
  private Image		      imPosBar;
  private activeComponent     acPosBar;
  private Image[]	      releasedPosIm = {null};
  private Image[]	      pressedPosIm = {null};
  private int[]	              releasedPosPanel = {248,0,28,10};
  private int[]	    	      pressedPosPanel  = {278,0,28,10};
  private double     	      minPos = 0.0;
  private double	      maxPos = +1.0;
  private double	      posValue = 0.0;
  private int                 deltaPosBar = 219;
  private int[]               posBarLocation = {16,72};
  private int[]               posBarBounds = {16,16+deltaPosBar};

  //private int[]               posBarLocation = {16,72};

    /*-- Equalizer/Playlist/Shuffle/Repeat  --*/
  private String	      theEPSRButtons="shufrep.bmp";
  private Image		      imEPSRButtons;
  private activeComponent     acEqualizer,acPlaylist,acShuffle,acRepeat;
  private Image	              imEqualizer,imPlaylist,imShuffle,imRepeat;
  private Image[]	      releasedEPSRImage = {imEqualizer,imPlaylist,imShuffle,imRepeat};
  private Image[]	      pressedEPSRImage = {imEqualizer,imPlaylist,imShuffle,imRepeat};
  private int[]	              releasedEPSRPanel = {0,61,22,12, 23,61,22,12, 28,0,47,14, 0,0,28,14};
  private int[]	    	      pressedEPSRPanel  = {0,73,22,12, 23,73,22,12, 28,30,47,14, 0,30,28,14};
  private int[]               panelEPSRLocation = {219,58, 242,58, 166,89, 212,89};

    /*-- JavaSound Members --*/
  public static final int    	INIT = 0;
  public static final int    	OPEN = 1;
  public static final int    	PLAY = 2;
  public static final int    	PAUSE = 3;
  public static final int    	STOP = 4;
  private int                   playerState =  INIT;
  private long                  secondsAmount = 0;

  private Playlist      	playlist = null;
  private BasicPlayer           theSoundPlayer = null;
  private Config		config = null;
  private Applet		topFrame = null;

  public static final int       NONE = 0;
  public static final int       URL = 1;
  public static final int       ALL = 2;
  private int                   location = NONE;

  /**
   * Constructor.
   */
  public Player()
  {
    topFrame = this;
  }

  /**
   * Loads Applet parameters.
   */
  public void init()
  {
    String skin = this.getParameter("skin");
    if (skin != null) skin = this.getCodeBase().toString()+skin;
    String song = this.getParameter("song");
    if (song != null) initSong = this.getCodeBase().toString()+song;
    String start = this.getParameter("start");
    if ((start != null) && (start.equals("yes"))) autoRun = true;
    String enableopenlocation = this.getParameter("location");
    if ((enableopenlocation != null))
    {
      if (enableopenlocation.equalsIgnoreCase("none")) location = NONE;
      else if (enableopenlocation.equalsIgnoreCase("url")) location = URL;
      else if (enableopenlocation.equalsIgnoreCase("all")) location = ALL;
    }
    String loglevelStr = this.getParameter("loglevel");
    int loglevel = 2;
    if ((loglevelStr != null) && (!loglevelStr.equals("")))
    {
      try
      {
        loglevel = Integer.parseInt(loglevelStr);
      }
      catch (NumberFormatException ex)
      {}
    }
    String volumeheight = this.getParameter("volumeheight");
    if (volumeheight != null)
    {
      try
      {
        volumeHeight = Integer.parseInt(volumeheight);
      }
      catch (NumberFormatException ex)
      {}
    }
    String skinversion = this.getParameter("skinversion");
    if (skinversion != null) skinVersion = skinversion;
    String init = this.getParameter("init");
    if (init != null) initConfig = this.getCodeBase().toString()+init;
    else initConfig = this.getCodeBase().toString()+"jlgui.ini";
    userAgent = this.getParameter("useragent");
    String forceOgg = this.getParameter("forceogg");
    if ((forceOgg != null) && (forceOgg.equalsIgnoreCase("true"))) BasicPlayer.forceOgg=true;
    trace(2,TITLETEXT,"0");
    initPlayer(skin,loglevel,null);
    if (autoRun == true) pressStart();
  }

  public void initPlayer(String Skin, int loglevel, String logfile)
  {
    // used for special skin's volume image
    releasedVolumePanel0 [3] -= volumeHeight ;
    pressedVolumePanel0  [3] -= volumeHeight ;
    releasedVolumePanel1 [3] -= volumeHeight ;
    pressedVolumePanel1  [3] -= volumeHeight ;

    // Log feature.
    Debug dbg = Debug.getInstance();
    if ( (logfile != null) && (!logfile.equals("")) )
    {
      dbg.init(logfile, loglevel);
    }
    else dbg.setLogLevel(loglevel);

    // Config feature.
    config = Config.getInstance();
    config.load(initConfig);
    OrigineX = config.getXLocation();
    OrigineY = config.getYLocation();

    // Get screen size
    try
    {
      Toolkit toolkit = Toolkit.getDefaultToolkit();
      Dimension dimension = toolkit.getScreenSize();
      screenWidth = dimension.width;
      screenHeight = dimension.height;
      } catch (Exception e)
          {}

      // Minimize/Maximize/Icon features.
      //topFrame.addWindowListener(this);
      topFrame.setLocation(OrigineX,OrigineY);
      topFrame.setSize(0,0);
      // Polis : Comment out to fix a bug under XWindow
      //topFrame.setResizable(false);
      ClassLoader cl = this.getClass().getClassLoader();
      URL iconURL = cl.getResource("jlguiicon.gif");
      if (iconURL != null)
      {
        ImageIcon jlguiIcon = new ImageIcon(iconURL);
        //topFrame.setIconImage(jlguiIcon.getImage());
      }
      topFrame.show();

      // DnD feature.
      DropTarget dt = new DropTarget(this,DnDConstants.ACTION_COPY,this,true);

      // Playlist feature.
      boolean playlistfound = false;
      if ((initSong != null) && (!initSong.equals(""))) playlistfound = loadPlaylist(initSong);
      else playlistfound = loadPlaylist(config.getPlaylistFilename());

      // Load skin specified in args
      if (Skin != null)
      {
        thePath = Skin;
        trace(2,getClass().getName(),"Load default skin from "+thePath);
        loadSkin(thePath);
        config.setDefaultSkin(thePath);
      }
      // Load skin specified in jlgui.ini
      else if ((config.getDefaultSkin() != null) && (!config.getDefaultSkin().trim().equals("") ))
      {
        trace(2,getClass().getName(),"Load default skin from "+config.getDefaultSkin());
        loadSkin(config.getDefaultSkin());
      }
      // Default included skin
      else
      {
        //ClassLoader cl = this.getClass().getClassLoader();
        InputStream sis = cl.getResourceAsStream("skins/metrix.wsz");
        trace(2,getClass().getName(),"Load default skin for JAR");
        loadSkin(sis);
      }

      // Non-UI Player stuff
      theSoundPlayer = new BasicPlayer(this);

      // Go to playlist begining if needed.
      if ((playlist != null) && (playlistfound == true))
      {
        if (playlist.getPlaylistSize()>0) acNext.fireEvent();
      }

      // Display the whole
      hide();
      show();
      repaint();
  }


  /**
   * Loads a new playlist.
   */
  public boolean loadPlaylist(String playlistName)
  {
    boolean loaded = false;
    PlaylistFactory plf = PlaylistFactory.getInstance();
    playlist = plf.getPlaylist();
    // M3U file or URL.
    if (playlistName.toLowerCase().endsWith(".m3u")) loaded = playlist.load(playlistName);
    // Simple song.
    else
    {
      String name = playlistName;
      if (!playlistName.toLowerCase().startsWith("http"))
      {
        int indn = playlistName.lastIndexOf(java.io.File.separatorChar);
        if (indn != -1) name = playlistName.substring(indn+1);
        PlaylistItem pli = new PlaylistItem(name, playlistName, -1, true);
        playlist.appendItem(pli);
        loaded = true;
      }
      else
      {
        PlaylistItem pli = new PlaylistItem(name, playlistName, -1, false);
        playlist.appendItem(pli);
        loaded = true;
      }
    }
    return loaded;
  }

  /**
   * Loads a new skin from local file system.
   */
  public void loadSkin(String skinName)
  {
    SkinLoader skl = new SkinLoader(skinName);
    try
    {
      loadSkin(skl);
      } catch (Exception e)
      {
        trace(2,getClass().getName(),"Can't load skin : "+e.getMessage());
        InputStream sis = this.getClass().getClassLoader().getResourceAsStream("skins/metrix.wsz");
        trace(2,getClass().getName(),"Load default skin for JAR");
        loadSkin(sis);
      }
  }

  /**
   * Loads a new skin from any input stream.
   */
  public void loadSkin(InputStream skinStream)
  {
    SkinLoader skl = new SkinLoader(skinStream);
    try
    {
      loadSkin(skl);
      } catch (Exception e)
      {
        trace(2,getClass().getName(),"Can't load skin : "+e.getMessage());
        InputStream sis = this.getClass().getClassLoader().getResourceAsStream("skins/metrix.wsz");
        trace(2,getClass().getName(),"Load default skin for JAR");
        loadSkin(sis);
      }
  }

  /**
   * Loads a skin from a SkinLoader.
   */
  private void loadSkin(SkinLoader skl) throws Exception
  {
    skl.loadImages();
    imMain = skl.getImage(theMain);
    imButtons = skl.getImage(theButtons);
    imTitleBar = skl.getImage(theTitleBar);
    imText = skl.getImage(theText);
    imMode = skl.getImage(theMode);
    imNumbers = skl.getImage(theNumbers);
    // add by John Yang
    if ( imNumbers == null )
    {
      trace(2,getClass().getName(),"Try load nums_ex.bmp !");
      imNumbers = skl.getImage (theNumEx) ;
    }
    imVolume = skl.getImage(theVolume);
    imIcons = skl.getImage(theIcons);
    imPosBar = skl.getImage(thePosBar);
    imEPSRButtons = skl.getImage(theEPSRButtons);


    WinHeight = imMain.getHeight(this); // 275
    WinWidth = imMain.getWidth(this);   // 116
    setSize(WinWidth,WinHeight);
    setLocation(OrigineX,OrigineY);
    setBackground(Color.black);
    show();

    offScreenImage = createImage(WinWidth,WinHeight);
    offScreenGraphics = offScreenImage.getGraphics();
    // E.B Fix for JDK 1.4 slow down problem.
    hide();
    // End Fix.
    offScreenGraphics.drawImage(imMain,0,0,this);

    // M.S : Remove all components when loading a new skin.
    if(acPrevious != null)
    {
      remove(acPrevious);
      remove(acPlay);
      remove(acPause);
      remove(acStop);
      remove(acNext);
      remove(acEject);
      remove(acTitleBar);
      remove(acExit);
      remove(acMinimize);
      remove(acVolume);
      remove(acBalance);
      remove(acPosBar);
      remove(acPlaylist);
      remove(acRepeat);
      remove(acShuffle);
      remove(acEqualizer);
      if (fileList != null) fileList.dispose();
      System.gc();
    }

        /*-- Buttons --*/
    readPanel(releasedImage,releasedPanel,pressedImage,pressedPanel,imButtons);
    setButtonsPanel();

        /*-- Volume/Balance --*/
    if ( skinVersion.equals("1") )
      readPanel(releasedVolumeImage,releasedVolumePanel0,pressedVolumeImage,pressedVolumePanel0,imVolume);
    else
      readPanel(releasedVolumeImage,releasedVolumePanel1,pressedVolumeImage,pressedVolumePanel1,imVolume);
    setVolumePanel();

        /*-- Title Bar --*/
    readPanel(releasedTitleIm,releasedTitlePanel,pressedTitleIm,pressedTitlePanel,imTitleBar);
    setTitleBarPanel();

        /*-- Exit --*/
    readPanel(releasedExitIm,releasedExitPanel,pressedExitIm,pressedExitPanel,imTitleBar);
    setExitPanel();

        /*-- Minimize --*/
    readPanel(releasedMinimizeIm,releasedMinimizePanel,pressedMinimizeIm,pressedMinimizePanel,imTitleBar);
    setMinimizePanel();

        /*-- Mode --*/
    readPanel(activeModeImage,activeModePanel,passiveModeImage,passiveModePanel,imMode);
    offScreenGraphics.drawImage(passiveModeImage[0], stereoLocation[0], stereoLocation[1], this);
    offScreenGraphics.drawImage(passiveModeImage[1], monoLocation[0], monoLocation[1], this);

        /*-- Text --*/
    sampleRateClearImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, sampleRateClearText)).getBanner();
    bitsRateClearImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, bitsRateClearText)).getBanner();
    clearImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, clearText)).getBanner(0,0,155,6);
    titleImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, titleText)).getBanner(0,0,155,6);
    offScreenGraphics.drawImage(titleImage, titleLocation[0], titleLocation[1], this);

        /*-- Numbers --*/
    for (int h=0;h<numberIndex.length();h++)
    {
      timeImage[h] = (new taftb(numberIndex, imNumbers, numberWidth, numberHeight, 0, ""+numberIndex.charAt(h))).getBanner();
    }

        /*--  Icons --*/
    readPanel(iconsImage,iconsPanel,null,null,imIcons);
    offScreenGraphics.drawImage(iconsImage[2], iconsLocation[0], iconsLocation[1], this);

        /*-- Pos Bar --*/
    readPanel(releasedPosIm,releasedPosPanel,pressedPosIm,pressedPosPanel,imPosBar);
    setPosBarPanel();

        /*-- Equalizer/Playlist/Shuffle/Repeat  --*/
    readPanel(releasedEPSRImage,releasedEPSRPanel,pressedEPSRImage,pressedEPSRPanel,imEPSRButtons);
    setEPSRButtonsPanel();

    // Popup menu on TitleBar
    PopupMenu mainpopup = new PopupMenu("Setup");
    MenuItem mi = new MenuItem(TITLETEXT+"- JavaZOOM");
    mi.addActionListener(this);
    mainpopup.add(mi);
    mainpopup.addSeparator();
    mi = new MenuItem("Preferences");
    mi.addActionListener(this);
    mainpopup.add(mi);
    mi = new MenuItem("Skins");
    mi.addActionListener(this);
    mainpopup.add(mi);
    mainpopup.addSeparator();
    mi = new MenuItem("Exit");
    mi.addActionListener(this);
    mainpopup.add(mi);
    acTitleBar.setPopup(mainpopup);

        /* -- create MP3File List Window --*/
    if (showPlaylist != null) config.setPlaylistEnabled(true);
    //fileList = new MP3Files (topFrame, this, playlist, skl, OrigineX, OrigineY+WinHeight, config.isPlaylistEnabled()) ;
    show();
  }


  /**
   * Crop Panel Features from image file.
   */
  private void readPanel(Image[] releasedImage, int[] releasedPanel,
                         Image[] pressedImage,  int[] pressedPanel, Image imPanel)
  {
    int xul,yul,xld,yld;
    int j = 0;
    if (releasedImage != null)
    {
      for (int i = 0; i<releasedImage.length; i++)
      {
        releasedImage[i] = createImage(releasedPanel[j+2],releasedPanel[j+3]);
        xul = releasedPanel[j];
        yul = releasedPanel[j+1];
        xld = releasedPanel[j] + releasedPanel[j+2];
        yld = releasedPanel[j+1] + releasedPanel[j+3];
        (releasedImage[i].getGraphics()).drawImage(imPanel,0,0,releasedPanel[j+2],releasedPanel[j+3],
            xul,yul,xld,yld,null);
        j = j + 4;
      }
    }
    j = 0;

    if (pressedImage != null)
    {
      for (int i = 0; i<pressedImage.length; i++)
      {
        pressedImage[i] = createImage(pressedPanel[j+2],pressedPanel[j+3]);
        xul = pressedPanel[j];
        yul = pressedPanel[j+1];
        xld = pressedPanel[j] + pressedPanel[j+2];
        yld = pressedPanel[j+1] + pressedPanel[j+3];
        (pressedImage[i].getGraphics()).drawImage(imPanel,0,0,pressedPanel[j+2],pressedPanel[j+3],
            xul,yul,xld,yld,null);
        j = j + 4;
      }
    }
  }

  /**
   * Instantiate Buttons Panel with activeComponent.
   * Add them to window and ActionListener.
   */
  private void setButtonsPanel()
  {
    int l = 0;
    setLayout(null);
    acPrevious = new activeComponent(releasedImage[0],pressedImage[0],AWTEvent.MOUSE_EVENT_MASK);
    acPrevious.setLocation(panelLocation[l++],panelLocation[l++]);
    add(acPrevious);
    acPrevious.setActionCommand("Previous");
    acPrevious.addActionListener(this);

    acPlay =  new activeComponent(releasedImage[1],pressedImage[1],AWTEvent.MOUSE_EVENT_MASK);
    acPlay.setLocation(panelLocation[l++],panelLocation[l++]);
    add(acPlay);
    acPlay.setActionCommand("Play");
    acPlay.addActionListener(this);

    acPause =  new activeComponent(releasedImage[2],pressedImage[2],AWTEvent.MOUSE_EVENT_MASK);
    acPause.setLocation(panelLocation[l++],panelLocation[l++]);
    add(acPause);
    acPause.setActionCommand("Pause");
    acPause.addActionListener(this);

    acStop =  new activeComponent(releasedImage[3],pressedImage[3],AWTEvent.MOUSE_EVENT_MASK);
    acStop.setLocation(panelLocation[l++],panelLocation[l++]);
    add(acStop);
    acStop.setActionCommand("Stop");
    acStop.addActionListener(this);

    acNext =  new activeComponent(releasedImage[4],pressedImage[4],AWTEvent.MOUSE_EVENT_MASK);
    acNext.setLocation(panelLocation[l++],panelLocation[l++]);
    add(acNext);
    acNext.setActionCommand("Next");
    acNext.addActionListener(this);

    acEject =  new activeComponent(releasedImage[5],pressedImage[5],AWTEvent.MOUSE_EVENT_MASK | AWTEvent.KEY_EVENT_MASK);
    acEject.setLocation(panelLocation[l++],panelLocation[l++]);
    add(acEject);
    acEject.setActionCommand("Eject");
    acEject.addActionListener(this);
  }

  /**
   * Instantiate Title Panel with activeComponent.
   * Add them to window and ActionListener.
   */
  private void setTitleBarPanel()
  {
    int l = 0;
    acTitleBar = new activeComponent(releasedTitleIm[0],pressedTitleIm[0],AWTEvent.MOUSE_MOTION_EVENT_MASK | AWTEvent.MOUSE_EVENT_MASK);
    acTitleBar.setLocation(titleBarLocation[l++],titleBarLocation[l++]);
    add(acTitleBar);
    acTitleBar.setActionCommand("TitleBar");
    //acTitleBar.addActionListener(this);
  }

  /**
   * Instantiate Exit Panel with activeComponent.
   * Add them to window and ActionListener.
   */
  private void setExitPanel()
  {
    int l = 0;
    acExit = new activeComponent(releasedExitIm[0],pressedExitIm[0],AWTEvent.MOUSE_EVENT_MASK);
    acExit.setLocation(exitLocation[l++],exitLocation[l++]);
    add(acExit);
    acExit.setActionCommand("Exit");
    //acExit.addActionListener(this);
  }

  /**
   * Instantiate Minimize Panel with activeComponent.
   * Add them to window and ActionListener.
   */
  private void setMinimizePanel()
  {
    int l = 0;
    acMinimize = new activeComponent(releasedMinimizeIm[0],pressedMinimizeIm[0],AWTEvent.MOUSE_EVENT_MASK);
    acMinimize.setLocation(minimizeLocation[l++],minimizeLocation[l++]);
    add(acMinimize);
    acMinimize.setActionCommand("Minimize");
    //acMinimize.addActionListener(this);
  }

  /**
   * Instantiate Volume/Balance Panel with activeComponent.
   * Add them to window and ActionListener.
   */
  private void setVolumePanel()
  {
    int l = 0;
    acVolume = new activeComponent(releasedVolumeImage[0],pressedVolumeImage[0],AWTEvent.MOUSE_MOTION_EVENT_MASK | AWTEvent.MOUSE_EVENT_MASK);
    acVolume.setLocation(volumeLocation[l++],volumeLocation[l++]);
    add(acVolume);
    acVolume.setActionCommand("Volume");
    acVolume.addActionListener(this);
    for (int k=0;k<volumeImage.length;k++)
    {
      volumeImage[k] = (new taftb(fakeIndex, imVolume, 68, 13, 2, ""+fakeIndex.charAt(k))).getBanner();
    }
    offScreenGraphics.drawImage(volumeImage[(int)Math.round(((double)gainValue / (double)maxGain)*(volumeImage.length-1))], volumeBarLocation[0], volumeBarLocation[1], this);

    l = 0;
    acBalance = new activeComponent(releasedVolumeImage[0],pressedVolumeImage[0],AWTEvent.MOUSE_MOTION_EVENT_MASK | AWTEvent.MOUSE_EVENT_MASK);
    acBalance.setLocation(balanceLocation[l++],balanceLocation[l++]);
    add(acBalance);
    acBalance.setActionCommand("Balance");
    acBalance.addActionListener(this);
    balanceImage[0] = (new taftb("a", imVolume, deltaBalance+14, 13, 2, "a")).getBanner();
    offScreenGraphics.drawImage(balanceImage[0], balanceBarLocation[0], balanceBarLocation[1], this);

  }

  /**
   * Instantiate PosBar Panel with activeComponent.
   * Add them to window and ActionListener.
   */
  private void setPosBarPanel()
  {
    int l = 0;
    acPosBar = new activeComponent(releasedPosIm[0],pressedPosIm[0],AWTEvent.MOUSE_MOTION_EVENT_MASK | AWTEvent.MOUSE_EVENT_MASK);
    acPosBar.setLocation(posBarLocation[l++],posBarLocation[l++]);
    add(acPosBar);
    acPosBar.setActionCommand("Seek");
    acPosBar.addActionListener(this);
    remove(acPosBar);
  }

  /**
   * Instantiate EPSR Buttons Panel with activeComponent.
   * Add them to window and ActionListener.
   */
  private void setEPSRButtonsPanel()
  {
    int l = 0;
    setLayout(null);
    acEqualizer = new activeComponent(releasedEPSRImage[0],pressedEPSRImage[0],AWTEvent.MOUSE_EVENT_MASK,true,config.isEqualizerEnabled());
    acEqualizer.setLocation(panelEPSRLocation[l++],panelEPSRLocation[l++]);
    add(acEqualizer);
    acEqualizer.setActionCommand("Equalizer");
    acEqualizer.addActionListener(this);

    acPlaylist =  new activeComponent(releasedEPSRImage[1],pressedEPSRImage[1],AWTEvent.MOUSE_EVENT_MASK,true,config.isPlaylistEnabled());
    acPlaylist.setLocation(panelEPSRLocation[l++],panelEPSRLocation[l++]);
    add(acPlaylist);
    acPlaylist.setActionCommand("Playlist");
    acPlaylist.addActionListener(this);

    acShuffle=  new activeComponent(releasedEPSRImage[2],pressedEPSRImage[2],AWTEvent.MOUSE_EVENT_MASK,true,config.isShuffleEnabled());
    acShuffle.setLocation(panelEPSRLocation[l++],panelEPSRLocation[l++]);
    add(acShuffle);
    acShuffle.setActionCommand("Shuffle");
    acShuffle.addActionListener(this);

    acRepeat =  new activeComponent(releasedEPSRImage[3],pressedEPSRImage[3],AWTEvent.MOUSE_EVENT_MASK,true,config.isRepeatEnabled());
    acRepeat.setLocation(panelEPSRLocation[l++],panelEPSRLocation[l++]);
    add(acRepeat);
    acRepeat.setActionCommand("Repeat");
    acRepeat.addActionListener(this);
  }

  /**
   * Sets the current song to play and start playing if needed.
   */
  public void setCurrentSong (PlaylistItem pli)
  {
    int playerStateMem = playerState;
    if ( (playerState == PAUSE) || (playerState == PLAY) )
    {
      theSoundPlayer.stopPlayback();
      playerState = STOP;
      secondsAmount = 0;
      acPosBar.setLocation(posBarBounds[0],posBarLocation[1]);
      offScreenGraphics.drawImage(iconsImage[2], iconsLocation[0], iconsLocation[1], this);
      offScreenGraphics.drawImage(iconsImage[4], iconsLocation[2], iconsLocation[3], this);
    }
    playerState = OPEN;
    if (pli != null)
    {
      currentSongName = pli.getName();
      currentFileOrURL = pli.getLocation();
      currentIsFile = pli.isFile();
    }
    // Playlist ended.
    else
    {
      // Try to repeat ?
      if (config.isRepeatEnabled())
      {
        if (playlist != null)
        {
          // PlaylistItems available ?
          if (playlist.getPlaylistSize() > 0)
          {
            playlist.begin();
            PlaylistItem rpli = playlist.getCursor();
            if (rpli != null)
            {
              // OK, Repeat the playlist.
              currentSongName = rpli.getName();
              currentFileOrURL = rpli.getLocation();
              currentIsFile = rpli.isFile();
            }
          }
          // No, so display Title.
          else
          {
            currentSongName = TITLETEXT;
            currentFileOrURL = null;
            currentIsFile = false;
          }
        }
      }
      // No, so display Title.
      else
      {
        currentSongName = TITLETEXT;
        currentFileOrURL = null;
        currentIsFile = false;
      }
    }
    if (currentIsFile == true)
    {
      add(acPosBar);
    }
    else
    {
      config.setLastURL(currentFileOrURL);
      remove(acPosBar);
    }
    titleText = currentSongName.toUpperCase();
    showMessage(titleText);
    repaint () ;

    // Start playing if needed.
    if ((playerStateMem == PLAY) || (playerStateMem == PAUSE))
    {
      acPlay.fireEvent();
    }
  }

    /*-----------------------------------------*/
    /*--    BasicPlayerListener Interface    --*/
    /*-----------------------------------------*/

    /**
     * BasicPlayerListener implementation.
     * It manages "elapsed time" event.
     */
  public void updateCursor(int secondsAmount, int total)
  {
        /*-- Display elapsed time --*/
    secondsAmount = (secondsAmount)%(100*60);
    int      secondD,second,minuteD,minute;
    int      minutes = (int) (secondsAmount/60);
    int      seconds = (int) (secondsAmount - (minutes*60));
    if (seconds < 10)
    {
      secondD = 0;
      second = seconds;
    }
    else
    {
      secondD = ((int) seconds/10);
      second = ((int) (seconds - (((int) seconds/10))*10));
    }
    if (minutes < 10)
    {
      minuteD = 0;
      minute = minutes;
    }
    else
    {
      minuteD = ((int) minutes/10);
      minute = ((int) (minutes - (((int) minutes/10))*10));
    }
    // Update PosBar location.
    if (total != 0)
    {
      if (FirstPosBarDrag == true)
      {
        posBarLocation[0] = ((int) Math.round(secondsAmount*deltaPosBar/total)) + posBarBounds[0];
        if (posBarLocation[0] < posBarBounds[0]) posBarLocation[0] = posBarBounds[0];
        else if (posBarLocation[0] > posBarBounds[1]) posBarLocation[0] = posBarBounds[1];
        acPosBar.setLocation(posBarLocation[0],posBarLocation[1]);
      }
    }
    else posBarLocation[0] = posBarBounds[0];
    offScreenGraphics.drawImage(timeImage[minuteD], minuteDLocation[0], minuteDLocation[1], this);
    offScreenGraphics.drawImage(timeImage[minute], minuteLocation[0], minuteLocation[1], this);
    offScreenGraphics.drawImage(timeImage[secondD], secondDLocation[0], secondDLocation[1], this);
    offScreenGraphics.drawImage(timeImage[second], secondLocation[0], secondLocation[1], this);
    repaint();
  }

  /**
   * BasicPlayerListener implementation.
   * It manages End Of Media event.
   */
  public void updateMediaState(String state)
  {
        /*-- End Of Media reached --*/
    if (state.equals("EOM"))
    {
      if ( (playerState == PAUSE) || (playerState == PLAY) )
      {
        playlist.nextCursor () ;
        if (fileList != null) fileList.nextCursor () ;
        PlaylistItem pli = playlist.getCursor();
        this.setCurrentSong(pli);
      }
    }
  }


  /**
   * BasicPlayerListener implementation.
   */
  public void updateMediaData(byte[] data)
  {
    // Spectrum analyzer could take place here
  }


  /**
   * Manages events.
   */
  public void actionPerformed( ActionEvent e )
  {
        /*------------------------------------*/
        /*--        Interact on Seek        --*/
        /*------------------------------------*/
    if (e.getActionCommand().equals("Seek"))
    {
      if (acPosBar.isMousePressed() == false)
      {
        FirstPosBarDrag = true;
        try
        {
          theSoundPlayer.setSeek(posValue);
          } catch (IOException ioe)
          {
            ioe.printStackTrace();
          }
          repaint();
      }
      else
      {
        int DeltaX = 0;
        if (FirstPosBarDrag == false)
        {
          DeltaX = acPosBar.getMouseX() - XPosBarDrag;
          XPosBarDrag = acPosBar.getMouseX() - DeltaX;
          if (posBarLocation[0]+DeltaX < posBarBounds[0]) posBarLocation[0] = posBarBounds[0];
          else if (posBarLocation[0]+DeltaX  > posBarBounds[1]) posBarLocation[0] = posBarBounds[1];
          else posBarLocation[0] = posBarLocation[0] + DeltaX;
          acPosBar.setLocation(posBarLocation[0],posBarLocation[1]);
          double a = (maxPos-minPos)/(posBarBounds[1] - posBarBounds[0]);
          posValue = (a*(posBarLocation[0] - posBarBounds[0]) + minPos);
        }
        else
        {
          FirstPosBarDrag = false;
          XPosBarDrag = acPosBar.getMouseX();
        }
      }
    }

        /*------------------------------------*/
        /*--       Interact on Volume       --*/
        /*------------------------------------*/
    else if (e.getActionCommand().equals("Volume"))
    {
      if (acVolume.isMousePressed() == false)
      {
        FirstVolumeDrag = true;
        offScreenGraphics.drawImage(clearImage, titleLocation[0], titleLocation[1], this);
        offScreenGraphics.drawImage(titleImage, titleLocation[0], titleLocation[1], this);
        repaint();
      }
      else
      {
        int DeltaX = 0;
        if (FirstVolumeDrag == false)
        {
          DeltaX = acVolume.getMouseX() - XVolumeDrag;
          XVolumeDrag = acVolume.getMouseX() - DeltaX;
          if (volumeLocation[0]+DeltaX < volumeBounds[0]) volumeLocation[0] = volumeBounds[0];
          else if (volumeLocation[0]+DeltaX  > volumeBounds[1]) volumeLocation[0] = volumeBounds[1];
          else volumeLocation[0] = volumeLocation[0] + DeltaX;
          acVolume.setLocation(volumeLocation[0],volumeLocation[1]);
          double a = (maxGain-minGain)/(volumeBounds[1] - volumeBounds[0]);
          gainValue = (int) (a*(volumeLocation[0] - volumeBounds[0]) + minGain);
          if (gainValue == 0) theSoundPlayer.setGain( 0 );
          else theSoundPlayer.setGain(((double)gainValue / (double)maxGain) );
          String volumeText = "VOLUME: "+(int) Math.round((100/(volumeBounds[1] - volumeBounds[0]))*(volumeLocation[0] - volumeBounds[0]))+"%";
          Image volImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, volumeText)).getBanner();
          offScreenGraphics.drawImage(volumeImage[(int)Math.round(((double)gainValue / (double)maxGain)*(volumeImage.length-1))], volumeBarLocation[0], volumeBarLocation[1], this);
          offScreenGraphics.drawImage(clearImage, titleLocation[0], titleLocation[1], this);
          offScreenGraphics.drawImage(volImage, titleLocation[0], titleLocation[1], this);
        }
        else
        {
          FirstVolumeDrag = false;
          XVolumeDrag = acVolume.getMouseX();
        }
      }
    }

        /*------------------------------------*/
        /*--       Interact on Balance       --*/
        /*------------------------------------*/
    else if (e.getActionCommand().equals("Balance"))
    {
      if (acBalance.isMousePressed() == false)
      {
        FirstBalanceDrag = true;
        offScreenGraphics.drawImage(clearImage, titleLocation[0], titleLocation[1], this);
        offScreenGraphics.drawImage(titleImage, titleLocation[0], titleLocation[1], this);
        repaint();
      }
      else
      {
        int DeltaX = 0;
        if (FirstBalanceDrag == false)
        {
          DeltaX = acBalance.getMouseX() - XBalanceDrag;
          XBalanceDrag = acBalance.getMouseX() - DeltaX;
          if (balanceLocation[0]+DeltaX < balanceBounds[0]) balanceLocation[0] = balanceBounds[0];
          else if (balanceLocation[0]+DeltaX  > balanceBounds[1]) balanceLocation[0] = balanceBounds[1];
          else balanceLocation[0] = balanceLocation[0] + DeltaX;
          acBalance.setLocation(balanceLocation[0],balanceLocation[1]);
          double a = (maxBalance-minBalance)/(balanceBounds[1] - balanceBounds[0]);
          balanceValue = (a*(balanceLocation[0] - balanceBounds[0]) + minBalance);
          theSoundPlayer.setPan((float)balanceValue);
          String balanceText = "BALANCE: " + (int) Math.abs(balanceValue*100) + "%";
          if (balanceValue > 0) balanceText = balanceText + " RIGHT";
          else if (balanceValue < 0)  balanceText = balanceText + " LEFT";
          else  balanceText = "BALANCE: CENTER";
          Image balImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, balanceText)).getBanner();
          offScreenGraphics.drawImage(balanceImage[0], balanceBarLocation[0], balanceBarLocation[1], this);
          offScreenGraphics.drawImage(clearImage, titleLocation[0], titleLocation[1], this);
          offScreenGraphics.drawImage(balImage, titleLocation[0], titleLocation[1], this);
        }
        else
        {
          FirstBalanceDrag = false;
          XBalanceDrag = acBalance.getMouseX();
        }
      }
    }

    /*------------------------------------*/
    /*-- Select Filename or URL to load --*/
    /*------------------------------------*/
    else if (e.getActionCommand().equals("Eject"))
    {

      if ((playerState == PLAY) || (playerState == PAUSE))
      {
        theSoundPlayer.stopPlayback();
        playerState = STOP;
      }
      if ((playerState == INIT) || (playerState == STOP) || (playerState == OPEN))
      {
        System.gc();
        PlaylistItem pli = null;
        if (location != NONE)
        {
          // Local File.
          // E.B : FileSelector added as M.S did.
          if (acEject.getMouseButton() == MouseEvent.BUTTON1_MASK)
          {
            String fsFile = null;
            if (location == ALL)
            {
              Frame f = new Frame();
              f.setLocation(this.getBounds().x,this.getBounds().y + 10);
              FileSelector.setWindow(f);
              fsFile = FileSelector.selectFile( FileSelector.OPEN,  config.getExtensions(), config.getLastDir());
              fsFile = FileSelector.getFile();
            }
            else if (location == URL)
            {
              UrlDialog UD = new UrlDialog("Open location",this.getBounds().x,this.getBounds().y + 10,280,120,config.getLastURL());
              UD.show();
              if (UD.getFile() != null)
              {
                config.setLastURL(UD.getURL());
                fsFile = UD.getURL();
              }
            }
            if (fsFile != null)
            {
              if (location == ALL) config.setLastDir(FileSelector.getDirectory());
              else config.setLastDir("");
              if (fsFile != null)
              {
                // Loads a new playlist.
                if( fsFile.toLowerCase().endsWith(".m3u") )
                {
                  if (loadPlaylist(config.getLastDir()+fsFile))
                  {
                    config.setPlaylistFilename(config.getLastDir()+fsFile);
                    playlist.begin();
                    if (fileList != null) fileList.initPlayList();
                    this.setCurrentSong(playlist.getCursor());
                    if (fileList != null) fileList.repaint();
                  }

                }
                else if( fsFile.toLowerCase().endsWith(".wsz") )
                {
                  //this.dispose();
                  loadSkin(config.getLastDir()+fsFile);
                  config.setDefaultSkin(config.getLastDir()+fsFile);
                }
                else
                {
                  if (location == ALL) pli = new PlaylistItem(fsFile, config.getLastDir()+fsFile, -1, true);
                  else pli = new PlaylistItem(fsFile, fsFile, -1, false);
                }
              }
            }
          }
          // Remote File.
          else if (acEject.getMouseButton() == MouseEvent.BUTTON3_MASK)
          {
            UrlDialog UD = new UrlDialog("Open location",this.getBounds().x,this.getBounds().y + 10,280,120,config.getLastURL());
            UD.show();
            if (UD.getFile() != null)
            {
              pli = new PlaylistItem(UD.getFile(), UD.getURL(), -1, false);
              config.setLastURL(UD.getURL());
            }
          }
        }
        if (pli != null)
        {
          playlist.removeAllItems();
          playlist.appendItem(pli);
          playlist.nextCursor ();
          if (fileList != null) fileList.initPlayList () ;
          this.setCurrentSong(pli);
        }
      }
      offScreenGraphics.drawImage(iconsImage[2], iconsLocation[0], iconsLocation[1], this);
      offScreenGraphics.drawImage(iconsImage[4], iconsLocation[2], iconsLocation[3], this);
      repaint();
    }

    /*---------------------------*/
    /*-- Play the current File --*/
    /*---------------------------*/
    else if (e.getActionCommand().equals("Play"))
    {
      if (playerState == PAUSE)
      {
        theSoundPlayer.resumePlayback();
        playerState = PLAY;
        offScreenGraphics.drawImage(iconsImage[0], iconsLocation[0], iconsLocation[1], this);
        offScreenGraphics.drawImage(iconsImage[3], iconsLocation[2], iconsLocation[3], this);
        repaint();
      }
      else if (playerState == PLAY)
      {
        theSoundPlayer.stopPlayback();
        playerState = PLAY;
        secondsAmount = 0;
        offScreenGraphics.drawImage(timeImage[0], minuteDLocation[0], minuteDLocation[1], this);
        offScreenGraphics.drawImage(timeImage[0], minuteLocation[0], minuteLocation[1], this);
        offScreenGraphics.drawImage(timeImage[0], secondDLocation[0], secondDLocation[1], this);
        offScreenGraphics.drawImage(timeImage[0], secondLocation[0], secondLocation[1], this);
        repaint();
        if (currentFileOrURL != null)
        {
          try
          {
            currentIsFile = false;
            if (currentIsFile == true) theSoundPlayer.setDataSource(openFile(currentFileOrURL));
            else
            {
              URL myurl = new URL(currentFileOrURL);
              if (userAgent != null)
              {
                URLConnection myCon = myurl.openConnection();
                myCon.setRequestProperty("User-Agent", userAgent);
                myCon.setRequestProperty("Accept", "*/*");
                myCon.setRequestProperty("Icy-Meta-Data", "1");
                myCon.setRequestProperty("Connection", "close");
                theSoundPlayer.setDataSource(myCon.getInputStream());
              }
              else theSoundPlayer.setDataSource(myurl);
            }
            theSoundPlayer.startPlayback();
            } catch (Exception ex)
            {
              trace(0,getClass().getName(),"Cannot read file : "+currentFileOrURL+", "+ex.getMessage());
              showMessage("INVALID FILE");
            }
        }
      }
      else if ( (playerState == STOP) || (playerState == OPEN))
      {
        if (currentFileOrURL != null)
        {
          try
          {
            if (currentIsFile == true) theSoundPlayer.setDataSource(openFile(currentFileOrURL));
            else
            {
              URL myurl = new URL(currentFileOrURL);
              if (userAgent != null)
              {
                URLConnection myCon = myurl.openConnection();
                myCon.setRequestProperty("User-Agent", userAgent);
                myCon.setRequestProperty("Accept", "*/*");
                myCon.setRequestProperty("Icy-Meta-Data", "1");
                myCon.setRequestProperty("Connection", "close");
                theSoundPlayer.setDataSource(myCon.getInputStream());
              }
              else theSoundPlayer.setDataSource(myurl);
            }
            theSoundPlayer.startPlayback();
            theSoundPlayer.setGain( ((double)gainValue / (double)maxGain) );
            theSoundPlayer.setPan((float)balanceValue);
            double lenghtInSecond = theSoundPlayer.getTotalLengthInSeconds();
            int bitRate = Math.round((theSoundPlayer.getBitRate()/1000));
            sampleRateImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, ""+Math.round((theSoundPlayer.getAudioFormat()).getSampleRate()/1000))).getBanner();
            bitsRateImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, ""+bitRate)).getBanner();
            offScreenGraphics.drawImage(sampleRateImage, sampleRateLocation[0], sampleRateLocation[1], this);
            offScreenGraphics.drawImage(bitsRateImage, bitsRateLocation[0], bitsRateLocation[1], this);
            if ((theSoundPlayer.getAudioFormat()).getChannels() == 2)
            {
              offScreenGraphics.drawImage(activeModeImage[0], stereoLocation[0], stereoLocation[1], this);
            }
            else if ((theSoundPlayer.getAudioFormat()).getChannels() == 1)
            {
              offScreenGraphics.drawImage(activeModeImage[1], monoLocation[0], monoLocation[1], this);
            }
            int    minutes = (int) (lenghtInSecond/60);
            int    seconds = (int) (lenghtInSecond - (minutes*60));
            titleText = currentSongName.toUpperCase();
            if (seconds >= 10) titleText = titleText + " ("+minutes+":"+seconds+")";
            else titleText = titleText + " ("+minutes+":0"+seconds+")";
            titleImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, titleText)).getBanner(0,0,155,6);
            offScreenGraphics.drawImage(clearImage, titleLocation[0], titleLocation[1], this);
            offScreenGraphics.drawImage(titleImage, titleLocation[0], titleLocation[1], this);
            offScreenGraphics.drawImage(timeImage[0], minuteDLocation[0], minuteDLocation[1], this);
            offScreenGraphics.drawImage(timeImage[0], minuteLocation[0], minuteLocation[1], this);
            offScreenGraphics.drawImage(timeImage[0], secondDLocation[0], secondDLocation[1], this);
            offScreenGraphics.drawImage(timeImage[0], secondLocation[0], secondLocation[1], this);

            offScreenGraphics.drawImage(iconsImage[0], iconsLocation[0], iconsLocation[1], this);
            offScreenGraphics.drawImage(iconsImage[3], iconsLocation[2], iconsLocation[3], this);

            if ((theSoundPlayer.getAudioFileFormat()).getFrameLength() != -1 ) trace(1,getClass().getName(),"Frames = "+(theSoundPlayer.getAudioFileFormat()).getFrameLength());
            trace(1,getClass().getName(),"SampleRate (Hz) = "+theSoundPlayer.getAudioFormat().getSampleRate());
            trace(1,getClass().getName(),"FrameRate = "+theSoundPlayer.getAudioFormat().getFrameRate());
            trace(1,getClass().getName(),"FrameSize (bytes) = "+theSoundPlayer.getAudioFormat().getFrameSize());
            trace(1,getClass().getName(),"AudioFileFormat = "+theSoundPlayer.getAudioFileFormat());

            } catch (UnsupportedAudioFileException uafe)
            {
              trace(0,getClass().getName(),"Stream error :"+currentFileOrURL+", "+uafe.getMessage());
              showMessage("INVALID FILE");
            }
            catch (LineUnavailableException lue)
            {
              trace(0,getClass().getName(),"Stream error :"+currentFileOrURL+", "+lue.getMessage());
              showMessage("INVALID FILE");
            }
            catch (IOException ex)
            {
              trace(0,getClass().getName(),"Stream error :"+currentFileOrURL+", "+ex.getMessage());
              showMessage("INVALID FILE");
            }
            playerState = PLAY;
            repaint();
            trace(1,getClass().getName(),titleText);
        }
      }
    }

        /*-----------------------------------*/
        /*-- Pause/Resume the current File --*/
        /*-----------------------------------*/
    else if (e.getActionCommand().equals("Pause"))
    {
      if (playerState == PLAY)
      {
        theSoundPlayer.pausePlayback();
        playerState = PAUSE;
        offScreenGraphics.drawImage(iconsImage[1], iconsLocation[0], iconsLocation[1], this);
        offScreenGraphics.drawImage(iconsImage[4], iconsLocation[2], iconsLocation[3], this);
        repaint();
      }
      else if (playerState == PAUSE)
      {
        theSoundPlayer.resumePlayback();
        playerState = PLAY;
        offScreenGraphics.drawImage(iconsImage[0], iconsLocation[0], iconsLocation[1], this);
        offScreenGraphics.drawImage(iconsImage[3], iconsLocation[2], iconsLocation[3], this);
        repaint();
      }
    }

        /*------------------*/
        /*-- Stop to play --*/
        /*------------------*/
    else if (e.getActionCommand().equals("Stop"))
    {
      if ( (playerState == PAUSE) || (playerState == PLAY))
      {
        theSoundPlayer.stopPlayback();
        playerState = STOP;
        secondsAmount = 0;
        acPosBar.setLocation(posBarBounds[0],posBarLocation[1]);
        offScreenGraphics.drawImage(iconsImage[2], iconsLocation[0], iconsLocation[1], this);
        offScreenGraphics.drawImage(iconsImage[4], iconsLocation[2], iconsLocation[3], this);
        repaint();
      }
    }

        /*----------*/
        /*-- Next --*/
        /*----------*/
    else if (e.getActionCommand().equals("Next"))
    {
      // Try to get next song from the playlist
      playlist.nextCursor () ;
      if (fileList != null) fileList.nextCursor () ;
      PlaylistItem pli = playlist.getCursor();
      this.setCurrentSong(pli);
    }

        /*--------------*/
        /*-- Previous --*/
        /*--------------*/
    else if (e.getActionCommand().equals("Previous"))
    {
      // Try to get previous song from the playlist
      playlist.previousCursor();
      if (fileList != null) fileList.nextCursor () ;
      PlaylistItem pli = playlist.getCursor();
      this.setCurrentSong(pli);
    }

        /*--------------------------------------------*/
        /*--     Exit window through Exit Button    --*/
        /*--------------------------------------------*/
    else if (e.getActionCommand().equals("Exit"))
    {
      closePlayer();
    }

        /*----------------------------------------------------*/
        /*--     Minimize window through Minimize Button    --*/
        /*----------------------------------------------------*/
    else if (e.getActionCommand().equals("Minimize"))
    {
      // Iconify top frame.
      topFrame.setLocation(OrigineX, OrigineY);
      //topFrame.setState(Frame.ICONIFIED);
      //topFrame.show();
    }

        /*--------------------------------------------*/
        /*-- Move full window through its Title Bar --*/
        /*--------------------------------------------*/
    else if (e.getActionCommand().equals("TitleBar"))
    {
      //trace(3,getClass().getName(),"X="+acTitle.getMouseX()+" Y="+acTitle.getMouseY());
      if (acTitleBar.isMousePressed() == false) FirstDrag = true;
      else
      {
        int DeltaX = 0;
        int DeltaY = 0;
        if (FirstDrag == false)
        {
          DeltaX = acTitleBar.getMouseX() - XDrag;
          DeltaY = acTitleBar.getMouseY() - YDrag;
          XDrag = acTitleBar.getMouseX() - DeltaX;
          YDrag = acTitleBar.getMouseY() - DeltaY;
          OrigineX = OrigineX + DeltaX ;
          OrigineY = OrigineY + DeltaY ;
          // Keep player window in screen
          if (OrigineX < 0) OrigineX = 0;
          if (OrigineY < 0) OrigineY = 0;
          if (screenWidth != -1)
          {
            if (OrigineX > screenWidth-WinWidth) OrigineX = screenWidth-WinWidth;
          }
          if (screenHeight != -1)
          {
            if (OrigineY > screenHeight-WinHeight) OrigineY = screenHeight-WinHeight;
          }
          // Moves top frame.
          topFrame.setLocation(OrigineX, OrigineY);
          topFrame.setSize(0,0);
          // Moves the main window + playlist
          setLocation (OrigineX,OrigineY) ;
          if (fileList != null) fileList.setLocation (OrigineX, OrigineY+WinHeight) ;
        }
        else
        {
          FirstDrag = false;
          XDrag = acTitleBar.getMouseX();
          YDrag = acTitleBar.getMouseY();
        }
      }
    }
        /*-----------------------------------------*/
        /*--     Playlist window hide/display    --*/
        /*-----------------------------------------*/
    else if (e.getActionCommand().equals("Playlist"))
    {
      if (acPlaylist.getCheckboxState())
      {
        config.setPlaylistEnabled(true);
        if (fileList != null) fileList.show(true);
      }
      else
      {
        config.setPlaylistEnabled(false);
        if (fileList != null) fileList.show(false);
      }
    }

        /*--------------------*/
        /*--     Shuffle    --*/
        /*--------------------*/
    else if (e.getActionCommand().equals("Shuffle"))
    {
      if (acShuffle.getCheckboxState())
      {
        config.setShuffleEnabled(true);
        if (playlist != null) playlist.shuffle();
      }
      else
      {
        config.setShuffleEnabled(false);
      }
    }
        /*-------------------*/
        /*--     Repeat    --*/
        /*-------------------*/
    else if (e.getActionCommand().equals("Repeat"))
    {
      if (acRepeat.getCheckboxState())
      {
        config.setRepeatEnabled(true);
      }
      else
      {
        config.setRepeatEnabled(false);
      }
    }
        /*----------------------*/
        /*--     Equalizer    --*/
        /*----------------------*/
    else if (e.getActionCommand().equals("Equalizer"))
    {
      if (acEqualizer.getCheckboxState())
      {
        config.setEqualizerEnabled(true);
      }
      else
      {
        config.setEqualizerEnabled(false);
      }
    }
    else
    {

    }
  }

  /**
   * Shows message in title an updates bitRate,sampleRate, Mono/Stereo,time features.
   */
  private void showMessage(String titleText)
  {
    if (titleText.length() > TEXT_LENGTH_MAX) titleText = titleText.substring(0,TEXT_LENGTH_MAX);
    titleImage = (new taftb(fontIndex, imText, fontWidth, fontHeight, 0, titleText)).getBanner();
    offScreenGraphics.drawImage(clearImage, titleLocation[0], titleLocation[1], this);
    offScreenGraphics.drawImage(titleImage, titleLocation[0], titleLocation[1], this);
    offScreenGraphics.drawImage(sampleRateClearImage, sampleRateLocation[0], sampleRateLocation[1], this);
    offScreenGraphics.drawImage(bitsRateClearImage,bitsRateLocation[0], bitsRateLocation[1], this);
    offScreenGraphics.drawImage(passiveModeImage[0], stereoLocation[0], stereoLocation[1], this);
    offScreenGraphics.drawImage(passiveModeImage[1], monoLocation[0], monoLocation[1], this);
    offScreenGraphics.drawImage(timeImage[0], minuteDLocation[0], minuteDLocation[1], this);
    offScreenGraphics.drawImage(timeImage[0], minuteLocation[0], minuteLocation[1], this);
    offScreenGraphics.drawImage(timeImage[0], secondDLocation[0], secondDLocation[1], this);
    offScreenGraphics.drawImage(timeImage[0], secondLocation[0], secondLocation[1], this);
  }

  public void paint(Graphics g)
  {
    if (offScreenImage != null)
    {
      g.drawImage(offScreenImage, 0, 0, this);
    }
  }

  public void update(Graphics g)
  {
    //System.out.println("Update");
    paint(g);
  }

    /*-------------------------------------------*/
    /*--        WindowListener interface       --*/
    /*-------------------------------------------*/

    /**
     * Invoked when the window is set to be the user's active window,
     * which means the window (or one of its subcomponents) will receive
     * keyboard events.
     */
  public void windowActivated(WindowEvent e)
  {
    topFrame.setSize(0,0);
    show();
  }

  /**
   * Invoked when a window has been closed as the result
   * of calling dispose on the window
   */
  public void windowClosed(WindowEvent e)
      {topFrame.setSize(0,0);}

  /**
   * Invoked when the user attempts to close the window from the window's
   * system menu.
   */
  public void windowClosing(WindowEvent e)
  {
    // Closing window (Alt+F4 under Win32)
    closePlayer();
  }

  /**
   * Invoked when a window is no longer the user's active window,
   * which means that keyboard events will no longer be delivered to
   * the window or its subcomponents
   */
  public void windowDeactivated(WindowEvent e)
      {topFrame.setSize(0,0);}

  /**
   * Invoked when a window is changed from a minimized to a normal state.
   */
  public void windowDeiconified(WindowEvent e)
  {
    topFrame.setLocation(OrigineX, OrigineY);
    topFrame.setSize(0,0);
    //this.toFront();
    //topFrame.hide();
    // Show main window to fix Unix problem.
    show();
    // Show playlist window if needed.
    if ((acPlaylist.getCheckboxState()) && (fileList != null)) fileList.show(true);
    else if (fileList != null) fileList.show(false);
  }

  /**
   * Invoked when a window is changed from a normal to a minimized state.
   */
  public void windowIconified(WindowEvent e)
  {
    topFrame.setLocation(OrigineX, OrigineY);
    topFrame.setSize(0,0);
    //topFrame.show();
  }

  /**
   * Invoked the first time a window is made visible.
   */
  public void windowOpened(WindowEvent e)
      {topFrame.setSize(0,0);}

    /*-------------------------------------------*/
    /*--         Drag and drop interface       --*/
    /*-------------------------------------------*/

    /**
     * DnD : dragEnter implementation.
     */
  public void dragEnter(DropTargetDragEvent e)
  {
    if(isDragOk(e) == false)
    {
      e.rejectDrag();
      return;
    }
  }

  /**
   * DnD : dragOver implementation.
   */
  public void dragOver(DropTargetDragEvent e)
  {
    if(isDragOk(e) == false)
    {
      e.rejectDrag();
      return;
    }
  }

  /**
   * DnD : dragExit implementation.
   */
  public void dragExit(DropTargetEvent e)
  {
  }

  /**
   * DnD : dropActionChanged implementation.
   */
  public void dropActionChanged(DropTargetDragEvent e)
  {
    if(isDragOk(e) == false)
    {
      e.rejectDrag();
      return;
    }
  }

  /**
   * DnD : Drop implementation.
   * Adds all dropped files to the playlist.
   */
  public void drop(DropTargetDropEvent e)
  {
    // Check DataFlavor
    DataFlavor[] dfs = e.getCurrentDataFlavors();
    DataFlavor   tdf = null;
    for (int i = 0; i < dfs.length; i++)
    {
      if (DataFlavor.javaFileListFlavor.equals(dfs[i]))
      {
      tdf = dfs[i];
      break;
    }
    }
    // Is file list ?
    if (tdf != null)
    {
      // Accept COPY DnD only.
      if ((e.getSourceActions() & DnDConstants.ACTION_COPY) != 0)
      {
        e.acceptDrop(DnDConstants.ACTION_COPY);
      }
      else return;
      try
      {
        Transferable t  = e.getTransferable();
        Object data = t.getTransferData(tdf);
        // How many files ?
        if (data instanceof java.util.List)
        {
          java.util.List al = (java.util.List) data;
          // Read the first File.
          if ( al.size() > 0 )
          {
            File  file = null;
            // Stops the player if needed.
            if ((playerState == PLAY) || (playerState == PAUSE))
            {
              theSoundPlayer.stopPlayback();
              playerState = STOP;
            }
            // Clean the playlist.
            playlist.removeAllItems();
            // Add all dropped files to playlist.
            ListIterator li = al.listIterator();
            while (li.hasNext())
            {
              file = (File) li.next();
              PlaylistItem pli = null;
              if (file != null)
              {

                pli = new PlaylistItem(file.getName(), file.getAbsolutePath(), -1, true);
                if (pli != null) playlist.appendItem(pli);
              }
            }
            // Start the playlist from the top.
            playlist.nextCursor ();
            if (fileList != null) fileList.initPlayList () ;
            this.setCurrentSong(playlist.getCursor());
          }
        }
        else
        {
          trace(2,getClass().getName(),"Unknown dropped objects");
        }
        } catch (IOException ioe)
        {
          trace(2,getClass().getName(),"Drop error :"+ioe.getMessage());
          e.dropComplete(false);
          return;
        }
        catch (UnsupportedFlavorException ufe)
        {
          trace(2,getClass().getName(),"Drop error :"+ufe.getMessage());
          e.dropComplete(false);
          return;
        }
        catch (Exception ex)
        {
          trace(2,getClass().getName(),"Drop error :"+ex.getMessage());
          e.dropComplete(false);
          return;
        }
        e.dropComplete(true);
    }
  }

  /**
   * Checks if Drag allowed.
   */
  private boolean isDragOk(DropTargetDragEvent e)
  {
    // Check DataFlavor
    DataFlavor[] dfs = e.getCurrentDataFlavors();
    DataFlavor   tdf = null;
    for (int i = 0; i < dfs.length; i++)
    {
      if (DataFlavor.javaFileListFlavor.equals(dfs[i]))
      {
      tdf = dfs[i];
      break;
    }
    }
    // Only file list allowed.
    if (tdf != null)
    {
      // Only DnD COPY allowed.
      if ((e.getSourceActions() & DnDConstants.ACTION_COPY) != 0)
      {
        return true;
      }
      else  return false;
    }
    else return false;
  }


    /*--------------------------------*/
    /*--            Misc            --*/
    /*--------------------------------*/

    /**
     * Returns a File from a filename.
     */
  private File openFile(String file)
  {
    return new File(file);
  }

  /**
   * Sets skin filename.
   */
  public void setSkin(String sk)
  {
    thePath=sk;
  }

  /**
   * Returns Playlist instance.
   */
  public Playlist getPlaylist()
  {
    return playlist;
  }

  /**
   * Returns Playlist Dump.
   */
  public String getPlaylistDump()
  {
    String plist = "";
    if (this.playlist != null)
    {
      for (int i=0;i<playlist.getPlaylistSize();i++)
      {
        PlaylistItem pli = playlist.getItemAt(i);
        plist = plist + "#"+pli.getName() + "|" + pli.getLocation();
      }
    }
    return plist;
  }

  /**
   * Returns Player state.
   */
  public int getPlayerState()
  {
    return playerState;
  }

  /**
   * Free ressources and close the player.
   */
  private void closePlayer()
  {
    if ( (playerState == PAUSE) || (playerState == PLAY))
    {
      theSoundPlayer.stopPlayback();
    }
    config.setLocation(OrigineX, OrigineY);
    config.save();
    // Polis : Frame instead of Window.
    //topFrame.dispose();
    System.gc();
    exit(0);
  }

  /**
   * Kills the player.
   */
  public void exit(int status)
  {
    System.exit(status);
  }

  /**
   * Simulates "Play" selection.
   */
  public void pressStart()
  {
    acPlay.fireEvent();
  }

  /**
   * Simulates "Stop" selection.
   */
  public void pressStop()
  {
    acStop.fireEvent();
  }

  /**
   * Simulates "Shuffle" selection.
   */
  public void pressShuffle()
  {
    acShuffle.fireEvent();
  }

  /**
   * Simulates "Repeat" selection.
   */
  public void pressRepeat()
  {
    acRepeat.fireEvent();
  }

  /**
   * Simulates "Pause" selection.
   */
  public void pressPause()
  {
    acPause.fireEvent();
  }

  /**
   * Simulates "Next" selection.
   */
  public void pressNext()
  {
    acNext.fireEvent();
  }

  /**
   * Simulates "Previous" selection.
   */
  public void pressPrevious()
  {
    acPrevious.fireEvent();
  }

  /**
   * Simulates "Eject" selection.
   */
  public void pressEject()
  {
    acEject.fireEvent();
  }

  /**
   * Returns current song path.
   * @return
   */
  public String getCurrentSongPath()
  {
    return this.currentFileOrURL;
  }
  /**
   * Returns current song name.
   * @return
   */
  public String getCurrentSongName()
  {
    return this.currentSongName;
  }

  /**
   * Sends traces to Debug.
   */
  private void trace(int level, String msg1, String msg2)
  {
    Debug dbg = Debug.getInstance();
    dbg.log(level,msg1+":"+msg2);
  }

  /**
   * Entry point.
   */
  public static void main(String[] args)
  {
    Player theGUI;
    String currentArg = null;
    String currentValue = null;
    String skin = null;
    String logfile = null;
    int loglevel = 0;
    for (int i=0;i<args.length;i++)
    {
      currentArg = args[i];
      if (currentArg.startsWith("-"))
      {
        if (currentArg.toLowerCase().equals("-init"))
        {
          i++;
          if (i >= args.length) usage("init value missing");
          currentValue = args[i];
          if (currentValue.toLowerCase().startsWith("http")) initConfig = currentValue;
          else initConfig = currentValue.replace('\\', '/').replace('/',java.io.File.separatorChar);
        }
        else if (currentArg.toLowerCase().equals("-song"))
        {
          i++;
          if (i >= args.length) usage("song value missing");
          currentValue = args[i];
          if (currentValue.toLowerCase().startsWith("http")) initSong = currentValue;
          else initSong = currentValue.replace('\\', '/').replace('/',java.io.File.separatorChar);
        }
        else if (currentArg.toLowerCase().equals("-start"))
        {
          autoRun = true;
        }
        else if (currentArg.toLowerCase().equals("-showplaylist"))
        {
          showPlaylist = "true";
        }
        else if (currentArg.toLowerCase().equals("-skin"))
        {
          i++;
          if (i >= args.length) usage("skin value missing");
          currentValue = args[i];
          volumeHeight = 0;
          if (currentValue.toLowerCase().startsWith("http")) skin = currentValue;
          else skin = currentValue.replace('\\', '/').replace('/',java.io.File.separatorChar);
        }
        else if (currentArg.toLowerCase().equals("-loglevel"))
        {
          i++;
          if (i >= args.length) usage("loglevel value missing");
          currentValue = args[i];
          try
          {
            loglevel = Integer.parseInt(currentValue);
            } catch (NumberFormatException nfe)
            {
              usage("Invalid number : "+nfe.getMessage());
            }
        }
        else if (currentArg.toLowerCase().equals("-logfile"))
        {
          i++;
          if (i >= args.length) usage("logfile value missing");
          currentValue = args[i];
          logfile = currentValue.replace('\\', '/').replace('/',java.io.File.separatorChar);
        }
        else if (currentArg.toLowerCase().equals("-v"))
        {
          i ++ ;
          if (i >= args.length) usage("skin version value missing");
          skinVersion = args [i] ;
        }
        else if ( currentArg.toLowerCase().equals("-h"))
        {
          i ++ ;
          if (i >= args.length) usage("height value missing");
          try {
            volumeHeight = Integer.parseInt (args[i]) ;
            } catch (Exception e9) {}
        }
        else usage ("Unknown parameter : " + currentArg) ;
      }
      else
      {
        usage ("Invalid parameter :" + currentArg) ;
      }
    }
    //theGUI= new Player (skin, loglevel, logfile, new Frame(TITLETEXT));
    //theGUI.show();
    //if (autoRun == true) theGUI.pressStart();
  }

  /**
   * Displays usage.
   */
  private static void usage(String msg)
  {
    System.out.println(TITLETEXT+" : "+msg);
    System.out.println("");
    System.out.println(TITLETEXT+" : Usage");
    System.out.println("              java javazoom.jlGui.Player [-skin skinFilename] [-song audioFilename] [-start] [-loglevel number] [-logfile logFilename] [-init configFilename] [-v skinversion] [-h volheight]");
    System.out.println("");
    System.out.println("              skinFilename   : Filename or URL to a Winamp Skin2.x");
    System.out.println("              audioFilename  : Filename or URL to initial song or playlist");
    System.out.println("              start          : Starts playing song (from the playlist)");
    System.out.println("              showplaylist   : Show playlist");
    System.out.println("              number         : Level of traces (0,1,2)");
    System.out.println("              logFilename    : Filename for traces");
    System.out.println("");
    System.out.println("              Advanced parameters :");
    System.out.println("              skinversion    : 1 or 2 (default 1)");
    System.out.println("              volheight      : Custom volume height");
    System.out.println("              configFilename : Filename or URL to jlGui initial configuration (playlist,skin,parameters ...)");
    System.out.println("                               Initial configuration won't be overriden by -skin and -song arguments");
    System.out.println("");
    System.out.println("Homepage    : http://www.javazoom.net");
    System.exit(0);
  }
}