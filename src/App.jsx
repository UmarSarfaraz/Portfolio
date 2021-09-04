import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Projects from "./Projects";


import { Switch,Route,Redirect} from 'react-router-dom';

const App=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
        </Switch>
        <Footer/>
  
        </>
    );
};
export default App;

// // import { add,sub,mult,div } from "./Cal";
// // import Heading from './Heading';
// // import Para from './Para';
// // import Ol from './Ol';

// // function App(){
// //    return (
// //    <>
// //    <Heading/>
// //    <Para/>
// //    <Ol/>
// //    </>

// //     )
// // };
// // export default App;

// // function App(){
// //     let curDate =new Date(2021,7,6,9);
// // curDate=curDate.getHours();
// // let greetings="";
// // const cssStyle={};

// // if(curDate>1 && curDate<12){
// //   greetings="Good Morning";
// //   cssStyle.color="Green";
// // }else if(curDate>=12 && curDate<19){
// //   greetings="Good Afternoon";
// //   cssStyle.color="Orange";
// // }
// // else{
// //   greetings="Good Night";
// //   cssStyle.color="Black";
// // }
// // return(
// //     <>
// //     <div>
// //   <h1>Hello Sir,<span style={cssStyle}>{greetings}</span></h1>
// //    </div>
// //     </>
// // )
// // }

// // const name="Umar";
// // const age=24;

// // export default App;


// // export {name,age};

// // function App(){
// //   return(
// //     <>
// //     <ul>
// //       <li> {add(20,5)} </li>
// //       <li> {sub(20,5)} </li>
// //       <li> {mult(20,5)} </li>
// //       <li> {div(20,3)} </li>
// //     </ul>
// //     </>
// //   );
// // }

// // export default App;



// // Lec 27 Ternary operators(if else)
// const Netflix ="netflix";
// const Amazon = "amazon";
// const FavS = " Netflix";

// // const App=() => {
// //   {FavS === "Netflix" ? <Netflix/> : <Amazon/>}
// //   console.log(FavS)
// // };
// // export default App;

// const App= () => {
  

//     if(FavS ===" fggf")
//     return(
//       Netflix
     
//     )
//     else{
//       return(
//        Amazon 
//              )
//     }
  
// };

// // {FavS === "Netflix" ? <Netflix/> : <Amazon/>}
  
// // }
//  export default App;