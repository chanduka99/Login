import React, { useEffect, useRef, useState } from "react";
import OTPComponent from "./OTPComponent";

function VerifyAccount({userEmail,onConfirmOTPClicked}) {
  const email = userEmail;

  const initialTime = 20;
  const [seconds, setSeconds] = useState(initialTime);
  const timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(timerId.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  function stopTimer(){
    clearInterval(timerId.current);
  };

  function restartTimer(){
    stopTimer();
    setSeconds(initialTime);
    startTimer();
  };

  useEffect(() => {
    startTimer();

    return () => clearInterval(timerId.current); // Clean up the interval on component unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  function handleConfirm(){
    onConfirmOTPClicked(false);
  }

  return (
    <div className=" card  relative">
      <h1 className=" header">Verify your Account</h1>
      {/* form area */}
      <div className=" mt-[15vh] flex justify-center place-items-center ">
        <div>
          <div className="flex justify-center mb-4">
            <span className="font-normal text-base text-[rgba(0, 0, 0, 0.7);
]">
              We've sent a code to
            </span>
            <span className="mx-0.5"></span>
            <span className="font-medium text-base">{email}</span>
          </div>
          {/* otp input */}
          <OTPComponent />
          <div>
            {/* timer */}
            <div className="flex justify-end mt-4">
              <button className="font-medium">Send code again</button>
              <span className="mx-2" />
              <span>{formatTime(seconds)}</span>
            </div>
            {/* Confirm button */}
            <div className=" mt-16">
              <button className="buttonPrimary" onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
        {/* Powered by APP360*/}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2  w-full px-5">
          <div className="text-base font-normal text-center">
            <span className="text-poweredBy">Powered by </span>
            <span className="font-bold text-primary">APP</span>
            <span className="font-bold text-secondary">360</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccount;
