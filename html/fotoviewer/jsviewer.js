//
//  JSviewer - Dynamic HTML JavaScript image viewer
//  jsviewer.js
//  version 1.2
// 
//  Copyright (c) 2002-2004 Seann Herdejurgen (seann@herdejurgen.com)
//  All rights reserved.
//
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions
//  are met:
//
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
//  IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
//  BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
//  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
//  AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
//  OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
//  OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
//  SUCH DAMAGE.
//
//  JSviewer is distributed as freeware for non-commercial use.
//
//  Documentation and updates available on-line at http://www.jsviewer.com/
//

//
// JavaScript cookie functions
//
function getCookie(name) {
   var cookies=document.cookie.split('; ')
   if (document.cookie=='') cookies.length=0
   for (var i=0;i<cookies.length;i++)
      if (cookies[i].indexOf(name+'=')==0) {
         var value=unescape(cookies[i].split('=')[1])
         return isNaN(value)?value:parseInt(value)
      }
   return undefined
}

function setCookie(name,value) { document.cookie=name+'='+value+'; path=/'; debug() }

function initCookie(name,value) { if (getCookie(name)===undefined) setCookie(name,value) }

//
// Set default JSviewer preferences
//
// It is recommended that you set your own defaults in the
// script that calls JSviewer rather than changing them here.
//
// You can set your own defaults in HTML like this:
//
//    <script>
//    document.cookie='controlstyle=rkh; path=/'
//    document.cookie='timer=5000; path=/'
//    document.cookie='options=63; path=/'
//    </script>
//
function setDefaults() {
   initCookie('options',CAPTIONS|CONTROLS|CONTROLTOP|EFFECTS|PRECACHE|ZOOM)
   initCookie('font','Arial,Helvetica')
   initCookie('slideshow','Stop')
   initCookie('thumbdir','thumbs')
   initCookie('thumbsize',75)
   initCookie('timer',8000)
}

//
// Declare JSviewer global variables
//
var VERSION='1.2'
var Images=new Array()
var Thumbs=new Array()
var History=new Array(100)
var cache=new Array()
var form,index,lookahead,kpic,pic,pics,out,outerframe,recheck,rethumb,timer
var X,Y,H,W,width,height,fontsize,fontstyle,options
var topOffset,bottomOffset,leftOffset,rightOffset,captionOffset
var dragging,dragX,dragY,dragZ
var memory=0,spectrum=0,DEBUG=0,GRADIENT=16
var R=new Array(0,  0,  0, 11,128,255,255,128, 64,128,255,255,255,128, 11,  0)
var G=new Array(0, 11,128,255,255,255,255,128, 11,  0,  0, 11, 64, 64, 64,  0)
var B=new Array(0,128,255,128, 11, 11,255,128, 64,128,255,128, 11,  0,  0,  0)

//
// JSviewer constants
//
var CAPTIONS=1
var CONTROLS=2
var CONTROLTOP=4
var EFFECTS=8
var PRECACHE=16
var ZOOM=32
var MAXSIZE=64
var RANDOM=128
var THUMBS=256
var FULLSCREEN=512
var ADVANCED=1024
var HELP=2048
var RESERVED1=4096
var RESERVED2=8192
var RESERVED3=16384
var DEBUGMODE=32768

//
// Construct object prototypes
//
function JSImage() {
   this.image=0
   this.status=0
   this.left=0
   this.top=0
   this.zoom=0
}

//
// Browser specific DHTML functions
//
function getDoc(name) {
   if (document.layers) return eval('document.'+name+'.document')
   if (document.all) return eval('document.all.'+name+'.document')
   return document.getElementById(name).ownerDocument
}

function divWidth(name) {
   if (document.layers) return eval('document.'+name+'.document.width')
   if (document.all) return eval('document.all.'+name+'.offsetWidth')
   return document.getElementById(name).offsetWidth
}

function divHeight(name) {
   if (document.layers) return eval('document.'+name+'.document.height')
   if (document.all) return eval('document.all.'+name+'.offsetHeight')
   return document.getElementById(name).offsetHeight
}

function getLayer(name) {
   if (document.layers) return eval('document.'+name)
   if (document.all) return eval('document.all.'+name+'.style')
   return document.getElementById(name).style
}

function getX(layer) {
   if (document.layers) return layer.x
   if (document.all) return layer.pixelLeft
   return parseInt(layer.left)
}

function getY(layer) {
   if (document.layers) return layer.y
   if (document.all) return layer.pixelTop
   return parseInt(layer.top)
}

function setClip(layer,x,y,t,r,b,l) {
   debug(); layer=getLayer(layer)
   if (document.layers) {
      layer.clip.top=t
      layer.clip.right=r
      layer.clip.bottom=b
      layer.clip.left=l
      layer.moveTo(x,y)
   } else if (document.all) {
      layer.clip='rect('+t+'px '+r+'px '+b+'px '+l+'px)'
      layer.pixelLeft=x
      layer.pixelTop=y
      layer.overflow='hidden'
   } else {
      layer.left=x
      layer.top=y
      layer.clip='rect('+t+' '+r+' '+b+' '+l+')'
   }
}

function setWidth(layer,w) {
   layer=getLayer(layer)
   if (document.all)
      layer.posWidth=w
   else if (layer.clip)
      layer.clip.width=w
   else
      layer.width=w
}

function output(layer,html) {
   if (document.layers) {
      var doc=getDoc(layer)
      doc.open()
      doc.writeln(html)
      doc.close()
   } else if (document.all) {
      layer=eval(layer)
      layer.innerHTML=html
   } else document.getElementById(layer).innerHTML=html
}

