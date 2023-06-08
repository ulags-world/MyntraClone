import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import "./SignUp.css";
import "../../api/Authentication";
import { getOtp } from "../../api/Authentication";
import { Navigate } from "react-router-dom";
import { setMobileNumber } from "../../Redux/moblieNumberSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
function SignUp() {
  const inputRef = useRef();
  const inputSpan91 = useRef();
  const inputSpanMobileNumber = useRef();
  const [focus, setFocus] = useState(false);
  const [data, setData] = useState("");
  const [otpScreen, setOtpScreen] = useState(false);
  const [pointer, setPointer] = useState(false);
  const inputError = useRef();
  useEffect(() => {
    if (focus) {
      inputSpan91.current.classList.add("input91");
      inputSpanMobileNumber.current.classList.add("inputmobilenumber");
      inputRef.current.classList.add("inputfocus");
    } else {
      inputSpan91.current.classList.remove("input91");
      inputSpanMobileNumber.current.classList.remove("inputmobilenumber");
    }
    if (data.length !== 0) {
      inputSpanMobileNumber.current.classList.add("inputmobilenumber");
    }
  }, [focus, data]);
  
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleClick = async () => {
    if (/^[0-9]+$/.test(data)) {
      localStorage.setItem("ouiytrewdfcghjkl,jbvvjhfgdcg", data);
      if (await getOtp(data)) {
        dispatch(setMobileNumber(data)); //redux state management
        setOtpScreen(() => true);
        toast.success('Otp Sent Successfully', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    } else {
      setPointer(() => true);
    }
  };
  if (otpScreen) {
    return (
      <div>
        <Navigate to="/otp" />
      </div>
    );
  }
  return (
    <div>
      <Header isRendered={true} noProfile={true} />
      <div className="sign">
        <div className="login__card">
          <div className="login__card__coupon">
            <img
              className="login__card__coupon__image"
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"
              alt="coupon logo"
            ></img>
          </div>
          <div className="login__card__details">
            <p className="login__card__details__p">
              <span className="login__card__details__text">Login</span> or{" "}
              <span className="login__card__details__text">Signup</span>
            </p>
            <div className="login__card__details__phone">
              <input
                type="text"
                value={data}
                minLength={10}
                maxLength={10}
                onChange={handleChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                ref={inputRef}
                className="login__card__details__phone__input"
              ></input>
              <div
                ref={inputError}
                className={
                  pointer
                    ? "login__card__details__phone__error"
                    : "login__card__details__phone__error__default"
                }
              >
                Please enter a valid mobile number (10 digits)
              </div>
              <span
                ref={inputSpan91}
                className="login__card__details__phone__input__91"
              >
                +91
                <span className="login__card__details__phone__input__91__seperator">
                  |
                </span>
                <span
                  ref={inputSpanMobileNumber}
                  className="login__card__details__phone__input__91__mobilenumber"
                >
                  Mobile Number
                  <span className="login__card__details__phone__input__91__mobilenumber__star">
                    *
                  </span>
                </span>
              </span>
            </div>
            <p className="login__card__details__footer">
              By continuing, I agree to the
              <span className="login__card__details__footer__text">
                Terms of Use
              </span>
              &
              <span className="login__card__details__footer__text">
                Privacy Policy
              </span>
            </p>
            <button
              onClick={handleClick}
              className="login__card__details__continue"
            >
              CONTINUE
            </button>
            <p className="login__card__details__footer">
              Have trouble logging in?
              <span className="login__card__details__footer__text">
                Get help
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
