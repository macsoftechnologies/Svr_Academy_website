import React from 'react';
import './Home.css';
import Header from '../components/Header';
import FooterComponent from '../components/Footer';
import Slickcarousel from './Slickcarousel';

function Home() {
  
  return (
    <div>
      <Header />
      <Slickcarousel/>

      <section>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./images/SVR1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./images/SVR2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./images/SVR3.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>

      </section>
      <section>
        <div className='our-online-courses'>
          <h1 className='our-online-courses-h1'>Our Online Courses</h1>
          <p>Learn from the comfort of your own home with our online courses</p>
        </div>
        <div className='container'>
          <div className='row'>
            <div class="col-md-3 ">
              <div class="card course-card">
                <div class="card-body">
                  <img className='trail' src="./images/group2mains2024.jpg" />
                  <h4 className='coursename'>APPSC GROUP 2 MAINS</h4>
                  <a href='https://svracademy.in/users/paymentregister/33' className='course-buynow'>BUY NOW</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 ">
              <div class="card course-card">
                <div class="card-body">
                  <img className='trail' src="./images/economycourse.jpg" />
                  <h4 className='coursename'>ECONOMY</h4>
                  <a href='https://svracademy.in/users/paymentregister/33' className='course-buynow'>BUY NOW</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 ">
              <div class="card course-card">
                <div class="card-body">
                  <img className='trail' src="./images/aphistorycourse.jpg" />
                  <h4 className='coursename'>AP HISTORY</h4>
                  <a href='https://svracademy.in/users/paymentregister/33' className='course-buynow'>BUY NOW</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 ">
              <div class="card course-card">
                <div class="card-body">
                  <img className='trail' src="./images/science&tech.jpg" />
                  <h4 className='coursename'>SCIENCE AND TECH</h4>
                  <a href='https://svracademy.in/users/paymentregister/33' className='course-buynow'>BUY NOW</a>
                </div>
              </div>
            </div>

          </div>
          <div className='row'>
            <div class="col-md-3 ">
              <div class="card course-card">
                <div class="card-body">
                  <img className='trail' src="./images/indianpolity.png" />
                  <h4 className='coursename'>INDIAN POLITY</h4>
                  <a href='https://svracademy.in/users/paymentregister/33' className='course-buynow'>BUY NOW</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 ">
              <div class="card course-card">
                <div class="card-body">
                  <img className='trail' src="./images/appsc.jpg" />
                  <h4 className='coursename'>APPSC GROUP 2</h4>
                  <a href='https://svracademy.in/users/paymentregister/33' className='course-buynow'>BUY NOW</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 ">
              <div class="card course-card">
                <div class="card-body">
                  <img className='trail' src="./images/ap-sachivalayam.jpg" />
                  <h4 className='coursename'>AP గ్రామ సచివాలయం 2023</h4>
                  <a href='https://svracademy.in/users/paymentregister/33' className='course-buynow'>BUY NOW</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 ">
              <div class="card course-card">
                <div class="card-body">
                  <img className='trail' src="./images/appsc-grpi.jpg" />
                  <h4 className='coursename'>APPSC GROUP 1</h4>
                  <a href='https://svracademy.in/users/paymentregister/33' className='course-buynow'>BUY NOW</a>
                </div>
              </div>
            </div>

          </div>
          <div className='row'>
          <div class="col-md-3 ">
              <div class="card course-card">
                <div class="card-body">
                  <img className='trail' src="./images/1628055362.jpg" />
                  <h4 className='coursename'>INDIAN POLITY</h4>
                  <a href='https://svracademy.in/users/paymentregister/33' className='course-buynow'>BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section>
        <div>
          <h1 className='our-achivements'>Our Achievements</h1>
        </div>
     
      </section>

      <section>
      {/* <div class="data-hidden">
                <div class="readstyle">
              
                        <div class="row">
                            <div class="col-md-12 heroSlider-fixed">
                                <div class="overlay">
                                </div>
                              
                                <div class="slider responsive3 slick-initialized slick-slider">
                                    <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 7980px; transform: translate3d(-1140px, 0px, 0px);"><div class="item-patners-img slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/D VENKATESWARA RAO.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">D VENKATESWARA RAO</p>
                                            <p class="text-center mb-2">AST SECTION OFFICER</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/SRINIVAS.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">SRINIVAS</p>
                                            <p class="text-center mb-2">TELANGANA CONISTABLE</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/SUKRUTA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">SUKRUTHA</p>
                                            <p class="text-center mb-2">WARD AMINITIES SECRETARY</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/SURYA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">SURYA TEJA</p>
                                            <p class="text-center mb-2">ENGINEERING ASSISTANT</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 235px;" tabindex="0">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/R ADITYA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">R ADITYA</p>
                                            <p class="text-center mb-2">APPSC GROUP-1</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 235px;" tabindex="0">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">KRUPA</p>
                                            <p class="text-center mb-2">APPSC GROUP-1</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 235px;" tabindex="0">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/RIZWANA BEGUM.jpeg" class="img-fluid" alt="patners-1" style="height:235px;"/>
                                            <p class="text-center mb-2 mt-3">RIZWANA BEGUM</p>
                                            <p class="text-center mb-2">(ASO)</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 235px;" tabindex="0">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/G LAKSHMI SATYAVATHI.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">G LAKSHMI SATYAVATHI</p>
                                            <p class="text-center mb-2">SI (CIVIL)</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide" data-slick-index="4" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/V DURGA SREE.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">V DURGA SREE</p>
                                            <p class="text-center mb-2">JR ASSISTANT</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide" data-slick-index="5" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/D VENU PRATAP.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">D VENU PRATAP</p>
                                            <p class="text-center mb-2">STENOGRAPHER</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide" data-slick-index="6" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/BHAVANA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">BHAVANA</p>
                                            <p class="text-center mb-2">JR ASSISTANT</p>
                                         
                                        </div>
                                    </div><div class="item-patners-img slick-slide" data-slick-index="7" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/K RAVITEJA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">K RAVITEJA</p>
                                            <p class="text-center mb-2">JR ASSISTANT</p>
                                            
                                        </div>
                                    </div><div class="item-patners-img slick-slide" data-slick-index="8" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/D VENKATESWARA RAO.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">D VENKATESWARA RAO</p>
                                            <p class="text-center mb-2">AST SECTION OFFICER</p>
                                           
                                        </div>
                                    </div><div class="item-patners-img slick-slide" data-slick-index="9" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/SRINIVAS.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">SRINIVAS</p>
                                            <p class="text-center mb-2">TELANGANA CONISTABLE</p>
                                           
                                        </div>
                                    </div><div class="item-patners-img slick-slide" data-slick-index="10" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/SUKRUTA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">SUKRUTHA</p>
                                            <p class="text-center mb-2">WARD AMINITIES SECRETARY</p>
                                           
                                        </div>
                                    </div><div class="item-patners-img slick-slide" data-slick-index="11" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/SURYA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">SURYA TEJA</p>
                                            <p class="text-center mb-2">ENGINEERING ASSISTANT</p>
                                           
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/R ADITYA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">R ADITYA</p>
                                            <p class="text-center mb-2">APPSC GROUP-1</p>
                                            
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">KRUPA</p>
                                            <p class="text-center mb-2">APPSC GROUP-1</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/RIZWANA BEGUM.jpeg" class="img-fluid" alt="patners-1" style="height:235px;"/>
                                            <p class="text-center mb-2 mt-3">RIZWANA BEGUM</p>
                                            <p class="text-center mb-2">(ASO)</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/G LAKSHMI SATYAVATHI.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">G LAKSHMI SATYAVATHI</p>
                                            <p class="text-center mb-2">SI (CIVIL)</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="16" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/V DURGA SREE.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">V DURGA SREE</p>
                                            <p class="text-center mb-2">JR ASSISTANT</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="17" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/D VENU PRATAP.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">D VENU PRATAP</p>
                                            <p class="text-center mb-2">STENOGRAPHER</p>
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="18" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/BHAVANA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">BHAVANA</p>
                                            <p class="text-center mb-2">JR ASSISTANT</p>
                                        
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="19" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/K RAVITEJA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">K RAVITEJA</p>
                                            <p class="text-center mb-2">JR ASSISTANT</p>
                                            
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="20" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/D VENKATESWARA RAO.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">D VENKATESWARA RAO</p>
                                            <p class="text-center mb-2">AST SECTION OFFICER</p>
                                            
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="21" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/SRINIVAS.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">SRINIVAS</p>
                                            <p class="text-center mb-2">TELANGANA CONISTABLE</p>
                                         
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="22" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/SUKRUTA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">SUKRUTHA</p>
                                            <p class="text-center mb-2">WARD AMINITIES SECRETARY</p>
                                  
                                        </div>
                                    </div><div class="item-patners-img slick-slide slick-cloned" data-slick-index="23" aria-hidden="true" style="width: 235px;" tabindex="-1">
                                        <div class="card-body faculty-card achieve-1">
                                            <img src="https://svracademy.in/assets/image/toppers/SURYA.jpg" class="img-fluid" alt="patners-1"/>
                                            <p class="text-center mb-2 mt-3">SURYA TEJA</p>
                                            <p class="text-center mb-2">ENGINEERING ASSISTANT</p>
                                           
                                        </div>
                                    </div></div></div>
                                    
                                    
                                    
                                    
                                    

                                    

                                    

                                    

                                    


                                    

                                      

                                                                        
                                </div>
                               
                                <div class="prev3 carousel-control-prev icon-bg slick-arrow" data-slide="prev" style="display: flex;">
                                    <span class="carousel-control-prev-icon icon3" style="width: 60px;
                                    height: 47px;" aria-hidden="true"></span>
                                </div>
                                <div class="next3 carousel-control-next icon-bg slick-arrow" style="display: flex;">
                                    <span class="carousel-control-next-icon icon4" style="width: 60px;
                                    height: 47px;" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                  
                </div>
            </div> */}

{/* <div class="data-hidden">
  <div class="readstyle">
    <div class="row">
      <div class="col-md-12 heroSlider-fixed">
        <div class="overlay"></div>
        <div class="slider responsive3 slick-initialized slick-slider">
          <div class="slick-list draggable">
            <div class="slick-track">
              <div class="item-patners-img slick-slide" data-slick-index="0">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/R ADITYA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">R ADITYA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>
              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>

              <div class="item-patners-img slick-slide" data-slick-index="1">
                <div class="card-body faculty-card achieve-1">
                  <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" class="img-fluid" alt="patners-1" />
                  <p class="text-center mb-2 mt-3">KRUPA</p>
                  <p class="text-center mb-2">APPSC GROUP-1</p>
                </div>
              </div>
             
            </div>
          </div>
          <div class="prev3 carousel-control-prev icon-bg slick-arrow" data-slide="prev">
            <span class="carousel-control-prev-icon icon3" aria-hidden="true"></span>
          </div>
          <div class="next3 carousel-control-next icon-bg slick-arrow">
            <span class="carousel-control-next-icon icon4" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

<div className="data-hidden">
      <div className="readstyle">
        <div className="row">
          <div className="col-md-12 heroSlider-fixed">
            <div className="overlay"></div>
            <div className="slider responsive3">
              <div className="slick-list draggable">
                <div className="slick-track">
                  {/* slider items */}
                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/R ADITYA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">R ADITYA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>
                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">KRUPA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>

                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">KRUPA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>

                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">KRUPA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>

                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">KRUPA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>

                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">KRUPA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>

                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">KRUPA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>

                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">KRUPA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>

                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">KRUPA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>

                  <div className="item-patners-img">
                    <div className="card-body faculty-card achieve-1">
                      <img src="https://svracademy.in/assets/image/toppers/KRUPA.jpg" className="img-fluid" alt="patners-1" />
                      <p className="text-center mb-2 mt-3">KRUPA</p>
                      <p className="text-center mb-2">APPSC GROUP-1</p>
                    </div>
                  </div>
                  {/* add more slider items here */}
                </div>
              </div>
              {/* slider navigation */}
              <button className="prev3 slick-prev">Prev</button>
              <button className="next3 slick-next">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>

      <section class="commonSection testimonialSection">
  <div class="container">
    <div class="row">
      <div class="col-xl-4 col-lg-4 noPaddingRight">
        <h6 class="sub_title ">Testimonials</h6>
        <h2 class="sec_title">
          <span>Our Happy Students Says About Us</span>
        </h2>
        <p class="ind_lead">Make your dream with us</p>
      </div>
      <div class="col-xl-8 col-lg-8 pdl40">
        <div class="testimonialSliderHolder tw-stretch-element-inside-column">
          <div class="testimonialSlider slick-initialized slick-slider">
            <div class="slick-list draggable">
              <div class="slick-track">
                <div class="ts_item slick-slide" data-slick-index="0" aria-hidden="true">
                  <div class="testimonial_item">
                    <span class="ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                    <p>Good faculty along with excellent management</p>
                    <div class="ti_author clearfix">
                      <img src="https://svracademy.in/assets/image/testimonial/harish.png" alt=""/>
                      <h4>Harish Sambana</h4>
                    </div>
                  </div>
                </div>
                <div class="ts_item slick-slide" data-slick-index="1" aria-hidden="true">
                  <div class="testimonial_item">
                    <span class="ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                    <p>Faculty of this institute really take their full potential to cover-up the syllabus and you will be getting a clear idea of approaching the exam.I would strongly recommend.</p>
                    <div class="ti_author clearfix">
                      <img src="https://svracademy.in/assets/image/testimonial/phani.png" alt=""/>
                      <h4>Chandra Phani Dusanapudi</h4>
                    </div>
                  </div>
                </div>
                <div class="ts_item slick-slide" data-slick-index="2" aria-hidden="true">
                  <div class="testimonial_item">
                    <span class="ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                    <p>Best institute with reasonable fee.</p>
                    <div class="ti_author clearfix">
                      <img src="https://svracademy.in/assets/image/testimonial/upendra.png" alt=""/>
                      <h4>AJAY BOBBILI</h4>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <FooterComponent/>
    </div>
  )
}

export default Home
