import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";
import { db } from "../firebase.config";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = async (e) => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //Check for users
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      //If user doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} with</p>
      <button className="socialIconDiv" onClick={handleClick}>
        <img className="socialIconImg" src={googleIcon} alt="Google-Icon" />
      </button>
    </div>
  );
};

export default OAuth;
