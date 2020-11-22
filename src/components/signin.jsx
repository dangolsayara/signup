import React from 'react';
import Input from './commons/Input';
import Banner from './commons/Bannerimg';
import '../css/signin.css';

function Signin() {
  return (
    <div className="wrapper">
      <Banner />
      <div className="signin-wrapper">
        <h2 className="highlight">Sign In</h2>
        <Input type="text" name="userName" placeholder="Username" />
        <Input type="password" name="password" placeholder="Password" />
        <button className="btn">CONTINUE</button>
        <h6>
          <a href="#" className="highlight">
            Forget username or password?
          </a>
        </h6>
        <h5 className="new-to-fa">New To Fa?</h5>
      </div>
    </div>
  );
}
export default Signin;
