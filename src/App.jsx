
import WebImg from './component/signUpForm/Webimg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./component/signUpForm/SignUp"
import OtpVerify from "./component/otpverify/OtpVerify"
import EnterPin from "./component/createPin/EnterPin"
import LogIn from './component/login/Login';
import { FormProvider } from './createcontext/FormContext';
import { useState,useEffect } from 'react';



function App() {
  const [data,setData]=useState({
    latitude:0,
    longitude:0
  })
  
  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };
  console.log(data);
  
  useEffect(() => {
  const sendDataToAPI = async () => {
    try {
    const response = await fetch('http://20.244.93.116/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", result);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  sendDataToAPI();
}, [data.password]);

  
    
  

  

  
  
  return (
    <>
    <FormProvider value={{updateData}}>
     <div className=" grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-green-100 ">
        
    <div className="flex items-center justify-center lg:mt-0 mt-24">
      <WebImg />
    </div> 
 
<div className="flex items-center flex-col justify-center p-4">
<Router>
      <Routes>
        <Route  path='/' element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/OtpVerify" element={<OtpVerify mobileNum={data.mobile_no}/>} />
        <Route path="/EnterPin" element={<EnterPin />} />
      </Routes>
    </Router>
</div> 
    </div> 
   </FormProvider>
   

   
  
     
    </>
  )
}

export default App
