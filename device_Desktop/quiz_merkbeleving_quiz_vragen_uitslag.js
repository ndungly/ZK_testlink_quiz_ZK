if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og29538.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og29538",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image39415.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39415Img\" src=\"images/Achtergrond%20quiz_leeg.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1366px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj39415",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_leeg"
	},
	objData:	{"a":[0,288,0,[0,0,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768}}
};
textbutton39416.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 186 57\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(93 28.5)\" style=\"\">\n	<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_39413_3001\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_39413_3001&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(93 28.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 591px; top: 651px; width: 186px; height: 57px; z-index: 42; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39416",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sluit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('quiz_merkbeleving_zk.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[591,651,186,57]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":591,"y":651,"width":186,"height":57},"imgDataNormal":"images/desktop_shape39416.png","imgDataOver":"images/desktop_shape39416_over.png","imgDataDown":"images/desktop_shape39416.png","imgDataDisabled":"images/desktop_shape39416_disabled.png","svgDataNormal":"<g transform=\"translate(93 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_39413_3001\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_39413_3001&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(93 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(93 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_39413_3003\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_39413_3003&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(93 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(93 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_39413_3005\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_39413_3005&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(93 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(93 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_39413_3007\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_39413_3007&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(93 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og39418.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og39418",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image39419.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39419Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 268px; top: 336px; width: 280px; height: 305px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj39419",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,288,0,[268,336,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":268,"y":336,"width":280,"height":305}}
};
text39420.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">0-99</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 308px; top: 445px; width: 198px; height: 65px; z-index: 4;",
	cssClasses:	"score",
	htmlId:		"tobj39420",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[308,445,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":308,"y":445,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text39421.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 308px; top: 489px; width: 198px; height: 65px; z-index: 5;",
	cssClasses:	"score",
	htmlId:		"tobj39421",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[308,489,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":308,"y":489,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape39422.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 212 212\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(106 106)\" style=\"\">\n	<path d=\"M 0 106 A 106 106 0 1 1 212 106 A 106 106 0 1 1 0 106 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-106, -105.99999999999999) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(106 106)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 302px; top: 380px; width: 212px; height: 212px; z-index: 6; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39422",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og39455.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39418.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39429.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39440.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton39416.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[302,380,212,212]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":302,"y":380,"width":212,"height":212},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39422.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og39429.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og39429",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image39430.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39430Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 543px; top: 336px; width: 280px; height: 305px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj39430",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,288,0,[543,336,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":336,"width":280,"height":305}}
};
text39431.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">100-199</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 584px; top: 445px; width: 198px; height: 65px; z-index: 8;",
	cssClasses:	"score",
	htmlId:		"tobj39431",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[584,445,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":584,"y":445,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text39432.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 584px; top: 489px; width: 198px; height: 65px; z-index: 9;",
	cssClasses:	"score",
	htmlId:		"tobj39432",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[584,489,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":584,"y":489,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape39433.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 212 212\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(106 106)\" style=\"\">\n	<path d=\"M 0 106 A 106 106 0 1 1 212 106 A 106 106 0 1 1 0 106 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-106, -105.99999999999999) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(106 106)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 575px; top: 380px; width: 212px; height: 212px; z-index: 10; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39433",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og39470.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39418.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39429.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39440.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton39416.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[575,380,212,212]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":575,"y":380,"width":212,"height":212},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39422.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og39440.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og39440",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image39441.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39441Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 817px; top: 336px; width: 280px; height: 305px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj39441",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,288,0,[817,336,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":817,"y":336,"width":280,"height":305}}
};
text39442.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">200+</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 857px; top: 445px; width: 198px; height: 65px; z-index: 12;",
	cssClasses:	"score",
	htmlId:		"tobj39442",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[857,445,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":857,"y":445,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text39443.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 857px; top: 489px; width: 198px; height: 65px; z-index: 13;",
	cssClasses:	"score",
	htmlId:		"tobj39443",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[857,489,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":857,"y":489,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape39444.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 212 212\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(106 106)\" style=\"\">\n	<path d=\"M 0 106 A 106 106 0 1 1 212 106 A 106 106 0 1 1 0 106 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-106, -105.99999999999999) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(106 106)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 850px; top: 380px; width: 212px; height: 212px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39444",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og39485.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39418.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39429.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39440.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton39416.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[850,380,212,212]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":850,"y":380,"width":212,"height":212},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39422.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og39451.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og39451",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text39452.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 675px; min-height: 130px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 675px; min-height: 130px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:72pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">" +  Varquiz_score.getValueForDisplay() + " </span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 344px; top: 104px; width: 675px; height: 130px; z-index: 15;",
	cssClasses:	"score",
	htmlId:		"tobj39452",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[344,104,675,130]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":344,"y":104,"width":675,"height":130},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text39453.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 100px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 100px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">Lees hieronder wat je eindscore zegt over jouw kennis van Zilveren Kruis.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 390px; top: 246px; width: 582px; height: 100px; z-index: 16;",
	cssClasses:	"body-txt",
	htmlId:		"tobj39453",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text"
	},
	objData:	{"a":[0,32,0,[390,246,582,100]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":246,"width":582,"height":100},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text39454.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 50px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">Jouw score:</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 390px; top: 72px; width: 582px; height: 50px; z-index: 17;",
	cssClasses:	"body-txt",
	htmlId:		"tobj39454",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Jouw score"
	},
	objData:	{"a":[0,32,0,[390,72,582,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":582,"height":50},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og39455.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og39455",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape39456.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 768\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 384)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 768 L 0 768 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -384) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 384)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 1.7053e-13px; width: 1366px; height: 768px; z-index: 18; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39456",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,1.7053025658242404e-13,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39456.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.5;\">"}
};
shape39457.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 870 365\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(435 182.5)\" style=\"\">\n	<path d=\"M 6.48 0 L 863.52 0 A 6.48 6.48 0 0 1 870 6.48 L 870 358.52 A 6.48 6.48 0 0 1 863.52 365 L 6.48 365 A 6.48 6.48 0 0 1 0 358.52 L 0 6.48 A 6.48 6.48 0 0 1 6.48 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-435, -182.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(435 182.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 248px; top: 253px; width: 870px; height: 365px; z-index: 19; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39457",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[247.99999999999994,253.0000000000001,870,365]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":248,"y":253,"width":870,"height":365},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39457.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image39458.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39458Img\" src=\"images/Close.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 29px; height: 29px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1055px; top: 285px; width: 29px; height: 29px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj39458",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Close"
	},
	objData:	{"a":[0,256,0,[1055,285,29,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1055,"y":285,"width":29,"height":29}}
};
shape39459.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 58 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(29 28)\" style=\"\">\n	<path d=\"M 0 0 L 58 0 L 58 56 L 0 56 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -28) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29 28)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1041px; top: 271px; width: 58px; height: 56px; z-index: 21; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39459",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39455.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowTxts',actItem:function(){ og39451.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow1',actItem:function(){ og39418.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow2',actItem:function(){ og39429.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow3',actItem:function(){ og39440.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowClose',actItem:function(){ textbutton39416.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1041,271,58,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1041,"y":271,"width":58,"height":56},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39459.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text39466.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 126px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 126px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span><span style=\"font-size: 18pt; font-family: &quot;Titillium Web&quot;, &quot;Titillium Web&quot;;\">Helaas nog geen topscore voor jou! Maar maak je niet druk, door je werk als klantadviseur krijg je snel meer gevoel bij onze organisatie. </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 391px; top: 411px; width: 582px; height: 126px; z-index: 22;",
	cssClasses:	"body-txt-blue",
	htmlId:		"tobj39466",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text"
	},
	objData:	{"a":[0,0,0,[391,411,582,126]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":391,"y":411,"width":582,"height":126},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image39467.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39467Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 543px; top: 101px; width: 280px; height: 305px; z-index: 23;",
	cssClasses:	"",
	htmlId:		"tobj39467",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,256,0,[543,101,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":101,"width":280,"height":305}}
};
text39468.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">0-99</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 208px; width: 198px; height: 65px; z-index: 24;",
	cssClasses:	"score",
	htmlId:		"tobj39468",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,208,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":208,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text39469.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 252px; width: 198px; height: 65px; z-index: 25;",
	cssClasses:	"score",
	htmlId:		"tobj39469",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,252,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":252,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og39470.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og39470",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape39471.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 768\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 384)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 768 L 0 768 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -384) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 384)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 1.7053e-13px; width: 1366px; height: 768px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39471",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,1.7053025658242404e-13,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39456.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.5;\">"}
};
shape39472.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 870 365\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(435 182.5)\" style=\"\">\n	<path d=\"M 6.48 0 L 863.52 0 A 6.48 6.48 0 0 1 870 6.48 L 870 358.52 A 6.48 6.48 0 0 1 863.52 365 L 6.48 365 A 6.48 6.48 0 0 1 0 358.52 L 0 6.48 A 6.48 6.48 0 0 1 6.48 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-435, -182.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(435 182.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 248px; top: 253px; width: 870px; height: 365px; z-index: 27; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39472",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[247.99999999999994,253.0000000000001,870,365]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":248,"y":253,"width":870,"height":365},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39457.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image39473.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39473Img\" src=\"images/Close.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 29px; height: 29px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1055px; top: 285px; width: 29px; height: 29px; z-index: 28;",
	cssClasses:	"",
	htmlId:		"tobj39473",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Close"
	},
	objData:	{"a":[0,256,0,[1055,285,29,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1055,"y":285,"width":29,"height":29}}
};
shape39474.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 58 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(29 28)\" style=\"\">\n	<path d=\"M 0 0 L 58 0 L 58 56 L 0 56 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -28) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29 28)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1041px; top: 271px; width: 58px; height: 56px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39474",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39470.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowTxts',actItem:function(){ og39451.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow1',actItem:function(){ og39418.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow2',actItem:function(){ og39429.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow3',actItem:function(){ og39440.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowClose',actItem:function(){ textbutton39416.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1041,271,58,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1041,"y":271,"width":58,"height":56},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39459.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text39481.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 126px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 126px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span><span style=\"font-size: 18pt; font-family: &quot;Titillium Web&quot;, &quot;Titillium Web&quot;;\">Lekker bezig! Je bent al aardig thuis binnen onze organisatie. Dat helpt je om te snappen waar onze klanten Zilveren Kruis over bellen.<span style=\"color: rgb(0, 40, 87);\"> </span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 391px; top: 411px; width: 582px; height: 126px; z-index: 30;",
	cssClasses:	"body-txt-blue",
	htmlId:		"tobj39481",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text"
	},
	objData:	{"a":[0,0,0,[391,411,582,126]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":391,"y":411,"width":582,"height":126},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image39482.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39482Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 543px; top: 101px; width: 280px; height: 305px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj39482",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,256,0,[543,101,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":101,"width":280,"height":305}}
};
text39483.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">100-199</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 208px; width: 198px; height: 65px; z-index: 32;",
	cssClasses:	"score",
	htmlId:		"tobj39483",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,208,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":208,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text39484.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 252px; width: 198px; height: 65px; z-index: 33;",
	cssClasses:	"score",
	htmlId:		"tobj39484",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,252,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":252,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og39485.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og39485",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape39486.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 768\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 384)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 768 L 0 768 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -384) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 384)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 1.7053e-13px; width: 1366px; height: 768px; z-index: 34; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39486",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,1.7053025658242404e-13,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39456.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.5;\">"}
};
shape39487.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 870 365\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(435 182.5)\" style=\"\">\n	<path d=\"M 6.48 0 L 863.52 0 A 6.48 6.48 0 0 1 870 6.48 L 870 358.52 A 6.48 6.48 0 0 1 863.52 365 L 6.48 365 A 6.48 6.48 0 0 1 0 358.52 L 0 6.48 A 6.48 6.48 0 0 1 6.48 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-435, -182.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(435 182.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 248px; top: 253px; width: 870px; height: 365px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39487",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[247.99999999999994,253.0000000000001,870,365]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":248,"y":253,"width":870,"height":365},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39457.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image39488.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39488Img\" src=\"images/Close.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 29px; height: 29px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1055px; top: 285px; width: 29px; height: 29px; z-index: 36;",
	cssClasses:	"",
	htmlId:		"tobj39488",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Close"
	},
	objData:	{"a":[0,256,0,[1055,285,29,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1055,"y":285,"width":29,"height":29}}
};
shape39489.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 58 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(29 28)\" style=\"\">\n	<path d=\"M 0 0 L 58 0 L 58 56 L 0 56 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -28) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29 28)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1041px; top: 271px; width: 58px; height: 56px; z-index: 37; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj39489",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og39485.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowTxts',actItem:function(){ og39451.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow1',actItem:function(){ og39418.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow2',actItem:function(){ og39429.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow3',actItem:function(){ og39440.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowClose',actItem:function(){ textbutton39416.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1041,271,58,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1041,"y":271,"width":58,"height":56},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape39459.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text39496.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 126px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 126px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span><span style=\"font-size: 18pt; font-family: &quot;Titillium Web&quot;, &quot;Titillium Web&quot;;\">Puik werk! Met jouw kennis van Zilveren Kruis zit het wel goed. Heel handig, want dit helpt je om te snappen waar onze klanten Zilveren Kruis over bellen.&nbsp; </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 391px; top: 411px; width: 582px; height: 126px; z-index: 38;",
	cssClasses:	"body-txt-blue",
	htmlId:		"tobj39496",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text"
	},
	objData:	{"a":[0,0,0,[391,411,582,126]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":391,"y":411,"width":582,"height":126},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image39497.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj39497Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 543px; top: 101px; width: 280px; height: 305px; z-index: 39;",
	cssClasses:	"",
	htmlId:		"tobj39497",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,256,0,[543,101,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":101,"width":280,"height":305}}
};
text39498.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">200+</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 208px; width: 198px; height: 65px; z-index: 40;",
	cssClasses:	"score",
	htmlId:		"tobj39498",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,208,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":208,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text39499.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 252px; width: 198px; height: 65px; z-index: 41;",
	cssClasses:	"score",
	htmlId:		"tobj39499",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,252,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":252,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	47
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Achtergrond%20quiz_leeg.jpg","images/Resultaten_bg.png","images/Button_sluit%20quiz.png","images/Button_sluit%20quiz_hover.png","images/Close.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
