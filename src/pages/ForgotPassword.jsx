import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { ReactComponent as ArrowRight } from "../assets/svg/keyboardArrowRightIcon.svg";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      console.log("Email Sent");
    } catch (error) {
      console.log("Email Not sent");
    }
  };

  return (
    <>
      <div class="row">
        <h1>Forgot Password</h1>
        <h6 class="information-text">
          Enter your registered email to reset your password.
        </h6>
        <div class="form-group">
          <input
            type="email"
            name="user_email"
            id="user_email"
            onChange={handleChange}
          />
          <p>
            <label for="username">Email</label>
          </p>
          <button type="submit" onSubmit={handleSubmit} onclick="showSpinner()">
            Reset Password
          </button>
        </div>
        <div class="footer">
          <h5>
            New here?{" "}
            <Link className="forgotPasswordLink" to="/signUp">
              SignUp
            </Link>
          </h5>
          <h5>
            Already have an account? <Link to="/signIn">SignIn</Link>
          </h5>
          <p class="information-text">
            <span class="symbols" title="Lots of love from me to YOU!">
              &hearts;{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
