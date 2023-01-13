import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div class="row">
        <h1>Forgot Password</h1>
        <h6 class="information-text">
          Enter your registered email to reset your password.
        </h6>
        <div class="form-group">
          <input type="email" name="user_email" id="user_email" />
          <p>
            <label for="username">Email</label>
          </p>
          <button onclick="showSpinner()">Reset Password</button>
        </div>
        <div class="footer">
          <h5>
            New here? <a href="#">Sign Up.</a>
          </h5>
          <h5>
            Already have an account? <a href="#">Sign In.</a>
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