function setXY(layer,x,y) {
   debug(); layer=getLayer(layer)
   if (document.layers) {
      layer.moveTo(x,y)
   } else if (document.all) {
      layer.pixelLeft=x
      layer.pixelTop=y
   } else {
      layer.left=x
      layer.top=y
   }
}

function abscenter(layer,y) { setXY(layer,Math.round((width-divWidth(layer))/2),y) }

function center(layer,y) { setXY(layer,Math.round((width-leftOffset-rightOffset-divWidth(layer))/2)+leftOffset,y) }

function setCursor(curtype) { if (document.all) document.body.style.cursor=curtype }

function setVisibility(layer,vis) {
   debug()
   layer=getLayer(layer)
   layer.visibility=(vis?'visible':'hidden')
}

function about() {
   var out='JSviewer '+VERSION+'\n'
   out+='Written by Seann Herdejurgen\n'
   out+='seann@herdejurgen.com\n'
   out+='Copyright (c) 2002-2004\n'
   out+='All rights reserved.\n'
   return out
}

function getKey(evt) {
  var key=document.all?event.keyCode:evt.keyCode?evt.keyCode:evt.charCode?evt.charCode:evt.which?evt.which:void 0
  key=String.fromCharCode(key).toLowerCase()
  switch(key) {
     case '!': toggleOption(DEBUGMODE); break
     case '+': case '=': nextImage(); break
     case '-': previousImage(); break
     case '<': case ',': slower(); break
     case '>': case '.': faster(); break
     case '^': toggleOption(CONTROLTOP); break
     case 'a': toggleOption(ADVANCED); break
     case 'c': toggleOption(CONTROLS); break
     case 'd': toggleOption(CAPTIONS); break
     case 'e': toggleOption(EFFECTS); break
     case 'f': gofullScreen(); break
     case 'h': toggleOption(HELP); break
     case 'm': toggleOption(MAXSIZE); break
     case 'o': alert('options='+options); break
     case 'p': toggleOption(PRECACHE); break
     case 'r': toggleOption(RANDOM); break
     case 's': slideshow(); break
     case 't': toggleOption(THUMBS); break
     case 'x': exitfullScreen(); break
     case 'z': toggleOption(ZOOM); break
     case '?': alert(about()); break
     case '\r': if (kpic && kpic<=pics) { displayImage(save(kpic-1)) }
                kpic=0
                break
     default: if (!isNaN(key)) {
                kpic=kpic*10+parseInt(key)
              } else {
                debug('You typed: '+key)
              }
  }
  return false
}

//
// Debug functions
//
function startDebug() {
   DEBUG=window.open()
   DEBUG.document.clear()
   DEBUG.document.writeln('<body onbeforeunload="if (window.opener.DEBUG) window.opener.DEBUG=0"><pre>'+about())
   window.focus()
}

function stopDebug() {
   debug('End debug.')
   DEBUG.document.writeln('</pre>')
   DEBUG.document.close()
   DEBUG=0
}

function funcall(caller) {
   if (caller) {
      var s=caller.toString()
      var results=s.match(/function\s+([^\(]+)\(([^\)]*)\)\s.+/)
      var func=results?results[1]:''
      var args=results?results[2]:''
      args=args.split(',')
      for (var i=0;i<args.length;i++) args[i]=caller.arguments[i]
      args=args.join(',')
      return ' '+func+'('+args+') '
   } else return ' '
}

function debug(s) {
   if (DEBUG) {
      var localtime=new Date()
      DEBUG.document.writeln(localtime+funcall(debug.caller)+(s?s:''))
      DEBUG.scrollTo(0,99999999)
   }
}

function dump(obj) {
   if (DEBUG) {
      debug()
      var localtime=new Date()
      for (var o in obj) {
         if (o=='frameElement' || o===undefined) continue // IE bug
         DEBUG.document.writeln(localtime+funcall(dump.caller)+o+'='+obj[o])
         DEBUG.scrollTo(0,99999999)
      }
   }
}

//
// JSviewer library functions
//
function randomPick() {
   return randomPick.arguments[Math.floor(Math.random()*randomPick.arguments.length)]
}

function pick(n,c) {
   var i=n
   if (c>1) while (i==n) {
      i=Math.floor(n+Math.random()*c)%c
      if (c>12) for (var p=-10; p<=0; p++)
         if (History[(History.length+index+p)%History.length]==i) i=n
   }
   return i
}

function isImage(i) {
   var name=form.pictures.options[i].value.split(';')[0]
   name=name.toLowerCase()
   var dot=name.lastIndexOf('.')
   var imagetypes='.gif.jpg.jpeg.png'
   return imagetypes.indexOf(name.substr(dot))!=-1?1:0
}

function save(image) {
   index=(index+1)%History.length
   History[index]=image
   History[(index+1)%History.length]=-1
   return image
}

function savePic() { setCookie('image',pic) }

function redraw() {
   savePic()
   window.location.reload()
   return false
}

function inheritColors(source) {
   document.bgColor=source.bgColor
   document.fgColor=source.fgColor
   document.linkColor=source.linkColor
   document.alinkColor=source.alinkColor
   document.vlinkColor=source.vlinkColor
}

function font(s) { return '<font face='+getCookie('font')+fontstyle+'>'+s+'</font>' }

function small(s) { return '<font face='+getCookie('font')+' style=font-size:'+(fontsize-1)+'pt >'+s+'</font>' }

