

import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useProvider } from "../../createcontext/FormContext";

import * as Yup from "yup"
import { useState } from "react";


 export default function EnterPin(){
  const navigate = useNavigate();
  const {updateData}=useProvider()
  const [pindata,setPinData]=useState({
    // createPin:''
  password:''

  })

  const createPinCustomChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value); 
    setPinData((prev) => ({ ...prev, [fieldName]: value })); 
  };


    

// Define the validation schema
const pinValidation  = Yup.object({
  password: Yup.string()
    .required("PIN is required")
    .matches(/^[0-9]{4}$/, "PIN must be exactly 4 digits"),
});

    
    
    const formik = useFormik({
        initialValues: {
          // createPin: "",
          password:''
        
    
          
        },
        
        validationSchema: pinValidation,
        onSubmit: (values,action) => {
          updateData(pindata)
            navigate("/")
            

             action.resetForm()
           
        
        },
      });
      
    





    return(
        <>
    
        
        
    
        <form onSubmit={formik.handleSubmit}>
        <div className="  flex items-center flex-col justify-center max-w-screen-sm m-auto space-y-8   ">

            {/* start verify mobile number ......................................... */}
        <div   className="    flex justify-start flex-col  space-y-1 ">
              
              <label htmlFor="pins" className="text-start text-sm text-green-500">
  Enter 4-Digit pin
</label>
    
              <input
    
    
                type="text"
                id="pins"
                name="password"
                value={formik.values.password}
                // onChange={formik.handleChange}
                onChange={(e)=> createPinCustomChange('password',e.target.value)}
                onBlur={formik.handleBlur} 
            placeholder="Enter your Pin"
                
                
                onKeyPress={(e) => {
                    if (!/^\d$/.test(e.key) || formik.values.password.length >= 4) {
                        e.preventDefault();
                      }
    }}
    
  
    
    className="py-2 sm:w-[500px] w-96  border-2 border-green-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 text-lg
     placeholder-gray-400 px-3 bg-green-50"
              />
          
          {formik.touched.password && formik.errors.password && (
                <div className="text-red-600 text-sm  text-left">{formik.errors.password}</div>
              )}
            </div>
            {/*  End verify mobile number ......................................... */}

{/* Start verify OTP..................................................... */}

    
        
              
    
    
        
             {/* Start Button.............................................................................. */}
            
             <div >
              <button type="submit" className="sm:w-[500px] w-96 rounded-sm py-2 bg-green-500 text-white font-bold focus:text-gray-100 focus:bg-green-400">Save</button>
            </div>
            {/* End Button........................................................................................ */}
           

</div>

        </form>
        
        
        </>
    )
 }






















































