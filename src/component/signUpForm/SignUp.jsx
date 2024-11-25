

import { useNavigate } from 'react-router-dom';

import { useFormik } from "formik";
import {SignUpValidation} from './SignUpValidation'
import { useState } from 'react';
import { useProvider } from '../../createcontext/FormContext';

function SignUp() {

  const {updateData}=useProvider()
  const navigate = useNavigate();
  const [signFormData, setSignFormData] = useState({
    mobile_no: "",
    address: "",
    // terms: false,
  });
  // console.log(signFormData);

  

  // Custom onChange handler
  const handleCustomChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value); 
    setSignFormData((prev) => ({ ...prev, [fieldName]: value })); 
  };
 const handleCustomChangeaddress=(fieldName, value) => {
  formik.setFieldValue(fieldName, value); 
  setSignFormData((prev) => ({ ...prev, [fieldName]: value })); 
};

  const formik = useFormik({
    initialValues: {
      mobile_no: "",
      address:"",
      terms:false
      
      
    },
    validationSchema: SignUpValidation,
    onSubmit: (values,action) => {
      navigate('/OtpVerify') 
      // setSignUpFormData(values)
      // setSignUpFormData(values)
      updateData(signFormData)

      // updateFormData()
      
      
      

     
      
      action.resetForm()
    },
    
  });
  

  return (
        
        
      <form onSubmit={formik.handleSubmit} className="max-w-screen-sm " >
    <div className="  flex items-center flex-col justify-center max-w-screen-sm m-auto space-y-6    ">

    <h1 className="font-serif text-3xl text-green-400  ">Sign Up</h1>
{/*   start  mobile number input........................................................... */}

            <div   className="    flex justify-start flex-col  space-y-1 ">
              <label htmlFor="mobileNumber" className="text-start text-sm text-green-500" >Mobile Number *</label>
        
              <input
    
    
                type="text"
                id="mobileNumber"
                name="mobile_no"
                value={formik.values.mobile_no}
                // onChange={formik.handleChange}
                onChange={(e) => handleCustomChange("mobile_no", e.target.value)}
                onBlur={formik.handleBlur} 
                placeholder="Enter mobile number"
                
                onKeyPress={(e) => {
                    if (!/^\d$/.test(e.key) || formik.values.mobile_no.length >= 10) {
                        e.preventDefault();
                      }
    }}
    
  
    
    className="py-2 sm:w-[500px] w-96  border-2 border-green-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 text-lg
     placeholder-gray-400 px-3 bg-green-50"
              />
          
              {formik.touched.mobile_no && formik.errors.mobile_no && (
                <div className="text-red-600 text-sm  text-left">{formik.errors.mobile_no}</div>
              )}
            </div>
    {/* End mobile number input........................................................... */}
    
            {/* Start address  input........................................................... */}
            <div   className="   flex justify-start flex-col  space-y-1  ">
              <label htmlFor="address" className="text-start text-sm text-green-500" >Address *</label>
    
              <input
                type="text"
                id="address"
                name="address"
                value={formik.values.address}
                // onChange={formik.handleChange}
                onChange={(e) => handleCustomChangeaddress("address", e.target.value)}

                onBlur={formik.handleBlur}
                placeholder="Enter your address"
    

    
    
                
    className="py-2 px-3  border-2 border-green-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 text-lg
    placeholder-gray-400 sm:w-[500px] w-96 bg-green-50"
               
              />
              {formik.touched.address&& formik.errors.address && (
                <div className="text-red-600 text-sm  text-left">{formik.errors.address}</div>
              )}
            </div>

             {/* End address  input........................................................... */}


     {/* Start checkBox  input........................................................... */}
    <div className="flex flex-col items-center "> 
      <div className="sm:w-[500px] w-96   flex flex-col space-y-2">
        
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            style={{ accentColor: '#22c55e' }}
            checked={formik.values.terms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="h-5 w-5 "
              
          />
          <label htmlFor="terms" className="text-sm">
            I Agree with term & conditions
          </label>
        </div>
    
        
        {formik.touched.terms && formik.errors.terms && (
          <div className="text-red-500 text-sm text-start">{formik.errors.terms}</div>
        )}
      </div>
    </div>
    
    
    
            
     {/*  End checkbox  input........................................................... */}
    
    
    
            {/* Start Button.............................................................................. */}
            
            <div >
              <button type="submit" className="sm:w-[500px] w-96 rounded-sm py-2 bg-green-500 text-white font-bold focus:text-gray-100 focus:bg-green-400 font-serif">SIGN UP</button>
            </div>
            {/* End Button........................................................................................ */}
            
            
          </div>
          
          
    
          </form>
          
      
    
        
        
    
    
    
      );
    }
     
    export default SignUp;
    
















    // onSubmit: async (values,action) => {
    //   navigate('/OtpVerify') 
    //   try {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(values),
    //     });
    //     if (response.ok) {
    //       const data = await response.json();
    //       console.log("Response:", data);
    //       alert("Form submitted successfully!");
    //     } else {
    //       alert("Failed to submit form. Please try again.");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     alert("An error occurred. Please try again.");
    //   }
    //   action.resetForm()
    // },





















