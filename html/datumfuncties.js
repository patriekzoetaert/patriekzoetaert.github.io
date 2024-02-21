function feestdag(datum) {
	year = datum.getFullYear();
	// make it year 2000 compliant
	
	if (year < 2000){
		if (year < 50) {	
			year = year + 2000	
		} else {	
			year = year + 1900	
		}
	};
	
	
	pasen=calcpasen(year);
	paasmaandag=datumplus(pasen, 1);
	ohhemelvaart=datumplus(pasen, 39);
	pinksteren=datumplus(ohhemelvaart, 10);
	pinksteren2=datumplus(ohhemelvaart, 11);
	aswoensdag= datumplus(pasen, - 46 + 1 / 24);
	nieuwjaar = new Date(year,1 - 1,1);
	arbeid = new Date(year,5 - 1,1);
	kerst = new Date(year,12 - 1,25);
	wapenstilstand = new Date(year,11 - 1,11);
	allerheiligen = new Date(year,11 - 1,1);
	olvhemelvaart = new Date(year,8 - 1,15);
	befeestdag = new Date(year,7 - 1,21);
	vlfeestdag =new Date(year,7 - 1,11);
	
	var fd = new Array();
	var fd_oms = new Array();
	fd[0]= nieuwjaar; fd_oms[0] = "Nieuwjaar";
	fd[1] = aswoensdag ; fd_oms[1] ="Aswoensdag";
	fd[2] = pasen ; fd_oms[2] ="Pasen";
	fd[3] = paasmaandag ; fd_oms[3] ="Paasmaandag";
	fd[4] = arbeid ; fd_oms[4] ="Feest van de arbeid";
	fd[5] = ohhemelvaart ; fd_oms[5] ="Onze Lieve Heer Hemelvaart";
	fd[6] = pinksteren ; fd_oms[6] ="Pinksteren";
	fd[7] = pinksteren2 ; fd_oms[7] ="2e Pinksteren";
	fd[8] = vlfeestdag ; fd_oms[8] ="Feest Vlaamse Gemeenschap";
	fd[9] = befeestdag ; fd_oms[9] ="Nationale feestdag";
	fd[10]= olvhemelvaart; fd_oms[10] = "Onze Lieve Vrouw Hemelvaart";
	fd[11] = allerheiligen ; fd_oms[11] ="Allerheiligen";
	fd[12] = wapenstilstand ; fd_oms[12] ="Wapenstilstand";
	fd[13] = kerst ; fd_oms[13] ="Kerst";
	
	

	
	var x;
	fd_nm ="";
	
	for (x=0; x <= 13; x++) {
//		alert(x + fd[x] + fd_oms[x] + ' ' + datumverschil(datum , fd[x]));
		if (datumverschil(datum , fd[x]) == 0) { fd_nm = fd_nm + fd_oms[x] ; } ;	
	
		
	};
//	alert(fd_nm);
	return fd_nm;
	
}

function weekend(datum) {
	var weekend_oms='';
	
	if ( (weekdag(datum) == 'Zaterdag') || (weekdag(datum) == 'Zondag') ) {weekend_oms="Weekend" ;}
	else {weekend_oms="Weekdag";} ;
	
	
	return weekend_oms;
	
}

function winteruurdag(datum2) {
	jaar = datum2.getFullYear();
	var wuur;
	
	datum = new Date(jaar,10 - 1,31,0,0,0);
	
	dagnr = datum.getDay();
	
	if (dagnr==0) {dagnr =dagnr+ 7;};
	
	if (dagnr==7) {sub=0;}
	else {sub=dagnr;};
	
	wuur = new Date(jaar,10 - 1,31 - sub,3,0,0);	
	
//	alert(wuur);
	
	return  wuur;
	
}

function zomeruurdag(datum2) {
	jaar = datum2.getFullYear();
	var wuur;
	
	datum = new Date(jaar,3 - 1,31,0,0,0);
	
	dagnr = datum.getDay();
	
	if (dagnr==0) {dagnr =dagnr+ 7;};
	
	if (dagnr==7) {sub=0;}
	else {sub=dagnr;};
	
	wuur = new Date(jaar,3 - 1,31 - sub,3,0,0);	
	
//	alert(wuur);
	
	return wuur;
	
}


