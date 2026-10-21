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
var obj549_onShow_activeActionGroupIndex = -1;
var obj549_onShow_runningActionsCount = 0;
var obj549_onShow_loopCount = 0;
var obj553_onTouchDown_activeActionGroupIndex = -1;
var obj553_onTouchDown_runningActionsCount = 0;
var obj553_onTouchDown_loopCount = 0;
var obj553_onShow_activeActionGroupIndex = -1;
var obj553_onShow_runningActionsCount = 0;
var obj553_onShow_loopCount = 0;
var obj562_onShow_activeActionGroupIndex = -1;
var obj562_onShow_runningActionsCount = 0;
var obj562_onShow_loopCount = 0;
var obj566_onShow_activeActionGroupIndex = -1;
var obj566_onShow_runningActionsCount = 0;
var obj566_onShow_loopCount = 0;
var obj570_onShow_activeActionGroupIndex = -1;
var obj570_onShow_runningActionsCount = 0;
var obj570_onShow_loopCount = 0;
var obj574_onLoad_activeActionGroupIndex = -1;
var obj574_onLoad_runningActionsCount = 0;
var obj574_onLoad_loopCount = 0;
var obj581_onLoad_activeActionGroupIndex = -1;
var obj581_onLoad_runningActionsCount = 0;
var obj581_onLoad_loopCount = 0;
var obj2107_onLoad_activeActionGroupIndex = -1;
var obj2107_onLoad_runningActionsCount = 0;
var obj2107_onLoad_loopCount = 0;
var obj2872_onTouchDown_activeActionGroupIndex = -1;
var obj2872_onTouchDown_runningActionsCount = 0;
var obj2872_onTouchDown_loopCount = 0;
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
		
obj549_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj549_onShow_activeActionGroupIndex = -1;
		$("#obj549").trigger("obj549_onShow_ended");
		
		return;
	}
	window.obj549_onShow_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj549 
rotate_552();
function rotate_552() {
	window.obj549_onShow_runningActionsCount = obj549_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj549";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj549';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-8.836284';
	var rotationSpeed = 7;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_552_completed(); }
	//TweenMax.to(targetObjectId, 7, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_552_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_552_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_552_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_552_completed() {
	setTimeout(function() {
		window.obj549_onShow_runningActionsCount = window.obj549_onShow_runningActionsCount - 1;
if (window.obj549_onShow_runningActionsCount == 0) {
	obj549_onShow_actionGroup1();
}
	}, 1);
}













};
obj549_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj549_onShow_activeActionGroupIndex = -1;
		$("#obj549").trigger("obj549_onShow_ended");
		
		return;
	}
	window.obj549_onShow_activeActionGroupIndex = 1;
	




















};
obj553_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj553_onTouchDown_activeActionGroupIndex = -1;
		$("#obj553").trigger("obj553_onTouchDown_ended");
		
		return;
	}
	window.obj553_onTouchDown_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj553 
rotate_555();
function rotate_555() {
	window.obj553_onTouchDown_runningActionsCount = obj553_onTouchDown_runningActionsCount + 1;
	
	var targetObjectId = "#obj553";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj553';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '347.8387';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_555_completed(); }
	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_555_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_555_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_555_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_555_completed() {
	setTimeout(function() {
		window.obj553_onTouchDown_runningActionsCount = window.obj553_onTouchDown_runningActionsCount - 1;
if (window.obj553_onTouchDown_runningActionsCount == 0) {
	obj553_onTouchDown_actionGroup1();
}
	}, 1);
}













};
obj553_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj553_onTouchDown_activeActionGroupIndex = -1;
		$("#obj553").trigger("obj553_onTouchDown_ended");
		
		return;
	}
	window.obj553_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj553_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj553_onShow_activeActionGroupIndex = -1;
		$("#obj553").trigger("obj553_onShow_ended");
		
		return;
	}
	window.obj553_onShow_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj553 
