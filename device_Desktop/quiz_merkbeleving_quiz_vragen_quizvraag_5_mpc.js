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
image32988.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj32988Img\" src=\"images/Achtergrond%20quiz_ZK_leeg.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1368px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: -2px; top: 0px; width: 1368px; height: 768px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj32988",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_ZK_leeg"
	},
	objData:	{"a":[0,288,0,[-2,0,1368,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-2,"y":0,"width":1368,"height":768}}
};
image32986.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj32986Img\" src=\"images/Score_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 378px; height: 165px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 494px; top: 0px; width: 378px; height: 165px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj32986",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Score_bg"
	},
	objData:	{"a":[0,288,0,[494,0,378,165]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":494,"y":0,"width":378,"height":165}}
};
text32989.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 69px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:18pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">Jouw score: \n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 17px; width: 200px; height: 69px; z-index: 4;",
	cssClasses:	"jouw-score",
	htmlId:		"tobj32989",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Subtitle quiz score"
	},
	objData:	{"a":[0,32,0,[583,17,200,69]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":17,"width":200,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text32990.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 478px; min-height: 72px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 478px; min-height: 72px;\"><p leglh=\"1.283\" style=\"margin-left:0px;text-indent:0px;line-height:1.283;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:40pt; font-family:\'PT Sans\', sans-serif; color:#002857; \"><strong>" +  Varquiz_score.getValueForDisplay() + " </strong></span><span style=\" font-size:40pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 444px; top: 57px; width: 478px; height: 72px; z-index: 5;",
	cssClasses:	"score",
	htmlId:		"tobj32990",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[444,57,478,72]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":444,"y":57,"width":478,"height":72},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text32991.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 29px;\"><p leglh=\"1.229\" style=\"margin-left:0px;text-indent:0px;line-height:1.229;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'PT Sans\', sans-serif; color:#74c9e2;\">Vraag 5 van de 11</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#74c9e2;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 181px; width: 200px; height: 29px; z-index: 6;",
	cssClasses:	"question-no",
	htmlId:		"tobj32991",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Vraag 5 van 10"
	},
	objData:	{"a":[0,32,0,[583,181,200,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":181,"width":200,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text32992.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 39px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 39px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:18pt; font-family:\'Titillium Web\'; color:#ffffff;\">Sinds wanneer is Zilveren Kruis onderdeel van Achmea?</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 393px; top: 255px; width: 582px; height: 39px; z-index: 7;",
	cssClasses:	"body-txt",
	htmlId:		"tobj32992",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question"
	},
	objData:	{"a":[0,32,0,[393,255,582,39]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":393,"y":255,"width":582,"height":39},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text32993.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 32px;\"><p leglh=\"1.229\" style=\"margin-left:0px;text-indent:0px;line-height:1.229;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'PT Sans\', sans-serif; color:#74c9e2;\">Jouw inzet:</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#74c9e2;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 342px; width: 200px; height: 32px; z-index: 8;",
	cssClasses:	"question-no",
	htmlId:		"tobj32993",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Jouw inzet"
	},
	objData:	{"a":[0,32,0,[583,342,200,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":342,"width":200,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton32998.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 410 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(205 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(205 35.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1949</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 479px; top: 477px; width: 410px; height: 71px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj32998",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:300,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quiz_vragen_fout_5.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[479,477.00000000000006,410,71]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":479,"y":477,"width":410,"height":71},"imgDataNormal":"images/desktop_shape32998.png","imgDataOver":"images/desktop_shape32998_over.png","imgDataDown":"images/desktop_shape32998_over.png","imgDataDisabled":"images/desktop_shape32998_disabled.png","svgDataNormal":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1949</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1949</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1949</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1949</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton33005.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 410 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(205 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(205 35.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1995</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 479px; top: 564px; width: 410px; height: 71px; z-index: 13; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj33005",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.add('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:300,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quiz_vragen_goed_5.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[479,564,410,71]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":479,"y":564,"width":410,"height":71},"imgDataNormal":"images/desktop_shape33005.png","imgDataOver":"images/desktop_shape33005_over.png","imgDataDown":"images/desktop_shape33005_over.png","imgDataDisabled":"images/desktop_shape33005_disabled.png","svgDataNormal":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1995</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1995</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1995</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 1995</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton33012.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 410 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(205 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(205 35.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 2011</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 479px; top: 651px; width: 410px; height: 71px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj33012",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:300,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quiz_vragen_fout_5.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[479,651,410,71]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":479,"y":651,"width":410,"height":71},"imgDataNormal":"images/desktop_shape33012.png","imgDataOver":"images/desktop_shape33012_over.png","imgDataDown":"images/desktop_shape33012_over.png","imgDataDisabled":"images/desktop_shape33012_disabled.png","svgDataNormal":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 2011</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 2011</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 2011</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;1 januari 2011</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton33019.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_32981_2745\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2745&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 566px; top: 380px; width: 64px; height: 66px; z-index: 15; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj33019",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 10",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('10'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Selected',actItem:function(){ image33028.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10Normal',actItem:function(){ textbutton33019.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20',actItem:function(){ image33042.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Normal',actItem:function(){ textbutton33033.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30',actItem:function(){ image33056.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Normal',actItem:function(){ textbutton33047.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[566,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":380,"width":64,"height":66},"imgDataNormal":"images/desktop_shape30482.png","imgDataOver":"images/desktop_shape30482_over.png","imgDataDown":"images/desktop_shape30482_down.png","imgDataDisabled":"images/desktop_shape30482_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2745\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2745&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2747\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2747&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2749\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2749&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2751\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2751&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image33028.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj33028Img\" src=\"images/Inzet_10_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 566px; top: 380px; width: 64px; height: 66px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj33028",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_10_selected"
	},
	objData:	{"a":[0,288,0,[566,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":380,"width":64,"height":66}}
};
textbutton33033.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_32981_2753\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2753&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 651px; top: 380px; width: 64px; height: 66px; z-index: 16; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj33033",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 20",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('20'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Selected',actItem:function(){ image33042.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20Normal',actItem:function(){ textbutton33033.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10',actItem:function(){ image33028.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Normal',actItem:function(){ textbutton33019.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30',actItem:function(){ image33056.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Normal',actItem:function(){ textbutton33047.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[651,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":380,"width":64,"height":66},"imgDataNormal":"images/desktop_shape30496.png","imgDataOver":"images/desktop_shape30496_over.png","imgDataDown":"images/desktop_shape30496_down.png","imgDataDisabled":"images/desktop_shape30496_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2753\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2753&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2755\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2755&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2757\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2757&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2759\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_disabled.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2759&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image33042.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj33042Img\" src=\"images/Inzet_20_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 651px; top: 380px; width: 64px; height: 66px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj33042",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_20_selected"
	},
	objData:	{"a":[0,256,0,[651,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":380,"width":64,"height":66}}
};
textbutton33047.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_32981_2761\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2761&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 736px; top: 380px; width: 64px; height: 66px; z-index: 17; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj33047",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 30",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('30'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Selected',actItem:function(){ image33056.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30Normal',actItem:function(){ textbutton33047.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20',actItem:function(){ image33042.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Normal',actItem:function(){ textbutton33033.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10',actItem:function(){ image33028.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Normal',actItem:function(){ textbutton33019.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[736,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":736,"y":380,"width":64,"height":66},"imgDataNormal":"images/desktop_shape30510.png","imgDataOver":"images/desktop_shape30510_over.png","imgDataDown":"images/desktop_shape30510_down.png","imgDataDisabled":"images/desktop_shape30510_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2761\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2761&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2763\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2763&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2765\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2765&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_32981_2767\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_disabled.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_32981_2767&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image33056.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj33056Img\" src=\"images/Inzet_30_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 736px; top: 380px; width: 64px; height: 66px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj33056",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_30_selected"
	},
	objData:	{"a":[0,256,0,[736,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":736,"y":380,"width":64,"height":66}}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	19
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Inzet_10.png","images/Inzet_10_selected.png","images/Inzet_20.png","images/Inzet_20_disabled.png","images/Inzet_20_selected.png","images/Inzet_30.png","images/Inzet_30_disabled.png","images/Inzet_30_selected.png","images/Score_bg.png","images/Inzet_10_hover.png","images/Inzet_20_hover.png","images/Inzet_30_hover.png","images/Achtergrond%20quiz_ZK_leeg.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
