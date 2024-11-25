
import { useState } from "react";

import * as Yup from "yup"

import { useFormik } from "formik";


import { useNavigate } from 'react-router-dom';



 export default function LogIn(){
    const navigate = useNavigate();


   function handleNavigate(){
    navigate('/SignUp')

   }
  
    const logInValidation  = Yup.object({
        logInMobileNum:Yup.string().required('Moble number is required').matches(/^[6789]{1}[0-9]{9}$/,"please Enter valid number")
       , createdPin: Yup.string()
          .required("PIN is required")
          .matches(/^[0-9]{4}$/, "please Enter valid Pin"),
      });
    
    const formik = useFormik({
        initialValues: {
          logInMobileNum: "",
          createdPin:"",
    
          
        },
        // initialValues:formData,
        validationSchema: logInValidation,
        onSubmit: (values,action) => {
console.log(values);

        //   navigate('/EnterPin')
            // console.log(values);
            // setFormData([{...values}])/
            // setFormData((pre)=>[{...values},...pre])

             action.resetForm()
           
        
        },
      });
      
    





    return(
        <>
    <div>
        <div className="  max-w-screen-sm m-auto flex items-center justify-center flex-col space-y-2  border-transparent ">
        <h1 className="font-serif text-3xl text-green-400">Log In</h1>
        
        </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <div className="  flex items-center flex-col justify-center max-w-screen-sm m-auto space-y-8  border-transparent   ">

            {/* start verify mobile number ......................................... */}
        <div   className="    flex justify-start flex-col  space-y-1 ">
              {/* <label htmlFor="mobileNumVerif" className="text-start text-sm text-green-500" >Mobile Number </label> */}
              <label htmlFor="logInNum" className="text-start text-sm text-green-500">
  Mobile Number *
</label>
        
              <input
    
    
                type="text"
                id="logInNum"
                name="logInMobileNum"
                value={formik.values.logInMobileNum}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                placeholder="Enter Mobile Number"
                
                
                onKeyPress={(e) => {
                    if (!/^\d$/.test(e.key) || formik.values.logInMobileNum.length >= 10) {
                        e.preventDefault();
                      }
    }}
    
  
    
    className="py-2 sm:w-[500px] w-96  border-2 border-green-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 text-lg
     placeholder-gray-400 px-3 bg-green-50"
              />
          
          {formik.touched.logInMobileNum && formik.errors.logInMobileNum && (
                <div className="text-red-600 text-sm  text-left">{formik.errors.logInMobileNum}</div>
             
             )}
            </div>
            {/*  End verify mobile number ......................................... */}

{/* Start verify OTP..................................................... */}

            <div   className="    flex justify-start flex-col  space-y-1 ">
              <label htmlFor="pin" className="text-start text-sm text-green-500" >Enter 4 Digit Pin</label>
        
              <input
    
    
                type="text"
                id="pin"
                name="createdPin"
                value={formik.values.createdPin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                placeholder="Enter-Pin"
                
                onKeyPress={(e) => {
                    if (!/^\d$/.test(e.key) || formik.values.createdPin.length >= 4) {
                        e.preventDefault();
                      }
    }}
    
  
    
    className="py-2 sm:w-[500px] w-96  border-2 border-green-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 text-lg
     placeholder-gray-400 px-3 bg-green-50"
              />
          
              {formik.touched.createdPin && formik.errors.createdPin && (
                <div className="text-red-600 text-sm  text-left">{formik.errors.createdPin}</div>
              )}
            </div>
            {/* End verify OTP..................................................... */}
             {/* Start Button.............................................................................. */}
            
             <div >
              <button type="submit" className="sm:w-[500px] font-serif w-96 rounded-sm py-2 bg-green-500 text-white font-bold focus:text-gray-100 focus:bg-green-400">Log In</button>
            </div>
            {/* End Button........................................................................................ */}
            <p onClick={handleNavigate} className="text-blue-500 text-sm font-serif  hover:border-b-2 hover:border-blue-500 cursor-pointer">Don't have an account? signup</p>
           

</div>

        </form>
        
        
        </>
    )
 }

















