function vstat(message) {
   return 'onmouseover="window.status='+message+'; return true" onmouseout="window.status=\'\'; return true"'
}

function stat(message) { return vstat("'"+message+"'") }

function link(func,extra,text) {
   return '<a href="" onclick="'+func+'; return false" style=text-decoration:none '+extra+'>'+text+'</a> '

}

function button(value,func,extra) {
   return '<input type=button value="'+value+'" onclick='+func+fontstyle+extra+'> '
}

function checkbox(opt,extra,text) {
   return '<input type=checkbox name=opt'+opt+' '+(options&opt?'checked':'')+' onclick=toggleOption('+opt+')'+fontstyle+extra+'> '+text+' '
}

function notify(message) {
   setClip('picture',leftOffset,topOffset,0,width-leftOffset-rightOffset,height-topOffset-bottomOffset,0)
   output('picture',font(message)); debug()
   center('picture',Math.round((height-topOffset-bottomOffset-divHeight('picture'))/2)+topOffset)
}

//
// Image caching functions
//
function preFetch(i) {
   if (isImage(i) && !Images[i].status) {
      debug()
      Images[i].status=2
      Images[i].image=new Image()
      Images[i].image.onload=function() { Images[i].status=1; cacheImage(i) }
      Images[i].image.onabort=function() { Images[i].status=0 }
      Images[i].image.onerror=function() { Images[i].status=3; postFetch() }
      Images[i].image.src=form.pictures.options[i].value.split(';')[0]
   }
}

function flushCache(i) {
   memory=0
   if (options&PRECACHE) toggleOption(PRECACHE)
   while (cache.length>10) {
      var p=cache.shift()
      if (i!=p && Images[p].status==1) {
         debug('Flushing image '+p+' from cache')
         Images[p].image=0
         Images[p].status=0
         Thumbs[p].image=0
      }
   }
}

function cacheImage(i) {
   // Track browser cache memory usage
   if (Images[i].image.fileSize) memory+=Images[i].image.fileSize*1
   else memory+=Math.round(Images[i].image.width*Images[i].image.height/2)

   // Clear memory cache if needed
   if (memory>16777216) flushCache(i)

   postFetch()
}

function postFetch() {
   debug()
   // Always pre-cache next image if not loaded
   if (lookahead>=0 && isImage(lookahead) && !Images[lookahead].status) return preFetch(lookahead)
   // Only pre-cache first 16 MB of images
   if (options&PRECACHE && memory<16777216) for (var i=(pic+1)%pics;i!=pic;i=(i+1)%pics)
      if (isImage(i) && !Images[i].status)
         // Use window.setTimeout to prevent stack overflow
         return window.setTimeout('preFetch('+i+')',50); 
}

function thumbFile(i) {
   var thumb=form.pictures.options[i].value.split(';')[0]
   var path=thumb.split('/')
   var l=path.length
   path[l]=path[l-1]; path[l-1]=getCookie('thumbdir')
   return path.join('/')
}

function fetchThumb(i) {
   if (isImage(i) && !Thumbs[i].status) {
      debug(thumbFile(i))
      Thumbs[i].status=2
      Thumbs[i].image=new Image()
      Thumbs[i].image.onload=function() { Thumbs[i].status=1 }
      Thumbs[i].image.onabort=function() { Thumbs[i].status=0 }
      Thumbs[i].image.onerror=function() { Thumbs[i].status=3 }
      Thumbs[i].image.src=thumbFile(i)
   }
}

function gofullScreen() {
   if (!(options&FULLSCREEN)) toggleOption(FULLSCREEN)
   if (document.all) {
      // Stop slide show
      window.clearTimeout(timer)
      savePic()
      window.open(document.URL,'JSviewer','fullscreen=1,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0')
   } else window.resizeTo(screen.availWidth,screen.availHeight); window.moveTo(0,0)
}

function exitfullScreen() {
   if (options&FULLSCREEN) toggleOption(FULLSCREEN)
   if (getCookie('slideshow')=='Stop' && window.opener && window.opener.toggleVisibility) {
      window.opener.toggleVisibility()
      window.opener.nextSlide()
   }
   if (parent) parent.window.close(); else window.close()
}

function maxSize() {
   var x,y,z
   x=(width-leftOffset-rightOffset)/Images[pic].image.width
   y=(height-topOffset-bottomOffset-captionOffset)/Images[pic].image.height
   // Scale using smaller zoom value
   z=(x<y?x:y)
   // Don't enlarge small pictures unless max size is on
   if (!(options&MAXSIZE) && z>1) z=1
   Images[pic].zoom=z
   debug('zoom='+z)
}

