var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
var aigX = 0, aigY = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj2785_onShow_activeActionGroupIndex = -1;
var obj2785_onShow_runningActionsCount = 0;
var obj2785_onShow_loopCount = 0;
var obj2785_onLoad_activeActionGroupIndex = -1;
var obj2785_onLoad_runningActionsCount = 0;
var obj2785_onLoad_loopCount = 0;
var obj2793_onShow_activeActionGroupIndex = -1;
var obj2793_onShow_runningActionsCount = 0;
var obj2793_onShow_loopCount = 0;
var obj2817_onShow_activeActionGroupIndex = -1;
var obj2817_onShow_runningActionsCount = 0;
var obj2817_onShow_loopCount = 0;
var obj2821_onTouchDown_activeActionGroupIndex = -1;
var obj2821_onTouchDown_runningActionsCount = 0;
var obj2821_onTouchDown_loopCount = 0;
var obj2880_onTouchDown_activeActionGroupIndex = -1;
var obj2880_onTouchDown_runningActionsCount = 0;
var obj2880_onTouchDown_loopCount = 0;
var obj2806_onShow_activeActionGroupIndex = -1;
var obj2806_onShow_runningActionsCount = 0;
var obj2806_onShow_loopCount = 0;
var obj2811_onShow_activeActionGroupIndex = -1;
var obj2811_onShow_runningActionsCount = 0;
var obj2811_onShow_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
$(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj2785_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2785_onShow_activeActionGroupIndex = -1;
		$("#obj2785").trigger("obj2785_onShow_ended");
		
		return;
	}
	window.obj2785_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2785 
show_2789();
function show_2789() {
	window.obj2785_onShow_runningActionsCount = obj2785_onShow_runningActionsCount + 1;
	$("#obj2785").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2785_onShow_runningActionsCount = window.obj2785_onShow_runningActionsCount - 1;
if (window.obj2785_onShow_runningActionsCount == 0) {
	obj2785_onShow_actionGroup1();
}
				$("#obj2785").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj2785_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2785_onShow_activeActionGroupIndex = -1;
		$("#obj2785").trigger("obj2785_onShow_ended");
		
		return;
	}
	window.obj2785_onShow_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj2793 
show_2790();
function show_2790() {
	window.obj2785_onShow_runningActionsCount = obj2785_onShow_runningActionsCount + 1;
	$("#obj2793").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj2785_onShow_runningActionsCount = window.obj2785_onShow_runningActionsCount - 1;
if (window.obj2785_onShow_runningActionsCount == 0) {
	obj2785_onShow_actionGroup2();
}
				$("#obj2793").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj2785_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2785_onShow_activeActionGroupIndex = -1;
		$("#obj2785").trigger("obj2785_onShow_ended");
		
		return;
	}
	window.obj2785_onShow_activeActionGroupIndex = 2;
	




















};
obj2785_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2785_onLoad_activeActionGroupIndex = -1;
		$("#obj2785").trigger("obj2785_onLoad_ended");
		
		return;
	}
	window.obj2785_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2785 
show_2792();
function show_2792() {
	window.obj2785_onLoad_runningActionsCount = obj2785_onLoad_runningActionsCount + 1;
	$("#obj2785").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj2785_onLoad_runningActionsCount = window.obj2785_onLoad_runningActionsCount - 1;
if (window.obj2785_onLoad_runningActionsCount == 0) {
	obj2785_onLoad_actionGroup1();
}
				$("#obj2785").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj2785_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2785_onLoad_activeActionGroupIndex = -1;
		$("#obj2785").trigger("obj2785_onLoad_ended");
		
		return;
	}
	window.obj2785_onLoad_activeActionGroupIndex = 1;
	




















};
obj2793_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2793_onShow_activeActionGroupIndex = -1;
		$("#obj2793").trigger("obj2793_onShow_ended");
		
		return;
	}
	window.obj2793_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2817 
show_2798();
function show_2798() {
	window.obj2793_onShow_runningActionsCount = obj2793_onShow_runningActionsCount + 1;
	$("#obj2817").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj2793_onShow_runningActionsCount = window.obj2793_onShow_runningActionsCount - 1;
if (window.obj2793_onShow_runningActionsCount == 0) {
	obj2793_onShow_actionGroup1();
}
				$("#obj2817").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj2793_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2793_onShow_activeActionGroupIndex = -1;
		$("#obj2793").trigger("obj2793_onShow_ended");
		
		return;
	}
	window.obj2793_onShow_activeActionGroupIndex = 1;
	




















};
obj2817_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2817_onShow_activeActionGroupIndex = -1;
		$("#obj2817").trigger("obj2817_onShow_ended");
		
		return;
	}
	window.obj2817_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2800 
show_2820();
function show_2820() {
	window.obj2817_onShow_runningActionsCount = obj2817_onShow_runningActionsCount + 1;
	$("#obj2800").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj2817_onShow_runningActionsCount = window.obj2817_onShow_runningActionsCount - 1;
if (window.obj2817_onShow_runningActionsCount == 0) {
	obj2817_onShow_actionGroup1();
}
				$("#obj2800").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj2817_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2817_onShow_activeActionGroupIndex = -1;
		$("#obj2817").trigger("obj2817_onShow_ended");
		
		return;
	}
	window.obj2817_onShow_activeActionGroupIndex = 1;
	




















};
obj2821_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2821_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2821").trigger("obj2821_onTouchDown_ended");
		
		return;
	}
	window.obj2821_onTouchDown_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2806 
