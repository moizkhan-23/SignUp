           

import * as Yup from "yup"





export const OtpVerification =Yup.object({
    mobileNumVerify:Yup.string().matches(/^[6789]{1}[0-9]{9}$/,"please Enter valid number").required("Mobile number is required"),
    device_id:Yup.string().matches(/^[0-9]{4}$/,"please Enter valid number").required("Mobile number is required"),
    



})





