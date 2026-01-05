import React, { useState } from "react";

const Signup = () => {
  // state create
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  //  file
  const [image, setImage] = useState(null);

  // submit
  const submitHandler=(event)=>{
    event.preventDefault()
    console.log(fullName,email,Phone,Password,image)


  }
  // file
  const fileHandler=(e)=>{
    setImage(e.target.files[0])
  }
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
            <input onChange={e=>{setFullName(e.target.value)}} type="text" placeholder="Institute full name" />
            <input onChange={e=>{setEmail(e.target.value)}} type="email" placeholder="Email" />
            <input onChange={e=>{setPhone(e.target.value)}} type="text" placeholder="Phone" />
            <input onChange={e=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
            <input onChange={fileHandler} type="file" />
            <button className="button-text" type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
