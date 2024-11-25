           

import * as Yup from "yup"



// /^[A-Za-z,.0-9:\s-]{10,}$/gm
// /^[6789]{1}[0-9]{9}$/

export const SignUpValidation =Yup.object({
    mobile_no:Yup.string().matches(/^[6789]{1}[0-9]{9}$/,"please Enter valid number").required("Mobile number is required"),
    address: Yup.string().matches(/^[A-Za-z,.0-9:\s-]{10,}$/,"Address must be at least 10 characters long").required('Address is required'),
    terms: Yup.boolean()
        .oneOf([true], "Check the box to agree to our terms and conditions."),



})





