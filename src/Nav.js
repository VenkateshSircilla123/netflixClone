import React from 'react' 
import "./Nav.css";
import {  useNavigate } from 'react-router-dom';
function Nav() {
const [show , handleShow] = React.useState(false);


let history = useNavigate()

  
const transitionNavBar = () =>{
    if(window.scrollY > 100){
        handleShow(true);
    } else {
        handleShow(false);
    }
}
React.useEffect(()=> {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
}, [])
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <div className='nav-contents'>
            <img 
              onClick={()=> history('/')}
              src='../images/logo.png'
              alt=''
              className='nav-logo'
            />
            <img 
              onClick={()=> history('/profile')}
              src='../images/avatar.png'
              alt='' 
              className='nav-avatar'
            />
        </div>
    </div>
  )
}

export default Nav