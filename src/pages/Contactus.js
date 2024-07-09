import React from 'react'
import './About.css'


function Contactus() {
    return (
        <>
            <section className=' AbtHdBg'>
                <div className='row'>
                    <div className="col-md-12 col-12 col-sm-12 AboutHead text-center">
                        <h2>Contact Us</h2>
                       
                        <nav aria-label="breadcrumb breadAboutMain">
                            <ol className="breadcrumb brdcAbout">
                                <li className="breadcrumb-item breadIAbout"><a href="#">Home</a></li>
                                <li className="breadcrumb-item breadActive" aria-current="page">Contact us</li>
                            </ol>
                        </nav>

                    </div>
                    
                </div>

            </section>
            <div className="container col-md-10  contMapBox">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3491590223066!2d83.30825427421767!3d17.728179992900063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394395adbf1da1%3A0x23ff60fe08aff14!2sSVR%20ACADEMY%20for%20Appsc%20Groups!5e0!3m2!1sen!2sin!4v1717723571631!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

           


            <div className="container my-5 contMain">
                <div className="row contRow">
                    
                <div className="col-12 col-sm-6 col-md-3 contBoxes">
                        <div className="box contactBox">
                            <div className='contImg'>
                                <img src="./images/location-pin.gif" className="img-fluid contImg" alt="Image 1" />
                                <h6>OFFICE LOCATION</h6>
                            </div>
                            <a href='/' >Find Us On Map</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 contBoxes">
                        <div className="box contactBox">
                            <div className='contImg'>
                                <img src="./images/12-hours.gif" className="img-fluid contImg" alt="Image 2" />
                                <h6>OFFICE HOURS                                </h6>
                                <p>Mon - Fri: 09:00am to 07.00pm <span>Sat - Sun: Off Day</span></p>
                            </div>
                            <a href='/' >Get Directions</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 contBoxes">
                        <div className="box contactBox">
                            <div className='contImg'>
                                <img src="./images/contact.gif" className="img-fluid contImg" alt="Image 3" />
                                <h6>CALL US</h6>
                                <p>+(91)6305207624 <br />
                                    +91 7801086536</p>
                            </div>
                            <a href='/' >Call Now</a>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 col-md-3 contBoxes">
                        <div className="box contactBox">
                            <div className='contImg'>
                                <img src="./images/dove.gif" className="img-fluid contImg" alt="Image 4" />
                                <h6>EMAIL ADDRESS</h6>
                                <p>svr6academy@gmail.com <br /></p>
                            </div>
                            <a href='/' >Mail Us</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container contactMain">
                <div className="row col-md12 contReverse">

                    

                   

                    <div className="col-md-6 contactSub">
                        <div className="contact-form contForm">
                            <h6>GET IN TOUCH </h6>
                            <h2>Contact Form</h2>
                            
                            <form>

                                <div className="form-group contGroup">
                                    <label for="Enter">Enter Your Name</label>
                                    <input type="text" className="form-control contControl" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="form-group contGroup">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" className="form-control contControl" id="phone" placeholder="Enter your phone number" />
                                </div>
                                <div className="form-group contGroup">
                                    <label for="email">Email Address</label>
                                    <input type="email" className="form-control contControl" id="email" placeholder="Enter your email" />
                                </div>

                                <div className="form-group contGroup">
                                    <label for="message">Enter your message</label>
                                    <textarea className="form-control contControl" id="message" rows="5" placeholder=""></textarea>
                                </div>
                                <button type="submit" className="btn btn-send buttonCont">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 contImgreg">
                        <img src="./images/contactus.png" className='contImgreg1' />

                    </div>


                </div>
            </div>
            
           
        </>
    )
}



export default Contactus
