import React, { useEffect, useRef, useState } from "react";
import "./OtpPage.css";
import { signUp } from "../api/Authentication";
import Header from "../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ResendTimer from "../Components/ResendTimer/ResendTimer";
import { toast } from "react-toastify";

function OtpPage() {
  //resend timer states
  const [otpTime] = useState(true);
  const inputOneRef = useRef();
  const [dataOne, setDataOne] = useState("");
  const inputTwoRef = useRef();
  const [dataTwo, setDataTwo] = useState("");
  const inputThreeRef = useRef();
  const [dataThree, setDataThree] = useState("");
  const inputFourRef = useRef();
  const [dataFour, setDataFour] = useState("");
  const [otp, setOtp] = useState("");
  const navigateToAccount = useNavigate();
  const phoneNumber = useSelector((state) => state.mobileNumber);
  useEffect(() => {
    const validateOtp = async () => {
      if (otp.length === 4) {
        const res = await signUp(phoneNumber, otp);
        console.log({ res });
        if (res) {
          console.log("otp success");
          toast.success('OTP verified successfully', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          await navigateToAccount("/createaccount", { replace: true });
        }
        else{
          console.log("not a new user")
          navigateToAccount('/')
        }
      }
    };
    if (dataOne.length === 1 && /^[0-9]+$/.test(dataOne)) {
      inputTwoRef.current.focus();
    }
    if (dataTwo.length === 1 && /^[0-9]+$/.test(dataTwo)) {
      inputThreeRef.current.focus();
    }
    if (dataThree.length === 1 && /^[0-9]+$/.test(dataThree)) {
      inputFourRef.current.focus();
    }
    setOtp(dataOne + dataTwo + dataThree + dataFour);
    validateOtp();
  }, [dataOne, dataTwo, dataThree, dataFour, otp]);

  const handleDeleteTwo = (e) => {
    if (e.key === "Backspace") {
      setDataTwo("");
      inputOneRef.current.focus();
    }
  };
  const handleDeleteThree = (e) => {
    if (e.key === "Backspace") {
      setDataThree("");
      inputTwoRef.current.focus();
    }
  };
  const handleDeleteFour = (e) => {
    if (dataFour.length !== 1) {
      if (e.key === "Backspace") {
        inputThreeRef.current.focus();
      }
    }
  };

  console.log(otp);
  console.log(phoneNumber);
  const handleFinalChange = async (e) => {
    setDataFour(e.target.value);
  };

  return (
    <div>
      <Header isRendered={true} noProfile={true} />
      <div className="otp">
        <div className="otp__card">
          <div>
            <img
              className="otp__card__logo"
              src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
              alt="logo"
            />
          </div>
          <div className="otp__card__verify">
            <p className="otp__card__verify__text">Verify with OTP</p>
            <p className="otp__card__verify__mobilenumber">
              Sent to <span style={{ fontSize: "11px" }}>{phoneNumber}</span>
            </p>
          </div>
          <div className="otp__card__input">
            <input
              onChange={(e) => setDataOne(e.target.value)}
              type="text"
              autoFocus
              ref={inputOneRef}
              size={3}
              name="1"
              maxLength={1}
              minLength={1}
              className="otp__card__input__box"
            ></input>
            <input
              onChange={(e) => setDataTwo(e.target.value)}
              type="text"
              ref={inputTwoRef}
              onKeyDown={handleDeleteTwo}
              size={3}
              name="2"
              maxLength={1}
              minLength={1}
              className="otp__card__input__box"
            ></input>
            <input
              onChange={(e) => setDataThree(e.target.value)}
              ref={inputThreeRef}
              onKeyDown={handleDeleteThree}
              size={3}
              name="3"
              maxLength={1}
              minLength={1}
              className="otp__card__input__box"
            ></input>
            <input
              onChange={handleFinalChange}
              ref={inputFourRef}
              onKeyDown={handleDeleteFour}
              size={3}
              maxLength={1}
              minLength={1}
              className="otp__card__input__box"
            ></input>
          </div>
          <div style={{ paddingTop: "10px" }}>
            {(() => {
              if (otpTime) {
                return (
                  <div>
                    <ResendTimer />
                  </div>
                );
              }
            })()}
          </div>
          <div className="otp__card__loginpassword">
            <p>
              Log in using{" "}
              <span onClick={
                (()=>{
                  navigateToAccount('/password')
                })
              } className="otp__card__loginpassword__link">Password</span>
            </p>
          </div>
          <div className="otp__card__loginpassword">
            <p>
              Having trouble logging in?{" "}
              <span className="otp__card__loginpassword__link">Get help</span>
            </p>
          </div>
        </div>
      </div>
      <div className="incorrect__otp__popup">
        <p>Incorrect OTP</p>
      </div>
    </div>
  );
}

export default OtpPage;
