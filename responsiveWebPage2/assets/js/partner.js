var samTag = '<p>- ONLINE 시스템 개발/공급, ONLINE/DLPS 운영(삼성전자, 삼성전자 중국 소주/시안 사업장)<br/>- EDS TEST SYSTEM WEB VERSION 개발/공급<br/>- Inkless Wafer-Map 시스템 개발/공급<br/>- WAPS(Wire-bonder Auto Processing System) 시스템 개발/공급<br/>- SECS I/II & HSMS Communication Driver 개발/공급<br/>- 2D바코드 리더 개발/공급(삼성전자, 삼성전자 중국 소주/시안 사업장)<br/>- IMS PC(E-BOX) 개발/공급<br/>- RCS 시스템 개발/공급(삼성LED 중국 텐진 사업장)</p>';
var pspcTag ='<p>- ONLINE 시스템 개발/공급, MODULE 생산라인 최적화 PROJECT</p>';
var sfaTag = '<p>- 공정 자동화를 위한 SYSTEM 개발/운영<br/><br/>- RCS 시스템 개발/공급<br/><br/>- IMS PC(E-BOX)개발/공급</p>';
var stecoTag = '<p>- SECS I/II & HSMS Communication Driver 개발/공급<br/><br/>- ILB/POTTING/TEST 공정 자동화를 위한 IMS SYSTEM 개발/운영<br/><br/>- IMS & RMS 시스템 개발/공급</p>';
var hanaTag = '<p>- SECS I/II & HSMS Communication Driver 개발/공급<br/><br/>-공정 자동화를 위한 SYSTEM 개발/운영<br/><br/>- D/A, W/B, MOLD를 위한 ONLINE 시스템 개발/공급</p>';

function deleteBorder() {
	$("img").css("border", "none"); 
}

function drawBorder(imageId) {
	$(imageId).css("border", "7px solid #0c3b87");
}
function makePartnerContent(id, tag, imageId) {
	deleteBorder();
	drawBorder(imageId);		
	$("#partnerMain").fadeOut('fast', function(){
		$("#partnerMain").html(tag)
	}).fadeIn("fast");
}

$(document).ready(function() {

    $("#samsung").click(function() {
        makePartnerContent("#samsung", samTag, samsungI);
    })

    $("#steco").click(function() {
       makePartnerContent("#steco", stecoTag, stecoI);
    });

    $("#hana").click(function() {
        makePartnerContent("#hana", hanaTag, hanaI);
    });

    $("#sfa").click(function() {
        makePartnerContent("#sfa", sfaTag, sfaI);
    });

    $("#pspc").click(function() {
        makePartnerContent("#pspc", pspcTag, pspcI);
    });
});