function zomerwinteruur(datum) {
	var zwoms = datumtussen(datum, zomeruurdag(datum), winteruurdag(datum) );
//	alert(zwoms);
	
	if (zwoms == 'ertussen') {zwuur='Zomeruur';} else {zwuur='Winteruur';};
//	alert(zwuur);
	return zwuur;
	
	
}








function werkdag(datum) {
	var dag='';
	
	
	
	if (feestdag(datum) == '') { if (weekend(datum)=='Weekdag') {dag= 'Werkdag';} ; }
	else {dag= 'Feestdag';};	
	
	return dag;
	
}





function mod(divisee,base) {
	// Created 1997 by Brian Risk.  http://members.aol.com/brianrisk
	//How to Use:    For example, to return the answer for mod 2 of 16, type: 
	// a = mod(16,3);
	return Math.round(divisee - (Math.floor(divisee/base)*base));
}

function weekdag(datum){

	var days = new Array("Zondag", "Maandag",  "Dinsdag",  "Woensdag",  "Donderdag",  "Vrijdag",  "Zaterdag");
	
	return days[datum.getDay()];
}



function maandnaam(datum) {
	var months = new Array(
		"Januari",
		"Februari",
		"Maart",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Augustus",
		"September",
		"Oktober",
		"November",
		"December"  );
	return months[datum.getMonth()];

}

function maandnaam_m(maand) {
	var months = new Array(
		"Januari",
		"Februari",
		"Maart",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Augustus",
		"September",
		"Oktober",
		"November",
		"December"  );
	return months[maand - 1 ];

}




function maandaantaldagen(maand,jaar){
	mm = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
//	alert(maand + ' ' + jaar +' ' +mm);
	if ( jaar / 4 - Math.floor(jaar/4) == 0) { mm[1] = mm[1] + 1;};
	
	ntld= mm[maand - 1];
//	alert(ntld);
	return ntld;

	
	
}



function maandaantalwerkdagen(maand,jaar) {
	var x;
	var mwd=0;
	var y = maandaantaldagen(maand,jaar); 
	for (x=1; x <= y; x++) { 
		datum= new Date(jaar,maand - 1 , x,0,0,0);
		if (weekend(datum)=='Weekdag') {mwd= mwd + 1;} ;
	};	
//	alert(mwd);
	return mwd;
}

function maandaantalzaterdagen(maand,jaar) {
	var x;
	var mwd=0;
	var y = maandaantaldagen(maand,jaar); 
	for (x=1; x <= y; x++) { 
		datum= new Date(jaar,maand - 1 , x,0,0,0);
		if (weekdag(datum) == 'Zaterdag')  {mwd= mwd + 1;} ;
	};	
//	alert(mwd);
	return mwd;
}

function maandaantalrszdagen(maand,jaar) {
	var x;
	var mwd=0;
	var y = maandaantaldagen(maand,jaar); 
	for (x=1; x <= y; x++) { 
		datum= new Date(jaar,maand - 1 , x,0,0,0);
		if (weekdag(datum) == 'Zaterdag')  {mwd= mwd + 1;} ;
		if (weekend(datum)=='Weekdag') {mwd= mwd + 1;} ;
	};	
//	alert(mwd);
	return mwd;
}





function schrikkeljaar(datum){
	year = datum.getFullYear();
	
	if ( year / 4 - Math.floor(year/4) == 0)
		{sj=year + ' is een schrikkeljaar';}
	else  
		{sj=year + ' is geen schrikkeljaar';};
		
	return sj;	

}

function schrikkeljaar_yn(datum){
	year = datum.getFullYear();
	
	if ( year / 4 - Math.floor(year/4) == 0)
		{sjl='ja';}
	else  
		{sjl='nee';};
		
	return sjl;	

}

function datumplus(datum,dagen) {
	var one_day=1000*60*60*24;
	var nu = new Date(datum.getFullYear(),datum.getMonth(),datum.getDate(),0,0,0);
	var nutijd = nu.getTime();
	
	return new Date(nutijd + (dagen * one_day));
	
	
}

