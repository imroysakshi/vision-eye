import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
//import { async } from "@firebase/util";

const Profile = () => {
  //Initializing
  const navigate = useNavigate();

  const auth = getAuth();
  console.log(auth);

  //formdata state
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const [changeDetails, setChangeDetails] = useState(false);

  //Destructuring it for Data
  const { name, email } = formData;

  //Logout Function
  const onLogout = (e) => {
    auth.signOut();
    navigate("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      const userRef = doc(db, "users", auth.currentUser.uid);
      updateDoc(userRef, {
        name,
      });
    } catch (error) {
      console.log("Could not update profile");
    }
  };
  return (
    <>
      <div className="profile">
        <header className="profileHeader">
          <p className="pageHeader">My Profile</p>
          <button type="button" className="logOut" onClick={onLogout}>
            Logout
          </button>
        </header>
        <main>
          <div className="profileDetailsHeader">
            <div className="profileDetailsText">Personal Details</div>
            <div
              className="changePersonalDetails"
              onClick={() => {
                setChangeDetails((prevState) => !prevState);
                onSubmit();
              }}
            >
              {changeDetails ? "done" : "change"}
            </div>
          </div>

          <div className="profileCard">
            <form>
              <input
                type="text"
                id="name"
                className={!changeDetails ? "profileName" : "profileNameActive"}
                disabled={!changeDetails}
                value={name}
                onChange={handleChange}
              />
              <input
                type="text"
                id="email"
                className={
                  !changeDetails ? "profileEmail" : "profileEmailActive"
                }
                disabled={!changeDetails}
                value={email}
                onChange={handleChange}
              />
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
