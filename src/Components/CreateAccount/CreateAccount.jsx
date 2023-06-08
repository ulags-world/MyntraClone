import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import "./CreateAccount.css";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import { useFormik } from "formik";
import { profile } from "../../api/CreateProfile";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();

  const inputOneRef = useRef();
  const inputTwoRef = useRef();
  const inputThreeRef = useRef();
  const inputFourRef = useRef();

  const inputPlaceholderOne = useRef();
  const inputPlaceholderTwo = useRef();
  const inputPlaceholderThree = useRef();
  const inputPlaceholderFour = useRef();

  const validation1 = useRef();
  const validation1text = useRef();
  const validation2 = useRef();
  const validation2text = useRef();
  const validation3 = useRef();
  const validation3text = useRef();
  const validation4 = useRef();
  const validation4text = useRef();

  //logic States
  const [errormessage, setErrorMessage] = useState(true);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [mobile , setMobileNumber] = useState('')
  const gender = female ? "female" : "male";
  //formik
  const formik = useFormik({
    initialValues: {
      password: "",
      fullname: "",
      email: "",
      hintname: "",
    },
  });

  const handleOnFocusOne = () => {
    inputOneRef.current.classList.add("inputOnFocus");
    inputPlaceholderOne.current.classList.add("inputPlaceHolder");
  };
  const handleOnBlurOne = () => {
    inputOneRef.current.classList.remove("inputOnFocus");
    if (formik.values.password.length === 0) {
      inputPlaceholderOne.current.classList.remove("inputPlaceHolder");
    }
  };

  const handleOnFocusTwo = () => {
    inputTwoRef.current.classList.add("inputOnFocus");
    inputPlaceholderTwo.current.classList.add("inputPlaceHolder");
  };

  const handleOnBlurTwo = () => {
    inputTwoRef.current.classList.remove("inputOnFocus");
    if (formik.values.fullname.length === 0) {
      inputPlaceholderTwo.current.classList.remove("inputPlaceHolder");
    }
  };

  const handleOnFocusThree = () => {
    inputThreeRef.current.classList.add("inputOnFocus");
    inputPlaceholderThree.current.classList.add("inputPlaceHolder");
  };
  const handleOnBlurThree = () => {
    inputThreeRef.current.classList.remove("inputOnFocus");
    if (formik.values.email.length === 0) {
      inputPlaceholderThree.current.classList.remove("inputPlaceHolder");
    }
  };
  const handleOnFocusFour = () => {
    inputFourRef.current.classList.add("inputOnFocus");
    inputPlaceholderFour.current.classList.add("inputPlaceHolder");
  };
  const handleOnBlurFour = () => {
    inputFourRef.current.classList.remove("inputOnFocus");
    if (formik.values.hintname.length === 0) {
      inputPlaceholderFour.current.classList.remove("inputPlaceHolder");
    }
  };

  useEffect(() => {
    if (/^(?=.*[A-Z])/.test(formik.values.password)) {
      validation3.current.classList.add("validationBox");
      validation3text.current.classList.add("validationBoxText");
    } else {
      validation3.current.classList.remove("validationBox");
      validation3text.current.classList.remove("validationBoxText");
    }
    if (/(?=.*[0-9])/.test(formik.values.password)) {
      validation4.current.classList.add("validationBox");
      validation4text.current.classList.add("validationBoxText");
    } else {
      validation4.current.classList.remove("validationBox");
      validation4text.current.classList.remove("validationBoxText");
    }
    if (/(?=.{8,})/.test(formik.values.password)) {
      validation1.current.classList.add("validationBox");
      validation1text.current.classList.add("validationBoxText");
    } else {
      validation1.current.classList.remove("validationBox");
      validation1text.current.classList.remove("validationBoxText");
    }
    if (/(?=.*[!@#\$%\^&\*])/.test(formik.values.password)) {
      validation2.current.classList.add("validationBox");
      validation2text.current.classList.add("validationBoxText");
    } else {
      validation2.current.classList.remove("validationBox");
      validation2text.current.classList.remove("validationBoxText");
    }
  }, [formik.values]);

  return (
    <div>
      <Header isRendered={true} noProfile={true} />
      <div className="account">
        <form
          onSubmit={(e) => {
            console.log('formik',formik.values);
            if (formik.values.password.length === 0 ) {
              setErrorMessage(false);
              console.log("error")
            } 
            else 
            {
                profile(
                  formik.values.password,
                  formik.values.fullname,
                  formik.values.email,
                  gender,
                  mobile,
                  formik.values.hintname
                )
            }
            e.preventDefault();
          }}
        >
          <div className="account__card">
            <p>Complete your sign up</p>
            <div className="account__card__mobilenumber">
              <div>
                <p className="account__card__mobilenumber__text">
                  Mobile Number
                </p>
                <p className="account__card__mobilenumber__number">
                  {localStorage.getItem("ouiytrewdfcghjkl,jbvvjhfgdcg")}
                </p>
              </div>
              <div>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="verifiedIcon"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path d="M0 0H24V24H0z"></path>
                    <g fillRule="nonzero">
                      <path
                        d="M15.41 7.164c-.369-.369-.507-1.083-.323-1.567a.965.965 0 00-.53-1.267c-.483-.207-.898-.806-.898-1.336a.973.973 0 00-.967-.967c-.53 0-1.129-.392-1.336-.898a.976.976 0 00-1.267-.53C9.605.806 8.891.668 8.523.276a.973.973 0 00-1.36 0C6.796.645 6.082.783 5.598.6a.965.965 0 00-1.267.53c-.207.483-.806.898-1.336.898a.973.973 0 00-.967.967c0 .53-.392 1.13-.898 1.336a.976.976 0 00-.53 1.267c.207.484.069 1.198-.323 1.567a.973.973 0 000 1.359c.369.368.507 1.082.323 1.566a.965.965 0 00.53 1.267c.483.207.898.806.898 1.336s.438.967.967.967c.53 0 1.13.392 1.336.899a.976.976 0 001.267.53c.484-.208 1.198-.07 1.567.322a.973.973 0 001.359 0c.368-.369 1.082-.507 1.566-.323a.965.965 0 001.267-.53c.207-.483.806-.898 1.336-.898s.967-.437.967-.967.392-1.129.899-1.336a.976.976 0 00.53-1.267c-.208-.484-.07-1.198.322-1.566a.973.973 0 000-1.36z"
                        fill="#03A685"
                        transform="translate(4 4)"
                      ></path>
                      <path
                        d="M11.024 5.031c-.19 0-.372.08-.506.222L7.206 8.754 5.564 7.02a.69.69 0 00-.692-.197.737.737 0 00-.507.535.786.786 0 00.187.732l2.147 2.27a.697.697 0 00.507.222c.19 0 .372-.08.506-.222l3.818-4.036a.788.788 0 00.156-.824.717.717 0 00-.662-.468z"
                        fill="#FFF"
                        transform="translate(4 4)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="account__card__create__password">
              <div className="account__card__create__password__div">
                <input
                  name="password"
                  ref={inputOneRef}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="account__card__create__password__div__input"
                  type="password"
                  autoComplete="off"
                  onFocus={handleOnFocusOne}
                  onBlur={handleOnBlurOne}
                  size={42}
                />
                <span
                  htmlFor="email"
                  onClick={() => {
                    inputOneRef.current.focus();
                  }}
                  ref={inputPlaceholderOne}
                  className="account__card__create__password__placeholder"
                >
                  Create Password{" "}
                  <span style={{ color: "rgb(255, 87, 34)" }}>*</span>
                </span>
              </div>
              <div className="account__card__create__password__validation">
                <span ref={validation1} className="validation__box">
                  <span ref={validation1text} className="validation__box__text">
                    8 Characters
                  </span>
                </span>
                <span ref={validation2} className="validation__box">
                  <span ref={validation2text} className="validation__box__text">
                    1 Special
                  </span>
                </span>
                <span ref={validation3} className="validation__box">
                  <span ref={validation3text} className="validation__box__text">
                    1 Uppercase
                  </span>
                </span>
                <span ref={validation4} className="validation__box">
                  <span ref={validation4text} className="validation__box__text">
                    1 Numeric
                  </span>
                </span>
              </div>
              {errormessage ? (
                <div></div>
              ) : (
                <div className="errormessage">
                  Please enter at least 8 characters,1 of these special
                  characters ~!@#$%^&*()_+-?&#60;&#62;,1 uppercase character and
                  1 number
                </div>
              )}
            </div>
            <div className="account__card__create__password">
              <div className="account__card__create__password__div">
                <input
                  className="account__card__create__password__div__input"
                  type="text"
                  name="fullname"
                  onChange={formik.handleChange}
                  value={formik.values.fullname}
                  autoComplete="new-password"
                  onFocus={handleOnFocusTwo}
                  onBlur={handleOnBlurTwo}
                  size={42}
                  ref={inputTwoRef}
                />
                <label
                  htmlFor="email"
                  onClick={() => {
                    inputTwoRef.current.focus();
                  }}
                  ref={inputPlaceholderTwo}
                  className="account__card__input__placeholder"
                >
                  Full name{" "}
                </label>
              </div>
            </div>
            <div className="account__card__create__password">
              <div className="account__card__create__password__div">
                <input
                  className="account__card__create__password__div__input"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  autoComplete="new-password"
                  onFocus={handleOnFocusThree}
                  onBlur={handleOnBlurThree}
                  size={42}
                  ref={inputThreeRef}
                />
                <span
                  onClick={() => {
                    inputThreeRef.current.focus();
                  }}
                  htmlFor="email"
                  ref={inputPlaceholderThree}
                  className="account__card__input__placeholder"
                >
                  Email (Optional)
                </span>
              </div>
            </div>
            <div className="select__gender">
              <div className="select__gender__text">Select Gender:</div>
              <div className="select__gender__div">
                <div className="select__gender__btn">
                  <svg
                    onClick={() => {
                      setFemale(true);
                      setMale(false);
                    }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="formRadioButton"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h24v24H0z" opacity="0.05"></path>
                      <g fill="#282C3F" className="buttonFill">
                        <path d="M12 18.933A6.941 6.941 0 015.067 12 6.941 6.941 0 0112 5.067 6.941 6.941 0 0118.933 12 6.941 6.941 0 0112 18.933M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8"></path>
                        {female ? (
                          <path d="M12 7.429a4.571 4.571 0 100 9.143 4.571 4.571 0 000-9.143"></path>
                        ) : (
                          <></>
                        )}
                      </g>
                    </g>
                  </svg>
                  <span className="select__gender__btn__text">Female</span>
                </div>
                <div className="select__gender__btn"></div>
                <div className="select__gender__btn">
                  <svg
                    onClick={() => {
                      setMale(true);
                      setFemale(false);
                    }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="formRadioButton"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h24v24H0z" opacity="0.05"></path>
                      <g fill="#282C3F" className="buttonFill">
                        <path d="M12 18.933A6.941 6.941 0 015.067 12 6.941 6.941 0 0112 5.067 6.941 6.941 0 0118.933 12 6.941 6.941 0 0112 18.933M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8"></path>
                        {male ? (
                          <path d="M12 7.429a4.571 4.571 0 100 9.143 4.571 4.571 0 000-9.143"></path>
                        ) : (
                          <></>
                        )}
                      </g>
                    </g>
                  </svg>
                  <span className="select__gender__btn__text">Male</span>
                </div>
              </div>
            </div>
            <div className="account__card__phonenumber">
              <PhoneNumber
                page={"accountpage"}
                setMobileNumber = {setMobileNumber}
              />
              <span className="account__card__phonenumber__text">
                This will recover your account if needed
              </span>
            </div>
            <div className="account__card__create__password">
              <div className="account__card__create__password__div">
                <input
                  className="account__card__create__password__div__input"
                  type="text"
                  name="hintname"
                  onChange={formik.handleChange}
                  value={formik.values.hintname}
                  autoComplete="new-password"
                  onFocus={handleOnFocusFour}
                  onBlur={handleOnBlurFour}
                  size={42}
                  ref={inputFourRef}
                />
                <span
                  onClick={() => {
                    inputFourRef.current.focus();
                  }}
                  htmlFor="email"
                  ref={inputPlaceholderFour}
                  className="account__card__input__placeholder"
                >
                  Hint name (Alternate number)
                </span>
              </div>
            </div>
          </div>
          <div className="account__card__button__div">
            <button type="submit" className="account__card__button">
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
