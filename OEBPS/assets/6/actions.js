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
var obj2732_onTouchDown_activeActionGroupIndex = -1;
var obj2732_onTouchDown_runningActionsCount = 0;
var obj2732_onTouchDown_loopCount = 0;
var obj2739_onTouchDown_activeActionGroupIndex = -1;
var obj2739_onTouchDown_runningActionsCount = 0;
var obj2739_onTouchDown_loopCount = 0;
var obj2742_onTouchDown_activeActionGroupIndex = -1;
var obj2742_onTouchDown_runningActionsCount = 0;
var obj2742_onTouchDown_loopCount = 0;
var obj2745_onTouchDown_activeActionGroupIndex = -1;
var obj2745_onTouchDown_runningActionsCount = 0;
var obj2745_onTouchDown_loopCount = 0;
var obj2748_onTouchDown_activeActionGroupIndex = -1;
var obj2748_onTouchDown_runningActionsCount = 0;
var obj2748_onTouchDown_loopCount = 0;
var obj2751_onTouchDown_activeActionGroupIndex = -1;
var obj2751_onTouchDown_runningActionsCount = 0;
var obj2751_onTouchDown_loopCount = 0;
var obj2751_onShake_activeActionGroupIndex = -1;
var obj2751_onShake_runningActionsCount = 0;
var obj2751_onShake_loopCount = 0;
var obj2758_onSwipeUp_activeActionGroupIndex = -1;
var obj2758_onSwipeUp_runningActionsCount = 0;
var obj2758_onSwipeUp_loopCount = 0;
var obj2762_onTouchDown_activeActionGroupIndex = -1;
var obj2762_onTouchDown_runningActionsCount = 0;
var obj2762_onTouchDown_loopCount = 0;
var obj2765_onTouchDown_activeActionGroupIndex = -1;
var obj2765_onTouchDown_runningActionsCount = 0;
var obj2765_onTouchDown_loopCount = 0;
var obj2768_onTouchDown_activeActionGroupIndex = -1;
var obj2768_onTouchDown_runningActionsCount = 0;
var obj2768_onTouchDown_loopCount = 0;
var obj2771_onTouchDown_activeActionGroupIndex = -1;
var obj2771_onTouchDown_runningActionsCount = 0;
var obj2771_onTouchDown_loopCount = 0;
var obj2774_onTouchDown_activeActionGroupIndex = -1;
var obj2774_onTouchDown_runningActionsCount = 0;
var obj2774_onTouchDown_loopCount = 0;
var obj2874_onTouchDown_activeActionGroupIndex = -1;
var obj2874_onTouchDown_runningActionsCount = 0;
var obj2874_onTouchDown_loopCount = 0;
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
		
	$("#obj2751").trigger('SCEventShake');
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
		
obj2732_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2732_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2732").trigger("obj2732_onTouchDown_ended");
		
		return;
	}
	window.obj2732_onTouchDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2732 
move_2734();
function move_2734() {
	window.obj2732_onTouchDown_runningActionsCount = obj2732_onTouchDown_runningActionsCount + 1;

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
	var targetObject = $("#obj2732");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 188;
	var moveY = 1520;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2732_onTouchDown_runningActionsCount = window.obj2732_onTouchDown_runningActionsCount - 1;
if (window.obj2732_onTouchDown_runningActionsCount == 0) {
	obj2732_onTouchDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2732_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2732_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2732").trigger("obj2732_onTouchDown_ended");
		
		return;
	}
	window.obj2732_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2739_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2739_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2739").trigger("obj2739_onTouchDown_ended");
		
		return;
	}
	window.obj2739_onTouchDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2739 
