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
image31147.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj31147Img\" src=\"images/Achtergrond%20quiz_ZK_Feedback1.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1369px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1369px; height: 768px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj31147",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_ZK_Feedback1"
	},
	objData:	{"a":[0,288,0,[0,0,1369,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1369,"height":768}}
};
text30591.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 589px; min-height: 457px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 589px; min-height: 457px;\"><p leglh=\"1.276\" style=\"margin-left:0px;text-indent:0px;line-height:1.276;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:20pt; font-family:\'Calibri\', sans-serif; color:#000000;\">Bij Zilveren Kruis werken ongeveer </span><span style=\" font-size:32pt; font-family:\'Calibri\', sans-serif; color:#000000; \"><strong>4.000 collega\'s</strong></span><span style=\" font-size:20pt; font-family:\'Calibri\', sans-serif; color:#000000;\">, waarvan </span><span style=\" font-size:20pt; font-family:\'Calibri\', sans-serif; color:#000000; \"><strong>500 uitzendkrachten</strong></span><span style=\" font-size:20pt; font-family:\'Calibri\', sans-serif; color:#000000;\">. Het grootste onderdeel is </span><span style=\" font-size:32pt; font-family:\'Calibri\', sans-serif; color:#000000; \"><strong>Operations: 800 medewerkers</strong></span><span style=\" font-size:20pt; font-family:\'Calibri\', sans-serif; color:#000000;\">, daarna</span><span style=\" font-size:20pt; font-family:\'Calibri\', sans-serif; color:#000000; \"><strong> </strong></span><span style=\" font-size:32pt; font-family:\'Calibri\', sans-serif; color:#000000; \"><strong>Klant Contact met 600 medewerkers</strong></span><span style=\" font-size:32pt; font-family:\'Calibri\', sans-serif; color:#000000;\">.</span><span style=\" font-size:20pt; font-family:\'Calibri\', sans-serif; color:#000000;\"> Dit is exclusief </span><span style=\" font-size:20pt; font-family:\'Calibri\', sans-serif; color:#000000;\">medewerkers bij externe contactcenters.</span><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 225px; top: 152px; width: 589px; height: 457px; z-index: 3;",
	cssClasses:	"feedback-text",
	htmlId:		"tobj30591",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Feedback text"
	},
	objData:	{"a":[0,32,0,[225,152,589,457]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":225,"y":152,"width":589,"height":457},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton30596.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 61 62\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30.5 31)\" style=\"\">\n	<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_30590_2609\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30590_2609&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30.5 31)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 656px; top: 523px; width: 61px; height: 62px; z-index: 4; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30596",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quiz_vragen_quizvraag_2_stelling.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[656,523,61,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":656,"y":523,"width":61,"height":62},"imgDataNormal":"images/desktop_shape30596.png","imgDataOver":"images/desktop_shape30596_over.png","imgDataDown":"images/desktop_shape30596.png","imgDataDisabled":"images/desktop_shape30596_disabled.png","svgDataNormal":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30590_2609\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30590_2609&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30590_2611\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30590_2611&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30590_2613\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30590_2613&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30590_2615\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30590_2615&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	6
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Verder_roze.png","images/Verder_roze_hover.png","images/Achtergrond%20quiz_ZK_Feedback1.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