function IEtransition(d) {
   var trans=getCookie('transitiontype')
   d='duration='+d
   if (trans===undefined) switch (Math.floor(Math.random()*17)) {
      case 0: trans='Barn('+d+',motion='+randomPick('in','out')+',orientation=',randomPick('horizontal','vertical')+')'
              break;
      case 1: trans='Blinds('+d+',bands='+randomPick(2,4,6,8)+',direction='+randomPick('up','down','right','left')+')'
              break;
      case 2: trans='CheckerBoard('+d+',squaresX='+randomPick(2,4,8,12)+',squaresY='+randomPick(2,4,8,12)+',direction='+randomPick('up','down','right','left')+')'
              break;
      case 3: trans='Fade('+d+',overlap='+randomPick(0.25,0.5,0.75,1)+')'
              break;
      case 4: trans='GradientWipe('+d+',gradientSize='+randomPick(0,0.1,0.3,0.5,0.7,0.9,1)+',wipeStyle='+randomPick(0,1)+',motion='+randomPick('forward','reverse')+')'
              break;
      case 5: trans='Inset('+d+')'
              break;
      case 6: trans='Iris('+d+',irisStyle='+randomPick('DIAMOND','CIRCLE','CROSS','PLUS','SQUARE','STAR')+',motion='+randomPick('in','out')+')'
              break;
      case 7: trans='Pixelate('+d+',maxSquare='+randomPick(5,10,20,30,40,50)+')'
              break;
      case 8: trans='RadialWipe('+d+',wipeStyle='+randomPick('CLOCK','WEDGE','RADIAL')+')'
              break;
      case 9: trans='RandomBars('+d+',orientation='+randomPick('horizontal','vertical')+')'
              break;
      case 10: trans='RandomDissolve('+d+')'
              break;
      case 11: trans='Slide('+d+',pushStyle='+randomPick('HIDE','PUSH','SWAP')+',bands='+randomPick(1,2,3,4,5,6,7)+')'
              break;
      case 12: trans='Spiral('+d+',gridSizeX='+randomPick(8,16,32,64)+',gridSizeY='+randomPick(8,16,32,64)+')'
              break;
      case 13: trans='Stretch('+d+',stretchStyle='+randomPick('HIDE','PUSH','SPIN')+')'
              break;
      case 14: trans='Strips('+d+',motion='+randomPick('leftdown','leftup','rightdown','rightup')+')'
              break;
      case 15: trans='Wheel('+d+',spokes='+randomPick(2,4,10,16,20)+')'
              break;
      case 16: trans='Zigzag('+d+',gridSizeX='+randomPick(8,16,32,64)+',gridSizeY='+randomPick(8,16,32,64)+')'
              break;
   }
   document.body.style.filter='progid:DXImageTransform.Microsoft.'+trans
   if (navigator.appVersion.indexOf('MSIE 5.0')!=-1) document.body.style.filter='revealTrans('+d+',transition='+Math.floor(Math.random()*23)+')'
   document.body.filters[0].Apply()
}

function renderImage() {
   var option=form.pictures.options[pic]
   var comment=option.text
   while (comment.indexOf("'")!=-1) comment=comment.replace("'","`")
   W=Math.floor(Images[pic].image.width*Images[pic].zoom)
   H=Math.floor(Images[pic].image.height*Images[pic].zoom)
   if (W>width-leftOffset-rightOffset) W=width-leftOffset-rightOffset
   if (H>height-topOffset-bottomOffset-captionOffset) H=height-topOffset-bottomOffset-captionOffset
   if (Images[pic].top>Math.floor(Images[pic].image.height-H/Images[pic].zoom))
      Images[pic].top=Math.floor(Images[pic].image.height-H/Images[pic].zoom)
   if (Images[pic].left>Math.floor(Images[pic].image.width-W/Images[pic].zoom))
      Images[pic].left=Math.floor(Images[pic].image.width-W/Images[pic].zoom)
   if (Images[pic].top<0) Images[pic].top=0
   if (Images[pic].left<0) Images[pic].left=0
   var x=Images[pic].left
   var y=Images[pic].top
   var z=Images[pic].zoom
   var t=Math.floor(y*z)
   var r=Math.floor(x*z+W)
   var b=Math.floor(y*z+H)
   var l=Math.floor(x*z)
   X=Math.floor((width-leftOffset-rightOffset-W)/2)-l+leftOffset
   Y=Math.floor((height-topOffset-bottomOffset-captionOffset-H)/2)-t+topOffset
   output('picture','<img border=0 src="'+option.value.split(';')[0]+'" alt=\''+comment+'\' width='+Math.floor(Images[pic].image.width*z)+' height='+Math.floor(Images[pic].image.height*z)+' '+(document.all?options&ZOOM?'onmousedown=startDrag() onmousemove=drag() onmouseup=stopDrag() onmouseout=stopDrag()':'onclick=nextImage()':'')+'>')
   if (Y+t<topOffset) Y=topOffset-t
   if (X+l<leftOffset) X=leftOffset-l
   setClip('picture',X,Y,t,r,b,l)
   if (captionOffset) { center('caption',Y+b+12); setVisibility('caption',1) }
   window.status=option.text
}

function drawScreen() {
   var comment=form.pictures.options[pic].value.split(';')[1]
   setVisibility('caption',0)
   if (comment && options&CAPTIONS) {
      output('hiddencaption',font(comment))
      output('caption',font(comment))
      if (divWidth('hiddencaption')>width-leftOffset-rightOffset-10)
         setWidth('caption',width-leftOffset-rightOffset-10)
      else
         setWidth('caption',divWidth('hiddencaption'))
      captionOffset=divHeight('caption')+24
   } else captionOffset=0
   if (isImage(pic)) {
      if (Images[pic].status==3) {
         notify('Unable to load '+Images[pic].image.src)
      } else if (Images[pic].status==1) {
         if (!Images[pic].zoom || options&MAXSIZE) maxSize()
         renderImage()
      }
   } else {
      var url=form.pictures.options[pic].value.split(';')[0]
      W=Math.floor((width-leftOffset-rightOffset)*0.90)
      H=height-topOffset-bottomOffset-captionOffset
      X=Math.floor((width-leftOffset-rightOffset-W)/2)+leftOffset; Y=topOffset
      setClip('picture',X,Y,0,W,H,0)
      // Display web page instead of image
      if (navigator.appName=='Netscape' && parseInt(navigator.appVersion)==4)
         notify('Unable to display '+url+' in this browser')
      else
         output('picture','<iframe src='+url+' width='+W+' height='+H+' scrolling=auto></iframe>')
      if (captionOffset) { center('caption',Y+H+12); setVisibility('caption',1) }
   }
}

