

import "./login.css";

export default function Login() {
  
   
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chattingzone</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Chattingzone.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" required title="!Please enter the valid email" />
            <input type="password" placeholder="Password" className="loginInput" required  pattern="{5,10}" title="!Please enter the valid password" />

            <button type="button"  className="loginButton"><a href="https://642d1c8910a38b61fdc781b7--gilded-bonbon-1c0cc3.netlify.app/" >Log In</a></button>

            <span className="loginForgot">Forgot Password?</span>
            
            <button type="button" className="loginRegisterButton"><a href="https://642d1f3621493d64d9909a88--dulcet-seahorse-b94d34.netlify.app/">
              Create a New Account</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}