import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);
  return user ? <h1>{user.displayName}</h1> : <h2>Not logged In</h2>;
};

export default Profile;
