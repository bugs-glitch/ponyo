// JavaScript Document

var chromeColor="#003399";
var chromeWidth=994;

var legalFooterColor="#a1a1a1";

var legalFtrCpyRgt="&copy; 2009 Nibariki-GNDHDDT &copy; 2008 Nibariki-GNDHDDT.";

ratingsDisclaimerFont="#000";
ratingsDisclaimerBackground="#FFF";
ratingsDisclaimerBorder="#000";

var legalFtrOpts=["Register","http://transfer.go.com/cgi/transfer.dll?srvc=dis&goto=https://register.go.com/wdpictures/chooseAge&name=g_legalFooter_register","Guest Services","http://transfer.go.com/cgi/transfer.dll?srvc=dis&goto=https://register.go.com/wdpictures/lists&name=g_legalFooter_guestservices","Help","http://transfer.go.com/cgi/transfer.dll?srvc=dis&goto=http://home.disney.go.com/guestservices/faqs"]

function openSurvey(doh){
	if(screen.height==768){
		window.open(doh,'survey','width=713,height=680,scrollbars=1');
	}else if(screen.height<768){
		window.open(doh,'survey','width=713,height=520,scrollbars=1');
	}else{window.open(doh,'survey','width=700,height=700');}
}