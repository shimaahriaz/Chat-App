import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [displayNameError, setDisplayNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [avatarError, setAvatarError] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplayNameError("");
    setEmailError("");
    setPasswordError("");
    setAvatarError("");

    const displayName = e.target.displayName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setAvatarError("Error uploading avatar");
          setError(true);
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", response.user.uid), {});
            navigate("/")
          });
        }
      );
    } catch (error) {
      setError(true);
      console.log(error)
      switch (error.code) {
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
        case "auth/email-already-in-use":
          setEmailError(error.message);
          break;
        default:
          setError(true);
          break;
      }
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Lama Chat</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="display name"
              name="displayName"
            />
            {displayNameError && <span>{displayNameError}</span>}
            <input type="email" placeholder="email" name="email" />
            {emailError && <span style={{color: "red"}}>{emailError}</span>}
            <input type="password" placeholder="password" name="password" />
            {passwordError && <span style={{color: "red"}}>{passwordError}</span>}
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              name="avatar"
            />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            {avatarError && <span style={{color: "red"}}>{avatarError}</span>}
            <button type="submit">Sign up</button>
            {error && <span style={{color: "red"}}>{error}</span>}
          </form>

          <p>You do have an account?  <Link to="/login">Login</Link></p>
        </div>
      </div>
    </>
  );
};

export default Register;
