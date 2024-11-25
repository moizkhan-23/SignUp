
import { useState } from "react";
import { OtpVerification } from "./OtpVerification";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useProvider } from "../../createcontext/FormContext";



 export default function OtpVerify({mobileNum}){
  const {updateData}=useProvider()
  const navigate = useNavigate();
  const [dataOtp,setDataOtp]=useState({
    // mobileNumVerify:mobileNum,
    // OtpVerify:''
    device_id:''

  })

    
   const otpVerefyCustomChange = (fieldName, value) => {
     formik.setFieldValue(fieldName, value); 
   setDataOtp ((prev) => ({ ...prev, [fieldName]: value })); 
  };
 const enterPinCustomChangeaddress=(fieldName, value) => {
  formik.setFieldValue(fieldName, value); 
  setDataOtp ((prev) => ({ ...prev, [fieldName]: value })); 
};
    
    
    const formik = useFormik({
        initialValues: {
          mobileNumVerify: mobileNum,
          // OtpVerify:"",
          device_id:''
    
          
        },
        // initialValues:formData,
        validationSchema: OtpVerification,
        onSubmit: (values,action) => {

          navigate('/EnterPin')
          updateData(dataOtp)
            // console.log(values);
            

             action.resetForm()
           
        
        },
      });
      
    





    return(
        <>
    <div>
        <div className="  max-w-screen-sm m-auto flex items-center justify-center flex-col space-y-2 ">
        <h1 className="font-serif text-3xl font-bold">Verify OTP</h1>
        <p className=" font-serif text-lg text-gray-500 font-bold">Details Will come here</p>
        
        </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <div className="  flex items-center flex-col justify-center max-w-screen-sm m-auto space-y-8    ">

            {/* start verify mobile number ......................................... */}
        <div   className="    flex justify-start flex-col  space-y-1 ">
              {/* <label htmlFor="mobileNumVerif" className="text-start text-sm text-green-500" >Mobile Number </label> */}
              <label htmlFor="mobileNumVerify" className="text-start text-sm text-green-500">
  Mobile Number
</label>
        
              <input
    
    
                type="text"
                id="mobileNumVerify"
                name="mobileNumVerify"
                value={formik.values.mobileNumVerify}
                // onChange={formik.handleChange}
                onChange={(e)=>otpVerefyCustomChange('mobileNumVerify',e.target.value)}
              
                onBlur={formik.handleBlur} 
            
                readOnly={true}
                
                
                onKeyPress={(e) => {
                    if (!/^\d$/.test(e.key) || formik.values.mobileNumVerify.length >= 10) {
                        e.preventDefault();
                      }
    }}
    
  
    
    className="py-2 sm:w-[500px] w-96  border-2 border-green-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 text-lg
     placeholder-gray-400 px-3 bg-green-50"
              />
          
          {formik.touched.mobileNumVerify && formik.errors.mobileNumVerify && (
                <div className="text-red-600 text-sm  text-left">{formik.errors.mobileNumVerify}</div>
              )}
            </div>
            {/*  End verify mobile number ......................................... */}

{/* Start verify OTP..................................................... */}

            <div   className="    flex justify-start flex-col  space-y-1 ">
              <label htmlFor="OtpVerify" className="text-start text-sm text-green-500" >Enter 4 Digit OTP</label>
        
              <input
    
    
                type="text"
                id="OtpVerify"
                name="device_id"
                value={formik.values.OtpVerify}
                // onChange={formik.handleChange}
                onChange={(e)=> enterPinCustomChangeaddress('device_id',e.target.value)}
                onBlur={formik.handleBlur} 
                placeholder="Enter OTP"
                
                onKeyPress={(e) => {
                    if (!/^\d$/.test(e.key) || formik.values.device_id.length >= 4) {
                        e.preventDefault();
                      }
    }}
    
  
    
    className="py-2 sm:w-[500px] w-96  border-2 border-green-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 text-lg
     placeholder-gray-400 px-3 bg-green-50"
              />
          
              {formik.touched.device_id && formik.errors.device_id && (
                <div className="text-red-600 text-sm  text-left">{formik.errors.device_id}</div>
              )}
            </div>
            {/* End verify OTP..................................................... */}
             {/* Start Button.............................................................................. */}
            
             <div >
              <button type="submit" className="sm:w-[500px] w-96 rounded-sm py-2 bg-green-500 text-white font-bold focus:text-gray-100 focus:bg-green-400">Veryfy</button>
            </div>
            {/* End Button........................................................................................ */}
           

</div>

        </form>
        
        
        </>
    )
 }

















































