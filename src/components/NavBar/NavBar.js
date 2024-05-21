
import React, { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../store/auth-action"; 
import "./NavBar.css";
const NavBar = () => {
  const dispatch = useDispatch();
  const [showNav,setShowNav] = useState(false);
 
  const auth = useSelector(state=>state.auth);
  let token;


  useEffect(()=>{
    dispatch(logoutHandler);
  },[dispatch,token])


  function navbarController(){
    
    setShowNav((val)=> val? false: true);

  }
 return (

   <header className="header">
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
         trivia 
       </NavLink>

       <div
         className={showNav ? "nav__menu": "nav__menu-hide"}
         id="nav-menu"
       >
         <ul className="nav__list">
          {!auth?.auth &&  
          <>
          <li className="nav__item">
             <NavLink to="/users" className="nav__link">
               users
             </NavLink>
           </li>
           
           <li className="nav__item">
             <NavLink to="/about" className="nav__link">
               about
             </NavLink>
           </li>
           
           </>}
           
           {!auth.auth &&
  
          <li className="nav__item">
             <NavLink
               to="/login"
               className="nav__link"
             >
               login
             </NavLink>
           </li>
           }

           {!auth.auth && 
            <li className="nav__item">
             <NavLink
               to="/register"
               className="nav__link"
             >
               register
             </NavLink>
           </li>}

          {auth.auth && <>
            <li className="nav__item">
       
       <NavLink
            to="/main"
            className="nav__link"
          >
            main
          </NavLink>
        </li>
            <li className="nav__item">
       
       <NavLink
            to="/records"
            className="nav__link"
          >
            records
          </NavLink>
        </li>
            <li className="nav__item">
       
          <NavLink
               to="/logout"
               className="nav__link"
             >
               logout
             </NavLink>
           </li>
          </>}
          
          
         </ul>
         <div className="nav__close" id="nav-close" onClick={navbarController} >
           <IoClose />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={navbarController}>
         <IoMenu />
       </div>
     </nav>
   </header>
 );
};


export default NavBar;