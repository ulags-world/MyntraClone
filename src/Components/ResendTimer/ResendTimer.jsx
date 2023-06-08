import React, { useEffect, useState } from "react";
import "./ResendTimer.css";
import { useNavigate } from "react-router-dom";
function ResendTimer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const navigateToAccount = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  return (
    <div>
      <div>
        {seconds > 0 || minutes > 0 ? (
          <div>
            <span className="otp__card__reset__otp">Resend OTP in:&nbsp;</span>
            <span className="otp__card__reset__otp__timer">
              {" "}
              &nbsp;{minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
        ) : (
          <div>
            <a
              onClick={() => navigateToAccount("/otp")}
              href=""
              className="otp__card__resendotp"
            >
              RESEND OTP
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResendTimer;
