import React from 'react'
import circle from "../assets/Circles.svg";
import work from "../assets/WORK360.svg";

function LoginPage() {
  return (
    <div className="bg-[rgba(0,41,69,0.1)] h-[100vh] w-full relative overflow-clip">
      <div className="absolute right-1">
        <img src={circle} alt="circle" className="" />
      </div>
      <div className="flex h-[100vh] place-items-center">
        {/* App360 logo and quote */}
        <div className="ml-[15vh]  w-full">
          <img src={work} alt="work360" className="w-[50vh] " />
          <p className="mt-10 text-xl font-normal">
            Now your companies & employees are in one <br /> place and always
            under the control
          </p>
        </div>
        {/* Login form */}
        <div className=" flex justify-end   w-full">
         

        </div>
      </div>
    </div>
  )
}

export default LoginPage;