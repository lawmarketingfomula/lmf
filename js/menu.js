const menu = document.getElementById('menu');
menu.innerHTML = `
<header id="header">

    <div id="topbar">
      <div class="container">
        <div class="social-links">
         <!-- <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
          <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
          <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          <a href="#" class="instagram"><i class="fa fa-instagram"></i></a> -->
        </div>
      </div>
    </div>

    <div class="container">

      <div class="logo float-left">
        <!-- Uncomment below if you prefer to use an image logo -->
        <h1 class="text-light"><a href="#fm-box" ><span>변호사마케팅방정식</span></a></h1>
        <!-- <a href="#header" class="scrollto"><img src="./intro/img/logo.png" alt="" class="img-fluid"></a> -->
      </div>

     
      
    </div>
  </header><!-- #header -->
`;

document.body.appendChild(menu.content);