function displayImage(i) {
   // Turn off scroll bars in IE
   if (document.all) document.body.scroll='no'

   // Make sure image is cached before displaying it
   if (isImage(i) && !Images[i].status) {
      preFetch(i)
      setCursor('Wait')
   }
   if (Images[i].status==2) return recheck=window.setTimeout('displayImage('+i+')',125)
   setCursor('Default')

   // Setup IE transition
   if (document.all && document.body.filters && options&EFFECTS) IEtransition(getCookie('timer')/5000)

   // Track current picture on screen menu and in global variable
   pic=form.pictures.selectedIndex=i
   cache.push(pic); debug(form.pictures.options[pic].value.split(';')[0])

   // Pre-cache next image if current image is cached
   if (Images[pic].status==1 && lookahead>=0) preFetch(lookahead)

   // Queue up next image for slide show
   if (getCookie('slideshow')=='Stop') {
      window.clearTimeout(timer)
      timer=window.setTimeout('nextSlide()',getCookie('timer'))
   }

   // Render images on screen
   drawScreen()
   displayThumbs()

   // Play IE transition
   if (document.all && document.body.filters && options&EFFECTS) document.body.filters[0].Play()
}

function scaleImage(Image,file,size,buffer,border,alt) {
   var z=(Image.image.width>Image.image.height?Image.image.width:Image.image.height)/size
   var x=Math.round(Image.image.width/z)
   var y=Math.round(Image.image.height/z)
   return '<img border='+border+' hspace='+buffer+' vspace='+buffer+' src="'+file+'" width='+x+' height='+y+' alt=\''+alt+'\'>'
}

function displayThumbs() {
   if (!(options&THUMBS)) return
   if (pics) {
      var THUMBSIZE=Math.round(getCookie('thumbsize')*fontsize/12)
      var bufspace=Math.round(7.49*fontsize/12)
      var border=Math.round(3.49*fontsize/12)
      var down=Math.floor((height-topOffset)/(THUMBSIZE+2*(bufspace+border)))
      if (down>pics) down=pics
      var out='<table width='+(THUMBSIZE+2*(bufspace+border))+'><tr><td align=center>'
      var offset,p
      for (offset=-1;offset>-down;offset--) {
         p=History[(History.length+index-offset)%History.length]
         if (p===undefined || p<0) break
      }
      for (var i=-down;i<0;i++) {
         var img,action=''
         if (options&RANDOM && down<pics) {
            p=(History.length+index-offset+i)%History.length
            action='window.index='+p+'; '
            p=History[p]
         } else p=(pics+pic+i+down-pic%down)%pics
         if (p===undefined || p<0) continue
         var option=form.pictures.options[p]
         var thumb=option.value.split(';')[0]
         var comment=option.text
         while (comment.indexOf("'")!=-1) comment=comment.replace("'","`")
         if (!Thumbs[p].status) fetchThumb(p)
         if (Thumbs[p].status==2) return rethumb=window.setTimeout('displayThumbs()',125)
         if (isImage(p) && (thumb.indexOf('http://')==0 || Thumbs[p].status==3)) {
            // Create psuedo thumbnails
            if (Images[p].status==1) {
               img=scaleImage(Images[p],thumb,THUMBSIZE,bufspace,p==pic?border:0,comment)
            } else if (!Images[p].status) {
               preFetch(p)
               return rethumb=window.setTimeout('displayThumbs()',125)
            } else img=small(comment?comment:path[p])
         } else if (isImage(p) && Images[p].status!=3 && Thumbs[p].status==1) {
            img=scaleImage(Thumbs[p],thumbFile(p),THUMBSIZE,bufspace,p==pic?border:0,comment)
         } else img=small(comment?comment:thumb)
         out+=link(action+'window.displayImage('+p+')','',img)+'<br>'
      }
      out+='</td></tr></table>'
      output('thumbnails',out)
      setClip('thumbnails',0,Math.round((height-divHeight('thumbnails'))/2),0,(THUMBSIZE+2*(bufspace+border)),(THUMBSIZE+2*(bufspace+border))*down,0)
   }
}

//
// Image navigation
//
function firstImage() { displayImage(save(0)) }

function previousImage() {
   var image
   if (options&RANDOM) {
      index=(index+History.length-1)%History.length
      if (History[index]>=0) {
         image=History[index]
      } else {
         image=pick(pic,pics)
         History[index]=image
         History[(index+History.length-1)%History.length]=-1
      }
   } else image=(pic+pics-1)%pics
   displayImage(image)
}

function nextImage() {
   var image
   if (options&RANDOM) {
      index=(index+1)%History.length
      if (History[index]>=0) {
         image=History[index]
      } else {
         image=(lookahead<0?pick(pic,pics):lookahead)
         lookahead=pick(image,pics)
         History[index]=image
         History[(index+1)%History.length]=-1
      }
   } else {
      image=(pic+1)%pics
      lookahead=(image+1)%pics
   }
   displayImage(image)
}

function lastImage() { displayImage(save(pics-1)) }

//
// Slideshow functions
//
function nextSlide() { if (getCookie('slideshow')=='Stop') nextImage(); else form.slider.value='Start' }

