import { getAuth, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";
//import { async } from "@firebase/util";

const Profile = () => {
  //Initializing
  const navigate = useNavigate();

  const auth = getAuth();
  console.log(auth);

  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

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

  useEffect(() => {
    const fetchUserListings = async () => {
      const listingRef = collection(db, "listings");

      const q = query(
        listingRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
      setLoading(false);
    };

    fetchUserListings();
  }, [auth.currentUser.uid]);

  const onDelete = async (listingId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteDoc(doc(db, "listings", listingId));
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(updatedListings);
      toast.success("Successfully deleted listing");
    }
  };

  const onEdit = (listingId) => navigate(`/edit-listing/${listingId}`);

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
          <p className="profilePageHeader">My Profile</p>
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
          <Link to="/create-listing" className="createListing">
            <button>
              <p>Sell or rent your home</p>
            </button>
          </Link>

          {!loading && listings.length > 0 && (
            <>
              <p className="listingText">Your Listings</p>
              <ul className="listingsList">
                {listings.map((listing) => (
                  <ListingItem
                    key={listing.id}
                    listing={listing.data}
                    id={listing.id}
                    onDelete={() => onDelete(listing.id)}
                    onEdit={() => onEdit(listing.id)}
                  />
                ))}
              </ul>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Profile;
