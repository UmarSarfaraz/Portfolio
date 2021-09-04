import React from "react";
import web from "../src/Images/ten.png";
import lp from "../src/Images/nine.PNG";
import resw from "../src/Images/seven.png";
import bm from "../src/Images/twelve.png";
import psd from "../src/Images/thirteen.jpg";
import wp from "../src/Images/fourteen.PNG";

const Services=()=>{
    return(
        <>
        <div className="my-5">
        <h3 className=" text-center">Services I Provide</h3>
        </div>
        <div className="container-fluid mb-5">
            <div className="row gy-4">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <div className="col-md-4 col-10 mx-auto" id="image" >
                        <div class="card" id="card" >
                <img src={web} id="cardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">ReactJs Websites</h5>
     <p class="card-text">I can build reactjs responsive and fast-loading websites by using reactjs.</p>
       <a href="https://www.fiverr.com/umar316/your-front-end-web-developer-with-html-css-js-react" 
       target="_blank"  class="btn btn-outline-primary">Get ReactJs Website</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card" >
                <img src={lp} id="cardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Landing Page Websites</h5>
     <p class="card-text"> I build responsive and cross browser compatible landing page websites
   .</p>
       <a href="https://www.fiverr.com/umar316/your-front-end-web-developer-with-html-css-js-react"
       target="_blank"  class="btn btn-outline-primary">Get Landing Page Website</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card">
                <img src={resw} id="cardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Responsive Websites</h5>
     <p class="card-text">I can build responsive website which would be desktop compatible and mobile-friendly.</p>
       <a href="https://www.fiverr.com/umar316/your-front-end-web-developer-with-html-css-js-react" 
       target="_blank"  class="btn btn-outline-primary">Get Responsive Website</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card" >
                <img src={bm}  id="cardimg"class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Material UI ,Bootstrap Websites</h5>
     <p class="card-text">I can build awesome ,eye-catchy reactjs website using material UI and Bootstrap.</p>
       <a href="https://www.fiverr.com/umar316/your-front-end-web-developer-with-html-css-js-react"
       target="_blank"  class="btn btn-outline-primary">Get BS & Material UI Website</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card" >
                <img src={psd} id="cardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">PSD to HTML,CSS Websites</h5>
     <p class="card-text">I can convert Photoshop Document(PSD) to HTML, CSS Websites.</p>
       <a href="https://www.fiverr.com/umar316/your-front-end-web-developer-with-html-css-js-react"  target="_blank" 
       class="btn btn-outline-primary">Get PSD to HTML,CSS Website</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card" >
                <img src={wp} id="wcardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Wordpress Websites</h5>
     <p class="card-text">Get any type of Wordpress website like Portfolio, blog or of any other at affordable price.</p>
       <a href="https://www.fiverr.com/umar316/your-front-end-web-developer-with-html-css-js-react" target="_blank" class="btn btn-outline-primary">Get Wordpress website</a>
                            </div>
                          </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};
export default Services;