import React, { useState ,} from "react";
import axios from "axios";
 import {  toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // state create

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setLoading] = useState(false); // loader
  //  const navigate = useNavigate()

  // submit
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(fullName, email, phone, password, image);

    // axios api call
    // axios.post('url'{fullName,email,Phone}) only data

  
    setLoading(true);
   
    axios.post("url", {
      email:email,
      password:password
    })
      .then((res) => {
         setLoading(false);
        //  navigate('/dashboard')
         toast.success('login successfully')
        console.log(res);
       
      })
      .catch((err) => {
        setLoading(false);
        toast.error('something is wrong')
        console.log(err);
        
      });
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
            <h1>Login with your account</h1>
            
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
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
           
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

export default Login;
