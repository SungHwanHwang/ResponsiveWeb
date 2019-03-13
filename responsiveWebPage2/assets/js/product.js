var scopeTag = '<p><div><img width="600" height="300" src="images/businessScope.png" alt=""/></div><p>ACETECH Business Scope</p></p>'
var communicationTag = '<div style="margin-left:1.5em;width:100%;text-align:left;"><p>- SECS I/II : Semiconductor Equipment Communication Standard</p><p>- HSMS : High Speed SECS Message Service : by SEMI<br/>(Semiconductor Equipment and Material Institute)</p><p>- TCP/IP</p><p>- PLC</p><p>- RS-232&RS-422 : Transfer Data using Serial Port</p></div>';
var atomTag = '<div><p><img width="800" height="400" src="images/atom.png"></img><br/><br/></p></div><p style="margin-top:-1em;">ATOM Frame Work(AceTech Online Module)</p>';
var rcsTag = '<div><p><img width="800" height="400" src="images/rcs1.png"></img><br/><br/></p></div><p style="margin-top:-1em;">RCS(Remote Control System)</p>';
var rfidTag ='<div><p><img width="800" height="400" src="images/rfid1.png"></img><br/><br/></p></div><p style="margin-top:-1em;">RFID(Radio Frequency IDentification)</p>';
var hardwareTag = '<div><p><img width="700" height="300" src="images/astnbc.png"></img><br/><br/></p></div><p style="margin-top:-1em;">AST&BC(Alarm Signal Transfer & Button Control)</p>';


function deleteButtonBorder2() {
	$("button").css("border", "none"); 
}

function drawButtonBorder2(id) {
	$(id).css("border", "4.5px solid #0c3b87");
}

function makeProductContent(id, tag) {
	deleteButtonBorder2();
	drawButtonBorder2(id);
	$("#productMain").html(tag);
}

$(document).ready(function() {
		
		$("#scope").click(function(){
			$("#productMain").fadeOut('fast', function() {
			$("#productMain").html(scopeTag);
			}).fadeIn("fast");	
		});
	
		$("#communication").mouseenter(function() {	
	    makeProductContent("#communication", communicationTag);
  	});
  	
  	$("#atom").mouseenter(function() {
  		makeProductContent("#atom", atomTag);
  	});
  	
  	$("#rfid").mouseenter(function(){
  		makeProductContent("#rfid", rfidTag);
  	});
 
  	$("#rcs").mouseenter(function(){
  		makeProductContent("#rcs", rcsTag);
  	});
  	
  	$("#hardware").mouseenter(function(){
  		makeProductContent("#hardware", hardwareTag);
  	});
  	
});