function slideshow() {
   if (form.slider.value=='Start') {
      form.slider.value='Stop'
      setCookie('slideshow','Stop')
      nextSlide()
   } else {
      window.clearTimeout(recheck)
      window.clearTimeout(rethumb)
      window.clearTimeout(timer)
      form.slider.value='Start'
      setCookie('slideshow','Start')
   }
}

function faster() {
   if (getCookie('timer')>125) {
      setCookie('timer',Math.round(getCookie('timer')/2))
      if (getCookie('slideshow')=='Stop') {
         window.clearTimeout(timer)
         nextSlide()
      }
   } else alert("I can't push her any faster captain!")
}

function slower() { setCookie('timer',getCookie('timer')*2) }

//
// Toggle functions
//
function toggleVisibility() {
   var a=divHeight('navbar')
   var b=divHeight('advbar')
   var c=divHeight('colorbar')
   topOffset=bottomOffset=0
   if (options&CONTROLS) {
      bottomOffset=options&ADVANCED?(spectrum?a+b+c:a+b):a
      if (options&CONTROLTOP) { topOffset=bottomOffset; bottomOffset=0 }
   }
   leftOffset=options&THUMBS?Math.round((getCookie('thumbsize')+20)*fontsize/12):0
   rightOffset=options&HELP?Math.round(divWidth('helper')+20+10*fontsize/12):0
   abscenter('advbar',options&CONTROLTOP?a-5:height-a-b)
   setVisibility('advbar',options&CONTROLS && options&ADVANCED)
   abscenter('colorbar',options&CONTROLTOP?a+b-15:height-a-c-5)
   setVisibility('colorbar',options&CONTROLS && options&ADVANCED && spectrum)
   abscenter('navbar',options&CONTROLTOP?5:height-a+5)
   setVisibility('navbar',options&CONTROLS)
   setVisibility('noframes',options&CONTROLS && outerframe && !(options&FULLSCREEN))
   setVisibility('closer',options&FULLSCREEN)
   displayThumbs()
   setVisibility('thumbnails',options&THUMBS)
   setXY('helper',width-divWidth('helper')-20,Math.round((height-divHeight('helper')-topOffset)/2)+topOffset)
   setVisibility('helper',options&HELP)
   if (Images[pic].status==1 && Images[pic].zoom<1 || options&MAXSIZE) maxSize()
   drawScreen()
}

function toggleOption(opt) {
   options^=opt
   setCookie('options',options)
   for (var f=0;document.forms[f];f++) for (var e=0;document.forms[f].elements[e];e++)
      if (document.forms[f].elements[e].name=='opt'+opt && document.forms[f].elements[e].type=='checkbox')
         document.forms[f].elements[e].checked=(options&opt)
   if (opt&DEBUGMODE) { if (options&DEBUGMODE) startDebug(); else stopDebug() }
   if (opt&PRECACHE && options&PRECACHE) preFetch(pic)
   if (opt&RANDOM && options&RANDOM) lookahead=-1
   if (opt&(DEBUGMODE|EFFECTS|PRECACHE|RANDOM)) return
   toggleVisibility()
}

//
// Background color functions
//
function color(a,b,c) {
   if (a<b) return Math.round(a+(b-a)*c/GRADIENT)
   return Math.round(b+(a-b)*(GRADIENT-c)/GRADIENT)
}

function hex(n) {
   var digits='0123456789ABCDEF'
   return digits.charAt(Math.floor(n/16))+digits.charAt(n%16)
}

function getColor(n,c) {
   var r,g,b
   var i=Math.floor(n/GRADIENT)
   n%=GRADIENT
   r=color(R[i],R[i+1],n)
   g=color(G[i],G[i+1],n)
   b=color(B[i],B[i+1],n)
   if (c && Math.abs(128-r)<16 && Math.abs(128-g)<16 && Math.abs(128-b)<16) return "#000000"
   if (c) return '#'+hex(255-r)+hex(255-g)+hex(255-b)
   return '#'+hex(r)+hex(g)+hex(b)
}

//
// Drag & drop functions
//
function getx(event) { return document.all?window.event.clientX:event.pageX }

function gety(event) { return document.all?window.event.clientY:event.pageY }

function setColors() {
   for (var f=0;document.forms[f];f++) for (var e=0;document.forms[f].elements[e];e++)
      if (document.forms[f].elements[e].style) {
         document.forms[f].elements[e].style.color=document.fgColor
         document.forms[f].elements[e].style.backgroundColor=document.bgColor
      }
}

function colorClick(event) {
   var x=getx(event)
   var y=gety(event)
   var l=getX(getLayer('colorbar'))
   var t=getY(getLayer('colorbar'))
   var XC=x-Math.round((width-(R.length-1)*GRADIENT)/2)
   document.bgColor=getColor(XC,0)
   document.fgColor=getColor(XC,1)
   setColors()
}

function startDrag(event) {
   var x=getx(event)
   var y=gety(event)
   dragging=1
   dragX=x+Math.round(Images[pic].left*Images[pic].zoom)-leftOffset
   dragY=y+Math.round(Images[pic].top*Images[pic].zoom)-topOffset
   if (document.all) {
      if (window.event.button==1) dragZ=0.2
      if (window.event.button==2) dragZ=-0.2
   } else {
      if (event.which==1) dragZ=0.2
      if (event.which==3) dragZ=-0.2
   }
   if (document.all) window.event.cancelBubble=true
   return false
}