rotate_561();
function rotate_561() {
	window.obj553_onShow_runningActionsCount = obj553_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj553";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj553';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-342.7784';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_561_completed(); }
	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_561_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_561_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_561_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_561_completed() {
	setTimeout(function() {
		window.obj553_onShow_runningActionsCount = window.obj553_onShow_runningActionsCount - 1;
if (window.obj553_onShow_runningActionsCount == 0) {
	obj553_onShow_actionGroup1();
}
	}, 1);
}













};
obj553_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj553_onShow_activeActionGroupIndex = -1;
		$("#obj553").trigger("obj553_onShow_ended");
		
		return;
	}
	window.obj553_onShow_activeActionGroupIndex = 1;
	




















};
obj562_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj562_onShow_activeActionGroupIndex = -1;
		$("#obj562").trigger("obj562_onShow_ended");
		
		return;
	}
	window.obj562_onShow_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj562 
rotate_565();
function rotate_565() {
	window.obj562_onShow_runningActionsCount = obj562_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj562";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj562';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '30';
	var rotationSpeed = 10;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_565_completed(); }
	//TweenMax.to(targetObjectId, 10, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_565_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_565_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_565_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_565_completed() {
	setTimeout(function() {
		window.obj562_onShow_runningActionsCount = window.obj562_onShow_runningActionsCount - 1;
if (window.obj562_onShow_runningActionsCount == 0) {
	obj562_onShow_actionGroup1();
}
	}, 1);
}













};
obj562_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj562_onShow_activeActionGroupIndex = -1;
		$("#obj562").trigger("obj562_onShow_ended");
		
		return;
	}
	window.obj562_onShow_activeActionGroupIndex = 1;
	




















};
obj566_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj566_onShow_activeActionGroupIndex = -1;
		$("#obj566").trigger("obj566_onShow_ended");
		
		return;
	}
	window.obj566_onShow_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj566 
rotate_569();
function rotate_569() {
	window.obj566_onShow_runningActionsCount = obj566_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj566";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj566';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '30';
	var rotationSpeed = 10;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_569_completed(); }
	//TweenMax.to(targetObjectId, 10, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_569_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_569_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_569_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_569_completed() {
	setTimeout(function() {
		window.obj566_onShow_runningActionsCount = window.obj566_onShow_runningActionsCount - 1;
if (window.obj566_onShow_runningActionsCount == 0) {
	obj566_onShow_actionGroup1();
}
	}, 1);
}













};
obj566_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj566_onShow_activeActionGroupIndex = -1;
		$("#obj566").trigger("obj566_onShow_ended");
		
		return;
	}
	window.obj566_onShow_activeActionGroupIndex = 1;
	




















};
obj570_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj570_onShow_activeActionGroupIndex = -1;
		$("#obj570").trigger("obj570_onShow_ended");
		
		return;
	}
	window.obj570_onShow_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj570 
rotate_573();
function rotate_573() {
	window.obj570_onShow_runningActionsCount = obj570_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj570";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj570';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '10';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_573_completed(); }
	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_573_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_573_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_573_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_573_completed() {
	setTimeout(function() {
		window.obj570_onShow_runningActionsCount = window.obj570_onShow_runningActionsCount - 1;
if (window.obj570_onShow_runningActionsCount == 0) {
	obj570_onShow_actionGroup1();
}
	}, 1);
}













};
obj570_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj570_onShow_activeActionGroupIndex = -1;
		$("#obj570").trigger("obj570_onShow_ended");
		
		return;
	}
	window.obj570_onShow_activeActionGroupIndex = 1;
	




















};
obj574_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj574_onLoad_activeActionGroupIndex = -1;
		$("#obj574").trigger("obj574_onLoad_ended");
		
		return;
	}
	window.obj574_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_576();
function wait_576() {
	window.obj574_onLoad_runningActionsCount = obj574_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj574_onLoad_runningActionsCount = window.obj574_onLoad_runningActionsCount - 1;
if (window.obj574_onLoad_runningActionsCount == 0) {
	obj574_onLoad_actionGroup1();
}
	}, 5000);
}












};
obj574_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj574_onLoad_activeActionGroupIndex = -1;
		$("#obj574").trigger("obj574_onLoad_ended");
		
		return;
	}
	window.obj574_onLoad_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_577();
