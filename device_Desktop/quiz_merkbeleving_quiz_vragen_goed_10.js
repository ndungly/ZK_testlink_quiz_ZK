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
image37996.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj37996Img\" src=\"images/Achtergrond%20quiz_leeg.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1366px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj37996",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_leeg"
	},
	objData:	{"a":[0,288,0,[0,0,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768}}
};
image37998.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj37998Img\" src=\"images/Score_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 378px; height: 165px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 494px; top: 0px; width: 378px; height: 165px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj37998",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Score_bg"
	},
	objData:	{"a":[0,288,0,[494,0,378,165]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":494,"y":0,"width":378,"height":165}}
};
text37999.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 69px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:18pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">Jouw score:\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 17px; width: 200px; height: 69px; z-index: 4;",
	cssClasses:	"jouw-score",
	htmlId:		"tobj37999",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Subtitle quiz score"
	},
	objData:	{"a":[0,32,0,[583,17,200,69]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":17,"width":200,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text38000.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 478px; min-height: 72px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 478px; min-height: 72px;\"><p leglh=\"1.283\" style=\"margin-left:0px;text-indent:0px;line-height:1.283;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:40pt; font-family:\'PT Sans\', sans-serif; color:#002857; \"><strong>" +  Varquiz_score.getValueForDisplay() + "</strong></span><span style=\" font-size:40pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 444px; top: 57px; width: 478px; height: 72px; z-index: 5;",
	cssClasses:	"score",
	htmlId:		"tobj38000",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[444,57,478,72]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":444,"y":57,"width":478,"height":72},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image38002.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj38002Img\" src=\"images/Check_goed.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 355px; height: 404px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 506px; top: 181px; width: 355px; height: 404px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj38002",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Check_goed"
	},
	objData:	{"a":[0,288,0,[506,181,355,404]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":506,"y":181,"width":355,"height":404}}
};
image38004.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj38004Img\" src=\"images/Check_punten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 119px; height: 135px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 625px; top: 614px; width: 119px; height: 135px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj38004",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Check_punten_bg"
	},
	objData:	{"a":[0,288,0,[625,614,119,135]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":625,"y":614,"width":119,"height":135}}
};
text38005.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 281px; min-height: 96px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 281px; min-height: 96px;\"><p leglh=\"1.273\" style=\"margin-left:0px;text-indent:0px;line-height:1.273;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:36pt; font-family:\'PT Sans\', sans-serif; color:#002857; \"><strong>+" +  Varinzet.getValueForDisplay() + "</strong></span><span style=\" font-size:36pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 538px; top: 646px; width: 281px; height: 96px; z-index: 8;",
	cssClasses:	"score",
	htmlId:		"tobj38005",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[538,646,281,96]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":538,"y":646,"width":281,"height":96},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text38006.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 97px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 97px; min-height: 35px;\"><p leglh=\"1.323\" style=\"margin-left:0px;text-indent:0px;line-height:1.323;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:16pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">PUNTEN\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 635px; top: 695px; width: 97px; height: 35px; z-index: 9;",
	cssClasses:	"punten",
	htmlId:		"tobj38006",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Punten"
	},
	objData:	{"a":[0,32,0,[635,695,97,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":635,"y":695,"width":97,"height":35},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	40
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Achtergrond%20quiz_leeg.jpg","images/Score_bg.png","images/Check_punten_bg.png","images/Check_goed.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
