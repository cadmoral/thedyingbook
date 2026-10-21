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
var obj2829_onTouchDown_activeActionGroupIndex = -1;
var obj2829_onTouchDown_runningActionsCount = 0;
var obj2829_onTouchDown_loopCount = 0;
var obj2832_onTouchDown_activeActionGroupIndex = -1;
var obj2832_onTouchDown_runningActionsCount = 0;
var obj2832_onTouchDown_loopCount = 0;
var obj2835_onTouchDown_activeActionGroupIndex = -1;
var obj2835_onTouchDown_runningActionsCount = 0;
var obj2835_onTouchDown_loopCount = 0;
var obj2840_onTouchDown_activeActionGroupIndex = -1;
var obj2840_onTouchDown_runningActionsCount = 0;
var obj2840_onTouchDown_loopCount = 0;
var obj2843_onTouchDown_activeActionGroupIndex = -1;
var obj2843_onTouchDown_runningActionsCount = 0;
var obj2843_onTouchDown_loopCount = 0;
var obj2846_onTouchDown_activeActionGroupIndex = -1;
var obj2846_onTouchDown_runningActionsCount = 0;
var obj2846_onTouchDown_loopCount = 0;
var obj2849_onTouchDown_activeActionGroupIndex = -1;
var obj2849_onTouchDown_runningActionsCount = 0;
var obj2849_onTouchDown_loopCount = 0;
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
		
obj2829_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2829_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2829").trigger("obj2829_onTouchDown_ended");
		
		return;
	}
	window.obj2829_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3 
goToPage_2831();
function goToPage_2831() {
	window.obj2829_onTouchDown_runningActionsCount = obj2829_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../3/page.xhtml');
	window.obj2829_onTouchDown_runningActionsCount = window.obj2829_onTouchDown_runningActionsCount - 1;
if (window.obj2829_onTouchDown_runningActionsCount == 0) {
	obj2829_onTouchDown_actionGroup1();
}
}




















};
obj2829_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2829_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2829").trigger("obj2829_onTouchDown_ended");
		
		return;
	}
	window.obj2829_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2832_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2832_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2832").trigger("obj2832_onTouchDown_ended");
		
		return;
	}
	window.obj2832_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page9 
goToPage_2834();
function goToPage_2834() {
	window.obj2832_onTouchDown_runningActionsCount = obj2832_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../9/page.xhtml');
	window.obj2832_onTouchDown_runningActionsCount = window.obj2832_onTouchDown_runningActionsCount - 1;
if (window.obj2832_onTouchDown_runningActionsCount == 0) {
	obj2832_onTouchDown_actionGroup1();
}
}




















};
obj2832_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2832_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2832").trigger("obj2832_onTouchDown_ended");
		
		return;
	}
	window.obj2832_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2835_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2835_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2835").trigger("obj2835_onTouchDown_ended");
		
		return;
	}
	window.obj2835_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page4 
goToPage_2837();
function goToPage_2837() {
	window.obj2835_onTouchDown_runningActionsCount = obj2835_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../4/page.xhtml');
	window.obj2835_onTouchDown_runningActionsCount = window.obj2835_onTouchDown_runningActionsCount - 1;
if (window.obj2835_onTouchDown_runningActionsCount == 0) {
	obj2835_onTouchDown_actionGroup1();
}
}




















};
obj2835_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2835_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2835").trigger("obj2835_onTouchDown_ended");
		
		return;
	}
	window.obj2835_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2840_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2840_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2840").trigger("obj2840_onTouchDown_ended");
		
		return;
	}
	window.obj2840_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page8 
goToPage_2842();
function goToPage_2842() {
	window.obj2840_onTouchDown_runningActionsCount = obj2840_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../8/page.xhtml');
	window.obj2840_onTouchDown_runningActionsCount = window.obj2840_onTouchDown_runningActionsCount - 1;
if (window.obj2840_onTouchDown_runningActionsCount == 0) {
	obj2840_onTouchDown_actionGroup1();
}
}




















};
obj2840_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2840_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2840").trigger("obj2840_onTouchDown_ended");
		
		return;
	}
	window.obj2840_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2843_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2843_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2843").trigger("obj2843_onTouchDown_ended");
		
		return;
	}
	window.obj2843_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page10 
