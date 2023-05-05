import React from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = React.useState(false)
  return (
    <div className='login-screen'>
      <div className='loginScreen-background'>
        <img 
        className='loginScreen-logo'
        src='./images/logo.png' alt=''></img>
        <button
        className='loginScreen-button'
        onClick={()=> setSignIn(true)}>Sign in</button>
        <div className='loginScreen-gradient' />
      </div>
      <div className='loginScreen-body'>
        {signIn ? (
            <SignUpScreen />
        ) : (
        <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='loginScreen-input'>
                <form>
                    <input type='email'
                    placeholder='Email Address' />
                    <button
                    className='loginScreen-getStarted'
                    onClick={()=> setSignIn(true)}
                    >Get Started</button>
                </form>
            </div>
        </>
        )}
        
      </div>
    </div>
  );
}

export default LoginScreen