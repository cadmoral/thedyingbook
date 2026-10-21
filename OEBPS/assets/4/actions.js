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
var obj352_onTouchDown_activeActionGroupIndex = -1;
var obj352_onTouchDown_runningActionsCount = 0;
var obj352_onTouchDown_loopCount = 0;
var obj355_onTouchDown_activeActionGroupIndex = -1;
var obj355_onTouchDown_runningActionsCount = 0;
var obj355_onTouchDown_loopCount = 0;
var obj358_onTouchDown_activeActionGroupIndex = -1;
var obj358_onTouchDown_runningActionsCount = 0;
var obj358_onTouchDown_loopCount = 0;
var obj361_onTouchDown_activeActionGroupIndex = -1;
var obj361_onTouchDown_runningActionsCount = 0;
var obj361_onTouchDown_loopCount = 0;
var obj364_onTouchDown_activeActionGroupIndex = -1;
var obj364_onTouchDown_runningActionsCount = 0;
var obj364_onTouchDown_loopCount = 0;
var obj367_onShow_activeActionGroupIndex = -1;
var obj367_onShow_runningActionsCount = 0;
var obj367_onShow_loopCount = 0;
var obj374_onShow_activeActionGroupIndex = -1;
var obj374_onShow_runningActionsCount = 0;
var obj374_onShow_loopCount = 0;
var obj378_onShow_activeActionGroupIndex = -1;
var obj378_onShow_runningActionsCount = 0;
var obj378_onShow_loopCount = 0;
var obj382_onShow_activeActionGroupIndex = -1;
var obj382_onShow_runningActionsCount = 0;
var obj382_onShow_loopCount = 0;
var obj386_onShow_activeActionGroupIndex = -1;
var obj386_onShow_runningActionsCount = 0;
var obj386_onShow_loopCount = 0;
var obj2878_onTouchDown_activeActionGroupIndex = -1;
var obj2878_onTouchDown_runningActionsCount = 0;
var obj2878_onTouchDown_loopCount = 0;
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
		
obj352_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj352_onTouchDown_activeActionGroupIndex = -1;
		$("#obj352").trigger("obj352_onTouchDown_ended");
		
		return;
	}
	window.obj352_onTouchDown_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj367 