function drag(event) {
   if (dragging) {
      var x=getx(event)
      var y=gety(event)
      var l=Images[pic].left
      var t=Images[pic].top
      if (dragX!=x+Math.round(Images[pic].left*Images[pic].zoom-leftOffset) &&
          dragY!=y+Math.round(Images[pic].top*Images[pic].zoom)-topOffset) dragZ=0
      Images[pic].left+=Math.round((dragX+X-x)/Images[pic].zoom)
      Images[pic].top+=Math.round((dragY+Y-y)/Images[pic].zoom)
      if (Images[pic].top>(Images[pic].image.height-H/Images[pic].zoom))
         Images[pic].top=Math.round(Images[pic].image.height-H/Images[pic].zoom)
      if (Images[pic].left>(Images[pic].image.width-W/Images[pic].zoom))
         Images[pic].left=Math.round(Images[pic].image.width-W/Images[pic].zoom)
      if (Images[pic].top<0) Images[pic].top=0
      if (Images[pic].left<0) Images[pic].left=0
      if (Images[pic].left!=l || Images[pic].top!=t) renderImage()
      if (document.all) window.event.cancelBubble=true
      return false
   }
   if (document.routeEvent) document.routeEvent(event)
   return true
}

function stopDrag(event) {
   var x=getx(event)
   var y=gety(event)
   if (dragZ!=0) {
      dragZ+=Images[pic].zoom
      if (dragZ<0.1 || dragZ>5.0) {
         maxSize()
         Images[pic].top=0
         Images[pic].left=0
      } else {
         Images[pic].top=Math.round((y-Y)/Images[pic].zoom-(y-Y-Images[pic].top*Images[pic].zoom)/dragZ)
         Images[pic].left=Math.round((x-X)/Images[pic].zoom-(x-X-Images[pic].left*Images[pic].zoom)/dragZ)
         Images[pic].zoom=dragZ
      }
      renderImage()
   }
   dragging=dragZ=0
   if (document.all) window.event.cancelBubble=true
   return false
}

//
// Mozilla wrappers for drag & drop
//
function mozimageClick(event) {
   var x=getx(event)
   var y=gety(event)
   var l=X+Math.floor(Images[pic].left*Images[pic].zoom)
   var t=Y+Math.floor(Images[pic].top*Images[pic].zoom)
   return x>l && x<l+W && y>t && y<t+H
}

function mozcolorClick(event) {
   var x=getx(event)
   var y=gety(event)
   var l=getX(getLayer('colorbar'))
   var t=getY(getLayer('colorbar'))
   return y>t && y<=t+divHeight('colorbar') && x>l && x<=l+divWidth('colorbar')
}

function mozstartDrag(event) {
   if (mozcolorClick(event) && options&ADVANCED && spectrum) {
      colorClick(event)
      return false
   }
   if (mozimageClick(event) && isImage(pic) && Images[pic].status==1) {
      if (!(options&ZOOM)) return startDrag(event)
      nextImage()
      return false
   }
   document.routeEvent(event)
   return true
}

function mozdrag(event) {
   if (mozimageClick(event) && isImage(pic) && Images[pic].status==1) return drag(event)
   dragging=0
   document.routeEvent(event)
   return true
}

function mozstopDrag(event) {
   if (mozimageClick(event) && isImage(pic) && Images[pic].status==1) return stopDrag(event)
   dragging=dragZ=0
   document.routeEvent(event)
   return true
}

