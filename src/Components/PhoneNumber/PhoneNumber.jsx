import React, { useEffect, useRef, useState } from "react";
import "./PhoneNumber.css";
function PhoneNumber(props) {
  const inputRef = useRef();
  const inputSpan91 = useRef();
  const inputSpanMobileNumber = useRef();
  const [focus, setFocus] = useState(false);
  const [data, setData] = useState("");
  const [pointer, setPointer] = useState(false);
  const inputError = useRef();

  const handleChange = (e) => {
    setData(e.target.value);
  };
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
    if (props.page === "accountpage") {
      inputRef.current.classList.add(
        "login__card__details__phone__input__account"
      );
    }
  }, [focus, data]);

  return (
    <div className="login__card__details__phone">
      <input
        onChange={(e) => {props.setMobileNumber(e.target.value)
        setData(e.target.value)
        }}
        type="text"
        minLength={10}
        maxLength={10}
        // onChange={handleChange}
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
          {props.page !== "accountpage" ? (
            <span className="login__card__details__phone__input__91__mobilenumber__star">
              *
            </span>
          ) : (
            <></>
          )}
        </span>
      </span>
    </div>
  );
}

export default PhoneNumber;
