var 
LOOK = {
	// scroller box size: [width, height]
	'size' : [700, 620],
	// for on-demand mode: path to image for scrolling items backward 
	// if relative than to Tscroll_path_to_files
	'up' : 'alf.gif', 
	// for on-demand mode: path to image for scrolling items forward 
	// if relative than to Tscroll_path_to_files
	'dn' : 'art.gif'
},

BEHAVE = {
	// if scrolling mode is auto (true / false); 
	'auto'  : false, 
	// if scrolling direction is vertical (true / false, false means horisontal)
	'vertical' : false, 
	// scrolling speed, pixels per 40 miliseconds;
	// for auto mode use negative value to reverse scrolling direction
	'speed' : 10
},
// a data to build scroll window content
ITEMS = [
	{	// file to get content for item from; if is set 'content' property doesn't matter
		// only body of HTML document is taken to become scroller item content
		// note: external files require time for loading 
		// it is RECOMMENDED to use content property to speed loading up
		// please, DON'T forget to set ALL IMAGE SIZES 
		// in either external file or in 'content' string for scroller script 
		// to be able to estimate item sizes
		'file' : '',
		// string to be displayed as item content, 
		// is RECOMMENDED to be used as an alternative to 'file' property
		'content' : '<b><center>Patrieks Foto Scroller </center></b>',
		// pause duration when item top gets top of the scroller box, seconds
		'pause_b' : 1,
		// pause duration when item bottom gets bottom of the scroller box, seconds
		'pause_a' : 0
	},
	{
		'file': '../../../images/lisa.jpg',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	{
		'file': '../../../images/caroline.jpg',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	{
		'file': '../../../images/keith.jpg',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	{
		'file': '../../../images/magali.jpg',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	
	{
		'file': '../../../images/praticles.jpg',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	
	
	{
		'file': '../../../images/hydra.jpg',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	{
		'file': '../../../images/cerberus.jpg',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	
	
	
	{
		'file': '../../../images/sphinx1.gif',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	{
		'file': '../../../images/sphinx2.gif',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	
	{
		'file': '../../../images/fisch.gif',
		'content': '',
		'pause_b': 1,
		'pause_a': 12
	},
	{
		'file': '../../../images/angel1.jpg',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	},
	{
		'file': '../../../images/angel2.jpg',
		'content': '',
		'pause_b': 1,
		'pause_a': 3
	}
]
