import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <section className="topbar">
        <div className="header-container">
          <div className="row">
            <div className="">
             
            </div>
            <div className=" contact-details">
              <div className="topbar_right ">
                <div className="topbar_element info_element">
                  <i className="fa fa-envelope" />
                  <h5>Email Address :</h5>
                  <p className='svr-mail'><a href="mailto:sales@thesanbiz.com">svr6academy@gmail.com</a></p>
                </div>
                <div className="topbar_element info_element info_ele">
                  <i className="fa fa-phone" />
                  <h5>Phone Number</h5>
                  <a href="tel:7801086536">+91 7801086536</a>
                </div>
                <div>
                  <div class="dropdown">
                    <button>Dropdown</button>
                    <ul class="menu">
                      <li><button>iOS App</button></li>
                      <li><button>Android App</button></li>
                      <li><button>Org Code.OXJFYT</button></li>
                    </ul>
                  </div>
                </div>
                <div className="topbar_element search_element">
                  <a href="" className="topnav-buttons">Login</a>
                </div>
                <div className="topbar_element search_element">
                  <a href="" className="topnav-buttons">Register</a>
                </div>
                
              </div>
            </div>
            <div class="top_social text-right">
              <a href="https://www.youtube.com/channel/UCI20M_CVSwi26xF1X6q4OFA" target="_blank"><i class="fa fa-youtube"></i></a>
              <a href="https://www.facebook.com/svracademyappsc/" target="_blank"><i class="fa fa-facebook-f"></i></a>
              <a href="https://t.me/svracademy6" target="_blank"><i class="fa fa-telegram"></i></a>
              <a href="https://www.instagram.com/svracademy6/" target="_blank"><i class="fa fa-instagram"></i></a>
              <a href="https://api.whatsapp.com/send?phone=7989677154" target="_blank"><i class="fa fa-whatsapp"></i></a>
              <a href="https://t.me/svracademy6" target="_blank"><i class="fa fa-telegram"></i></a>
            </div>
          </div>
        </div>
      </section>
<section>
<div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className="logo">
              <a>
                <img className='svrlogo' src="./images/svrlogo.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className='col-md-9'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
          
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link nav-heads" href="#">HOME<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nav-heads" href="/About">ABOUT</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nav-heads" href="#">ONLINE COACHING</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nav-heads" href="#">STUDY MATERIAL</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nav-heads" href="#">OUR SPECIALITY</a>
                  </li>


                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle nav-heads" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                      COURSES
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
</section>
      
{/* <section>
<header class="header">
        
               <div class="container ">
                  
                  <div class="row">
                     <div class="col-md-3 col-sm-6 ">
                        <a class="scroll logo" href="#wrapper">
                           <h2 class="white mb-0">Coach Alex</h2>
                        </a>
                     </div>
                     <div class="col-md-3 text-right col-sm-6 col-md-push-6 ">
                        <a href="#login" class="but round scroll">members login</a>
                     </div>
                     <div class="col-md-6 text-center col-md-pull-3 col-sm-12">
                        <nav class="main-nav">
                           <div class="toggle-mobile-but">
                              <a href="#" class="mobile-but">
                                 <div class="lines"></div>
                              </a>
                           </div>
                           <ul>
                              <li><a class="scroll" href="#about">About</a></li>
                              <li><a class="scroll" href="#services">Services</a></li>
                              <li><a class="scroll" href="#stories">Stories</a></li>
                              <li><a class="scroll" href="#pricing">Pricing</a></li>
                              <li><a class="scroll" href="#faq">FAQ</a></li>
                              <li><a class="scroll" href="#articles">Articles</a></li>
                              <li><a class="scroll" href="#contact">Contact</a></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            
            </header>
</section> */}

{/* <section>
<header class="site-header">
  <div class="header-container">
    <div class="header-row">
      <div class="header-logo-col">
        <a class="logo-link" href="#wrapper">
          <h2 class="logo-text">Coach Alex</h2>
        </a>
      </div>
      <div class="header-login-col">
        <a href="#login" class="login-btn">Members Login</a>
      </div>
      <div class="header-nav-col">
        <nav class="main-nav">
          <div class="nav-toggle">
            <a href="#" class="nav-toggle-btn">
              <div class="nav-lines"></div>
            </a>
          </div>
          <ul class="nav-list">
            <li><a class="nav-link" href="#about"></a></li>
            <li><a class="nav-link" href="#services">Services</a></li>
            <li><a class="nav-link" href="#stories">Stories</a></li>
            <li><a class="nav-link" href="#pricing">Pricing</a></li>
            <li><a class="nav-link" href="#faq">FAQ</a></li>
            <li><a class="nav-link" href="#articles">Articles</a></li>
            <li><a class="nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
</section> */}


<section>

</section>


    </div>
  )
}

export default Header