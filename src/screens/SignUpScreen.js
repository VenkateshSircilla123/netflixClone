import React from 'react'
import { auth } from '../firebase'
import './SignUpScreen.css'

function SignUpScreen() {
    const emailRef = React.useRef(null)
    const passwordRef = React.useRef(null)
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error.message)
        })
    };
    const signIn = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
            alert(authUser.user.email)
        })
        .catch((error)=>{
            alert(error.message)
        })
    };
  return (
    <div className='signUpScreen'>
        <form>
            <h1>SignUp</h1>
            <input ref={emailRef} placeholder='Email' type='email'></input>
            <input ref={passwordRef} placeholder='password' type='password' />
            <button type='submit' onClick={signIn}>SignIn</button>
            <h4>
                <span className='signUpScreen-gray'>
                    New to Netflix?
                </span> 
                <span className='signUpScreen-link' onClick={register}>
                    Sign Up now.
                </span>
            </h4>
        </form>
    </div>
  )
}

export default SignUpScreen
