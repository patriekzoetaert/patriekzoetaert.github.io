// Count Occurances of a Substring
function count(aString, aSubstring)
{
  // initialize counter and offset
  var count = 0
  var offset = 0
  var where = 0
  var tmp = ""+aString

  // search until no more found
  while ((offset < tmp.length) &&
  		 ((where = tmp.indexOf(aSubstring, offset)) >= 0))
  {
  	count++
  	offset = where+aSubstring.length
  }

  // return it	
  return count
}



function soortfile(bestand)
{
var b1=bestand.toLowerCase();
var types_video = new Array();
var types_audio = new Array();
var types_foto = new Array();

var teller;

types_video=[".wmv",".avi",".mpeg",".mpg"];
types_foto=[".gif",".jpg",".bmp",".jpeg"];
types_audio=[".mp3",".wav",".mid",".au"];

for(teller=0;teller < types_video.length; teller++)
{
	if (count(b1, types_video[teller]) >= 1) return "video";
}
for(teller=0;teller < types_audio.length; teller++)
{
	if (count(b1, types_audio[teller]) >= 1) return "audio";
}

for(teller=0;teller < types_foto.length; teller++)
{
	if (count(b1, types_foto[teller]) >= 1) return "foto";
}
	
return "";
}


function videofile(bestand)
{
if (soortfile(bestand)=="video") return true
else return false;
}



function fotofile(bestand)
{
if (soortfile(bestand)=="foto") return true
else return false;
}

function audiofile(bestand)
{
if (soortfile(bestand)=="audio") return true
else return false;
}