function playAudioFile_577() {
	window.obj574_onLoad_runningActionsCount = obj574_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile577")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj574_onLoad_runningActionsCount = window.obj574_onLoad_runningActionsCount - 1;
if (window.obj574_onLoad_runningActionsCount == 0) {
	obj574_onLoad_actionGroup2();
}
		}, false);
	} else {
		window.obj574_onLoad_runningActionsCount = window.obj574_onLoad_runningActionsCount - 1;
if (window.obj574_onLoad_runningActionsCount == 0) {
	obj574_onLoad_actionGroup2();
}
	}
	
}














};
obj574_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj574_onLoad_activeActionGroupIndex = -1;
		$("#obj574").trigger("obj574_onLoad_ended");
		
		return;
	}
	window.obj574_onLoad_activeActionGroupIndex = 2;
	




















};
obj581_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj581_onLoad_activeActionGroupIndex = -1;
		$("#obj581").trigger("obj581_onLoad_ended");
		
		return;
	}
	window.obj581_onLoad_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_583();
function playAudioFile_583() {
	window.obj581_onLoad_runningActionsCount = obj581_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile583")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj581_onLoad_runningActionsCount = window.obj581_onLoad_runningActionsCount - 1;
if (window.obj581_onLoad_runningActionsCount == 0) {
	obj581_onLoad_actionGroup1();
}
		}, false);
	} else {
		window.obj581_onLoad_runningActionsCount = window.obj581_onLoad_runningActionsCount - 1;
if (window.obj581_onLoad_runningActionsCount == 0) {
	obj581_onLoad_actionGroup1();
}
	}
	
}














};
obj581_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj581_onLoad_activeActionGroupIndex = -1;
		$("#obj581").trigger("obj581_onLoad_ended");
		
		return;
	}
	window.obj581_onLoad_activeActionGroupIndex = 1;
	




















};
obj2107_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2107_onLoad_activeActionGroupIndex = -1;
		$("#obj2107").trigger("obj2107_onLoad_ended");
		
		return;
	}
	window.obj2107_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_2109();
function wait_2109() {
	window.obj2107_onLoad_runningActionsCount = obj2107_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2107_onLoad_runningActionsCount = window.obj2107_onLoad_runningActionsCount - 1;
if (window.obj2107_onLoad_runningActionsCount == 0) {
	obj2107_onLoad_actionGroup1();
}
	}, 10000);
}












};
obj2107_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2107_onLoad_activeActionGroupIndex = -1;
		$("#obj2107").trigger("obj2107_onLoad_ended");
		
		return;
	}
	window.obj2107_onLoad_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_2110();
function playAudioFile_2110() {
	window.obj2107_onLoad_runningActionsCount = obj2107_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2110")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2107_onLoad_runningActionsCount = window.obj2107_onLoad_runningActionsCount - 1;
if (window.obj2107_onLoad_runningActionsCount == 0) {
	obj2107_onLoad_actionGroup2();
}
		}, false);
	} else {
		window.obj2107_onLoad_runningActionsCount = window.obj2107_onLoad_runningActionsCount - 1;
if (window.obj2107_onLoad_runningActionsCount == 0) {
	obj2107_onLoad_actionGroup2();
}
	}
	
}














};
obj2107_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2107_onLoad_activeActionGroupIndex = -1;
		$("#obj2107").trigger("obj2107_onLoad_ended");
		
		return;
	}
	window.obj2107_onLoad_activeActionGroupIndex = 2;
	














//	action: setMovieVolume
//	target: obj2107 
setAudioVolume_2112();
function setAudioVolume_2112() {
	window.obj2107_onLoad_runningActionsCount = obj2107_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2107")[0];
	myAudio.volume = 1;
	window.obj2107_onLoad_runningActionsCount = window.obj2107_onLoad_runningActionsCount - 1;
if (window.obj2107_onLoad_runningActionsCount == 0) {
	obj2107_onLoad_actionGroup3();
}
}






};
obj2107_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2107_onLoad_activeActionGroupIndex = -1;
		$("#obj2107").trigger("obj2107_onLoad_ended");
		
		return;
	}
	window.obj2107_onLoad_activeActionGroupIndex = 3;
	




















};
obj2872_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2872_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2872").trigger("obj2872_onTouchDown_ended");
		
		return;
	}
	window.obj2872_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2 
