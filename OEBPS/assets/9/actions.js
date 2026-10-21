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
var obj507_onTouchDown_activeActionGroupIndex = -1;
var obj507_onTouchDown_runningActionsCount = 0;
var obj507_onTouchDown_loopCount = 0;
var obj507_onLoad_activeActionGroupIndex = -1;
var obj507_onLoad_runningActionsCount = 0;
var obj507_onLoad_loopCount = 0;
var obj2900_onTouchDown_activeActionGroupIndex = -1;
var obj2900_onTouchDown_runningActionsCount = 0;
var obj2900_onTouchDown_loopCount = 0;
var obj2976_onTouchDown_activeActionGroupIndex = -1;
var obj2976_onTouchDown_runningActionsCount = 0;
var obj2976_onTouchDown_loopCount = 0;
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
		
obj507_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj507_onTouchDown_activeActionGroupIndex = -1;
		$("#obj507").trigger("obj507_onTouchDown_ended");
		
		return;
	}
	window.obj507_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj507");
//	action: dragDrop
//	target: obj507 
dragDrop_509();
function dragDrop_509() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj507_onTouchDown_runningActionsCount = obj507_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj507');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj507_onTouchDown_runningActionsCount = window.obj507_onTouchDown_runningActionsCount - 1;
if (window.obj507_onTouchDown_runningActionsCount == 0) {
	obj507_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_509 = false;
    	var dropped_id_509;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_509 = true;
					dropped_id_509 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_509) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}










};
obj507_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj507_onTouchDown_activeActionGroupIndex = -1;
		$("#obj507").trigger("obj507_onTouchDown_ended");
		
		return;
	}
	window.obj507_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj507_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj507_onLoad_activeActionGroupIndex = -1;
		$("#obj507").trigger("obj507_onLoad_ended");
		
		return;
	}
	window.obj507_onLoad_activeActionGroupIndex = 0;
	




















//	action: runJqueryAnimation
//	target: obj507 
move_511();
function move_511() {
	window.obj507_onLoad_runningActionsCount = obj507_onLoad_runningActionsCount + 1;

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
	if ($("#obj507").css('box-shadow') == 'none')
$("#obj507").css("box-shadow", "0px 0px 0px 0px rgba(0,0,0,0)");
	$("#obj507").animate({ boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.6078431)'}, 300, easing, function() {
		setTimeout(function() {
			window.obj507_onLoad_runningActionsCount = window.obj507_onLoad_runningActionsCount - 1;
if (window.obj507_onLoad_runningActionsCount == 0) {
	obj507_onLoad_actionGroup1();
}
		}, 1);
	});
}
};
obj507_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj507_onLoad_activeActionGroupIndex = -1;
		$("#obj507").trigger("obj507_onLoad_ended");
		
		return;
	}
	window.obj507_onLoad_activeActionGroupIndex = 1;
	




















};
obj2900_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2900_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2900").trigger("obj2900_onTouchDown_ended");
		
		return;
	}
	window.obj2900_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2 
goToPage_2902();
function goToPage_2902() {
	window.obj2900_onTouchDown_runningActionsCount = obj2900_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../2/page.xhtml');
	window.obj2900_onTouchDown_runningActionsCount = window.obj2900_onTouchDown_runningActionsCount - 1;
if (window.obj2900_onTouchDown_runningActionsCount == 0) {
	obj2900_onTouchDown_actionGroup1();
}
}




















};
obj2900_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2900_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2900").trigger("obj2900_onTouchDown_ended");
		
		return;
	}
	window.obj2900_onTouchDown_activeActionGroupIndex = 1;
	




















};
obj2976_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2976_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2976").trigger("obj2976_onTouchDown_ended");
		
		return;
	}
	window.obj2976_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page10 
goToPage_2978();
function goToPage_2978() {
	window.obj2976_onTouchDown_runningActionsCount = obj2976_onTouchDown_runningActionsCount + 1;
	$(location).attr('href', '../10/page.xhtml');
	window.obj2976_onTouchDown_runningActionsCount = window.obj2976_onTouchDown_runningActionsCount - 1;
if (window.obj2976_onTouchDown_runningActionsCount == 0) {
	obj2976_onTouchDown_actionGroup1();
}
}




















};
obj2976_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2976_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2976").trigger("obj2976_onTouchDown_ended");
		
		return;
	}
	window.obj2976_onTouchDown_activeActionGroupIndex = 1;
	




















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		










/*
 *
 *   obj507: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj507");
	var winTarget = document.getElementById("obj507");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj507").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj507_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj507_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj507_onTouchDown_activeActionGroupIndex != -1) return;
var obj507_onTouchDown_runningActionsCount = 0;
var obj507_onTouchDown_loopCount = 0;
obj507_onTouchDown_actionGroup0();
});

/*
 *
 *   obj507: Event Load
 *
 */
setTimeout(function () {
if (window.obj507_onLoad_activeActionGroupIndex != -1) return;
var obj507_onLoad_runningActionsCount = 0;
var obj507_onLoad_loopCount = 0;
obj507_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj2900: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2900");
	var winTarget = document.getElementById("obj2900");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2900").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2900_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2900_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2900_onTouchDown_activeActionGroupIndex != -1) return;
var obj2900_onTouchDown_runningActionsCount = 0;
var obj2900_onTouchDown_loopCount = 0;
obj2900_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2976: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2976");
	var winTarget = document.getElementById("obj2976");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2976").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2976_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2976_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2976_onTouchDown_activeActionGroupIndex != -1) return;
var obj2976_onTouchDown_runningActionsCount = 0;
var obj2976_onTouchDown_loopCount = 0;
obj2976_onTouchDown_actionGroup0();
});



		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj505").trigger('SCEventShow');
$("#obj507").trigger('SCEventShow');
$("#obj2900").trigger('SCEventShow');
$("#obj2976").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
})