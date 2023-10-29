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
        // var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
   
        var agree = $('#agree11').is(":checked");
        
        
        $('#name,#phone,#message,#agree11,#mf,#height,#now-wg,#hope-wg,#age').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
         if(!regex1.test(name) || name.length<0 ){
            var error = true;
            $('#name').addClass("error_input");
           alert("이름 입력을 확인하세요.");
        }else{
            $('#name').removeClass("error_input");
        }

        if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
            $('#phone').removeClass("error_input");
        }else{
            var error = true;
            $('#phone').addClass("error_input");
            alert("휴대폰 번호 입력을 확인하세요.");
        }

       

     

     


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
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/d/e/1FAIpQLSdSSdV110hMSmRbw35Rt47JXUjXcqZxjazueyeqNsoPm1VBSw/viewform");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송 중입니다' });
           
            
     $('#send_message').prop("disabled", false);
     OnSubmit();
    $('#send_message').css({transition:"1s"});
    $('#send_message').css({background:"#222222"});
    $('#send_message').css({color:"#fff"});
    $('#hidden_iframe11').attr("onload", "dll();");
    $('#hidden_iframe12').attr("onload", "hoa();");
   
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
        alert("투명하게 공개 드리겠습니다.\n여러분의 견적을 줄여드릴테니\n전화를 꼭 받아주세요.");
        $(window).scrollTop(0);
        window.location.href = './column/consulting-result.html';
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
    // var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var agree = $('#agree11').is(":checked");
    var total= nw-hw;

   
       
            if(regex1.test(name) && name.length > 1 )
            {
                   


                if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone))
                {
                        
                    if(message.length > 0 && regex2.test(message) )
                    {
                                        if (agree == true)
                                        {
                                            $('#send_message').css({transition:"1s"});
                                            $('#send_message').prop("disabled", false);
                                            $('#send_message').prop("value", "무료 상담 신청하기");
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
                    else if(message.length == 0)
                    {
                        $('#send_message').css({transition:"1s"});
                        $('#send_message').prop("disabled", true);
                        $('#send_message').prop("value", "차종을 확인하세요.");
                        $('#send_message').css({background:"#121212"});
                        $('#send_message').css({cursor:"default"});     
                    }
                    else
                    {
                        $('#send_message').css({transition:"1s"});
                        $('#send_message').prop("disabled", true);
                        $('#send_message').prop("value", "차종을 확인하세요.");
                        $('#send_message').css({background:"#121212"});
                        $('#send_message').css({cursor:"default"});     
                    }        
                }
                else if(phone.length == 0)
                {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "전화번호를 확인하세요.");
                    $('#send_message').css({background:"#121212"});
                    $('#send_message').css({cursor:"default"});     
                }
                else
                {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "전화번호 입력을 확인하세요.");
                    $('#send_message').css({background:"#121212"});
                    $('#send_message').css({cursor:"default"});     
                }

                            
                    
                          
                
                
            }
            else if(name.length == 0)
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "성함을 입력을 확인하세요.");
                $('#send_message').css({background:"#121212"});
                $('#send_message').css({cursor:"default"});     
            }
            else
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "성함의 입력을 확인하세요.");
                $('#send_message').css({background:"#121212"});
                $('#send_message').css({cursor:"default"});     
            }
  

   
 }
  


    function form_check1(){
        var mf = $('#mf').val();
        var age = $('#age').val();
        var nw = $('#now-wg').val();
        var tnw= String(nw);
        var height = $('#height').val();
        var hw = $('#hope-wg').val();
        var thw= String(hw);
        // var id = $('#id-number').val();
        var name = $('#name').val();
        // var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        var mnw= String(message);

       
    
        $("[name='name']").val(name); 
        
        // $("[name='item3']").attr("value",thw);
        $("[name='item1']").attr("value",message);
        $("[name='item2']").val(height);
        $("[name='age']").val(age);  
        $("[name='tel1']").val(phone.substr(0,3));
        $("[name='tel2']").val(phone.substr(3,4));
        $("[name='tel3']").val(phone.substr(7,4)); 
         $('[name="etc"]').val(message);
        }




$(function(){
 $('#name,#phone,#mf,#age,#message,#agree11,#now-wg,#hope-wg,#height').bind("keyup click change",form_check);
 $('#name,#phone,#mf,#age,#message,#agree11,#now-wg,#hope-wg,#height').bind("keyup click change",form_check1);
//  $('#license').bind("keyup click change",lic_pick);
})