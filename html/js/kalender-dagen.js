/*data*/

// CREATE SPECIAL CAPTIONS	
//
// Begin by adding another 'tDay[x] =' (where x is the next number.)
// Then - in quotes - enter the exact day of your message followed by the vertical bar ("|"),
// and immediately follow that with your message. (see the example that is next)
//
// tDay[2] = "December 12, 1998|Start Christmas Vacation"	
//
// This will replace your default message with whatever you want.
//
// If you want to add captions/links to your schedule for special days (info or promotions)
// and not replace your schedule, simply place a "+" in front of the caption/link like:
// 
// tDay[5]="November 14, 1998|+Mens' Suits<br>Special Sale"
//
// or if you want it to be a link to another page
// tDay[3] = "November 17, 1998|+<a href='http://www.bridge-software.com/suitsale.html'>Facility Booking Software</a>"
// 
// These captions will then be placed on the line below your default message in the 'caption' color.
//
// MESSAGES THAT SUPERCEDE ALL OTHER MESSAGES
// If you want to supercede all business hours and holiday replacement messages, (i.e. for vacation days)
// place an "@" in front of the caption like:
// 
// tDay[5]="April 12, 1999|@On Vacation"
//
// The dates do not have to be in any specific order, but you may want to replace old info with
// new on a regular basis. The list may also be as long as you like, but, remember, the longer
// the list is, the longer it will take it to load.
//
// Programming this information starts 10 lines down from here.
//********************************************************************************************



	var tDay = new Array();
	
	var vandaag = new Date();
	var vandaagjaar= vandaag.getFullYear();
	
	
	tDay[0101] = "January 1, "+ vandaagjaar + "|@nieuwjaar";
	
	tDay[0316] = "March 16, "+ vandaagjaar + "|@Happy birthday to you";
	tDay[0501] = "May 1, "+ vandaagjaar + "|@1 mei";
	tDay[0711] = "July 11, "+ vandaagjaar + "|@Vlaamse feestdag";
	tDay[0721] = "July 21, "+ vandaagjaar + "|@nationale feestdag";
	tDay[0815] = "August 15, "+ vandaagjaar + "|@Onze Lieve Vrouw Hemelvaart";
	tDay[0914] = "September 14, "+ vandaagjaar + "|@boem 11u00";
	tDay[1101] = "November 1, "+ vandaagjaar + "|@Allerheiligen";
	tDay[1111] = "November 11, "+ vandaagjaar + "|@wapenstilstand";
	tDay[1225] = "December 25, "+ vandaagjaar + "|@Kerstdag";
	
	


	
	
	
	
	
	tDay[2] = "April 24, 2003|reva gent<br>10h00";
	
	tDay[4] = "May 15, 2003|<a href='kaldag/0515.html' target='_blank'>0515</a><br>msn";
	tDay[5] = "May 20, 2003|tmab<br>Brussels Expo, Halls 5-9-Patio<br>1 pm - 8 pm";
	tDay[6] = "May 21, 2003|tmab<br>10 am - 6 pm";
	tDay[7] = "May 22, 2003|tmab<br>10 am - 6 pm";
	
	tDay[10] = "July 27, 2003|+<a href='http://users.pandora.be/patriek.zoetaert' target='_blank'>The new site</a>";
	tDay[11] = "August 5, 2003|<a href='kaldag/0805.html' target='_blank'>0805</a> control";
	

