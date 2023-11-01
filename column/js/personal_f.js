$(function(){
    $(".privacyBtn").click(function(){
       $("#privacy").fadeIn(200);
       $("#privacy").addClass('blur');
       $("body").addClass('overflow');
   });

   // 팝업닫기
   $("#privacy .closeBtn").click(function(){
       $("#privacy").fadeOut(200);
       $("#privacy").removeClass('blur');
       $(".overflow").removeClass('overflow');

   });

     // 현재 날짜 정보 가져오기
  const today = new Date();

  // 연도, 월, 일, 요일 정보 가져오기
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const lastDay = new Date(year, month, 0).getDate();

  // 요일을 한국어로 표시
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = daysOfWeek[today.getDay()];

  // 결과를 표시할 요소 선택
  const dateInfo = document.getElementById('dateInfo');

  // 결과 표시
  dateInfo.innerHTML = `✅ 신청기간 : ${year}년. ${month}. ${lastDay} (${dayOfWeek}) 모집 종료`;
    
})

