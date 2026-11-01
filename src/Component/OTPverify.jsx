
import "./OTPverify.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OTPverify = () => {
    const [timer, setTimer] = useState(30);
    const [verifystatus, setverifystatus] = useState(false);
    const [resendstatus, setresendstatus] = useState(true);
    const [otp, setOTP] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();
    const updateOTP = (e, index) => {
        const value = e.target.value.replace(/\D/g, "").slice(-1);

        const digit = [...otp];
        digit[index] = value;
        setOTP(digit);
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const handleKeyDown = (e, index) => {

        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`)?.focus();
        }

        if (e.key === "ArrowLeft" && index > 0) {
            document.getElementById(`otp-${index - 1}`)?.focus();
        }

        if (e.key === "ArrowRight" && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };


    const handleverify = async (e) => {
        e.preventDefault();

        const x = otp.join("");

        const res = await axios.post("http://localhost:1234/VerifyOTP", {
            email: sessionStorage.getItem("email"),
            otp: x
        });

        console.log(res.data);
        alert(res.data.msg);

        if (res.status === 200) {
            navigate("/");
        }
    };
    // for timer 

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer((value) => {
                if (value <= 1) {
                    clearInterval(timerId);
                    setverifystatus(false);
                    setresendstatus(true);
                    return 0;
                } else {
                    return value - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, []); // cleaning the timer 

    //end here

    return (
        <main className="otp-page">
            <form className="otp-card" onSubmit={handleverify}>
                <p>
                    Your emailid:{" "}
                    <label id="email">
                        {sessionStorage.getItem("email")}
                    </label>
                </p>
                <p><label > {timer}</label> </p>

                <div className="otp-container">
                    {otp.map((data, index) => (
                        <input
                            id={`otp-${index}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            key={index}
                            value={data}
                            //gois on next box
                            onChange={(e) => updateOTP(e, index)}
                            //goes on back 
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
                </div>

                <button type="submit" className="verify-btn">
                    VERIFY BUTTON
                </button>
                <button type="submit" className="resend-btn">
                    RESEND OTP
                </button>
            </form>
        </main>
    );
};

export default OTPverify;

