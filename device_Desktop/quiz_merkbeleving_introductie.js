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
textbutton1060.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 59\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29.5)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_838_2577\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"59\" xlink:href=\"images/Button_go.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_838_2577&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 133px; top: 632px; width: 150px; height: 59px; z-index: 5; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1060",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quiz_vragen_quizvraag_1_slider.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[133,632,150,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":133,"y":632,"width":150,"height":59},"imgDataNormal":"images/desktop_shape1060.png","imgDataOver":"images/desktop_shape1060_over.png","imgDataDown":"images/desktop_shape1060.png","imgDataDisabled":"images/desktop_shape1060_disabled.png","svgDataNormal":"<g transform=\"translate(75 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_838_2577\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"59\" xlink:href=\"images/Button_go.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_838_2577&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_838_2579\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"59\" xlink:href=\"images/Button_go_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_838_2579&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_838_2581\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"59\" xlink:href=\"images/Button_go.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_838_2581&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_838_2583\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"59\" xlink:href=\"images/Button_go.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_838_2583&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image29635.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29635Img\" src=\"images/Achtergrond%20quiz_ZK_Intro.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1368px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: -1px; top: 0px; width: 1368px; height: 768px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj29635",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_ZK_Intro"
	},
	objData:	{"a":[0,288,0,[-1,0,1368,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-1,"y":0,"width":1368,"height":768}}
};
text909.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 409px; min-height: 116px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 409px; min-height: 116px;\"><p leglh=\"1.283\" style=\"margin-left:0px;text-indent:0px;line-height:1.283;margin-top:0px;margin-bottom:0px;\" align=\"left\">\n<span style=\" font-size:40pt; font-family:\'Titillium Web\', sans-serif; color:#ffffff; \"><strong>Test je kennis</strong></span><span style=\" font-size:40pt; font-family:\'Titillium Web\', sans-serif; color:#000000;\"> \n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 133px; top: 82px; width: 409px; height: 116px; z-index: 3;",
	cssClasses:	"page-title",
	htmlId:		"tobj909",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,32,0,[133,82,409,116]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":133,"y":82,"width":409,"height":116},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text1003.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 457px; min-height: 586px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 457px; min-height: 586px;\"><p leglh=\"1.323\" style=\"margin-left:0px;text-indent:0px;line-height:1.323;margin-top:0px;margin-bottom:0px;\" align=\"left\">\n<span style=\" font-size:16pt; font-family:\'PT Sans\', sans-serif; color:#ffffff;\">Tijd voor even iets leuks tussendoor! Wat weet je eigenlijk over Zilveren Kruis als organisatie? Best handig om hier wat algemene kennis over te hebben als klantadviseur! Test je kennis met de volgende 10 vragen en verdien zoveel mogelijk punten. \n</span></p>\n<p leglh=\"1.323\" style=\"margin-left:0px;text-indent:0px;line-height:1.323;margin-top:0px;margin-bottom:0px;\" align=\"left\">\n<span style=\" font-size:16pt; font-family:\'PT Sans\', sans-serif; color:#ffffff;\">&nbsp;\n</span></p>\n<p leglh=\"1.323\" style=\"margin-left:0px;text-indent:0px;line-height:1.323;margin-top:0px;margin-bottom:0px;\" align=\"left\">\n<span style=\" font-size:16pt; font-family:\'PT Sans\', sans-serif; color:#ffffff;\">We geven je alvast 100 punten. Per vraag kun je 10, 20 of 30 punten inzetten. Deze punten kun je winnen als je het goed hebt, maar ook verliezen als je het fout hebt. Succes! \n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 133px; top: 185px; width: 457px; height: 586px; z-index: 4;",
	cssClasses:	"body-txt",
	htmlId:		"tobj1003",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text"
	},
	objData:	{"a":[0,32,0,[133,185,457,586]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":133,"y":185,"width":457,"height":586},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	2
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_go.png","images/Button_go_hover.png","images/Achtergrond%20quiz_ZK_Intro.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
