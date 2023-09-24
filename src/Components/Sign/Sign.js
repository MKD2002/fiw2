import React, { useState} from 'react'
// import './Sign.css'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const Sign = () => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

const signin = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log(userCredential);
    }).catch((error)=>{
        console.log(error);
    })
}  

const signup = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log(userCredential);
    }).catch((error)=>{
        console.log(error);
    })
}  

  return (
    <form className="Container">
    <div className="SignUpContainer">
      <form id="Form" onSubmit={signup}>
        <h1 className="Title">Create Account</h1>
        <input type="text" placeholder="Name" className="Input" />
        <input type="email" placeholder="Email" className="Input" value={email}
        onChange={(e)=>setEmail(e.target.value)}
         />
        <input type="password" placeholder="Password" className="Input" value={password}
        onChange={(e)=>setPassword(e.target.value)}
         />
        <button className="Button">Sign Up</button>
      </form>
    </div>
    <div className="SignInContainer">
      <form id="Form1" onSubmit={signin}>
        <h1 className="Title">Sign in</h1>
        <input type="email" placeholder="Email" className="Input" value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input type="password" placeholder="Password" className="Input" value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <a href="/#" className="Anchor">Forgot your password?</a>
        <button className="Button">Sign In</button>
      </form>
    </div>
    <div className="OverlayContainer">
      <div className="Overlay">
        <div className="LeftOverlayPanel">
          <h1 className="Title">Welcome Back!</h1>
          <p className="Paragraph">
            To keep connected with us please login with your personal info
          </p>
          <button className="GhostButton">Sign In</button>
        </div>
        <div className="RightOverlayPanel">
          <h1 className="Title">Hello, Friend!</h1>
          <p className="Paragraph">
            Enter your personal details and start the journey with us
          </p>
          <button className="GhostButton">Sign Up</button>
        </div>
      </div>
    </div>
  </form>
  
  )
}

export default Sign