goToPage_2888();
function goToPage_2888() {
	window.obj2872_onTouchDown_runningActionsCount = obj2872_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../2/page.xhtml');
	window.obj2872_onTouchDown_runningActionsCount = window.obj2872_onTouchDown_runningActionsCount - 1;
if (window.obj2872_onTouchDown_runningActionsCount == 0) {
	obj2872_onTouchDown_actionGroup1();
}
}




















};
obj2872_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2872_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2872").trigger("obj2872_onTouchDown_ended");
		
		return;
	}
	window.obj2872_onTouchDown_activeActionGroupIndex = 1;
	




















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		










/*
 *
 *   obj549: Event Show
 *
 */
 
$("#obj549").bind('SCEventShow', function(event) {
	if (window.obj549_onShow_activeActionGroupIndex != -1) return;
var obj549_onShow_runningActionsCount = 0;
var obj549_onShow_loopCount = 0;
obj549_onShow_actionGroup0();
});






/*
 *
 *   obj553: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj553");
	var winTarget = document.getElementById("obj553");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj553").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj553_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj553_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj553_onTouchDown_activeActionGroupIndex != -1) return;
var obj553_onTouchDown_runningActionsCount = 0;
var obj553_onTouchDown_loopCount = 0;
obj553_onTouchDown_actionGroup0();
});
/*
 *
 *   obj553: Event Show
 *
 */
 
$("#obj553").bind('SCEventShow', function(event) {
	if (window.obj553_onShow_activeActionGroupIndex != -1) return;
var obj553_onShow_runningActionsCount = 0;
var obj553_onShow_loopCount = 0;
obj553_onShow_actionGroup0();
});






/*
 *
 *   obj562: Event Show
 *
 */
 
$("#obj562").bind('SCEventShow', function(event) {
	if (window.obj562_onShow_activeActionGroupIndex != -1) return;
var obj562_onShow_runningActionsCount = 0;
var obj562_onShow_loopCount = 0;
obj562_onShow_actionGroup0();
});






/*
 *
 *   obj566: Event Show
 *
 */
 
$("#obj566").bind('SCEventShow', function(event) {
	if (window.obj566_onShow_activeActionGroupIndex != -1) return;
var obj566_onShow_runningActionsCount = 0;
var obj566_onShow_loopCount = 0;
obj566_onShow_actionGroup0();
});






/*
 *
 *   obj570: Event Show
 *
 */
 
$("#obj570").bind('SCEventShow', function(event) {
	if (window.obj570_onShow_activeActionGroupIndex != -1) return;
var obj570_onShow_runningActionsCount = 0;
var obj570_onShow_loopCount = 0;
obj570_onShow_actionGroup0();
});







/*
 *
 *   obj574: Event Load
 *
 */
setTimeout(function () {
if (window.obj574_onLoad_activeActionGroupIndex != -1) return;
var obj574_onLoad_runningActionsCount = 0;
var obj574_onLoad_loopCount = 0;
obj574_onLoad_actionGroup0();
}, 200);






/*
 *
 *   obj581: Event Load
 *
 */
setTimeout(function () {
if (window.obj581_onLoad_activeActionGroupIndex != -1) return;
var obj581_onLoad_runningActionsCount = 0;
var obj581_onLoad_loopCount = 0;
obj581_onLoad_actionGroup0();
}, 200);






/*
 *
 *   obj2107: Event Load
 *
 */
setTimeout(function () {
if (window.obj2107_onLoad_activeActionGroupIndex != -1) return;
var obj2107_onLoad_runningActionsCount = 0;
var obj2107_onLoad_loopCount = 0;
obj2107_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj2872: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2872");
	var winTarget = document.getElementById("obj2872");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2872").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2872_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2872_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2872_onTouchDown_activeActionGroupIndex != -1) return;
var obj2872_onTouchDown_runningActionsCount = 0;
var obj2872_onTouchDown_loopCount = 0;
obj2872_onTouchDown_actionGroup0();
});



		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj547").trigger('SCEventShow');
$("#obj549").trigger('SCEventShow');
$("#obj553").trigger('SCEventShow');
$("#obj562").trigger('SCEventShow');
$("#obj566").trigger('SCEventShow');
$("#obj570").trigger('SCEventShow');
$("#obj574").trigger('SCEventShow');
$("#obj581").trigger('SCEventShow');
$("#obj2107").trigger('SCEventShow');
$("#obj2872").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
})