move_2741();
function move_2741() {
	window.obj2739_onTouchDown_runningActionsCount = obj2739_onTouchDown_runningActionsCount + 1;

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
	var targetObject = $("#obj2739");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 664;
	var moveY = 1472;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2739_onTouchDown_runningActionsCount = window.obj2739_onTouchDown_runningActionsCount - 1;
if (window.obj2739_onTouchDown_runningActionsCount == 0) {
	obj2739_onTouchDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2739_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2739_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2739").trigger("obj2739_onTouchDown_ended");
		
		return;
	}
	window.obj2739_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2742_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2742_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2742").trigger("obj2742_onTouchDown_ended");
		
		return;
	}
	window.obj2742_onTouchDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2742 
move_2744();
function move_2744() {
	window.obj2742_onTouchDown_runningActionsCount = obj2742_onTouchDown_runningActionsCount + 1;

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
	var targetObject = $("#obj2742");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 512;
	var moveY = 1472;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2742_onTouchDown_runningActionsCount = window.obj2742_onTouchDown_runningActionsCount - 1;
if (window.obj2742_onTouchDown_runningActionsCount == 0) {
	obj2742_onTouchDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2742_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2742_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2742").trigger("obj2742_onTouchDown_ended");
		
		return;
	}
	window.obj2742_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2745_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2745_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2745").trigger("obj2745_onTouchDown_ended");
		
		return;
	}
	window.obj2745_onTouchDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2745 
move_2747();
function move_2747() {
	window.obj2745_onTouchDown_runningActionsCount = obj2745_onTouchDown_runningActionsCount + 1;

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
	var targetObject = $("#obj2745");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 723;
	var moveY = 1382;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2745_onTouchDown_runningActionsCount = window.obj2745_onTouchDown_runningActionsCount - 1;
if (window.obj2745_onTouchDown_runningActionsCount == 0) {
	obj2745_onTouchDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2745_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2745_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2745").trigger("obj2745_onTouchDown_ended");
		
		return;
	}
	window.obj2745_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2748_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2748_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2748").trigger("obj2748_onTouchDown_ended");
		
		return;
	}
	window.obj2748_onTouchDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2748 
move_2750();
function move_2750() {
	window.obj2748_onTouchDown_runningActionsCount = obj2748_onTouchDown_runningActionsCount + 1;

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
	var targetObject = $("#obj2748");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 445;
	var moveY = 1357;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2748_onTouchDown_runningActionsCount = window.obj2748_onTouchDown_runningActionsCount - 1;
if (window.obj2748_onTouchDown_runningActionsCount == 0) {
	obj2748_onTouchDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2748_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2748_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2748").trigger("obj2748_onTouchDown_ended");
		
		return;
	}
	window.obj2748_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2751_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2751_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2751").trigger("obj2751_onTouchDown_ended");
		
		return;
	}
	window.obj2751_onTouchDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2751 
move_2753();
function move_2753() {
	window.obj2751_onTouchDown_runningActionsCount = obj2751_onTouchDown_runningActionsCount + 1;

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
	var targetObject = $("#obj2751");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 676;
	var moveY = 1518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2751_onTouchDown_runningActionsCount = window.obj2751_onTouchDown_runningActionsCount - 1;
if (window.obj2751_onTouchDown_runningActionsCount == 0) {
	obj2751_onTouchDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2751_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2751_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2751").trigger("obj2751_onTouchDown_ended");
		
		return;
	}
	window.obj2751_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2751_onShake_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2751_onShake_activeActionGroupIndex = -1;
		$("#obj2751").trigger("obj2751_onShake_ended");
		
		return;
	}
	window.obj2751_onShake_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2751 
move_2755();
function move_2755() {
	window.obj2751_onShake_runningActionsCount = obj2751_onShake_runningActionsCount + 1;

	var easing = "ease-out";
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
	var targetObject = $("#obj2751");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 647;
	var moveY = 1504;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2751_onShake_runningActionsCount = window.obj2751_onShake_runningActionsCount - 1;
if (window.obj2751_onShake_runningActionsCount == 0) {
	obj2751_onShake_actionGroup1();
}
		}, 1);
	});
}


















};
obj2751_onShake_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2751_onShake_activeActionGroupIndex = -1;
		$("#obj2751").trigger("obj2751_onShake_ended");
		
		return;
	}
	window.obj2751_onShake_activeActionGroupIndex = 1;
	




















};
obj2758_onSwipeUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2758_onSwipeUp_activeActionGroupIndex = -1;
		$("#obj2758").trigger("obj2758_onSwipeUp_ended");
		
		return;
	}
	window.obj2758_onSwipeUp_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page7 