function datumverschil(datum1,datum2) {
	var one_day=1000*60*60*24;
	var d1 = new Date(datum1.getFullYear(),datum1.getMonth(),datum1.getDate(),0,0,0);
	var d2 = new Date(datum2.getFullYear(),datum2.getMonth(),datum2.getDate(),0,0,0);
		
	return Math.round((d1.getTime() - d2.getTime() ) / one_day);
}

function datumtussen(datum1,datum2,datum3) {
	var d1 = new Date(datum1.getFullYear(),datum1.getMonth(),datum1.getDate(),0,0,0);
	var d2 = new Date(datum2.getFullYear(),datum2.getMonth(),datum2.getDate(),0,0,0);
	var d3 = new Date(datum3.getFullYear(),datum3.getMonth(),datum3.getDate(),0,0,0);
	
	if (datumverschil(d1,d2) < 0) { dtoms='ervoor';}
	else
	{if (datumverschil(d1,d3) > 0) { dtoms='erna';} else {dtoms='ertussen';} ;};
	
//	alert(dtoms);
	return dtoms;
	
	
}

function weeknr(datum2){
	datum = new Date(datum2.getFullYear(),datum2.getMonth(),datum2.getDate(),0,0,0);
	year = datum.getFullYear();
	var eenuur=1 *60*60*1000;
	var one_day=1000*60*60*24;
	nieuwjaar = new Date(year,1 - 1,1,0,0,0);
	nieuwjaar4 = new Date(year,1 - 1,4,0,0,0);
	dagnr = datum.getDay() /*- 1*/;
	dagnr4 = nieuwjaar4.getDay() /*- 1*/;
	
	if (dagnr==0) {dagnr =dagnr+ 7;};
	if (dagnr4==0) {dagnr4 = dagnr4 + 7;};
	
	
	dagjaarnr=datumverschil(datum,nieuwjaar) + 1;
	
	
	weeknummer = Math.round((dagjaarnr  + dagnr4 - dagnr ) / 7);

	return weeknummer;
}
 
function dagjaarnummer(datum2) {
	datum = new Date(datum2.getFullYear(),datum2.getMonth(),datum2.getDate(),0,0,0);
//	alert(datum);
	year = datum.getFullYear();
	var eenuur=1 *60*60*1000;
	var one_day=1000*60*60*24;
	nieuwjaar = new Date(year,1 - 1,1,0,0,0);
	
//	dagjaarnr=Math.round((datum.getTime() - nieuwjaar.getTime() ) / one_day) + 1;
	dagjaarnr=datumverschil(datum,nieuwjaar) + 1;
	
//	alert(dagjaarnr);
	return dagjaarnr;	

}

function dagentoteindjaar(datum) {
	aantdagen = 0;
	
	if (schrikkeljaar_yn(datum) == 'ja') { aantdagen=1;};
	
	return (365 + aantdagen - dagjaarnummer(datum));
	
} 
 
 

function calcpasen(paasjaar) {

  g = mod(paasjaar,19);
  c = Math.floor(paasjaar/100);
  h = mod( (c - Math.floor(c/4) - Math.floor((8*c+13)/25) + 19*g + 15), 30);
  
  i = h - Math.floor(h/28)* (1 - Math.floor(h/28) * Math.floor(29/(h + 1) )* Math.floor((21 - g)/11) );
  j = mod((paasjaar + Math.floor(paasjaar/4) + i + 2 - c +Math.floor( c/4)), 7);
  l = i - j;
  eastermonth=3 + Math.floor((l + 40)/44);
  easterday= l + 28 - 31*Math.floor((eastermonth/4));

  
  paasdag = new Date(paasjaar,eastermonth - 1,easterday);
    
  return paasdag;

}

function dagkort(datum) {
	dag = datum.getDate();
	year = datum.getFullYear();
	maand = datum.getMonth() + 1;
	
	if (dag < 10) { dag = '0' + dag;};
	
	if (maand < 10) { maand = '0' + maand;};
	
	return dag + "/" + maand + "/" + year;


}

function tijdkort(datum) {


	uur = datum.getHours();
	min = datum.getMinutes();
	sek = datum.getSeconds();
	
	if (uur < 10) { uur = '0' + uur;};
	if (min < 10) { min = '0' + min;};
	if (sek < 10) { sek = '0' + sek;};
	
	return uur + ":" + min + ":" + sek;

}