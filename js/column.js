const columns = document.getElementById('columns');
columns.innerHTML = `
<section id="clients" class="wow fadeInUp">
      <div class="container">

        <header class="section-header">
          <h4 style="font-size:24px;">관절 건강 정보</h4>
          
        </header>

        <div class="owl-carousel clients-carousel" style="text-align:-webkit-center;">
          <div><a href="../column/관절-통증-원인.html"><img src="../img/bone4.png" alt="" style="border-radius:30px;"><span>어깨 통증이 생기면<br>살펴봐야 할 4가지 질환</span></a></div>
          <div><a href="../column/골감소증-좋은-음식.html"><img src="../img/bone2.png" alt="" style="border-radius:30px;"><span>뼈 노화를 늦추고<br>골감소증에 좋은 음식 5가지</span></a></div>
          <div><a href="../column/골다공증-원인.html"><img src="../img/bone1.png" alt="" style="border-radius:30px;"><span>노후 건강을 위협하는<br>골다공증은 왜 생길까요?</span></a></div>
          
          
   
         
        </div>

       
      </div>

      
    </section><!-- #clients -->

    

`;

document.body.appendChild(columns.content);