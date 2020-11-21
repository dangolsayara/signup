import React from 'react';
import Input from './commons/Input';
import '../css/signin.css';

function Signin() {
  return (
    <div className="wrapper">
      <div className="img-div">
        <img src="pursuit.jpg" alt="movie banner" />
      </div>
      <div className="signin-div">
        {/* <form> */}
        <h2 className="highlight">Sign In</h2>
        <Input type="text" name="userName" placeholder="Username" />

        <Input type="password" name="password" placeholder="Password" />

        <button className="btn">Continue</button>
        <h6>
          <a href="www.google.com" className="highlight">
            Forget username or password?
          </a>
        </h6>
        {/* </form> */}
        <h5 className="new-to-fa">New To Fa?</h5>
      </div>
    </div>
  );
}
export default Signin;