show_2823();
function show_2823() {
	window.obj2821_onTouchDown_runningActionsCount = obj2821_onTouchDown_runningActionsCount + 1;
	$("#obj2806").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2821_onTouchDown_runningActionsCount = window.obj2821_onTouchDown_runningActionsCount - 1;
if (window.obj2821_onTouchDown_runningActionsCount == 0) {
	obj2821_onTouchDown_actionGroup1();
}
				$("#obj2806").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj2821_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2821_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2821").trigger("obj2821_onTouchDown_ended");
		
		return;
	}
	window.obj2821_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2880_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2880_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2880").trigger("obj2880_onTouchDown_ended");
		
		return;
	}
	window.obj2880_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2 
goToPage_2895();
function goToPage_2895() {
  window.obj2880_onTouchDown_runningActionsCount =
    obj2880_onTouchDown_runningActionsCount + 1;

  window.location.href = '../2/page.xhtml';

  window.obj2880_onTouchDown_runningActionsCount =
    window.obj2880_onTouchDown_runningActionsCount - 1;

  if (window.obj2880_onTouchDown_runningActionsCount == 0) {
    obj2880_onTouchDown_actionGroup1();
  }
}




















};
obj2880_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2880_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2880").trigger("obj2880_onTouchDown_ended");
		
		return;
	}
	window.obj2880_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2806_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2806_onShow_activeActionGroupIndex = -1;
		$("#obj2806").trigger("obj2806_onShow_ended");
		
		return;
	}
	window.obj2806_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2811 
show_2810();
function show_2810() {
	window.obj2806_onShow_runningActionsCount = obj2806_onShow_runningActionsCount + 1;
	$("#obj2811").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj2806_onShow_runningActionsCount = window.obj2806_onShow_runningActionsCount - 1;
if (window.obj2806_onShow_runningActionsCount == 0) {
	obj2806_onShow_actionGroup1();
}
				$("#obj2811").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj2806_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2806_onShow_activeActionGroupIndex = -1;
		$("#obj2806").trigger("obj2806_onShow_ended");
		
		return;
	}
	window.obj2806_onShow_activeActionGroupIndex = 1;
	




















};
obj2811_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2811_onShow_activeActionGroupIndex = -1;
		$("#obj2811").trigger("obj2811_onShow_ended");
		
		return;
	}
	window.obj2811_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2815 
show_2814();
function show_2814() {
	window.obj2811_onShow_runningActionsCount = obj2811_onShow_runningActionsCount + 1;
	$("#obj2815").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj2811_onShow_runningActionsCount = window.obj2811_onShow_runningActionsCount - 1;
if (window.obj2811_onShow_runningActionsCount == 0) {
	obj2811_onShow_actionGroup1();
}
				$("#obj2815").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj2811_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2811_onShow_activeActionGroupIndex = -1;
		$("#obj2811").trigger("obj2811_onShow_ended");
		
		return;
	}
	window.obj2811_onShow_activeActionGroupIndex = 1;
	




















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























/*
 *
 *   obj2785: Event Show
 *
 */
 
$("#obj2785").bind('SCEventShow', function(event) {
	if (window.obj2785_onShow_activeActionGroupIndex != -1) return;
var obj2785_onShow_runningActionsCount = 0;
var obj2785_onShow_loopCount = 0;
obj2785_onShow_actionGroup0();
});
/*
 *
 *   obj2785: Event Load
 *
 */
setTimeout(function () {
if (window.obj2785_onLoad_activeActionGroupIndex != -1) return;
var obj2785_onLoad_runningActionsCount = 0;
var obj2785_onLoad_loopCount = 0;
obj2785_onLoad_actionGroup0();
}, 200);






/*
 *
 *   obj2793: Event Show
 *
 */
 
$("#obj2793").bind('SCEventShow', function(event) {
	if (window.obj2793_onShow_activeActionGroupIndex != -1) return;
var obj2793_onShow_runningActionsCount = 0;
var obj2793_onShow_loopCount = 0;
obj2793_onShow_actionGroup0();
});













/*
 *
 *   obj2817: Event Show
 *
 */
 
$("#obj2817").bind('SCEventShow', function(event) {
	if (window.obj2817_onShow_activeActionGroupIndex != -1) return;
var obj2817_onShow_runningActionsCount = 0;
var obj2817_onShow_loopCount = 0;
obj2817_onShow_actionGroup0();
});






/*
 *
 *   obj2821: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2821");
	var winTarget = document.getElementById("obj2821");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2821").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2821_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2821_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2821_onTouchDown_activeActionGroupIndex != -1) return;
var obj2821_onTouchDown_runningActionsCount = 0;
var obj2821_onTouchDown_loopCount = 0;
obj2821_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2880: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2880");
	var winTarget = document.getElementById("obj2880");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2880").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2880_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2880_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2880_onTouchDown_activeActionGroupIndex != -1) return;
var obj2880_onTouchDown_runningActionsCount = 0;
var obj2880_onTouchDown_loopCount = 0;
obj2880_onTouchDown_actionGroup0();
});







/*
 *
 *   obj2806: Event Show
 *
 */
 
$("#obj2806").bind('SCEventShow', function(event) {
	if (window.obj2806_onShow_activeActionGroupIndex != -1) return;
var obj2806_onShow_runningActionsCount = 0;
var obj2806_onShow_loopCount = 0;
obj2806_onShow_actionGroup0();
});






/*
 *
 *   obj2811: Event Show
 *
 */
 
$("#obj2811").bind('SCEventShow', function(event) {
	if (window.obj2811_onShow_activeActionGroupIndex != -1) return;
var obj2811_onShow_runningActionsCount = 0;
var obj2811_onShow_loopCount = 0;
obj2811_onShow_actionGroup0();
});









		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj2979").trigger('SCEventShow');
$("#obj2779").trigger('SCEventShow');
$("#obj2781").trigger('SCEventShow');
$("#obj2783").trigger('SCEventShow');
$("#obj2821").trigger('SCEventShow');
$("#obj2880").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
})