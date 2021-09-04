import React from "react";
import web from "../src/Images/three.PNG";
import netflix from "../src/Images/four.PNG";
import clock from "../src/Images/five.PNG";
import todoList from "../src/Images/six.PNG";
import temp from "../src/Images/eighteen.PNG";
import quiz from "../src/Images/seventeen.PNG"


const Projects=()=>{
    return(
        <>
       <div className="my-5">
        <h3 className=" text-center">Some of Project Samples</h3>
        </div>
        <div className="container-fluid mb-5">
            <div className="row gy-4">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="cardp" >
                <img src={web} id="cardimgp" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Calculator App</h5>
     <p class="card-text">Simple Calculator with functionality of clear.<br/>
     Responsive Design</p>
       <a href="https://umarsarfaraz.github.io/Awesomecalculator/" target="_blank" class="btn btn-outline-primary">Launch</a>  
       <a href="https://github.com/UmarSarfaraz/Awesomecalculator" target="_blank" class="btn btn-outline-primary">View Code</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="cardp" >
                <img src={netflix} id="cardimgp"class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Top 5 Netflix Series</h5>
     <p class="card-text">List of top 5 Netflix series.
     Components are used in this project.
     Made with ReactJs.<br/>
     Responsive Design

     </p>
       <a href="https://drive.google.com/file/d/1vm0hPJ2wnGvKLMeEE5WiHYaC4LRnDGbN/view?usp=sharing"
        target="_blank" class="btn btn-outline-primary">Watch Demo</a>
       <a href="https://github.com/UmarSarfaraz/Netflix-series/tree/main" target="_blank" class="btn btn-outline-primary">View Code</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="cardp">
                <img src={todoList} id="cardimgc" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">ToDo List</h5>
     <p class="card-text"> A small App using ReactJs with <br/>functionality of Hooks<br/>
     Add and Delete Option<br/>
     Responsive Design
      </p>
       <a href="https://drive.google.com/file/d/1iZrIxK_i3GzGfPuYJcznTgT5GPDoRyJR/view?usp=sharing"
        target="_blank" class="btn btn-outline-primary">Watch Demo</a>
       <a href="https://github.com/UmarSarfaraz/ToDoList/tree/main" target="_blank" class="btn btn-outline-primary">View Code</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="cardp">
                <img src={clock}  id="cardimgc" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Digital Clock</h5>
     <p class="card-text">Simple Digital clock which shows exactly time with seconds without refreshing page<br/>
     Made with ReactJs with functionality of Hooks.
     </p>
       <a href="https://drive.google.com/file/d/17uDvyVeeFCLonNYlglGYJRzM7YaP7H6n/view?usp=sharing"
        target="_blank" class="btn btn-outline-primary">Watch Demo</a>
       <a href="https://github.com/UmarSarfaraz/Digital-Clock/tree/main" target="_blank"  class="btn btn-outline-primary">View Code</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto"id="image">
                        <div class="card"id="cardp" >
                <img src={temp} id="cardimgp" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Temperature Converter</h5>
     <p class="card-text">A small app for converting temperature of celsius into Farenheit and vice versa.<br/>
     Made with HTMl,CSS.JavaScript</p>
       <a href="https://umarsarfaraz.github.io/temperatureConverter/" 
       target="_blank" class="btn btn-outline-primary">Launch</a>
       <a href="https://github.com/UmarSarfaraz/temperatureConverter" 
       target="_blank"  class="btn btn-outline-primary">View Code</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card"id="cardp" >
                <img src={quiz} id="cardimgc" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Quiz App</h5>
     <p class="card-text">A small app for quiz which shows result upon completion of quiz.<br/>
     Made with HTML,CSS and Javascript<br/>Also has functionality of again taking quiz.<br/> 
     </p>
       <a href="https://umarsarfaraz.github.io/awesomeQuizApp/"
        target="_blank" class="btn btn-outline-primary">Launch</a>
       <a href="https://github.com/UmarSarfaraz/awesomeQuizApp" 
       target="_blank" class="btn btn-outline-primary">View Code</a>
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
       

export default Projects;