//
// JSviewer main program
//
function init() {
   // Set JSviewer default cookies
   setDefaults()

   // Start debugger if necessary
   options=getCookie('options')
   if (options&DEBUGMODE) startDebug()
   debug('Initializing JSviewer')

   // Get screen dimensions
   if (document.all) {
      document.body.scroll='no'
      width=document.body.clientWidth
      height=document.body.clientHeight
   } else {
      width=window.innerWidth
      height=window.innerHeight
   } 
   debug('width='+width+' height='+height)
   dragZ=topOffset=bottomOffset=leftOffset=rightOffset=captionOffset=0

   // Calculate font size
   fontsize=Math.floor((width<height?width:height)/42)
   if (fontsize>12) fontsize=12
   fontstyle=' style=font-size:'+fontsize+'pt '

   // Inherit colors from opening window
   if (options&FULLSCREEN && parent.opener && parent.opener.gofullScreen)
      inheritColors(parent.opener.document)
   if (parent && parent.frames[0]) outerframe=parent.frames[0].document

   // Initialize picture layer
   notify('Loading images...')
   setVisibility('picture',1)

   // Initialize navigation controls
   var datasrc=getDoc('data')
   datasrc=datasrc.forms[0].pictures
   if (datasrc) {
      var help=button('Help','toggleOption(HELP)',stat('Display JSviewer help'))
      var thumbnails=link('toggleOption(THUMBS)',vstat('options&THUMBS?\'Hide thumbmail images\':\'Show thumbnail images\''),'thumbs')
      var first=button(' |&lt; ','firstImage()',stat('First image'))
      var previous=button(' &lt; ','previousImage()',stat('Previous image'))
      var menu='<select name=pictures onchange=displayImage(save(this.selectedIndex)) '+stat('Select an image to display')+fontstyle+'> '
      
      for (var i=0;i<datasrc.options.length;i++) {
         Images[i]=new JSImage()
         Thumbs[i]=new JSImage()
         menu+='<option value="'+datasrc.options[i].value+'"> '+(i+1)+'. '+datasrc.options[i].text
      }
      menu+='</select> '
      var next=button(' &gt; ','nextImage()',stat('Next image'))
      var last=button(' &gt;| ','lastImage()',stat('Last image'))
      var slider=button(getCookie('slideshow'),'slideshow()','name=slider '+vstat('getCookie(\'slideshow\')+\' slideshow\''))
      var advanced=link('toggleOption(ADVANCED)',vstat('(getCookie(\'options\')&ADVANCED?\'Hide\':\'Show\')+\' advanced options\''),'advanced')

      var speed=link('slower()',stat('Display images slower'),'-')+' speed '+
                link('faster()',stat('Display images faster'),'+')
      var fullscreen=link('gofullScreen()',stat('Maximize window size'),'full screen')
      if (options&FULLSCREEN) fullscreen=''

      switch (getCookie('controlstyle')) {
         case 'ccd': out=menu+slider
		     break;
	 case 'mer': out=fullscreen+speed+previous+menu+next+slider
                 break;
         case 'old': out=thumbnails+previous+menu+next+slider+advanced
                 break;
         case 'rkh': out=menu+first+previous+next+last+slider
                 break;
         default: out=help+previous+menu+next+slider
      }
      output('navbar','<form name=navform>'+font(out)+'</form>')
   }

   // Initialize advanced controls
   var effects=checkbox(EFFECTS,vstat('(this.checked?\'Disable\':\'Enable\')+\' image effects\''),'effects')
   var maxsize=checkbox(MAXSIZE,stat('Maximize image size on screen'),'max size')
   var random=checkbox(RANDOM,stat('Randomize images'),'random')
   var cache=checkbox(PRECACHE,stat('Pre-load images in the background'),'pre-cache')

   out=(document.all?effects:'')+maxsize+random+cache
   output('advbar','<form>'+font(out)+'</form>')

   // Initialize misc controls
   output('closer',font(link('exitfullScreen()','','X')))
   setXY('closer',width-20,0)
   output('controls',font(link('toggleOption(CONTROLS)','','.')))
   setXY('controls',width-10,height-24)
   setVisibility('controls',1)
   output('noframes',small('<a target=_top href="'+document.URL+'" onclick=savePic() style=text-decoration:none>full window</a>'))
   setXY('noframes',5,5)

   // Initialize help layer
   out='Keyboard controls<p>'
   out+='<b>a</b> - advanced options<br>'
   out+='<b>c</b> - toggle controls<br>'
   out+='<b>d</b> - toggle descriptions<br>'
   out+='<b>e</b> - toggle effects<br>'
   out+='<b>f</b> - full screen<br>'
   out+='<b>h</b> - toggle help<br>'
   out+='<b>m</b> - max image size<br>'
   out+='<b>p</b> - toggle pre-cache<br>'
   out+='<b>r</b> - toggle random<br>'
   out+='<b>s</b> - start/stop slideshow<br>'
   out+='<b>t</b> - toggle thumbnails<br>'
   out+='<b>x</b> - close window<br>'
   out+='<b>z</b> - toggle zoom<br>'
   out+='<b>^</b> - move controls<br></body>'
   out+='<b>&#150;</b> - previous image<br>'
   out+='<b>+</b> - next image<br>'
   out+='<b>&lt;</b> - slower<br>'
   out+='<b>&gt;</b> - faster<br></body>'
   out+='<b>?</b> - about JSviewer<br>'
   output('helper',small(out))

   // Set global to point to navform
   var doc=getDoc('navbar')
   form=doc.forms['navform']

   // Reset picture to last viewed picture
   pics=form.pictures.length
   if (!pics) return notify('No images to display')
   pic=getCookie('image'); setCookie('image',-1)
   if (pic===undefined || pic<0 || pic>=pics) pic=options&RANDOM?pick(-1,pics):0
   index=0; form.pictures.selectedIndex=pic
   if (options&RANDOM) History[index]=pic

   // Initialize lookahead
   lookahead=options&RANDOM?pick(pic,pics):(pic+1)%pics

   // Start pre-cacheing images in the background
   preFetch(pic)

   // Setup hooks to drag, drop & zoom image if enabled
   if (document.captureEvents) {
      debug('Setup Mozilla hooks')
      document.captureEvents(Event.MOUSEDOWN|Event.MOUSEMOVE|Event.MOUSEUP|Event.MOUSEOUT)
      document.onmousedown=mozstartDrag
      document.onmousemove=mozdrag
      document.onmouseup=mozstopDrag
      document.onmouseout=mozstopDrag
   }

   // Capture keystrokes
   debug('Capturing keystrokes')
   if (document.all) document.onkeypress=getKey

   // Capture resize events
   if (window.captureEvents) window.captureEvents(Event.RESIZE|Event.KEYPRESS)
   window.onresize=redraw
   window.onkeypress=getKey

   // Initialize colorbar
   if (document.body && !document.body.background) {
      var colors=new Image()
      colors.onload=function() { spectrum=1; window.setTimeout('toggleVisibility()',100) }
      colors.src='spectrum.png'
   }
   output('colorbar','<img src=spectrum.png width='+((R.length-1)*GRADIENT)+' height=5 alt="Choose a background color"'+(document.all?' onclick=colorClick()':'')+'>')
   setColors()

   // Display image and thumbnails
   toggleVisibility()
   displayImage(pic)
}

// Create layer elements
var Layers=new Array('picture','caption','thumbnails','navbar','advbar','colorbar','closer','noframes','controls','helper','hiddencaption')
for (var i=0,out='';i<Layers.length;i++) out+='<div id='+Layers[i]+' style="position:absolute; visibility:hidden"></div>'
document.writeln(out)

window.onload=init
