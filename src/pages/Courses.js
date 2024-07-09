import React from 'react';
import './Courses.css'

function Courses() {
    return (
        <div>
            <section className='Courses-background'>
                <div className="container">
                    <div className="row">
                        <h1 className='short-line1'>OUR COURSES</h1>
                    </div>
                </div>
            </section>
            

            <section className='GROUP-1'>
                <div className='choose-data'>
                    <div className='container'>
                        <h2 className='svr-size-courses'>APPSC <span className='style-color'>GROUP-1</span></h2>
                        <div class="down-one p-4 mb-5 bg-white">
                            <h4 className='questions-most'>QUALIFICATION:</h4>
                            <div className='parap'>
                                <p>Must hold the Bachelor’s Degree of any University in India established or incorporated by or under a Central Act, Provincial Act or a State Act or the Institutions recognized by the University Grants Commission or an equivalent qualification.</p>
                            </div>
                            <h4 className='questions-most'><b>AGE RELAXATION:</b></h4>
                            <div className='parap'>
                                <p>No person shall be eligible for direct recruitment if he/she is less than 18 years of age and if he / she is more than 42 years of age</p>
                            </div>
                            {/* <h5 className='questions-most'><b>AGE RELAXATION:</b></h5> */}
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>SC/ST and BCs ---&gt; 5 Years</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p> Physically Handicapped persons ---&gt; 10 Years</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>N.C.C (who have worked as Instructor in N.C.C.) ---&gt; Shall be allowed to deduct from his age a period of 3 years in addition to the length of service rendered by him in the armed forces / NCC.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>A.P. State Government Employees (Employees of APSEB, APSRTC, Corporations, Municipalities etc. are not eligible). ---&gt; Up to maximum 5 Years based on the length of regular service.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Retrenched temporary employees in the State Census Department with a minimum service of 6 months. ---&gt; 3 Years</p>
                                </div>
                            </div>
                            <h5 className='questions-most'><b>EXAM PATTERN AND SYLLABUS:</b></h5>
                            <h4>PRELIMS EXAM:</h4>

                            <table class="table table-bordered mt-4 mb-4">
                                <thead className='back-color'>
                                    <tr>
                                        <th scope="col">Subject</th>
                                        <th scope="col">No.of Questions</th>
                                        <th scope="col">Duration Minutes</th>
                                        <th scope="col">Maximum Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className='parap'>Screening Test (Objective Type) Paper -I General Studies. This paper consists of 04 parts i.e., ABCD each part carries 30 marks</p>
                                            <p className='parap'>A.History and Culture.</p>
                                            <p className='parap'>B. Constitution polity, Social Justice and International relations.</p>
                                            <p className='parap'>C. Indian and Andhra Pradesh Economy and Planning.</p>
                                            <p className='parap'>D. Geography.</p>
                                        </td>
                                        <td><p className='parap2'><strong>120 Questions</strong></p></td>
                                        <td><p className='parap3'><strong>120 Minutes</strong></p></td>
                                        <td><p className='parap3'><strong>120 Marks</strong></p></td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <p className='parap'>Screening Test (Objective Type) Paper -II General Aptitude</p>
                                            <p className='parap'>This paper consists 2 parts i.e., A and B each part carries 60 Marks</p>
                                            <p className='parap'>A. General Mental Ability, Administrative and Psychological Abilities.</p>
                                            <p className='parap'>B. (i) Science and Technologies. (ii) Current events of Regional, National and International importance</p>
                                        </td>
                                        <td><p className='parap2'><strong>120 Questions</strong></p></td>
                                        <td><p className='parap3'><strong>120 Minutes</strong></p></td>
                                        <td><p className='parap3'><strong>120 Marks</strong></p></td>
                                    </tr>

                                </tbody>
                            </table>

                            <div class="accordion mt-4 mb-4" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                MAINS EXAM
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <table class="table table-bordered">
                                                {/* <thead className='back-color'>
                                                    <tr>
                                                        <th scope="col">Subject</th>
                                                        <th scope="col">No.of Questions</th>
                                                        <th scope="col">Duration Minutes</th>
                                                        <th scope="col">Maximum Marks</th>
                                                    </tr>
                                                </thead> */}
                                                <tbody className='small-size'>
                                                    <tr>
                                                        <td><p className='parap'>Paper in Telugu</p></td>
                                                        <td><p className='parap'><strong>180 minutes</strong></p></td>
                                                        <td><p className='parap'><strong>150 Marks</strong></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p className='parap'>Paper in English</p></td>
                                                        <td><p className='parap'><strong>180 minutes</strong></p></td>
                                                        <td><p className='parap'><strong>150 Marks</strong></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p className='parap'>Paper - I General Essay - on contemporary themes and issues of regional, national and international importance.</p></td>
                                                        <td><p className='parap'><strong>180 minutes</strong></p></td>
                                                        <td><p className='parap'><strong>150 Marks</strong></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p className='parap'>Paper-II History and Cultural and Geography of India and Andhra Pradesh</p></td>
                                                        <td><p className='parap'><strong>180 minutes</strong></p></td>
                                                        <td><p className='parap'><strong>150 Marks</strong></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p className='parap'>Paper -III Polity, constitution, Governance, Law and Ethics</p></td>
                                                        <td><p className='parap'><strong>180 minutes</strong></p></td>
                                                        <td><p className='parap'><strong>150 Marks</strong></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p className='parap'>Paper -IV Economy and Development of India and Andhra Pradesh</p></td>
                                                        <td><p className='parap'><strong>180 minutes</strong></p></td>
                                                        <td><p className='parap'><strong>150 Marks</strong></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p className='parap'>Paper -V Science, Technology and Environmental Issues</p></td>
                                                        <td><p className='parap'><strong>180 minutes</strong></p></td>
                                                        <td><p className='parap'><strong>150 Marks</strong></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p className='parap'><b>INTERVIEW</b></p></td>
                                                        <td></td>
                                                        <td><p className='parap'><strong>75</strong></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p className='parap'><b>TOTAL MARKS</b></p></td>
                                                        <td></td>
                                                        <td><p className='parap'><strong>825</strong></p></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>







                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Problem solving is very important and giving protracted answers won't facilitate. Suppose sensible and write well, if an answer takes over eight steps to unravel, take a deep breath and re-think your approach.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>You wish to form aware effort of keeping track of your speed and accuracy to solve the questionnaire.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Mock tests and model papers are a must and can be practiced to brush up your skills despite what percentage times you have got already resolved one. Each try will cause you to realise one thing that you just lost earlier.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Being innovative and intuitive creates a good balance at resolution issues that don't seem to be from a course book. Apply will are available in handy whereas resolution a form but logic mustn't be dissuaded.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Invariably scan the form with ease and don't rush into responsive quickly as nothing ruins matters than being excessively wanting to end initial.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Don't suppose negatively and check out keeping a positive mind and thoughts whereas you're making ready for the doorway examination.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Last few days are to clear the slightest doubts you'll have, no matter however huge or tiny, you must never enter the examination hall with hesitation on topics that might be the ones you never prepared for and are now a part of the entrance exam.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Revision is that the key to stay a sound mind, as reading additional topics right within the finish days of preparation can solely add up to nice confusion and lesser outcome.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Once you clear your doubts and brush up few pointers you unbroken as a priority, don't hassle your mind with additional pressure. Daily before the examination, merely relax and leave the strain aside, a positive angle and a relaxed mind can for sure profit you to crack the examination.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='GROUP-2'>
                <div className='choose-data'>
                    <div className='container'>
                        <h2 className='svr-size-courses'>APPSC <span className='style-color'>GROUP-2</span></h2>
                        <div class="down-one p-4 mb-5 bg-white">
                            <h4 className='questions-most'>QUALIFICATION:</h4>
                            <div className='parap'>
                                <p>Must Possess a Bachelor’s Degree of a University in India established or incorporated by or under a Central Act, Provincial Act or a State Act or an Institution recognized by the University Grants Commission or an equivalent qualification.</p>
                            </div>
                            <h4 className='questions-most'><b>AGE RELAXATION:</b></h4>
                            <div className='parap'>
                                <p>No person shall be eligible for direct recruitment if he/she is less than 18 years of age and if he / she is more than 42 years of age</p>
                            </div>
                            {/* <h5 className='questions-most'><b>AGE RELAXATION:</b></h5> */}
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>SC/ST and BCs ------------à5 Years</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Physically Handicapped persons--------------à10 Years</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>N.C.C. (who have worked as Instructor in N.C.C.)-------à Shall be allowed to deduct from his age a period of 3 years in addition to the length of service rendered by him in the armed forces / NCC.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>A.P. State Government Employees (Employees of APSEB, APSRTC, Corporations, Municipalities etc. are not eligible).-------------à Up to maximum 5 Years based on the length of regular service.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='img-tag'>
                                    <img
                                        className="small-icon"
                                        src="./images/arrow.png"
                                        alt="logo" />
                                </div>
                                <div className='parap'>
                                    <p>Retrenched temporary employees in the State Census Department with a minimum service of 6 months.------------à 3 Years</p>
                                </div>
                            </div>

                            <h4 className='questions-most'><b>SYLLABUS:</b></h4>

                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                GENERAL STUDIES AND MENTAL ABILITY
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">

                                            <div>
                                                <h5 className='add-one-color'>
                                                    <b>GENERAL STUDIES AND MENTAL ABILITY</b></h5>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Events of national and international importance.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Current affairs- international, national and regional.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Mock tests and model papers are a must and can be practiced to brush up your skills despite what percentage times you have got already resolved one. Each try will cause you to realise one thing that you just lost earlier.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>General Science and its applications to the day to day life Contemporary developments in Science & Technology and Information Technology.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Social- economic and political history of modern India with emphases on Indian national movement.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Indian polity and governance: constitutional issues, public policy, reforms and egovernance initiatives.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Geography of India with focus on Andhra Pradesh.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Disaster management: vulnerability profile, prevention and mitigation strategies, Application of Remote Sensing and GIS in the assessment of Disaster.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Sustainable Development and Environmental Protection.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Logical reasoning, analytical ability and logical interpretation 29.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Data Analysis: Tabulation of data Visual representation of data Basic data analysis (Summary Statistics such as mean, median, mode and variance) and Interpretation.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Bifurcation of Andhra Pradesh and its Administrative, Economic, Social, Cultural, Political and legal implications/problems.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                SECTION-B SOCIAL AND CULTURAL HISTORY OF ANDHRA PRADESH
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">

                                            <div>
                                                <h5 className='add-one-color'><b>SECTION-B SOCIAL AND CULTURAL HISTORY OF ANDHRA PRADESH</b></h5>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Social and Cultural History of Andhra Pradesh: Geographical Features of Andhra – Its Impact on History and Culture – Pre-historic Cultures – The Satavahanas, The Ikshvakus – Socio-Economic and Religious Conditions – Literature, Art and Architecture – The Vishnukundins, The Eastern Chalukyas of Vengi, Telugu Cholas– Society, Religion, Telugu Language, Literature, Art and Architecture.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Various Major and Minor dynasties that ruled Andhradesa between 11th and 16th centuries A.D. Socio- Cultural and Religious conditions in Andhradesa between 11th to 16th centuries A.D, Social Structure, Caste System, Status of Women. Growth of Telugu Language, Literature, Art, Architecture and Painting.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Advent of Europeans- Trade centers- Andhra under the Company– 1857 Revolt and its impact on Andhra- Establishment of British Rule- Socio-Cultural awakening, Justice Party/Self Respect Movements- Growth of Nationalist Movement in Andhra between 1885 to 1947– Role of Socialists– Communists– Anti- Zamindari and Kisan Movements. Growth of Nationalist Poetry, Revolutionary Literature, Nataka Samasthalu and Women Participation.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Origin and growth of Andhra Movement- Role of Andhra Mahasabhas- Prominent Leaders- Events leading to the formation of Andhra State 1953. Role of Press and News Papers in the Andhra Movement. Role of Library Movement and Folk & Tribal Culture.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Events leading to the Formation of Andhra Pradesh State – Visalandhra Mahasabha States Reorganization Commission and Its Recommendations - Gentlemen Agreement – Important Social and Cultural Events between 1956 and 2014. INDIAN CONSTITUTION.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Nature of the Indian Constitution – Constitutional Development – Salient features of Indian Constitution – Preamble – Fundamental Rights, Directive Principles of State Policy and their relationship - Fundamental Duties, Distinctive features - Unitary and Federal.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Structure and functions of Indian Government- Legislative, Executive and Judiciary- Types of Legislatures- Unicameral, Bicameral- Executive – Parliamentary, Judiciary- Judicial Review, Judicial Activism.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Distribution of Legislative and Executive Powers between the Union and the States; Legislative, Administrative and Financial relations between the Union and the States– Powers and the Functions of Constitutional Bodies- UPSC, State Public Service Commissions, CAG and Finance Commission.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Centre- State relations- Need for Reforms- Rajmannar Committee, Sarkaria Commission, M.M. Punchchi Commission - Unitary and Federal features of Indian Constitution.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Amendment Process to the Constitution - Centralization Vs Decentralization - Community Development Programs- Balwantray Mehta, Ashok Mehta Committees 73rd and 74th Constitutional Amendment Acts and their Implementation.</p>
                                                    </div>
                                                </div>

                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Indian Political Parties- National, Regional- One Party, Bi-Party, Multi-Party Systems- Regionalism and Sub-Regionalism–Demand for New States - Sri Krishna Committee – National Integration- Threats to Indian Unity.</p>
                                                    </div>
                                                </div>

                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Welfare Mechanisms in India-Provisions for Scheduled Castes, Tribes and Minorities, Reservations for SCs, STs and Backward Classes- Prevention of SCs and STs Atrocities Act- National and State SCs, STs and BCs Commissions, Women’s Commission, National and State Minorities Commissions – Human Rights Commission- RTI- Lokpal and Lok Ayukt. 30</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                SECTION-C PLANNING AND ECONOMY
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body">

                                            <div>
                                                <h5 className='add-one-color'><b>SECTION-C PLANNING AND ECONOMY</b></h5>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Indian Economy and present status Socio- Economic - Goals and Achievements – New economic reforms 1991. Regulation of the Economy – Creation of regulatory bodies-NITI Aayog- Co operative Federalism and decentralization of financial resources – Lack of inclusive growth and sustainable development : causes, consequences and solutions.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Economic Policies Agricultural policies – Contribution of agriculture to India’s GDP – Issues of financing, production, marketing and distribution of agriculture. Industrial policies– Main features of industrial development in India – sectoral composition – Roles of private and public sectors in employment , productivity – Role of IT industries in development.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Resources and Development Types of resources – Physical capital and finance capital - Population- size, composition and growth–Trends; Occupational Distribution of Work force –Human Development Index as a measurement of development. Demographic Dividend.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Money, Banking and Public Finance Monetary policy of RBI – Fiscal policy – Objectives – Fiscal Imbalance and Deficit Finance –New Foreign Trade Policy. Current account imbalances; FDI. Inflation , its causes and remedies; Budget – taxes and non-tax revenue. Goods and Service Tax (GST).</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Events leading to the Formation of Andhra Pradesh State – Visalandhra Mahasabha States Reorganization Commission and Its Recommendations - Gentlemen Agreement – Important Social and Cultural Events between 1956 and 2014. INDIAN CONSTITUTION.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>National Income National Income and concepts – Gross Domestic Product – Net Domestic Product, Per capita income.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Economic Policies of Andhra Pradesh: Socio Economic welfare Programmes of Government of Andhra Pradesh. Composition of Population in Andhra Pradesh – Rural – Urban, Sex Ratio, Age Distribution.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Agriculture and Industrial Growth of Andhra Pradesh Contribution of agriculture to income and employment in Andhra Pradesh. Land reforms in Andhra Pradesh - Cropping pattern – Irrigation Policy of Andhra Pradesh - sources of agricultural finances -agricultural subsidies – public distribution system in Andhra Pradesh. Industrial Development in Andhra Pradesh – Growth and structure of industries – – Incentives to industries – Industrial corridors in and SEZs in Andhra Pradesh - Bottlenecks for industrial development – Power projects.</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='img-tag'>
                                                        <img
                                                            className="small-icon"
                                                            src="./images/arrow.png"
                                                            alt="logo" />
                                                    </div>
                                                    <div className='parap'>
                                                        <p>Resource Development of Andhra Pradesh Andhra Pradesh Budgetary resources and constraints - Fulfillment of the conditions of A.P Bifurcation Act – central assistance and issues of conflict - public debt and projects of external assistance. Andhra Pradesh State Gross Domestic Product – Comparison with India and neighboring States.</p>
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


            <section className='GROUP-3'>
                <div className='choose-data'>
                    <div className='container'>
                        <h2 className='svr-size-courses'>APPSC <span className='style-color'>GROUP-3</span> (PANCHAYAT SECRETARY) </h2>
                        <div class="down-one p-4 mb-5 bg-white">
                            <div className='APPSC GROUP-3'>
                                <h4 className='questions-most'>QUALIFICATION:</h4>
                                <div className='parap'>
                                    <p>Must have passed the Degree from any University in India established or incorporated by or under a Central Act, State Act or a Provincial Act or an Institution recognized by the University Grants Commission.</p>
                                </div>
                                <h4 className='questions-most'><b>AGE RELAXATION:</b></h4>
                                <div className='parap'>
                                    <p>No person shall be eligible for direct recruitment if he/she is less than 18 years of age and if he / she is more than 42 years of age</p>
                                </div>
                                {/* <h5 className='questions-most'><b>AGE RELAXATION:</b></h5> */}
                                <div className='d-flex'>
                                    <div className='img-tag'>
                                        <img
                                            className="small-icon"
                                            src="./images/arrow.png"
                                            alt="logo" />
                                    </div>
                                    <div className='parap'>
                                        <p>SC/ST and BCs ------------à5 Years</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='img-tag'>
                                        <img
                                            className="small-icon"
                                            src="./images/arrow.png"
                                            alt="logo" />
                                    </div>
                                    <div className='parap'>
                                        <p>Physically Handicapped persons--------------à10 Years</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='img-tag'>
                                        <img
                                            className="small-icon"
                                            src="./images/arrow.png"
                                            alt="logo" />
                                    </div>
                                    <div className='parap'>
                                        <p>N.C.C. (who have worked as Instructor in N.C.C.)-------à Shall be allowed to deduct from his age a period of 3 years in addition to the length of service rendered by him in the armed forces / NCC.</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='img-tag'>
                                        <img
                                            className="small-icon"
                                            src="./images/arrow.png"
                                            alt="logo" />
                                    </div>
                                    <div className='parap'>
                                        <p>A.P. State Government Employees (Employees of APSEB, APSRTC, Corporations, Municipalities etc. are not eligible).-------------à Up to maximum 5 Years based on the length of regular service.</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='img-tag'>
                                        <img
                                            className="small-icon"
                                            src="./images/arrow.png"
                                            alt="logo" />
                                    </div>
                                    <div className='parap'>
                                        <p>Retrenched temporary employees in the State Census Department with a minimum service of 6 months.---------à 3 Years</p>
                                    </div>
                                </div>

                                <h4 className='questions-most'><b>SYLLABUS:</b></h4>

                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    PART – A
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">

                                                <div>
                                                    <h5 className='add-one-color'>
                                                        <b>GENERAL STUDIES AND MENTAL ABILITY</b></h5>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Events of national and international importance.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Current affairs- international, national and regional.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>General Science and it applications to the day to day life Contemporary developments in Science & Technology and information Technology.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Social- economic and political history of modern India with emphasis on Andhra Pradesh.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Social- economic and political history of modern India with emphases on Indian national movement.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Indian polity and governance: constitutional issues, public policy, reforms and e-governance initiatives with specific reference to Andhra Pradesh.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Economic development in India since independence with emphasis on Andhra Pradesh.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Physical geography of Indian sub-continent and Andhra Pradesh.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Disaster management: vulnerability profile, prevention and mitigation strategies, Application of Remote Sensing and GIS in the assessment of Disaster.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Sustainable Development and Environmental Protection.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Logical reasoning, analytical ability and data interpretation.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p><b>Data Analysis:</b> (a) Tabulation of data (b) Visual representation of data (c) Basic data analysis (Summary Statistics such as mean, median, mode, variance and coefficient of variation) and Interpretation</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Bifurcation of Andhra Pradesh and its Administrative, Economic, Social, Cultural, Political and legal implications/problems.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    PART – B
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div class="card-body">

                                                <div>
                                                    <h5 className='add-one-color'><b>Rural Development and Problems in Rural Areas with special reference to Andhra Pradesh</b></h5>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Evolution of Panchayat Raj system in India including Constitutional amendments and reports of Various Committees.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Evolution of Panchayat Raj system in Andhra Pradesh.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Roles and responsibilities of Panchayat Secretary.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Rural Sociology: History and Evolution of schemes catering to upliftment of Rural Poor.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Flagship Rural Development schemes of Rural Development Department of Government of India and Andhra Pradesh.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Key Schemes of Panchayat Raj Department of A.P.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Rural Economy of Andhra Pradesh: Agriculture, Small scale Industries, Rural artisans.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Rural Credit Scenario of Andhra Pradesh: Role of Banks, co-operatives and Micro Finance.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Community Based Organizations and convergence of Welfare Schemes.</p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Women Empowerment and Economic development through Self Help Groups.</p>
                                                        </div>
                                                    </div>

                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Revenue and Expenditure Management of Local Bodies.</p>
                                                        </div>
                                                    </div>

                                                    <div className='d-flex'>
                                                        <div className='img-tag'>
                                                            <img
                                                                className="small-icon"
                                                                src="./images/arrow.png"
                                                                alt="logo" />
                                                        </div>
                                                        <div className='parap'>
                                                            <p>Accounting and administering funds received under various schemes.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='AP SUB-INSPECTORS(SI)'>

                                <h4 className='questions-most'>AP SUB-INSPECTORS(SI):</h4>
                                <h6 className='questions-most'><b>QUALIFICATION:</b></h6>
                                <div className='parap'>
                                    <p>The candidate must hold a Degree awarded by any University in India, established or incorporated by or under a Central Act, Provisional Act of State or of any institution recognised by the University Grants Commission or any other equivalent qualification.</p>
                                </div>

                                <div>
                                    <h6 className='questions-most'><b>SELECTION PROCESS:</b></h6>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>Preliminary Written Test (PWT)</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>Physical Measurement Test (PMT) & Physical Efficiency Test (PET)</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>Final Written Examination (FWE)</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className='questions-most'><b>SYLLABUS:</b></h4>
                                    <div class="accordion" id="accordionExample">
                                        <div class="card">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                                                        <b>PAPER I:</b> ARITHMETIC (SSC STANDARD) & TEST OF REASONING / MENTAL ABILITY (1OO QUESTIONS)
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="collapsefour" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">

                                                    <div>
                                                        <h6 className='add-one-color'><b>Arithmetic:</b></h6>
                                                        <div className='parap'>
                                                            <p>It wiil inciude questions on problems relating to number system, simple interest, compound interest, ratio & proportiory average, percentage, profit & loss, time & work, work & wages, time & distance, clocks & calendars, partnership, mensuration etc.</p>
                                                        </div>
                                                        <h6 className='add-one-color'><b>Test of Reasoning:</b></h6>
                                                        <div className='parap'>
                                                            <p>It will include questions of both verbal & non-verbal type and include question on analogies, similarities and differences, spatial visualisatiory spatial orientatiory problem solving, analysis, judgmen! decision making, visual memory etc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        <b>PAPER II:</b> GENERAL STUDIES (DEGREE STANDARD) (1OO OUESTIONS)
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseFive" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div class="card-body">

                                                    <div>
                                                        <div className='d-flex'>
                                                            <div className='img-tag'>
                                                                <img
                                                                    className="small-icon"
                                                                    src="./images/arrow.png"
                                                                    alt="logo" />
                                                            </div>
                                                            <div className='parap'>
                                                                <p>General Science - contemporary developments in science and technology and their implications including matters of everyday observation and experience, contemporary issues relating to protection of environment as may be expected of a well educated person who has not made a special study of any scientif ic discipline.</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div className='img-tag'>
                                                                <img
                                                                    className="small-icon"
                                                                    src="./images/arrow.png"
                                                                    alt="logo" />
                                                            </div>
                                                            <div className='parap'>
                                                                <p>Current events of national and international importance.</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div className='img-tag'>
                                                                <img
                                                                    className="small-icon"
                                                                    src="./images/arrow.png"
                                                                    alt="logo" />
                                                            </div>
                                                            <div className='parap'>
                                                                <p>History of India - emphasis will be on broad general understanding of the subject in its social, economic, cultural and political aspects. Indian National Movement.</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div className='img-tag'>
                                                                <img
                                                                    className="small-icon"
                                                                    src="./images/arrow.png"
                                                                    alt="logo" />
                                                            </div>
                                                            <div className='parap'>
                                                                <p>Geography of India.</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div className='img-tag'>
                                                                <img
                                                                    className="small-icon"
                                                                    src="./images/arrow.png"
                                                                    alt="logo" />
                                                            </div>
                                                            <div className='parap'>
                                                                <p>Indian Polity and Economy - including the Country's political system, rural development, planning and economic reforms in India.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className='AP POLICE CONISTABLE(PC)'>
                                <h4 className='questions-most'>AP POLICE CONISTABLE(PC):</h4>
                                <h6 className='questions-most'><b>QUALIFICATION:</b></h6>
                                <div className='parap'>
                                    <p>He/She must have passed SSC or its equivalent examination recognised by state government and should have studied Intermediate and appeared for Intermediate Examinations in both 1st and 2nd year</p>
                                </div>

                                <div>
                                    <h6 className='questions-most'><b>SELECTION PROCESS:</b></h6>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>PRELIMINARY WRITTEN TEST</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>PHYSICAL MEASUREMENTS TEST (PMT)</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>PHYSICAL EFFICIENCY TEST (PET)</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>FINAL WRITTEN EXAMINATION</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='questions-most'><b>SYLLABUS:</b></h5>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>PRELIMINARY WRITTEN TEST</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>English</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>Arithmetic</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>General Science</p>
                                        </div>
                                    </div>

                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>History of India,Indian culture,Indian National Movement</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>Current events of National and Internationl importance</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='img-tag'>
                                            <img
                                                className="small-icon"
                                                src="./images/arrow.png"
                                                alt="logo" />
                                        </div>
                                        <div className='parap'>
                                            <p>Test of Reasoning/Mental Ability</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Courses