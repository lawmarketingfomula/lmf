$(document).ready(function(){
    $('#send_message').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[가-힣]+$/;
        const regex = /^[|0-9|]+$/;
        var mf = $('#mf').val();
        var age = $('#age').val();
        var nw = $('#now-wg').val();
        var height = $('#height').val();
        var hg = $('#hope-wg').val();
        // var id = $('#id-number').val();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
   
        var agree = $('#agree11').is(":checked");
        
        
        $('#email,#agree11,#mf').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
        //  if(!regex1.test(name) || name.length<0 ){
        //     var error = true;
        //     $('#name').addClass("error_input");
        //    alert("이름 입력을 확인하세요.");
        // }else{
        //     $('#name').removeClass("error_input");
        // }

        // if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
        //     $('#phone').removeClass("error_input");
        // }else{
        //     var error = true;
        //     $('#phone').addClass("error_input");
        //     alert("휴대폰 번호 입력을 확인하세요.");
        // }

       

     

     


        if (agree == false){
            var error = true;
            $('#agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdSSdV110hMSmRbw35Rt47JXUjXcqZxjazueyeqNsoPm1VBSw/formResponse");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송 중입니다' });
           
            
     $('#send_message').prop("disabled", false);
    $('#send_message').css({transition:"1s"});
    $('#send_message').css({background:"#222222"});
    $('#send_message').css({color:"#fff"});
    $('#hidden_iframe11').attr("onload", "hoa();");
    // $('#hidden_iframe12').attr("onload", "hoa();");
   
        }
    });    

   

});


function dll(){
    // var f = document.fm;
    // f.submit();
    // $('[name="fm"],[name="fm1"]').submit();

}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
 function hoa(){ 
        alert("수임을 일으키는 변호사 마케팅 보고서\n신청이 완료되었습니다.\n\n-변호사마케팅방정식");
        $(window).scrollTop(0);
        window.location.href = './column/consulting-result.html';
        // window.location.reload();
 }
 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form_check(){
    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex2 = /^[|가-힣0-9a-zA-Z|\s]+$/;
    const regex1 = /^[|가-힣|]+$/;
    const regex = /^[|0-9|]+$/;
    var mf = $('#mf').val();
    var age = $('#age').val();
    var nw = $('#now-wg').val();
    var height = $('#height').val();
    var hw = $('#hope-wg').val();
    // var id = $('#id-number').val();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var agree = $('#agree11').is(":checked");
    var total= nw-hw;

   
       if(mf != null)
        {
            
                if(email.match(regExp) != null)
                                    {
                        
                                        if (agree == true)
                                        {
                                            $('#send_message').css({transition:"1s"});
                                            $('#send_message').prop("disabled", false);
                                            $('#send_message').prop("value", "무료 혜택 받기");
                                            $('#send_message').css({background:"#0e3b64"});
                                            $('#send_message').css({cursor:"pointer"});
                                        }
                                        else
                                        {
                                            $('#send_message').css({transition:"1s"});
                                            $('#send_message').prop("disabled", true);
                                            $('#send_message').prop("value", "개인정보 동의를 확인해주세요");
                                            $('#send_message').css({background:"#121212"});
                                            $('#send_message').css({cursor:"default"});     
                                        }
                            
                                    }
                                    else if(email.length>0)
                                    {
                                        $('#send_message').css({transition:"1s"});
                                        $('#send_message').prop("disabled", true);
                                        $('#send_message').prop("value", "이메일 주소 입력을 확인하세요.");
                                        $('#send_message').css({background:"#595959"});
                                        $('#send_message').css({cursor:"default"});     
                                    }
                                    else
                                    {
                                        $('#send_message').css({transition:"1s"});
                                        $('#send_message').prop("disabled", true);
                                        $('#send_message').prop("value", "이메일 주소를 입력하세요.");
                                        $('#send_message').css({background:"#595959"});
                                        $('#send_message').css({cursor:"default"});     
                                    }

      
        }
        else
        {
            $('#send_message').css({transition:"1s"});
            $('#send_message').prop("disabled", true);
            $('#send_message').prop("value", "직책 선택을 확인하세요.");
            $('#send_message').css({background:"#121212"});
            $('#send_message').css({cursor:"default"});     
        }
  

   
 }
  


   




$(function(){
 $('#email, #mf, #agree11').bind("keyup click change",form_check);

})