show_354();
function show_354() {
	window.obj352_onTouchDown_runningActionsCount = obj352_onTouchDown_runningActionsCount + 1;
	$("#obj367").fadeIn(0, function() {
			setTimeout(function() {
				window.obj352_onTouchDown_runningActionsCount = window.obj352_onTouchDown_runningActionsCount - 1;
if (window.obj352_onTouchDown_runningActionsCount == 0) {
	obj352_onTouchDown_actionGroup1();
}
				$("#obj367").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj352_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj352_onTouchDown_activeActionGroupIndex = -1;
		$("#obj352").trigger("obj352_onTouchDown_ended");
		
		return;
	}
	window.obj352_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj355_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj355_onTouchDown_activeActionGroupIndex = -1;
		$("#obj355").trigger("obj355_onTouchDown_ended");
		
		return;
	}
	window.obj355_onTouchDown_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj374 
show_357();
function show_357() {
	window.obj355_onTouchDown_runningActionsCount = obj355_onTouchDown_runningActionsCount + 1;
	$("#obj374").fadeIn(0, function() {
			setTimeout(function() {
				window.obj355_onTouchDown_runningActionsCount = window.obj355_onTouchDown_runningActionsCount - 1;
if (window.obj355_onTouchDown_runningActionsCount == 0) {
	obj355_onTouchDown_actionGroup1();
}
				$("#obj374").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj355_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj355_onTouchDown_activeActionGroupIndex = -1;
		$("#obj355").trigger("obj355_onTouchDown_ended");
		
		return;
	}
	window.obj355_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj358_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj358_onTouchDown_activeActionGroupIndex = -1;
		$("#obj358").trigger("obj358_onTouchDown_ended");
		
		return;
	}
	window.obj358_onTouchDown_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj378 
show_360();
function show_360() {
	window.obj358_onTouchDown_runningActionsCount = obj358_onTouchDown_runningActionsCount + 1;
	$("#obj378").fadeIn(0, function() {
			setTimeout(function() {
				window.obj358_onTouchDown_runningActionsCount = window.obj358_onTouchDown_runningActionsCount - 1;
if (window.obj358_onTouchDown_runningActionsCount == 0) {
	obj358_onTouchDown_actionGroup1();
}
				$("#obj378").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj358_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj358_onTouchDown_activeActionGroupIndex = -1;
		$("#obj358").trigger("obj358_onTouchDown_ended");
		
		return;
	}
	window.obj358_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj361_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj361_onTouchDown_activeActionGroupIndex = -1;
		$("#obj361").trigger("obj361_onTouchDown_ended");
		
		return;
	}
	window.obj361_onTouchDown_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj382 
show_363();
function show_363() {
	window.obj361_onTouchDown_runningActionsCount = obj361_onTouchDown_runningActionsCount + 1;
	$("#obj382").fadeIn(0, function() {
			setTimeout(function() {
				window.obj361_onTouchDown_runningActionsCount = window.obj361_onTouchDown_runningActionsCount - 1;
if (window.obj361_onTouchDown_runningActionsCount == 0) {
	obj361_onTouchDown_actionGroup1();
}
				$("#obj382").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj361_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj361_onTouchDown_activeActionGroupIndex = -1;
		$("#obj361").trigger("obj361_onTouchDown_ended");
		
		return;
	}
	window.obj361_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj364_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj364_onTouchDown_activeActionGroupIndex = -1;
		$("#obj364").trigger("obj364_onTouchDown_ended");
		
		return;
	}
	window.obj364_onTouchDown_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj386 
show_366();
function show_366() {
	window.obj364_onTouchDown_runningActionsCount = obj364_onTouchDown_runningActionsCount + 1;
	$("#obj386").fadeIn(0, function() {
			setTimeout(function() {
				window.obj364_onTouchDown_runningActionsCount = window.obj364_onTouchDown_runningActionsCount - 1;
if (window.obj364_onTouchDown_runningActionsCount == 0) {
	obj364_onTouchDown_actionGroup1();
}
				$("#obj386").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj364_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj364_onTouchDown_activeActionGroupIndex = -1;
		$("#obj364").trigger("obj364_onTouchDown_ended");
		
		return;
	}
	window.obj364_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj367_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj367_onShow_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onShow_ended");
		
		return;
	}
	window.obj367_onShow_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj367 
hide_373();
function hide_373() {
	window.obj367_onShow_runningActionsCount = obj367_onShow_runningActionsCount + 1;
	$("#obj367").fadeOut(11000, function() {
			setTimeout(function() {
				window.obj367_onShow_runningActionsCount = window.obj367_onShow_runningActionsCount - 1;
if (window.obj367_onShow_runningActionsCount == 0) {
	obj367_onShow_actionGroup1();
}
			}, 1);
		}
	);
}



















};
obj367_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj367_onShow_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onShow_ended");
		
		return;
	}
	window.obj367_onShow_activeActionGroupIndex = 1;
	




















};
obj374_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj374_onShow_activeActionGroupIndex = -1;
		$("#obj374").trigger("obj374_onShow_ended");
		
		return;
	}
	window.obj374_onShow_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj374 
hide_377();
function hide_377() {
	window.obj374_onShow_runningActionsCount = obj374_onShow_runningActionsCount + 1;
	$("#obj374").fadeOut(8000, function() {
			setTimeout(function() {
				window.obj374_onShow_runningActionsCount = window.obj374_onShow_runningActionsCount - 1;
if (window.obj374_onShow_runningActionsCount == 0) {
	obj374_onShow_actionGroup1();
}
			}, 1);
		}
	);
}



















};
obj374_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj374_onShow_activeActionGroupIndex = -1;
		$("#obj374").trigger("obj374_onShow_ended");
		
		return;
	}
	window.obj374_onShow_activeActionGroupIndex = 1;
	




















};
obj378_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj378_onShow_activeActionGroupIndex = -1;
		$("#obj378").trigger("obj378_onShow_ended");
		
		return;
	}
	window.obj378_onShow_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj378 
hide_381();
function hide_381() {
	window.obj378_onShow_runningActionsCount = obj378_onShow_runningActionsCount + 1;
	$("#obj378").fadeOut(9000, function() {
			setTimeout(function() {
				window.obj378_onShow_runningActionsCount = window.obj378_onShow_runningActionsCount - 1;
if (window.obj378_onShow_runningActionsCount == 0) {
	obj378_onShow_actionGroup1();
}
			}, 1);
		}
	);
}



















};
obj378_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj378_onShow_activeActionGroupIndex = -1;
		$("#obj378").trigger("obj378_onShow_ended");
		
		return;
	}
	window.obj378_onShow_activeActionGroupIndex = 1;
	




















};
obj382_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj382_onShow_activeActionGroupIndex = -1;
		$("#obj382").trigger("obj382_onShow_ended");
		
		return;
	}
	window.obj382_onShow_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj382 
hide_385();
function hide_385() {
	window.obj382_onShow_runningActionsCount = obj382_onShow_runningActionsCount + 1;
	$("#obj382").fadeOut(11000, function() {
			setTimeout(function() {
				window.obj382_onShow_runningActionsCount = window.obj382_onShow_runningActionsCount - 1;
if (window.obj382_onShow_runningActionsCount == 0) {
	obj382_onShow_actionGroup1();
}
			}, 1);
		}
	);
}



















};
obj382_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj382_onShow_activeActionGroupIndex = -1;
		$("#obj382").trigger("obj382_onShow_ended");
		
		return;
	}
	window.obj382_onShow_activeActionGroupIndex = 1;
	




















};
obj386_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj386_onShow_activeActionGroupIndex = -1;
		$("#obj386").trigger("obj386_onShow_ended");
		
		return;
	}
	window.obj386_onShow_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj386 
