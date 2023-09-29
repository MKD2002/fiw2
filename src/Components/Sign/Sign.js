import React, { useState } from 'react'
import './Sign.css'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const Sign = () => {

  const [isSigningIn, setIsSigningIn] = useState(1);
  const [registeremail, setRegisterEmail] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");

  // const sign=()=>{
  //   setIsSigningIn(true);
  // }

  // const out=()=>{
  //   setIsSigningIn(false);
  // }

  const signin = async () => {

    try {
      const user = await signInWithEmailAndPassword(auth, loginemail, loginpassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signup = async () => {

    try {
      const user = await createUserWithEmailAndPassword(auth, registeremail, registerpassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="Container">
      <div className="SignUpContainer" style={isSigningIn !== 1 ? { transform: "translateX(100%)", opacity: "1", zIndex: "5" } : null}>
        <div className="Form1" >
          <h1 className="Title">Create Account</h1>
          <input type="text" placeholder="Name" className="Input" />
          <input type="email" placeholder="Email" className="Input" value={registeremail}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
          <input type="password" placeholder="Password" className="Input" value={registerpassword}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
          <button className="Button" onClick={signup}>Sign Up</button>
        </div>
      </div>
      <div className="SignInContainer" style={isSigningIn === 1 ? { transform: "translateX(0)" } : null}>
        <div className="Form2" >
          <h1 className="Title">Sign in</h1>
          <input type="email" placeholder="Email" className="Input" value={loginemail}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input type="password" placeholder="Password" className="Input" value={loginpassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <div className='anc'>
            <a href="/#" className="Anchor">Forgot your password?</a>
            <button className="Button" onClick={signin}>Sign In</button>
          </div>

        </div>
      </div>
      <div className="OverlayContainer" style={isSigningIn !== 1 ? { transform: "translateX(-100%)" } : null}>
        <div className="Overlay" style={isSigningIn !== 1 ? { transform: "translateX(50%)" } : null}>
          <div className="LeftOverlayPanel" style={isSigningIn !== 1 ? { transform: "translateX(0)" } : null}>
            <h1 className="Title">Welcome Back!</h1>
            <p className="Paragraph">
              To keep connected with us please login with your personal info
            </p>
            <button className="GhostButton" onClick={() => { setIsSigningIn(1) }}>Sign In</button>
          </div>
          <div className="RightOverlayPanel" style={isSigningIn !== 1 ? { transform: "translateX(20%)" } : null}>
            <h1 className="Title">Hello, Friend!</h1>
            <p className="Paragraph">
              Enter your personal details and start the journey with us
            </p>
            <button className="GhostButton" onClick={() => { setIsSigningIn(0) }}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Sign