goToPage_2845();
function goToPage_2845() {
	window.obj2843_onTouchDown_runningActionsCount = obj2843_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../10/page.xhtml');
	window.obj2843_onTouchDown_runningActionsCount = window.obj2843_onTouchDown_runningActionsCount - 1;
if (window.obj2843_onTouchDown_runningActionsCount == 0) {
	obj2843_onTouchDown_actionGroup1();
}
}




















};
obj2843_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2843_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2843").trigger("obj2843_onTouchDown_ended");
		
		return;
	}
	window.obj2843_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2846_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2846_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2846").trigger("obj2846_onTouchDown_ended");
		
		return;
	}
	window.obj2846_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page6 
goToPage_2848();
function goToPage_2848() {
	window.obj2846_onTouchDown_runningActionsCount = obj2846_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../6/page.xhtml');
	window.obj2846_onTouchDown_runningActionsCount = window.obj2846_onTouchDown_runningActionsCount - 1;
if (window.obj2846_onTouchDown_runningActionsCount == 0) {
	obj2846_onTouchDown_actionGroup1();
}
}




















};
obj2846_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2846_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2846").trigger("obj2846_onTouchDown_ended");
		
		return;
	}
	window.obj2846_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2849_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2849_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2849").trigger("obj2849_onTouchDown_ended");
		
		return;
	}
	window.obj2849_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page5 
goToPage_2851();
function goToPage_2851() {
	window.obj2849_onTouchDown_runningActionsCount = obj2849_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../5/page.xhtml');
	window.obj2849_onTouchDown_runningActionsCount = window.obj2849_onTouchDown_runningActionsCount - 1;
if (window.obj2849_onTouchDown_runningActionsCount == 0) {
	obj2849_onTouchDown_actionGroup1();
}
}




















};
obj2849_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2849_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2849").trigger("obj2849_onTouchDown_ended");
		
		return;
	}
	window.obj2849_onTouchDown_activeActionGroupIndex = 1;
	




















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
















/*
 *
 *   obj2829: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2829");
	var winTarget = document.getElementById("obj2829");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2829").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2829_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2829_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2829_onTouchDown_activeActionGroupIndex != -1) return;
var obj2829_onTouchDown_runningActionsCount = 0;
var obj2829_onTouchDown_loopCount = 0;
obj2829_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2832: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2832");
	var winTarget = document.getElementById("obj2832");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2832").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2832_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2832_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2832_onTouchDown_activeActionGroupIndex != -1) return;
var obj2832_onTouchDown_runningActionsCount = 0;
var obj2832_onTouchDown_loopCount = 0;
obj2832_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2835: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2835");
	var winTarget = document.getElementById("obj2835");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2835").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2835_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2835_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2835_onTouchDown_activeActionGroupIndex != -1) return;
var obj2835_onTouchDown_runningActionsCount = 0;
var obj2835_onTouchDown_loopCount = 0;
obj2835_onTouchDown_actionGroup0();
});













/*
 *
 *   obj2840: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2840");
	var winTarget = document.getElementById("obj2840");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2840").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2840_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2840_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2840_onTouchDown_activeActionGroupIndex != -1) return;
var obj2840_onTouchDown_runningActionsCount = 0;
var obj2840_onTouchDown_loopCount = 0;
obj2840_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2843: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2843");
	var winTarget = document.getElementById("obj2843");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2843").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2843_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2843_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2843_onTouchDown_activeActionGroupIndex != -1) return;
var obj2843_onTouchDown_runningActionsCount = 0;
var obj2843_onTouchDown_loopCount = 0;
obj2843_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2846: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2846");
	var winTarget = document.getElementById("obj2846");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2846").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2846_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2846_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2846_onTouchDown_activeActionGroupIndex != -1) return;
var obj2846_onTouchDown_runningActionsCount = 0;
var obj2846_onTouchDown_loopCount = 0;
obj2846_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2849: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2849");
	var winTarget = document.getElementById("obj2849");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2849").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2849_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2849_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2849_onTouchDown_activeActionGroupIndex != -1) return;
var obj2849_onTouchDown_runningActionsCount = 0;
var obj2849_onTouchDown_loopCount = 0;
obj2849_onTouchDown_actionGroup0();
});



		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj2825").trigger('SCEventShow');
$("#obj2827").trigger('SCEventShow');
$("#obj2829").trigger('SCEventShow');
$("#obj2832").trigger('SCEventShow');
$("#obj2835").trigger('SCEventShow');
$("#obj2838").trigger('SCEventShow');
$("#obj2840").trigger('SCEventShow');
$("#obj2843").trigger('SCEventShow');
$("#obj2846").trigger('SCEventShow');
$("#obj2849").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
})