var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
var aigX = 0, aigY = 0;
var obj2057_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj2057_onTouchDown_activeActionGroupIndex = -1;
var obj2057_onTouchDown_runningActionsCount = 0;
var obj2057_onTouchDown_loopCount = 0;
var obj2057_onSwipeDown_activeActionGroupIndex = -1;
var obj2057_onSwipeDown_runningActionsCount = 0;
var obj2057_onSwipeDown_loopCount = 0;
var obj2889_onTouchDown_activeActionGroupIndex = -1;
var obj2889_onTouchDown_runningActionsCount = 0;
var obj2889_onTouchDown_loopCount = 0;
var obj2972_onTouchDown_activeActionGroupIndex = -1;
var obj2972_onTouchDown_runningActionsCount = 0;
var obj2972_onTouchDown_loopCount = 0;
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
	
initAnimation_2057();
function initAnimation_2057()
{
        var targetObjectId = "#obj2057";
        var widthSCAnimationObject = 1148;
        var heightSCAnimationObject = 1110;
		var framesPerSecond = 10;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj2057 = $("#")[0];
        window.hasAudioTrack_obj2057 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj2057_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj2057 = $(targetObjectId).spritespin("api");
}

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
		
obj2057_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2057_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2057").trigger("obj2057_onTouchDown_ended");
		
		return;
	}
	window.obj2057_onTouchDown_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj2057 
playAnimation_2063();
function playAnimation_2063() {
	var targetObjectId = "#obj2057";
	var targetObject = $(targetObjectId)[0];
	window.obj2057_onTouchDown_runningActionsCount = obj2057_onTouchDown_runningActionsCount + 1;
	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj2057_onTouchDown_runningActionsCount = window.obj2057_onTouchDown_runningActionsCount - 1;
if (window.obj2057_onTouchDown_runningActionsCount == 0) {
	obj2057_onTouchDown_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj2057 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj2057;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj2057.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj2057").one("obj2057_animation_ended",function(event) {
		    window.obj2057_onTouchDown_runningActionsCount = window.obj2057_onTouchDown_runningActionsCount - 1;
if (window.obj2057_onTouchDown_runningActionsCount == 0) {
	obj2057_onTouchDown_actionGroup1();
}
		});
	}
 }


















};
obj2057_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2057_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2057").trigger("obj2057_onTouchDown_ended");
		
		return;
	}
	window.obj2057_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2057_onSwipeDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2057_onSwipeDown_activeActionGroupIndex = -1;
		$("#obj2057").trigger("obj2057_onSwipeDown_ended");
		
		return;
	}
	window.obj2057_onSwipeDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2057 
move_2065();
function move_2065() {
	window.obj2057_onSwipeDown_runningActionsCount = obj2057_onSwipeDown_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj2057");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 472;
	var moveY = 704;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2057_onSwipeDown_runningActionsCount = window.obj2057_onSwipeDown_runningActionsCount - 1;
if (window.obj2057_onSwipeDown_runningActionsCount == 0) {
	obj2057_onSwipeDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2057_onSwipeDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2057_onSwipeDown_activeActionGroupIndex = -1;
		$("#obj2057").trigger("obj2057_onSwipeDown_ended");
		
		return;
	}
	window.obj2057_onSwipeDown_activeActionGroupIndex = 1;
	




















};
obj2889_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2889_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2889").trigger("obj2889_onTouchDown_ended");
		
		return;
	}
	window.obj2889_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2 
goToPage_2891();
function goToPage_2891() {
	window.obj2889_onTouchDown_runningActionsCount = obj2889_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../2/page.xhtml');
	window.obj2889_onTouchDown_runningActionsCount = window.obj2889_onTouchDown_runningActionsCount - 1;
if (window.obj2889_onTouchDown_runningActionsCount == 0) {
	obj2889_onTouchDown_actionGroup1();
}
}




















};
obj2889_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2889_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2889").trigger("obj2889_onTouchDown_ended");
		
		return;
	}
	window.obj2889_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2972_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2972_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2972").trigger("obj2972_onTouchDown_ended");
		
		return;
	}
	window.obj2972_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page8 
goToPage_2974();
function goToPage_2974() {
	window.obj2972_onTouchDown_runningActionsCount = obj2972_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../8/page.xhtml');
	window.obj2972_onTouchDown_runningActionsCount = window.obj2972_onTouchDown_runningActionsCount - 1;
if (window.obj2972_onTouchDown_runningActionsCount == 0) {
	obj2972_onTouchDown_actionGroup1();
}
}




















};
obj2972_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2972_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2972").trigger("obj2972_onTouchDown_ended");
		
		return;
	}
	window.obj2972_onTouchDown_activeActionGroupIndex = 1;
	




















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		









/*
 *
 *   obj2057: Event SwipeDown
 *
 */
 if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2057");
$("#obj2057").bind("touchmove", function(event) {
	event.preventDefault();
})
$("#obj2057").bind("SCswipedown", function(event) {
	if (window.obj2057_onSwipeDown_activeActionGroupIndex != -1) return;
var obj2057_onSwipeDown_runningActionsCount = 0;
var obj2057_onSwipeDown_loopCount = 0;
obj2057_onSwipeDown_actionGroup0();
});

/*
 *
 *   obj2057: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2057");
	var winTarget = document.getElementById("obj2057");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2057").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2057_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2057_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2057_onTouchDown_activeActionGroupIndex != -1) return;
var obj2057_onTouchDown_runningActionsCount = 0;
var obj2057_onTouchDown_loopCount = 0;
obj2057_onTouchDown_actionGroup0();
});


























/*
 *
 *   obj2889: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2889");
	var winTarget = document.getElementById("obj2889");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2889").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2889_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2889_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2889_onTouchDown_activeActionGroupIndex != -1) return;
var obj2889_onTouchDown_runningActionsCount = 0;
var obj2889_onTouchDown_loopCount = 0;
obj2889_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2972: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2972");
	var winTarget = document.getElementById("obj2972");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2972").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2972_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2972_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2972_onTouchDown_activeActionGroupIndex != -1) return;
var obj2972_onTouchDown_runningActionsCount = 0;
var obj2972_onTouchDown_loopCount = 0;
obj2972_onTouchDown_actionGroup0();
});



		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj2055").trigger('SCEventShow');
$("#obj2057").trigger('SCEventShow');
$("#obj2066").trigger('SCEventShow');
$("#obj2053").trigger('SCEventShow');
$("#obj2068").trigger('SCEventShow');
$("#obj2889").trigger('SCEventShow');
$("#obj2972").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
})