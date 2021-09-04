import React from "react";
import web from "../src/Images/twentyfour.PNG";
import fb from "../src/Images/twentyone.PNG";
import gh from "../src/Images/twentytwo.PNG";
import li from "../src/Images/twentythree.PNG";
import html from "../src/Images/twentyseven.PNG";
import css from "../src/Images/twentyeight.PNG";
import js from "../src/Images/twentynine.PNG";
import jquery from "../src/Images/thirty.PNG";
import reactjs from "../src/Images/thirtyone.PNG";








const About=()=>{
    return(
        <>
        <section id="headerabout" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1 id="About">About Me</h1>
                        <div className="about">
                        <h4>Hi,I am Umar Sarfaraz a front end Developer.</h4>
                        <h5>I have learned front end web development and now my focus is on learning backend language
                         and database.My goal is to become a full stack web developer and designer.
                        </h5>
                        <h5 className="mt-1">I can create user interactive and fast loading responsive websites.</h5>
                        </div> 
                        <div className="mt-2">
                            <a href="https://www.fiverr.com/users/umar316/" target="_blank" className="btn btn-outline-primary">Hire Me</a>
                        
                            <a href="https://drive.google.com/file/d/1HXsOB07Mz_gl3rPCvJV3MrgrrlsdNS4S/view?usp=drivesdk"
                             target="_blank" 
                            className="btn btn-outline-primary">View CV</a>
                        </div>
                        
                        <div className="icons">
                        <br/>
                        <h2 id="About">Social Links</h2>
                        <a href="https://www.facebook.com/profile.php?id=100044584922573" target="_blank">
                       <img src={fb}  className="fb" alt="Facebook"
                           
                       />
                       </a>
                       <a href="https://github.com/UmarSarfaraz" target="_blank">
                       <img src={gh} className="fb" alt="Github"/>
                       </a>
                       <a href="https://www.linkedin.com/in/umar-sarfaraz-6a740a219" target="_blank">
                       <img src={li} className="fb" alt="LinkedIn"/>
                       </a>

                       


                       </div>
                       <div className="exp">
                       <br/>
                        <h2 id="About">Expertise</h2>

                       <img src={html}  className="fb" alt="HTML"/>
                       <img src={css} className="fb" alt="Cascading Style Sheets"/>
                       <img src={js} className="fb" alt="JavaScript"/>
                       <img src={jquery} className="fb" alt="JQuery"/>
                       <img src={reactjs} className="fb" alt="ReactJs"/>


                       

                       </div>
                        
                       
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} className="animated" alt="homeimg"/>
                    </div>
                   
                </div>
               
                </div>
               
            </div>

           
        </div>
       
      
        </section>

        </>
    );
};
export default About;