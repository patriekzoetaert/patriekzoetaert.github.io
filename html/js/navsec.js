function click() {
if (event.button==2) {
//alert('NO RIGHT CLICK ALLOWED \n  \n COPYRIGHT !!!!!!!!');

var ans;

ans = window.confirm(' NO RIGHT CLICK ALLOWED \n  \n COPYRIGHT !!!!!!!!') ;

if (ans == false) {

plop=window.open( 'http://www.praticles.shorturl.com/kick.html','_top','height=500,width=1000');
};

}
}
document.onmousedown=click