goToPage_2761();
function goToPage_2761() {
	window.obj2758_onSwipeUp_runningActionsCount = obj2758_onSwipeUp_runningActionsCount + 1;
	$(location).attr('href', '../7/page.xhtml');
	window.obj2758_onSwipeUp_runningActionsCount = window.obj2758_onSwipeUp_runningActionsCount - 1;
if (window.obj2758_onSwipeUp_runningActionsCount == 0) {
	obj2758_onSwipeUp_actionGroup1();
}
}




















};
obj2758_onSwipeUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2758_onSwipeUp_activeActionGroupIndex = -1;
		$("#obj2758").trigger("obj2758_onSwipeUp_ended");
		
		return;
	}
	window.obj2758_onSwipeUp_activeActionGroupIndex = 1;
	




















};
obj2762_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2762_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2762").trigger("obj2762_onTouchDown_ended");
		
		return;
	}
	window.obj2762_onTouchDown_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2762 
scale_2764();
function scale_2764() {
	window.obj2762_onTouchDown_runningActionsCount = obj2762_onTouchDown_runningActionsCount + 1;
	
	var targetObjectId = "#obj2762";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2762';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '2';
	var scaleYValue = '2';
	var effectDuration = '0.5';
	var effectEasing = 'elastic-out';
	var effectRepeat = -1;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_2764_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2764_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2764_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2764_completed() {
	setTimeout(function() {
		window.obj2762_onTouchDown_runningActionsCount = window.obj2762_onTouchDown_runningActionsCount - 1;
if (window.obj2762_onTouchDown_runningActionsCount == 0) {
	obj2762_onTouchDown_actionGroup1();
}
	}, 1);
}











};
obj2762_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2762_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2762").trigger("obj2762_onTouchDown_ended");
		
		return;
	}
	window.obj2762_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2765_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2765_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2765").trigger("obj2765_onTouchDown_ended");
		
		return;
	}
	window.obj2765_onTouchDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2765 
move_2767();
function move_2767() {
	window.obj2765_onTouchDown_runningActionsCount = obj2765_onTouchDown_runningActionsCount + 1;

	var easing = "ease-out";
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
	var targetObject = $("#obj2765");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 708;
	var moveY = 1108;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj2765_onTouchDown_runningActionsCount = window.obj2765_onTouchDown_runningActionsCount - 1;
if (window.obj2765_onTouchDown_runningActionsCount == 0) {
	obj2765_onTouchDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2765_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2765_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2765").trigger("obj2765_onTouchDown_ended");
		
		return;
	}
	window.obj2765_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2768_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2768_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2768").trigger("obj2768_onTouchDown_ended");
		
		return;
	}
	window.obj2768_onTouchDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2768 
move_2770();
function move_2770() {
	window.obj2768_onTouchDown_runningActionsCount = obj2768_onTouchDown_runningActionsCount + 1;

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
	var targetObject = $("#obj2768");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 473;
	var moveY = 1185;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj2768_onTouchDown_runningActionsCount = window.obj2768_onTouchDown_runningActionsCount - 1;
if (window.obj2768_onTouchDown_runningActionsCount == 0) {
	obj2768_onTouchDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2768_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2768_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2768").trigger("obj2768_onTouchDown_ended");
		
		return;
	}
	window.obj2768_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2771_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2771_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2771").trigger("obj2771_onTouchDown_ended");
		
		return;
	}
	window.obj2771_onTouchDown_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2771 
