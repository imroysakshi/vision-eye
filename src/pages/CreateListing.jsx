import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "./CreateListing.css";

const CreateListing = () => {
  // eslint-disable-next-line
  const [geolocationEnabled, setGeolocationEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "web",
    name: "",
    negotiable: false,
    address: "",
    remote: false,
    stipend: 0,
    description: "",
    skills: "",
    images: {},
    latitude: 0,
    longitude: 0,
  });

  const {
    type,
    name,
    negotiable,
    address,
    description,
    skills,
    remote,
    stipend,
    images,
    latitude,
    longitude,
  } = formData;

  const auth = getAuth();
  const navigate = useNavigate();

  //In case of memory leaks.
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate("/sign-in");
        }
      });
    }

    return () => (isMounted.current = false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  if (loading) {
    <Spinner />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setLoading(true);
    // if (discountedPrice >= regularPrice) {
    //   setLoading(false);
    //   toast.error("Discounted price needs to be less than regular price");
    //   return;
    // }

    if (images.length > 6) {
      setLoading(false);
      toast.error("Max 6 images");
      return;
    }

    let geolocation = {};

    if (geolocationEnabled) {
      // Call the api from here, when enabled :(
      //Enable geocoding api key from google cloud console, and await the response from here.
    } else {
      geolocation.lat = latitude;
      geolocation.lng = longitude;

      // console.log(geolocation, location);
    }

    //Store Image in firebase (get this from documentation)
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;

        const storageRef = ref(storage, "images/" + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false);
      toast.error("Images not uploaded");
      return;
    });

    const formDataCopy = {
      ...formData,
      imgUrls,
      geolocation,
      timestamp: serverTimestamp(),
    };

    formDataCopy.location = address;
    delete formDataCopy.images;
    delete formDataCopy.address;
    // !formDataCopy.remote && delete formDataCopy.discountedPrice;

    const docRef = await addDoc(collection(db, "listings"), formDataCopy);
    setLoading(false);
    toast.success("Listing Saved");
    navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  };

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }

    if (e.target.value === "false") {
      boolean = false;
    }

    //Files
    if (e.target.files) {
      setFormData((prevState) => ({ ...prevState, images: e.target.files }));
    }

    //Text/Booleans/Numbers

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="profile">
      <header>
        <p className="pageHeader3">Create a Job Listing</p>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <label className="formLabel">Technology</label>
          <div className="formButtons">
            <button
              type="button"
              className={type === "web" ? "formButtonActive" : "formButton"}
              id="type"
              value="web"
              onClick={onMutate}
            >
              Web
            </button>
            <button
              type="button"
              className={type === "android" ? "formButtonActive" : "formButton"}
              id="type"
              value="android"
              onClick={onMutate}
            >
              Android
            </button>
          </div>

          <label className="formLabel">Name</label>
          <input
            className="formInputName"
            type="text"
            id="name"
            value={name}
            onChange={onMutate}
            maxLength="32"
            minLength="10"
            required
          />

          {/* <div className="formRooms flex">
            <div>
              <label className="formLabel">Bedrooms</label>
              <input
                className="formInputSmall"
                type="number"
                id="bedrooms"
                value={bedrooms}
                onChange={onMutate}
                min="1"
                max="50"
                required
              />
            </div>
            <div>
              <label className="formLabel">Bathrooms</label>
              <input
                className="formInputSmall"
                type="number"
                id="bathrooms"
                value={bathrooms}
                onChange={onMutate}
                min="1"
                max="50"
                required
              />
            </div>
          </div> */}

          <label className="formLabel">Negotiable</label>
          <div className="formButtons">
            <button
              className={negotiable ? "formButtonActive" : "formButton"}
              type="button"
              id="negotiable"
              value={true}
              onClick={onMutate}
              min="1"
              max="50"
            >
              Yes
            </button>
            <button
              className={
                !negotiable && negotiable !== null
                  ? "formButtonActive"
                  : "formButton"
              }
              type="button"
              id="negotiable"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          {/* <label className="formLabel">Furnished</label>
          <div className="formButtons">
            <button
              className={furnished ? "formButtonActive" : "formButton"}
              type="button"
              id="furnished"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              className={
                !furnished && furnished !== null
                  ? "formButtonActive"
                  : "formButton"
              }
              type="button"
              id="furnished"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div> */}

          <label className="formLabel">Address</label>
          <textarea
            className="formInputAddress"
            type="text"
            id="address"
            value={address}
            onChange={onMutate}
            required
          />

          <label className="formLabel">Project Description</label>
          <textarea
            className="formInputAddress"
            type="text"
            id="description"
            value={description}
            onChange={onMutate}
            required
          />

          <label className="formLabel">Skills Required</label>
          <input
            className="formInputName"
            type="text"
            id="skills"
            value={skills}
            onChange={onMutate}
            maxLength="400"
            minLength="10"
            required
          />

          {!geolocationEnabled && (
            <div className="formLatLng flex">
              <div>
                <label className="formLabel">Latitude</label>
                <input
                  className="formInputSmall"
                  type="number"
                  id="latitude"
                  value={latitude}
                  onChange={onMutate}
                  required
                />
              </div>
              <div>
                <label className="formLabel">Longitude</label>
                <input
                  className="formInputSmall"
                  type="number"
                  id="longitude"
                  value={longitude}
                  onChange={onMutate}
                  required
                />
              </div>
            </div>
          )}

          <label className="formLabel">Remote Work?</label>
          <div className="formButtons">
            <button
              className={remote ? "formButtonActive" : "formButton"}
              type="button"
              id="remote"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              className={
                !remote && remote !== null ? "formButtonActive" : "formButton"
              }
              type="button"
              id="remote"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label className="formLabel">Stipend</label>
          <div className="formPriceDiv">
            <input
              className="formInputSmall"
              type="text"
              id="stipend"
              value={stipend}
              onChange={onMutate}
              min="50"
              max="750000000"
              required
            />
            <p className="formPriceText">$ / Month</p>
          </div>

          {/* {remote && (
            <>
              <label className="formLabel">Discounted Price</label>
              <input
                className="formInputSmall"
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={onMutate}
                min="50"
                max="750000000"
                required={remote}
              />
            </>
          )} */}

          <label className="formLabel">Images</label>
          <p className="imagesInfo">
            The first image will be the cover (max 6).
          </p>
          <input
            className="formInputFile"
            type="file"
            id="images"
            onChange={onMutate}
            max="6"
            accept=".jpg,.png,.jpeg"
            multiple
            required
          />
          <button type="submit" className="primaryButton createListingButton">
            Create Listing
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateListing;