// import React, { useState } from "react";

// import { useFormik } from "formik";
// import {SignUpValidation} from './SignUpValidation'

// function SignUp() {

//   const formik = useFormik({
//     initialValues: {
//       mobileNumber: "",
//       address:"",
//       terms:false
      
//     },
//     validationSchema: SignUpValidation,
//     onSubmit: async (values,action) => {
//         console.time("Form Submission Time"); 
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });
//         if (response.ok) {
//           const data = await response.json();
//           console.log("Response:", data);
//           alert("Form submitted successfully!");
//         } else {
//           alert("Failed to submit form. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("An error occurred. Please try again.");
//       }
//       action.resetForm()
//     },
//   });
  

//   return (
//     <div>
    

//       <form onSubmit={formik.handleSubmit}>
// <div className="  flex items-center flex-col  space-y-6 my-10">
//         <div   className="  w-[500px] flex justify-start flex-col  space-y-1 ">
//           <label htmlFor="mobileNumber" className="text-start text-sm text-green-500" >Mobile Number *</label>
//       {/* Number Box........................ */}
//           <input


//             type="text"
//             id="mobileNumber"
//             name="mobileNumber"
//             value={formik.values.mobileNumber}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur} 
//             placeholder="Enter mobile number"
            
//             onKeyPress={(e) => {
//                 if (!/^\d$/.test(e.key) || formik.values.mobileNumber.length >= 10) {
//                     e.preventDefault();
//                   }
// }}

// // style name input....................

// className="py-2   w-full border-2 border-green-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 text-lg
//  placeholder-gray-400 px-3"
//           />
//           {formik.touched.mobileNumber && formik.errors.mobileNumber && (
//             <div className="text-red-600 text-sm  text-left">{formik.errors.mobileNumber}</div>
//           )}
//         </div>


//         {/* adresss Box........................................ */}
//         <div   className="    w-[500px] flex justify-start flex-col  space-y-1 ">
//           <label htmlFor="address" className="text-start text-sm text-green-500" >Address *</label>

//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formik.values.address}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Enter password"

// // style address input ...........................................


            
// className="py-2 px-3  border-2 border-green-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 text-lg
// placeholder-gray-400 w-full"
           
//           />
//           {formik.touched.address&& formik.errors.address && (
//             <div className="text-red-600 text-sm  text-left">{formik.errors.address}</div>
//           )}
//         </div>
// {/* checkBox.......................... */}
// <div className="flex flex-col items-center ">
//   <div className="w-[500px] flex flex-col space-y-2">
//     {/* Checkbox and label */}
//     <div className="flex items-center space-x-3">
//       <input
//         type="checkbox"
//         id="terms"
//         name="terms"
//         style={{ accentColor: '#22c55e' }}
//         checked={formik.values.terms}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         className="h-5 w-5 "
          
//       />
//       <label htmlFor="terms" className="text-sm">
//         I Agree with term & conditions
//       </label>
//     </div>

//     {/* Error message */}
//     {formik.touched.terms && formik.errors.terms && (
//       <div className="text-red-500 text-sm text-start">{formik.errors.terms}</div>
//     )}
//   </div>
// </div>



        
// {/* checkbox end.............................. */}



        
        
//         <div className="w-[500px]">
//           <button type="submit" className="w-full rounded-sm py-2 bg-green-500 text-white font-bold focus:text-gray-100 focus:bg-green-400">SignUp</button>
//         </div>
        
//       </div>
  
      

//       </form>
      
  

//     </div>
    



//   );
// }
 
// export default SignUp;
