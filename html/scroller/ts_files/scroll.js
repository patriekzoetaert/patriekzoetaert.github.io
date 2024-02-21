// Title: Tigra Scroller
// Description: See the demo at url
// URL: http://www.softcomplex.com/products/tigra_scroller/
// Version: 1.1
// Date: 01-20-2003 (mm-dd-yyyy)
// Feedback: feedback@softcomplex.com (specify product title in the subject)
// Note: Permission given to use this script in ANY kind of applications if
//    header lines are left unchanged.
// About us: Our company provides offshore IT consulting services.
//     Contact us at sales@softcomplex.com if you have any programming task you
//     want to be handled by professionals.

// set correct path to Tigra Scroller files
var Tscroll_path_to_files = 'ts_files/'

// please, don't change anything below this line
function Tscroll_init (id) {
	document.write ('<iframe id="Tscr' + id + '" scrolling=no frameborder=no src="' + Tscroll_path_to_files + 'scroll.html?' + id + '"></iframe>');
}