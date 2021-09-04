import React from "react";
import emailjs from 'emailjs-com';

const Contact=()=>{
   

    const sendEmail=(u)=>{
        u.preventDefault();
        emailjs.sendForm('service_0ip38cb','template_q645au5',u.target,
        "user_gFsYr6V9BPTJ9wBVoEYGs").then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
        
         alert(`Thankyou for contacting me,I have received your message`)
       
    }
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        <div className="container contact_div">
            <div class="row">
                <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={sendEmail}>
          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   name="fullname"

   placeholder="Enter Your Name"/>
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1"
   name="phone"

   placeholder="Mobile Number"/>
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" 
  class="form-label">Email address</label>
  <input type="email" class="form-control"
   id="exampleFormControlInput1"
   name="email"

   placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
   name="Message">

   

   </textarea>
</div>
    <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>

  </div>

          </form>

                </div>
            </div>
        </div>

        </div>
        </>
    );
};
export default Contact;


// const Contact=()=>{
//     const[data,setData]=useState({
//         fullname:"",
//         phone:"",
//         email:"",
//         Message:"",
//     });
//     const InputEvent=(event)=>{
//         const{name,value}=event.target;

//         setData((preVal)=>{
//             return{
//                 ...preVal,
//                 [name]:value,

//             }; 
//         });
        
//     };

//     const formSubmit=(u)=>{
//         u.preventDefault();
        
//         alert(`My name is ${data.fullname}.My mobile number is ${data.phone} and my email is ${data.email}, And here is what I want to say ${data.Message}`)
       
//     }
//     return(
//         <>
//         <div className="my-5">
//         <h1 className="text-center">Contact Us</h1>
//         <div className="container contact_div">
//             <div class="row">
//                 <div className="col-md-6 col-10 mx-auto">
//           <form onSubmit={formSubmit}>
//           <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Full Name</label>
//   <input type="text" class="form-control" id="exampleFormControlInput1"
//    name="fullname"
//    value={data.fullname}
//    onChange={InputEvent}
//    placeholder="Enter Your Name"/>
// </div>
//  <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Phone</label>
//   <input type="number" class="form-control" id="exampleFormControlInput1"
//    name="phone"
//    value={data.phone}
//    onChange={InputEvent}
//    placeholder="Mobile Number"/>
// </div>
//  <div class="mb-3">
//   <label for="exampleFormControlInput1" 
//   class="form-label">Email address</label>
//   <input type="email" class="form-control"
//    id="exampleFormControlInput1"
//    name="email"
//    value={data.email}
//    onChange={InputEvent}
//    placeholder="name@example.com"/>
// </div>
// <div class="mb-3">
//   <label for="exampleFormControlTextarea1" class="form-label">Message</label>
//   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
//    name="Message"
//    value={data.Message}
//    onChange={InputEvent}></textarea>
// </div>
//     <div class="col-12">
//     <button class="btn btn-outline-primary" type="submit">Submit form</button>

//   </div>

//           </form>

//                 </div>
//             </div>
//         </div>

//         </div>
//         </>
//     );
// };