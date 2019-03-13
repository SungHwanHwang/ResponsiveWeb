var aa = '<p>- 삼성 전자 개발 프로젝트 참여</p>';
var bb = '<p>- ACE Software 설립</p><p>- 삼성전자 사업 파트너 선정</p>';
var cc = '<p>- ACE Technology Co., LTD 설립</p><p>- 삼성전자 사업 파트너 선정</p>';
var dd = '<p>- INNO-BIZ 기술 혁신 중소 기업 인증</p>';
var ee = '<p>- 벤쳐기업인증</p><p>- R&D 센터 설립</p>';

function deleteButtonBorder() {
	$("button").css("border", "none"); 
}

function drawButtonBorder(id) {
	$(id).css("border", "4.5px solid #0c3b87");
}

function makeHistoryContent(id, tag) {
	deleteButtonBorder();
	drawButtonBorder(id);
	$("#historyMain").fadeOut('slow', function() {
			$("#historyMain").html(tag);
	}).fadeIn("slow");	
}

$(document).ready(function() {

	$("#a").click(function() {	
		makeHistoryContent("#a", aa);
  });
  
  $("#b").click(function() {
 		makeHistoryContent("#b", bb);
  });
  
  $("#c").click(function() {
		makeHistoryContent("#c", cc);
  });
  
  $("#d").click(function() {
		makeHistoryContent("#d", dd);
  });
  
  $("#e").click(function() {
		makeHistoryContent("#e", ee);
  });	
  
  $("#a").trigger("click");
});