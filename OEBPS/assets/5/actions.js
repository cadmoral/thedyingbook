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
var obj402_onTouchDown_activeActionGroupIndex = -1;
var obj402_onTouchDown_runningActionsCount = 0;
var obj402_onTouchDown_loopCount = 0;
var obj406_onTouchDown_activeActionGroupIndex = -1;
var obj406_onTouchDown_runningActionsCount = 0;
var obj406_onTouchDown_loopCount = 0;
var obj2876_onTouchDown_activeActionGroupIndex = -1;
var obj2876_onTouchDown_runningActionsCount = 0;
var obj2876_onTouchDown_loopCount = 0;
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
		
obj402_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj402_onTouchDown_activeActionGroupIndex = -1;
		$("#obj402").trigger("obj402_onTouchDown_ended");
		
		return;
	}
	window.obj402_onTouchDown_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj409 
show_404();
function show_404() {
	window.obj402_onTouchDown_runningActionsCount = obj402_onTouchDown_runningActionsCount + 1;
	$("#obj409").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj402_onTouchDown_runningActionsCount = window.obj402_onTouchDown_runningActionsCount - 1;
if (window.obj402_onTouchDown_runningActionsCount == 0) {
	obj402_onTouchDown_actionGroup1();
}
				$("#obj409").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj402_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj402_onTouchDown_activeActionGroupIndex = -1;
		$("#obj402").trigger("obj402_onTouchDown_ended");
		
		return;
	}
	window.obj402_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj406_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj406_onTouchDown_activeActionGroupIndex = -1;
		$("#obj406").trigger("obj406_onTouchDown_ended");
		
		return;
	}
	window.obj406_onTouchDown_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj409 
show_408();
function show_408() {
	window.obj406_onTouchDown_runningActionsCount = obj406_onTouchDown_runningActionsCount + 1;
	$("#obj409").fadeIn(0, function() {
			setTimeout(function() {
				window.obj406_onTouchDown_runningActionsCount = window.obj406_onTouchDown_runningActionsCount - 1;
if (window.obj406_onTouchDown_runningActionsCount == 0) {
	obj406_onTouchDown_actionGroup1();
}
				$("#obj409").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj406_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj406_onTouchDown_activeActionGroupIndex = -1;
		$("#obj406").trigger("obj406_onTouchDown_ended");
		
		return;
	}
	window.obj406_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2876_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2876_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2876").trigger("obj2876_onTouchDown_ended");
		
		return;
	}
	window.obj2876_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2 
goToPage_2893();
function goToPage_2893() {
	window.obj2876_onTouchDown_runningActionsCount = obj2876_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../2/page.xhtml');
	window.obj2876_onTouchDown_runningActionsCount = window.obj2876_onTouchDown_runningActionsCount - 1;
if (window.obj2876_onTouchDown_runningActionsCount == 0) {
	obj2876_onTouchDown_actionGroup1();
}
}




















};
obj2876_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2876_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2876").trigger("obj2876_onTouchDown_ended");
		
		return;
	}
	window.obj2876_onTouchDown_activeActionGroupIndex = 1;
	




















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





























/*
 *
 *   obj402: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj402");
	var winTarget = document.getElementById("obj402");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj402").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj402_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj402_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj402_onTouchDown_activeActionGroupIndex != -1) return;
var obj402_onTouchDown_runningActionsCount = 0;
var obj402_onTouchDown_loopCount = 0;
obj402_onTouchDown_actionGroup0();
});






/*
 *
 *   obj406: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj406");
	var winTarget = document.getElementById("obj406");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj406").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj406_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj406_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj406_onTouchDown_activeActionGroupIndex != -1) return;
var obj406_onTouchDown_runningActionsCount = 0;
var obj406_onTouchDown_loopCount = 0;
obj406_onTouchDown_actionGroup0();
});













/*
 *
 *   obj2876: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2876");
	var winTarget = document.getElementById("obj2876");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2876").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2876_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2876_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2876_onTouchDown_activeActionGroupIndex != -1) return;
var obj2876_onTouchDown_runningActionsCount = 0;
var obj2876_onTouchDown_loopCount = 0;
obj2876_onTouchDown_actionGroup0();
});



		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj394").trigger('SCEventShow');
$("#obj396").trigger('SCEventShow');
$("#obj398").trigger('SCEventShow');
$("#obj400").trigger('SCEventShow');
$("#obj402").trigger('SCEventShow');
$("#obj406").trigger('SCEventShow');
$("#obj2876").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
})