scale_2773();
function scale_2773() {
	window.obj2771_onTouchDown_runningActionsCount = obj2771_onTouchDown_runningActionsCount + 1;
	
	var targetObjectId = "#obj2771";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2771';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.5';
	var scaleYValue = '1.5';
	var effectDuration = '0.3';
	var effectEasing = 'ease-in';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_2773_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2773_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2773_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2773_completed() {
	setTimeout(function() {
		window.obj2771_onTouchDown_runningActionsCount = window.obj2771_onTouchDown_runningActionsCount - 1;
if (window.obj2771_onTouchDown_runningActionsCount == 0) {
	obj2771_onTouchDown_actionGroup1();
}
	}, 1);
}











};
obj2771_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2771_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2771").trigger("obj2771_onTouchDown_ended");
		
		return;
	}
	window.obj2771_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2774_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2774_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2774").trigger("obj2774_onTouchDown_ended");
		
		return;
	}
	window.obj2774_onTouchDown_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2774 
move_2776();
function move_2776() {
	window.obj2774_onTouchDown_runningActionsCount = obj2774_onTouchDown_runningActionsCount + 1;

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
	var targetObject = $("#obj2774");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 87;
	var moveY = 1319;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj2774_onTouchDown_runningActionsCount = window.obj2774_onTouchDown_runningActionsCount - 1;
if (window.obj2774_onTouchDown_runningActionsCount == 0) {
	obj2774_onTouchDown_actionGroup1();
}
		}, 1);
	});
}


















};
obj2774_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2774_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2774").trigger("obj2774_onTouchDown_ended");
		
		return;
	}
	window.obj2774_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2874_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2874_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2874").trigger("obj2874_onTouchDown_ended");
		
		return;
	}
	window.obj2874_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2 
goToPage_2892();
function goToPage_2892() {
	window.obj2874_onTouchDown_runningActionsCount = obj2874_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../2/page.xhtml');
	window.obj2874_onTouchDown_runningActionsCount = window.obj2874_onTouchDown_runningActionsCount - 1;
if (window.obj2874_onTouchDown_runningActionsCount == 0) {
	obj2874_onTouchDown_actionGroup1();
}
}




















};
obj2874_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2874_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2874").trigger("obj2874_onTouchDown_ended");
		
		return;
	}
	window.obj2874_onTouchDown_activeActionGroupIndex = 1;
	




















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		










































/*
 *
 *   obj2732: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2732");
	var winTarget = document.getElementById("obj2732");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2732").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2732_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2732_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2732_onTouchDown_activeActionGroupIndex != -1) return;
var obj2732_onTouchDown_runningActionsCount = 0;
var obj2732_onTouchDown_loopCount = 0;
obj2732_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2739: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2739");
	var winTarget = document.getElementById("obj2739");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2739").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2739_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2739_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2739_onTouchDown_activeActionGroupIndex != -1) return;
var obj2739_onTouchDown_runningActionsCount = 0;
var obj2739_onTouchDown_loopCount = 0;
obj2739_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2742: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2742");
	var winTarget = document.getElementById("obj2742");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2742").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2742_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2742_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2742_onTouchDown_activeActionGroupIndex != -1) return;
var obj2742_onTouchDown_runningActionsCount = 0;
var obj2742_onTouchDown_loopCount = 0;
obj2742_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2745: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2745");
	var winTarget = document.getElementById("obj2745");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2745").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2745_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2745_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2745_onTouchDown_activeActionGroupIndex != -1) return;
var obj2745_onTouchDown_runningActionsCount = 0;
var obj2745_onTouchDown_loopCount = 0;
obj2745_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2748: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2748");
	var winTarget = document.getElementById("obj2748");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2748").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2748_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2748_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2748_onTouchDown_activeActionGroupIndex != -1) return;
var obj2748_onTouchDown_runningActionsCount = 0;
var obj2748_onTouchDown_loopCount = 0;
obj2748_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2751: Event Shake
 *
 */
