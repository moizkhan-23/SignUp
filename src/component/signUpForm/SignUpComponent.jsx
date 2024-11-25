import SignUp from "./SignUp";
import WebImg from "./Webimg";
import OtpVerify from "../otpverify/OtpVerify";
import EnterPin from "../createPin/EnterPin";

export default function SignUpComponent() {
  return (
      <>
     
      <div className=" grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-green-100 ">
        
        <div className="flex items-center justify-center lg:mt-0 mt-24">
          <WebImg />
        </div>
 <div className="flex items-center justify-center p-4">
          <SignUp />
        </div>

      </div>  
      <OtpVerify></OtpVerify>
     <EnterPin></EnterPin>
    </>
  );
}
