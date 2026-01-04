import React from "react";

const Signup = () => {
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
          <p className="paragraph-text">
            Manage Your All data in easy way...
          </p>
        </div>

        <div className="signup-right-box">
          
          <form className="signup-fom">
            <h1>Create your account</h1>
            <input className=" type="text" placeholder="Institute name"/>
             <input type="text" placeholder="Email"/>
              <input type="text" placeholder="Phone"/>
               <input type="text" placeholder="Password"/>
               <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
