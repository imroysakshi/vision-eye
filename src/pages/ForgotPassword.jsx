import { useState } from "react";
import { Link } from "react-router-dom";
//import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import "./ForgotPassword.css";

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
      toast.success("Email has been sent :)");
      console.log("success");
    } catch (error) {
      toast.error("Could not reset email");
      console.log(error);
    }
  };

  return (
    // <div className="fpContainer">
    //   <header>
    //     <p className="fpHeader">Forgot Password</p>
    //   </header>

    //   <main>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type="email"
    //         className="emailInput"
    //         id="email"
    //         placeholder="Email"
    //         value={email}
    //         onChange={handleChange}
    //       />

    //       <Link to="/sign-in" className="fpLink">
    //         Sign In
    //       </Link>

    //       <div className="signInBar">
    //         <div className="signInText">Send Reset Link</div>
    //         <button className="signInButton">
    //           <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
    //         </button>
    //       </div>
    //     </form>
    //   </main>
    // </div>

    <body>
      <div class="row">
        <h1>Forgot Password</h1>
        <h6 class="information-text">
          Enter your registered email to reset your password.
        </h6>
        <div class="form-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <p>
            <label for="username">Email</label>
          </p>
          <button type="submit" onClick={handleSubmit}>
            Reset Password
          </button>
        </div>
        <div class="footer">
          <h5>
            New here? <Link to="/sign-up">Sign Up.</Link>
          </h5>
          <h5>
            Already have an account? <Link to="/sign-in">Sign In.</Link>
          </h5>
          <p class="information-text">
            <span class="symbols" title="Lots of love from me to YOU!">
              &hearts;{" "}
            </span>
          </p>
        </div>
      </div>
    </body>
  );
};

export default ForgotPassword;
