var scopeTag = '<p><img src="images/businessScope.png" style="align:center;" alt="" width="600" height="300" /><br/><br/><br/><p style="color:#0c3b87;">ACETECH Business Scope</p></p>'
var communicationTag = '<p>- SECS I/II : Semiconductor Equipment Communication Standard</p><p>- HSMS : High Speed SECS Message Service : by SEMI</p><p>(Semiconductor Equipment and Material Institute)</p><p>- TCP/IP</p><p>- PLC</p><p>- RS-232&RS-422 : Transfer Data using Serial Port</p>';
var lineTag = '<p>- 반도체 생산라인 자동화</p><br/><p>Inkless Wafer-map System</p><div style="margin:0 auto;"><div style="display:inline-block;"><p><img class="image center" src="images/inkless1.png"/><br/>Inkless 시스템 맵</p></div><div style="display:inline-block;"><p><img class="image center" src="images/inkless2.png"/><br/>장비 작동</p></div></div><br/><p>WAPS System</p><div style="margin:0 auto;"><div style="display:inline-block;"><p><img class="image center" src="images/waps1.png"/><br/>Master Bonding Coordinate</p></div><div style="display:inline-block;"><p><img class="image center" src="images/waps2.png"/><br/>Bonding Work</p></div></div>';
var atomTag = '<p>- ATOM Frame Work(AceTech Online Module)</p><div><div><p><img class="image fit" src="images/atom.png"></img><br/><br/>ATOM 프레임워크 개요</p></div>'
var rcsTag = '<p>- RCS(Remote Control System)</p><div><div><p><img class="image fit" src="images/rcs1.png"></img><br/><br/>RCS 시스템 개요</p></div>';
var rfidTag = '<p>- RFID(Radio Frequency IDentification)</p><div><div><p><img class="image fit" src="images/rfid1.png"></img><br/><br/>RFID 시스템 개요</p></div>';
var hardwareTag = '<p>- ACETECH 하드웨어</p><div style="margin:0 auto;"><div style="display:inline-block;"><p><img class="image center" src="images/barcode.png"></img><br/>2D Barcode Reader</p></div><div style="display:inline-block;"><p><img class="image center" src="images/ast.png"></img><br/>AST(Alarm Signal Transfer)</p></div></div><br/><br/><div style="margin:0 auto;"><div style="display:inline-block;"></div></div>';
var onlineTag = '<p>- 설비 온라인 및 EES 시스템 전문 구축</p><div><div><p><img class="image fit" src="images/online.png"></img><br/><br/>설비 온라인 및 EES 시스템 개요</p></div>';


function deleteButtonBorder() {
	$("button").css("border", "none"); 
}

function drawButtonBorder(id) {
	$(id).css("border", "4.5px solid #0c3b87");
}

function makeProductContent(id, tag) {
	deleteButtonBorder();
	drawButtonBorder(id);
	$("#productMain").fadeOut('slow', function() {
			$("#productMain").html(tag);
	}).fadeIn("slow");	
}

$(document).ready(function() {
		
		$("#scope").click(function(){
			$("#productMain").fadeOut('slow', function() {
			$("#productMain").html(scopeTag);
			}).fadeIn("slow");	
		});
	
		$("#communication").click(function() {	
	    makeProductContent("#communication", communicationTag);
  	});
  	
  	$("#line").click(function() {
			makeProductContent("#line", lineTag);
  	});
  	
  	$("#atom").click(function() {
  		makeProductContent("#atom", atomTag);
  	});
  	
  	$("#rfid").click(function(){
  		makeProductContent("#rfid", rfidTag);
  	});
 
  	$("#rcs").click(function(){
  		makeProductContent("#rcs", rcsTag);
  	});
  	
  	$("#hardware").click(function(){
  		makeProductContent("#hardware", hardwareTag);
  	});
  	
  	$("#online").click(function(){
  		makeProductContent("#online", onlineTag);
  	});
});