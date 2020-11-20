function Signin(){
    return(
        <div  class="wrapper">
            <div class="img-div">
                <img src="pursuit.jpg" alt="movie banner"/>
            </div>
            <div class="signin-div">   
                {/* <form> */}
                    <h2 class="highlight">Sign In</h2>
                    <input type="email" class="in-data" name="email" placeholder="email or phonenumber"/> <br/>
                    <input type="password"  class="in-data"name="password" placeholder="password"/> <br/>
                    <button class="btn">Continue</button>
                    <h6 ><a  href="www.google.com" class="highlight">Forget username or password?</a></h6>
                {/* </form> */}
                <h5 class="new-to-fa">New To Fa?</h5>
            </div>
        </div>   
    )
}
export default Signin;