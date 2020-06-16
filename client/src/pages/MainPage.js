import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BioImage from "../images/BudBioPic.png";
import Button from "react-bootstrap/Button"

class MainPage extends Component {





    render() {

        return (
            <div>
                {/* Navbar */}
                <Navbar className="navbar" style={{paddingLeft: "30px", paddingRight: "40px"}} expand="lg">
                <Navbar.Brand className="p-3 text-white font-weight-bold" href="/">Rackley Agency</Navbar.Brand>
                <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="pl-3">
                    <Nav className="ml-auto">
                    <Nav.Link className="text-white" href="/contactUs">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

                {/* video and text intro */}
                <div className="row mt-5 mb-3 px-5 text-left">
                    <div className="col-md-6">
                        <iframe
                            title="intro_video"
                            src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F273889467%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F273889467%3Ftitle%3D0%26byline%3D0%26portrait%3D0&key=c6502efcb3c84824bc6c1f27d683be13&type=text%2Fhtml&schema=vimeo&wmode=opaque"
                            frameBorder="0"
                            width="100%"
                            height="370px"
                            scrolling="no"
                            allow="autoplay; fullscreen"
                            className="introVid"
                        />
                    
                    </div>
                    <div className="col-md-6 introSec my-auto">
                        <h1> HERE'S WHY AMBITIOUS SALES PEOPLE ARE ENTERING THE LUCRATIVE CASH-RICH INDUSTRY OF FINANCIAL SERVICES</h1>
                    </div>
                </div>

                {/* company description */}
                <div className="row px-5">
                    <div className="col-md-6 introSec">
                        <p>The Rackley Agency offers the ambitious, authentic, high integrity professional – the opportunity to double, or possibly triple, your income in only 12 months. We also welcome those who would like a flexible, part-time opportunity to fill in financial gaps.</p>
                        <p>Member’s of our team consist of individuals, from all walks of life who have implemented the Symmetry System and are experiencing real results.</p>
                        <p>Our company was established with the goal of helping to bring balance to the professional and personal lives of independent insurance agents and agency builders across the country. By focusing on a more balanced distribution of commissions, we are truly committed to sharing the wealth of opportunity with you, while committed to delivering the highest level of service and training available to our family of agents. Combining our Proprietary Lead Program with business values of trust, reliability and integrity. Our company is committed to ensuring your personal goals and objectives can be successfully defined, subsequently achieved over the short, medium and long term. If you're looking for the ability to make a great living while helping people, this could be the opportunity for you.</p>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="rounded mx-auto d-block img-fluid"
                            src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1580164023805-JUFWL7R28JEIKF2LDMDY/ke17ZwdGBToddI8pDm48kLQaFilkCg2GQ2eAufUXDOlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH8LkuTK76DNOjyYAIUJZ6G_ZIwQZbIqKkE_l0A7mbblDFvbuqF0GUInBxxtVhBOn4/Inc.+5000.png?format=300w"
                            alt="badge of america's fastest-growing private companies"
                        />
                        <p className="text-center"> Four years 2016, 2017, 2018 & 2019</p>
                    </div>
                </div>
                <div className="row px-5">
                    <div className="col-md-6">
                        <img
                            className="mx-auto d-block img-fluid"
                            src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1580483604544-4P2SEYD6T6OLWEQIFN6F/ke17ZwdGBToddI8pDm48kATthOCkjf0ZkZpCicttprlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFK4e_M5mxPgdvH6GJsabxKyODdxjYHf67Ro4WmgveLW6EcAfnVBrEqrgp1UxUHGkY/Ent.+2017+%26+2018.png"
                            alt="voted top company culture by Entrepreneur in 2017 & 2018"
                        />
                    </div>
                    <div className="col-md-6 my-auto">
                        <img
                            className="mx-auto d-block img-fluid"
                            src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1580079459544-GT9538VJKMML722C72UW/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/image-asset.jpeg?format=750w"
                            alt="workspace collaboration"
                            height="300px"
                        />
                    </div>
                </div>

                <div className="text-center my-5 pb-5 border-bottom">
                    <a href="/contactUs"><Button variant="primary" >More Information</Button></a>  
                </div>

                {/* Why us section */}
                <div className="px-5 my-5 border-bottom">
                    <h1 className="text-center mb-5">Why Us?</h1>

                    <div className="row text-center">
                        <div className="col-md-4">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1580080864138-JPEAFQM4PFYOHYX9T16B/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"
                                alt="home office"
                                width="80%"
                            />
                            <h5 className="font-weight-bold mt-4">Turnkey System</h5>
                            <p className="px-5 mt-3">Proven, turnkey system that has worked for hundreds of people just like you. The Symmetry System will have you up and running and making money in no time. </p>
                        </div>
                        <div className="col-md-4">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1580080523930-V6AALVEEXPJLGYZEKOFU/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"
                                alt="training session in meeting room"
                                width="80%"
                            />
                            <h5 className="font-weight-bold mt-4">Continued Training</h5>
                            <p className="px-5 mt-3">Comprehensive training from the insurance industry’s best, no experience required. Symmetry has continued training daily.</p>
                            <p ></p>
                        </div>
                        <div className="col-md-4">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1580080929407-M7PSH30SOBYCGH9DS7A5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"
                                alt="one on one training session"
                                width="80%"
                            />
                            <h5 className="font-weight-bold mt-4">One-on-One Mentoring</h5>
                            <p className="px-5 mt-3"> One-on-one coaching to help and encourage you every step of the way. You are never at this business alone. </p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6 text-center">
                            <h3 className="font-weight-bold mb-4">Who are we?</h3>
                            <p className="px-5">Meet the owners of our company and some of the top managers and learn a little about what it's like to be a part of the Symmetry Family.</p>
                        </div>
                        <div className="col-md-6">
                            <iframe
                                title="Meet the owners"
                                src="https://www.youtube.com/embed/MV8AUTd6C8U?wmode=opaque&enablejsapi=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                className="d-block mx-auto img-fluid"
                            />   
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6 text-center">
                            <h3 className="font-weight-bold mb-4">Meet Symmetry</h3>
                            <p className="px-5">This is a quick summary of our industry and how Symmetry Financial Group fits into that industry.</p>
                        </div>
                        <div className="col-md-6">
                            <iframe
                                title="Meet Symmetry"
                                src="https://www.youtube.com/embed/KCop0Y74-TU?wmode=opaque&enablejsapi=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                className="d-block mx-auto img-fluid"
                            />   
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6 text-center">
                            <h3 className="font-weight-bold mb-4">Company Overview</h3>
                            <p className="px-5">Learn the ins and outs of the business as we explain about the company, the products, what we do, how we do it, and how we get paid.</p>
                        </div>
                        <div className="col-md-6">
                            <iframe
                                title="Company Overview"
                                src="https://www.youtube.com/embed/Bh3uT7viX0E?wmode=opaque&enablejsapi=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                className="d-block mx-auto img-fluid"
                            />   
                        </div>
                    </div>

                    <div className="text-center mt-5 pb-5">
                        <a href="/contactUs"><Button variant="primary" >More Information</Button></a>
                    </div> 
                </div>
                
                {/* Build your own empire section */}
                <div className="my-5 mx-auto w-75">
                    <h5 className="font-weight-bold text-center mb-3">BUILD YOUR OWN EMPIRE WITHIN OUR FAST GROWING COMPANY.</h5>

                    <ul style={{listStylePosition: "inside"}} >
                        <li><span className="font-weight-bold">No Cap On Income:</span> Average agents make $50K per year, Good Agents make $150K per year and Superstars make $300K+</li>
                        <li><span className="font-weight-bold">We Hire Performers:</span> Not Backgrounds</li>
                        <li><span className="font-weight-bold">Meet With Clients Only Two Days Per Week:</span> All leads provided, no cold calling or prospecting</li>
                        <li><span className="font-weight-bold">One of America’s Fastest Growing Companies:</span> Inc 5000 2016, 2017, 2018 & 2019</li>
                        <li><span className="font-weight-bold">Luxury All Expense Paid Vacations:</span> Free, world-class travel to reward you for your production</li>
                        <li><span className="font-weight-bold">Passive Income:</span> Eventually you’ll have the ability to replace your personal production</li>
                        <li><span className="font-weight-bold">Decreasing Agent Population:</span> According to LIMRA – Average age of Agent is 57 years</li>
                        <li><span className="font-weight-bold">Clear Blueprint to reach 6 or 7 figure goals:</span> There is no limit to your income potential</li>
                        <li><span className="font-weight-bold">Untapped Market Potential:</span> Demand nationwide has not been sufficiently met by our products</li>
                        <li><span className="font-weight-bold">Team Culture that seeks to promote without over-working you:</span> At our core we believe in balance</li>
                    </ul>
                </div>

                {/* Bio Section */}

                <div className="row py-5 mt-5 mb-5 px-5 border-top border-bottom " style={{background: "#f2f2f2"}}>
                    <div className="col-md-6">
                        <img
                            className="d-block ml-auto img-fluid"
                            src={BioImage}
                            alt="owner head shot"
                            height="430px"
                            width="auto"
                        />
                    </div>
                    <div className="col-md-6 p-2 my-auto introSec">
                        <h4>Volnerius Rackley: <small className="font-weight-bold">Atlanta, Georgia</small></h4>
                        <p className="d-block w-75 bioParagraph">Volnerius Rackley graduated from Morehouse College with a degree in Business Administration with a concentration in Management. He has over 15 years of combined experience in retail management, customer service, banking, and inside sales. Volnerius and his team are excited to work for you and your family to get you the financial help you need. We’re here to serve. Thank you for taking the time to visit our website!</p>
                    </div>
                </div>

                {/* Testimonies section */}
                <div className="mt-5 border-bottom" >
                    <h5 className="mt-5 text-center">ORDINARY PEOPLE ACHIEVING <span className="font-weight-bold">EXTRAORDINARY SUCCESS</span></h5>

                    <div className="row mt-5 px-5">
                        <div className="col-md-6 introSec">
                            <img 
                                className="d-block ml-auto img-fluid"
                                src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1585072751397-K4E7O9MNM27EQRXDB6YG/ke17ZwdGBToddI8pDm48kLXCf88_9uNTKXkq27cF4sB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmzUsryC7riGV7bTeYhg5Sep4Y8p3OCJVqs3FfNTLch3O2M0DsfUdwheg190rC2-Re/Tim-Trish-1024x1024.jpg?format=750w"
                                alt="MIKE & KATIE RUDICK"
                                height="430px"
                                width="auto"
                            />
                        </div>
                        <div className="col-md-6 p-2 my-auto introSec">
                            <h4 >MIKE & KATIE RUDICK: <small className="font-weight-bold">Tulsa, Oklahoma</small></h4>
                            <p className="d-block w-75 bioParagraph">Katie and I got started with this business a couple years ago.  Katie was a nurse and I owned a concrete business and was a Tulsa Firefighter.  While our jobs were rewarding, we just didn’t have enough time for our 5 kids and knew we needed to make a change.  What we liked about this business is that we could build something that didn’t require us to constantly trade our time for money.  Because of this business, Katie has now been able to retire from nursing and <span className="font-weight-bold">we’re building our dreams instead of someone else’s.</span></p>
                        </div>
                    </div>

                    <div className="row mt-5 p-5">
                        <div className="col-md-6 my-auto introSec">
                            <img 
                                className="d-block ml-auto img-fluid"
                                src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1585072978153-2AK6TRABEDPE29PDOIVR/ke17ZwdGBToddI8pDm48kEGFyNSSVcY20AeZBep59sNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpztXZo8zN9m4NuqtvwUC2MVvkOlWRzDkcMTPSves2Jc7qL3wkRq-OPWim-NICofEOg/Esther.jpeg?format=750w"
                                alt="MARLIN FAULKNER"
                                height="285px"
                                width="auto"
                            />
                        </div>
                        <div className="col-md-6 p-2 introSec">
                            <h4 >MARLIN FAULKNER: <small className="font-weight-bold">Columbus, Ohio</small></h4>
                            <p className="d-block w-75 bioParagraph">When I started this business almost 5 years ago, I was so broke I was literally living in my car.  I had lost confidence in myself, but when I found this business, I met people who believed in me for than I believed in myself.  What really appealed to me the most was that there were successful people that were willing to teach me exactly what to do to have success and I just had to follow their lead.  Because I was coachable and willing to follow the system, I was recently able to buy my first home and <span className="font-weight-bold">I now make more in a month than I ever made in my best 2 years previously.</span></p>
                        </div>
                    </div>

                    <div className="row mt-5 p-5">
                        <div className="col-md-6 my-auto introSec">
                            <img 
                                className="d-block ml-auto img-fluid"
                                src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1585074673236-FFRG90O5VX5W99NNKM4C/ke17ZwdGBToddI8pDm48kAXJra15wwuB98SOpe_V62RZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-v1oM8_AinzePurXCURXEqVSQFXAL_LmY9bnWWS_W_jWw/Elliott-240x300.jpg?format=300w"
                                alt="BRAD SMITH"
                                height="320px"
                                width="auto"
                            />
                        </div>
                        <div className="col-md-6 p-2 introSec">
                            <h4 >BRAD SMITH: <small className="font-weight-bold">Kingsport, Tennessee </small></h4>
                            <p className="d-block w-75 bioParagraph">When my brother and I were first introduced to this business a little more than 5 years ago, we had just shut down our mattress business and were almost $300,000 in debt.  We were maxed out on credit cards and felt like we were at the end of our rope.  As painful as it was, I’m grateful for that experience, because it made me humble and teachable and willing to listen to other people’s ideas that had what I was looking for.  After 18 months of working hard in this business, we were fortunate enough to completely pay off all of our debt. <span className="font-weight-bold">Now, we’re traveling the world, earning a 7-figure residual income, and have more happiness and purpose than we’ve ever had in our entire lives.</span></p>
                        </div>
                    </div>

                    <div className="row mt-5 p-5">
                        <div className="col-md-6 my-auto introSec">
                            <img 
                                className="d-block ml-auto img-fluid"
                                src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1585569927887-SH1D9WHRHB4AU0ACL4SU/ke17ZwdGBToddI8pDm48kLZ9tjlgrjf-wVn5vUqmZZUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcA2pHkEPW53otMdYcBOSSb2ljH8GtSfJDAVC8up1OBpVwg6demzENuRLIsPpFeSNP/Blue-Suit-2-1024x681.jpg?format=750w"
                                alt="SCOTT SUMMERS"
                                height="290px"
                                width="auto"
                            />
                        </div>
                        <div className="col-md-6 p-2 bioParagraph introSec">
                            <h4 >SCOTT SUMMERS: <small className="font-weight-bold">Fredricksburg, Virginia </small></h4>
                            <div className="d-block w-75 bioParagraph">
                                
                            <p style={{lineHeight: "1.5"}}>SYMMETRY #1 APPLICATION WRITER FOR 2016</p> 
                            
                            <p style={{lineHeight: "1.5"}}>SYMMETRY IMPACT PLAYER OF THE YEAR 2016 & 2018. </p>
                            
                            <p style={{lineHeight: "1.5"}}>SYMMETRY NOVEMBER TO REMEMBER COMPETITION CHAMPION 2016</p>
                            
                            I spent eleven years in home improvement sales before starting with Symmetry part-time in 2015. While I was earning good money, I spent long hours on the road. With two young daughters I wanted to be sure I didn’t miss them growing up. The Symmetry system has been instrumental in balancing a career and family. My wife Kelly has been a huge contributor in the growth of my agency, as she has worked by myside. I enjoy playing tennis with my girls vacationing, playing guitar and living out one of the companies core values, “Have fun and get stuff done.”</div>
                        </div>
                    </div>
                </div>

                {/* agents testimony */}
                <div className="p-5">
                    <h5 className="mt-5 text-center font-weight-bold">What some of our agents say about Symmetry.</h5>
                    <div className="row mt-5">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6 introSec">
                            <p>
                                “SGF has made working remotely a collaborative experience with a knowledgeable team. They offer endless support and self-development. I owned a demanding catering business. Then my father passed. My five brothers and I pulled together for the expenses. Not wanting others to have this terrible experience, I found a home with SFG. It is giving me the flexibility to raise four kids while protecting others.” <span className="font-weight-bold">- Providencia Janet, Symmetry Agent in New Jersey</span>
                            </p>
                            <p>
                                “I lost my job due to a car accident that kept me out of work. Mostly, I love that I can help people as much as they need and want. My time and conversations are not being micromanaged. I like the idea of commission because I determine my paycheck, not someone else. This is a relationship we’re  building with our clients and we want them to feel comfortable with us.” <span className="font-weight-bold">- Michelle Roberts, Symmetry Agent in South Carolina </span>
                            </p>
                            <p>
                                “I came from a 16 year management career in the food service industry. Living I was not. I was tired of being tired. I stumbled upon Symmetry. A great culture environment was a must for me! I an truly becoming a believer of the entire system that Symmetry provides. The system works if you work the system! Thank you Symmetry for changing my life! <span className="font-weight-bold">- Debbie Woods, Symmetry Agent in Virginia</span>
                            </p>
                        
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>     
                </div>

                {/* build your dreams */}
                <div className="my-5 border-top">
                    <h4 className="mt-5 text-center font-weight-bold">YOU CAN BUILD YOUR DREAMS</h4>
                    <h5 className="mt-3 text-muted text-center">OR YOU CAN GET PAID BY SOMEONE ELSE TO BUILD THEIRS</h5>
                </div>
                
                {/* footer */}
                <div className="p-3" style={{borderTop:"1px solid #07A0C3"}}>
                    <h5 className="text-center text-muted">Rackley Agency &copy;2020</h5>
                </div>
            </div>
        )
    }
}

export default MainPage;