hide_389();
function hide_389() {
	window.obj386_onShow_runningActionsCount = obj386_onShow_runningActionsCount + 1;
	$("#obj386").fadeOut(8000, function() {
			setTimeout(function() {
				window.obj386_onShow_runningActionsCount = window.obj386_onShow_runningActionsCount - 1;
if (window.obj386_onShow_runningActionsCount == 0) {
	obj386_onShow_actionGroup1();
}
			}, 1);
		}
	);
}



















};
obj386_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj386_onShow_activeActionGroupIndex = -1;
		$("#obj386").trigger("obj386_onShow_ended");
		
		return;
	}
	window.obj386_onShow_activeActionGroupIndex = 1;
	




















};
obj2878_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2878_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2878").trigger("obj2878_onTouchDown_ended");
		
		return;
	}
	window.obj2878_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2 
goToPage_2894();
function goToPage_2894() {
	window.obj2878_onTouchDown_runningActionsCount = obj2878_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../2/page.xhtml');
	window.obj2878_onTouchDown_runningActionsCount = window.obj2878_onTouchDown_runningActionsCount - 1;
if (window.obj2878_onTouchDown_runningActionsCount == 0) {
	obj2878_onTouchDown_actionGroup1();
}
}




















};
obj2878_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2878_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2878").trigger("obj2878_onTouchDown_ended");
		
		return;
	}
	window.obj2878_onTouchDown_activeActionGroupIndex = 1;
	




















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		























































