import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import "./Password.css";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Password() {

  const navigate = useNavigate()
  const phoneNumber = useSelector((state) => state.mobileNumber);
  const formik = useFormik({
    initialValues: {
      emailOrMobile: "",
      password: "",
    },
  });

  const [mobileNumber, setMobileNumber] = useState(phoneNumber.toString());
  const mobileOrEmailRef = useRef();
  const passwordRef = useRef();
  const inputPlaceHolderOne = useRef();
  const inputPlaceHolderTwo = useRef();

  useEffect(() => {
    // const validateUser = async () => {
    //   if (await checkUser(phoneNumber)) {
    //     console.log("existing user");
    //   } else {
    //     console.log("new user");
    //   }
    // };
    // validateUser();
    inputPlaceHolderOne.current.classList.add("inputPlaceHolder");
  }, [phoneNumber]);

  const handleForgetPassword = ()=>{
    navigate('/forgetpassword')
  }
  const handleOnFocusOne = () => {
    mobileOrEmailRef.current.classList.add("inputOnFocus");
    inputPlaceHolderOne.current.classList.add("inputPlaceHolder");
  };
  const handleOnBlurOne = () => {
    mobileOrEmailRef.current.classList.remove("inputOnFocus");
    console.log(mobileNumber.length);
    if (formik.values.emailOrMobile.length === 0) {
      inputPlaceHolderOne.current.classList.remove("inputPlaceHolder");
    }
  };
  const handleOnFocusTwo = () => {
    passwordRef.current.classList.add("inputOnFocus");
    inputPlaceHolderTwo.current.classList.add("inputPlaceHolder");
  };
  const handleOnBlurTwo = () => {
    passwordRef.current.classList.remove("inputOnFocus");
    console.log(formik.values.emailOrMobile.length);
    if (formik.values.password.length === 0) {
      inputPlaceHolderTwo.current.classList.remove("inputPlaceHolder");
    }
  };
  return (
    <div>
      <Header isRendered={true} noProfile={true} />
      <div className="password">
        <div className="password__card">
          <p className="password__card__text">Login to your account</p>
          <form className="password__card__form">
            <div className="account__card__create__password">
              <div className="account__card__create__password__div">
                <input
                  className="account__card__create__password__div__input"
                  type="email"
                  name="email"
                  onChange={(e) => {
                    formik.values.emailOrMobile = e.target.value;
                    setMobileNumber(e.target.value);
                  }}
                  value={mobileNumber}
                  autoComplete="off"
                  ref={mobileOrEmailRef}
                  onFocus={handleOnFocusOne}
                  onBlur={handleOnBlurOne}
                  size={42}
                />
                <span
                  onClick={() => {
                    mobileOrEmailRef.current.focus();
                  }}
                  ref={inputPlaceHolderOne}
                  htmlFor="email"
                  className="account__card__input__placeholder"
                >
                  Email or Mobile Number
                  <span style={{ color: "rgb(255, 87, 34)" }}>*</span>
                </span>
              </div>
            </div>
            <div className="account__card__create__password">
              <div className="account__card__create__password__div">
                <input
                  ref={passwordRef}
                  className="account__card__create__password__div__input"
                  type="password"
                  name="email"
                  autoComplete="new-password"
                  onChange={(e) => {
                    formik.values.password = e.target.value;
                  }}
                  onFocus={handleOnFocusTwo}
                  onBlur={handleOnBlurTwo}
                  size={42}
                />
                <span
                  onClick={() => {
                    passwordRef.current.focus();
                  }}
                  ref={inputPlaceHolderTwo}
                  htmlFor="email"
                  className="account__card__input__placeholder"
                >
                  Password
                  <span style={{ color: "rgb(255, 87, 34)" }}>*</span>
                </span>
              </div>
            </div>
            <div className="account__card__button__div">
              <button type="submit" className="account__card__button">
                LOGIN
              </button>
            </div>
          </form>
          <div className="otp__card__loginpassword">
            <p>
              Forget your password?{" "}
              <span className="otp__card__loginpassword__link">
              <a
                onClick={handleForgetPassword}
              >Reset here
              </a>
              </span>
            </p>
          </div>
          <div className="otp__card__loginpassword">
            <p>
              Have trouble logging in?{" "}
              <span className="otp__card__loginpassword__link">Get help</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