$("#obj2751").bind('SCEventShake', function(event) {
	if (window.obj2751_onShake_activeActionGroupIndex != -1) return;
var obj2751_onShake_runningActionsCount = 0;
var obj2751_onShake_loopCount = 0;
obj2751_onShake_actionGroup0();
});



/*
 *
 *   obj2751: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2751");
	var winTarget = document.getElementById("obj2751");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2751").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2751_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2751_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2751_onTouchDown_activeActionGroupIndex != -1) return;
var obj2751_onTouchDown_runningActionsCount = 0;
var obj2751_onTouchDown_loopCount = 0;
obj2751_onTouchDown_actionGroup0();
});





/*
 *
 *   obj2758: Event SwipeUp
 *
 */
 if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2758");
$("#obj2758").bind("touchmove", function(event) {
	event.preventDefault();
})
$("#obj2758").bind("SCswipeup", function(event) {
	if (window.obj2758_onSwipeUp_activeActionGroupIndex != -1) return;
var obj2758_onSwipeUp_runningActionsCount = 0;
var obj2758_onSwipeUp_loopCount = 0;
obj2758_onSwipeUp_actionGroup0();
});








/*
 *
 *   obj2762: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2762");
	var winTarget = document.getElementById("obj2762");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2762").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2762_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2762_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2762_onTouchDown_activeActionGroupIndex != -1) return;
var obj2762_onTouchDown_runningActionsCount = 0;
var obj2762_onTouchDown_loopCount = 0;
obj2762_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2765: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2765");
	var winTarget = document.getElementById("obj2765");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2765").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2765_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2765_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2765_onTouchDown_activeActionGroupIndex != -1) return;
var obj2765_onTouchDown_runningActionsCount = 0;
var obj2765_onTouchDown_loopCount = 0;
obj2765_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2768: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2768");
	var winTarget = document.getElementById("obj2768");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2768").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2768_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2768_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2768_onTouchDown_activeActionGroupIndex != -1) return;
var obj2768_onTouchDown_runningActionsCount = 0;
var obj2768_onTouchDown_loopCount = 0;
obj2768_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2771: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2771");
	var winTarget = document.getElementById("obj2771");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2771").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2771_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2771_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2771_onTouchDown_activeActionGroupIndex != -1) return;
var obj2771_onTouchDown_runningActionsCount = 0;
var obj2771_onTouchDown_loopCount = 0;
obj2771_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2774: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2774");
	var winTarget = document.getElementById("obj2774");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2774").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2774_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2774_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2774_onTouchDown_activeActionGroupIndex != -1) return;
var obj2774_onTouchDown_runningActionsCount = 0;
var obj2774_onTouchDown_loopCount = 0;
obj2774_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2874: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2874");
	var winTarget = document.getElementById("obj2874");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2874").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2874_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2874_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2874_onTouchDown_activeActionGroupIndex != -1) return;
var obj2874_onTouchDown_runningActionsCount = 0;
var obj2874_onTouchDown_loopCount = 0;
obj2874_onTouchDown_actionGroup0();
});



		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj2983").trigger('SCEventShow');
$("#obj2722").trigger('SCEventShow');
$("#obj2724").trigger('SCEventShow');
$("#obj2726").trigger('SCEventShow');
$("#obj2728").trigger('SCEventShow');
$("#obj2730").trigger('SCEventShow');
$("#obj2732").trigger('SCEventShow');
$("#obj2739").trigger('SCEventShow');
$("#obj2742").trigger('SCEventShow');
$("#obj2745").trigger('SCEventShow');
$("#obj2748").trigger('SCEventShow');
$("#obj2751").trigger('SCEventShow');
$("#obj2758").trigger('SCEventShow');
$("#obj2762").trigger('SCEventShow');
$("#obj2765").trigger('SCEventShow');
$("#obj2768").trigger('SCEventShow');
$("#obj2771").trigger('SCEventShow');
$("#obj2774").trigger('SCEventShow');
$("#obj2874").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
})