/*
 *
 *   obj352: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj352");
	var winTarget = document.getElementById("obj352");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj352").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj352_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj352_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj352_onTouchDown_activeActionGroupIndex != -1) return;
var obj352_onTouchDown_runningActionsCount = 0;
var obj352_onTouchDown_loopCount = 0;
obj352_onTouchDown_actionGroup0();
});






/*
 *
 *   obj355: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj355");
	var winTarget = document.getElementById("obj355");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj355").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj355_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj355_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj355_onTouchDown_activeActionGroupIndex != -1) return;
var obj355_onTouchDown_runningActionsCount = 0;
var obj355_onTouchDown_loopCount = 0;
obj355_onTouchDown_actionGroup0();
});






/*
 *
 *   obj358: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj358");
	var winTarget = document.getElementById("obj358");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj358").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj358_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj358_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj358_onTouchDown_activeActionGroupIndex != -1) return;
var obj358_onTouchDown_runningActionsCount = 0;
var obj358_onTouchDown_loopCount = 0;
obj358_onTouchDown_actionGroup0();
});






/*
 *
 *   obj361: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj361");
	var winTarget = document.getElementById("obj361");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj361").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj361_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj361_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj361_onTouchDown_activeActionGroupIndex != -1) return;
var obj361_onTouchDown_runningActionsCount = 0;
var obj361_onTouchDown_loopCount = 0;
obj361_onTouchDown_actionGroup0();
});






/*
 *
 *   obj364: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj364");
	var winTarget = document.getElementById("obj364");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj364").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj364_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj364_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj364_onTouchDown_activeActionGroupIndex != -1) return;
var obj364_onTouchDown_runningActionsCount = 0;
var obj364_onTouchDown_loopCount = 0;
obj364_onTouchDown_actionGroup0();
});







/*
 *
 *   obj367: Event Show
 *
 */
 
$("#obj367").bind('SCEventShow', function(event) {
	if (window.obj367_onShow_activeActionGroupIndex != -1) return;
var obj367_onShow_runningActionsCount = 0;
var obj367_onShow_loopCount = 0;
obj367_onShow_actionGroup0();
});






/*
 *
 *   obj374: Event Show
 *
 */
 
$("#obj374").bind('SCEventShow', function(event) {
	if (window.obj374_onShow_activeActionGroupIndex != -1) return;
var obj374_onShow_runningActionsCount = 0;
var obj374_onShow_loopCount = 0;
obj374_onShow_actionGroup0();
});






/*
 *
 *   obj378: Event Show
 *
 */
 
$("#obj378").bind('SCEventShow', function(event) {
	if (window.obj378_onShow_activeActionGroupIndex != -1) return;
var obj378_onShow_runningActionsCount = 0;
var obj378_onShow_loopCount = 0;
obj378_onShow_actionGroup0();
});






/*
 *
 *   obj382: Event Show
 *
 */
 
$("#obj382").bind('SCEventShow', function(event) {
	if (window.obj382_onShow_activeActionGroupIndex != -1) return;
var obj382_onShow_runningActionsCount = 0;
var obj382_onShow_loopCount = 0;
obj382_onShow_actionGroup0();
});






/*
 *
 *   obj386: Event Show
 *
 */
 
$("#obj386").bind('SCEventShow', function(event) {
	if (window.obj386_onShow_activeActionGroupIndex != -1) return;
var obj386_onShow_runningActionsCount = 0;
var obj386_onShow_loopCount = 0;
obj386_onShow_actionGroup0();
});






/*
 *
 *   obj2878: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2878");
	var winTarget = document.getElementById("obj2878");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2878").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2878_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2878_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2878_onTouchDown_activeActionGroupIndex != -1) return;
var obj2878_onTouchDown_runningActionsCount = 0;
var obj2878_onTouchDown_loopCount = 0;
obj2878_onTouchDown_actionGroup0();
});



		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj2981").trigger('SCEventShow');
$("#obj338").trigger('SCEventShow');
$("#obj340").trigger('SCEventShow');
$("#obj342").trigger('SCEventShow');
$("#obj344").trigger('SCEventShow');
$("#obj346").trigger('SCEventShow');
$("#obj348").trigger('SCEventShow');
$("#obj350").trigger('SCEventShow');
$("#obj352").trigger('SCEventShow');
$("#obj355").trigger('SCEventShow');
$("#obj358").trigger('SCEventShow');
$("#obj361").trigger('SCEventShow');
$("#obj364").trigger('SCEventShow');
$("#obj2878").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
})