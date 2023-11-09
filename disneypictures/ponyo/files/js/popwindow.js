/*	popWindow.js
 *	--------------------------------------------------------------------- *
 *	@desc: pops a window with 3 variables for location, width and height.
 *	--------------------------------------------------------------------- */
 
	function getCurrentDirectory () {
		var	path_arr = document.location.href.split("/");
			path_arr.splice(path_arr.length-1,1);
		var	path_str = path_arr.join("/")+"/";
		return(path_str);
	}
	
	function popWindow(pageurl,w,h,resizeable)
	{		
		var toolbars_default 	= false;
		var scroll_default 		= false;
		var resizeable_default 	= false;
		
		var width	= w;
		var height 	= h;
		
		var leftPos	= (screen.width-width)/2;
		var topPos 	= (screen.height-height)/2;
		
		if(!resizeable) { resizeable = resizeable_default };
		DocumentWindow = window.open(pageurl,'_blank','toolbars='+toolbars_default+', scroll='+scroll_default+', resizeable='+resizeable+', left='+leftPos+', top='+topPos+', width='+width+', height='+height);
	}