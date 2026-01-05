import React, { useState } from "react";
import axios from "axios";
 import {  toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // state create
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null); //  file
  const [imageUrl, setImageUrl] = useState(""); // url create
  const [isloading, setLoading] = useState(false); // loader
  const navigate =useNavigate()

  // submit
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(fullName, email, phone, password, image);

    // axios api call
    // axios.post('url'{fullName,email,Phone}) only data

    const formData = new FormData();
    setLoading(true);
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("image", image);

    axios.post("url", formData)
      .then((res) => {
         setLoading(false);
         navigate('/login')
         toast.success('signup successfully')
        console.log(res);
       
      })
      .catch((err) => {
        setLoading(false);
        toast.error('something is wrong')
        console.log(err);
        
      });
  };
  // file
  const fileHandler = (e) => {
    setImage(e.target.files[0]);

    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <div className="signup-left-box">
          <img
            className="signup-image"
            src="/assets/img1.png"
            alt="Institute Management"
          />

          <h1 className="signup-left-heading">Institute Management</h1>
          <p className="paragraph-text">Manage Your All data in easy way...</p>
        </div>

        <div className="signup-right-box">
          <form className="signup-fom" onSubmit={submitHandler}>
            <h1>Create your account</h1>
            <input
              required
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              type="text"
              placeholder="Institute full name"
            />
            <input
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
            />
            <input
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              placeholder="Phone"
            />
            <input
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <input required onChange={fileHandler} type="file" />
            {imageUrl && (
              <img className="your-logo" alt="logo" src={imageUrl} />
            )}
            <button className="button-text" type="submit">
              {isloading && <i className="fa-solid fa-spinner fa-spin-pulse"></i>}{" "} 
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
