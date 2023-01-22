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
      {/* <div class="row">
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
      </div> */}
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Forgot Password</p>
        </header>

        <main>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />

            <Link className="forgotPasswordLink" to="/sign-in">
              SignIn
            </Link>

            <div className="signInBar">
              <div className="signInText">Send Reset Link</div>
              <button type="submit" className="signInButton">
                {/* <ArrowRight fill="#ffffff" width="32px" height="32px" /> */}
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default ForgotPassword;
