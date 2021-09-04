import React from "react";
import web from "../src/Images/twentyfive.PNG";
import { NavLink } from "react-router-dom";

const Home=()=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1>Easy Marketing Solutions For Your Business


                      </h1>
                        <h2>I offer modern solutions for growing your business
</h2>
                        {/* <h2 className="my-3">I am a front end web developer</h2> */}
                        <div className="mt-3">
                            <NavLink to="/about" className="btn btn-outline-primary">Get Started</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web}  alt="homeimg"/>
                    </div>
                </div>
                </div>
            </div>
        </div>

        </section>
        </>
    );
};
export default Home;