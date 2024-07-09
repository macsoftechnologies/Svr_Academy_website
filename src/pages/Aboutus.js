import React from 'react'
import './About.css'


const About = () => {
  return (
    <>
      <section className=' AbtHdBg'>
        <div className='row'>
          <div className="col-md-12 col-12 col-sm-12 AboutHead text-center">
            <h2>About Us</h2>

          </div>
        </div>

      </section>
      <section className="container aboutMain">
        <div className="row aboutRow">

          <div className="col-md-4 col-12 col-sm-3 aboutimg">
            <img src="./images/svr-sir.jpg" className="img-fluid" alt="Your Image" />
          </div>

          <div className="col-md-8 col aboutData">
            <h4>HOW WE STARTED </h4>
            <p>SVR Academy is specialized institute in <b>Andhra Pradesh</b> and <b>Telangana</b> for <b>APPSC Group I, Group II & Panchayat Secretaries,AP Police,TS Police,TET-DSC, RRB NTPC and many more Central and state exams...</b> Exams preparing students at all the levels.
              <li>EXAM (Prelims ,mains)</li>
              <li>Interview training (if needed)</li>
              <li>The institute is founded in 2015 as online coaching. From 2017, started providing classroom coaching.</li>

            </p>
            <p>SVR Academy has been started by highly experienced people with a passion of providing excellence in academy for job seeking people.</p>
            <p>The best coaching centre for <b>APPSC GROUPS</b> and <b>OTHER COMPITATIVE EXAMS</b> located in <b>VISAKHAPATNAM</b> and <b>HYDERABAD</b>.</p>
            <p>To become an officer, one has to simply join SVR Academy. We do not believe in just passing examination preparation tips to the aspirants, but we provide the best coaching, with best strategies, methodology to the students to help them better succeed in the UPSC and APPSC exams and Interview stage (also known as the Personality Assessment Stage).</p>
            <p>SVR ACADEMY also provides the unique facility of Mobile friendly Android App Test Series to its students so that they can hone their skills anytime they want.</p>
          </div>
        </div>
      </section>

     
      <section className='curved-div'>
        <div class="row">
          <div class="col-md-8 col-12 col-sm-6 aboutAvl">
            <h6>24/7 WE ARE AVAILABLE</h6>
            <h3>We Are Here For Your Help</h3>

          </div>
          <div class="col-md-4 col-12 col-sm-6">
            <button type="button" class="btn ">Get A Quote</button>
          </div>
        </div>
      </section>


      <section className='finalBoxes'>
        <div className='aboutBox'>
          <span></span>
          <div className='aboutContentBox'>
            <div className='aboutImgSuccess'>
              <img src="./images/success.png" alt='successimg'/>

              <p>
                To ensure that every student is individually focused on, guided and encouraged to help them successfully accomplish their chosen career endeavors.
              </p>
            </div>
          </div>

        </div>
        <div className='aboutBox'>
          <span></span>
          <div className='aboutContentBox'>
            <div className='aboutImgSuccess'>
              <img src="./images/teaching.png" alt='teachingimg'/>
              <p>
                To guide the students in reaching the pinnacle in their chosen career path.</p>

            </div>
          </div>
        </div>

      </section>





    </>
  )
}

export default About
