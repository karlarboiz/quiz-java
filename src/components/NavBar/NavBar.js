
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu,IoPeople,
  IoInformationCircle,IoKey,IoPencil,
IoHome, 
IoFolder,
IoPersonOutline,
IoArrowForward} from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../store/auth-action";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./NavBar.module.css";


const NavBar = () => {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);

  const auth = useSelector(state => state.auth);
  let token = localStorage.getItem("token");
  
  useEffect(() => {
    dispatch(logoutHandler);
  }, [dispatch, token])


  function navbarController() {

    setShowNav((val) => val ? false : true);

  }
  return (

    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <NavLink to="/" className={styles.nav__logo} end>
          <LazyLoadImage src={require("../../pictures/trivia.png")} alt="This is Trivia Logo" />
        </NavLink>

        <div
          className={showNav ? styles.nav__menu : styles["nav__menu-hide"]}
          id={styles["nav-menu"]}
        >
          
          <ul className={styles.nav__list}>
            {!auth?.auth &&
              <>
                <li className={styles.nav__item} onClick={navbarController} >
                  <NavLink to="/users" className={({ isActive }) =>
                    isActive ? `${styles["nav__link"]} ${styles["nav__link-active"]}` : styles['nav__link']}> 
                   <IoPeople/>
                    Users
                  </NavLink>
                </li>

                <li className={styles["nav__item"]} onClick={navbarController} >
                  <NavLink to="/about" className={({ isActive }) =>
                    isActive ? `${styles["nav__link"]} ${styles["nav__link-active"]}` : styles['nav__link']}>
                  <IoInformationCircle/>
                    About
                  </NavLink>
                </li>

              </>}

            {!auth.auth &&

              <li className={styles["nav__item"]} onClick={navbarController} >
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? `${styles["nav__link"]} ${styles["nav__link-active"]}` : styles['nav__link']}>

                  <IoKey/>
                  Login
                </NavLink>
              </li>
            }

            {!auth.auth &&
              <li className={styles["nav__item"]} onClick={navbarController} >
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? `${styles["nav__link"]} ${styles["nav__link-active"]}` : styles['nav__link']}
                >
                  <IoPencil/>
                  Register
                </NavLink>
              </li>}

            {auth.auth && <>
              <li className={styles["nav__item"]} onClick={navbarController} >
                <NavLink
                  to="/main"
                  className={({ isActive }) =>
                    isActive ? `${styles["nav__link"]} ${styles["nav__link-active"]}` : styles['nav__link']}
                >
                  <IoHome/>
                  Main
                </NavLink>
              </li>
              <li className={styles["nav__item"]} onClick={navbarController} >

                <NavLink
                  to="/records"
                  className={({ isActive }) =>
                    isActive ? `${styles["nav__link"]} ${styles["nav__link-active"]}` : styles['nav__link']}
                >
                  <IoFolder/>
                  Records
                </NavLink>
              </li>

              <li className={styles["nav__item"]} onClick={navbarController} >

                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? `${styles["nav__link"]} ${styles["nav__link-active"]}` : styles['nav__link']}
                >
                  <IoPersonOutline/>
                  Profile
                </NavLink>
              </li>
              <li className={styles["nav__item"]} >

                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    isActive ? `${styles["nav__link"]} ${styles["nav__link-active"]}` : styles['nav__link']}
                >
                  <IoArrowForward/>
                  Logout
                </NavLink>
              </li>
            </>}


          </ul>
          <div className={styles["nav__close"]} id={styles["nav-close"]} onClick={navbarController} >
            <IoClose />
          </div>
        </div>

        <div className={styles["nav__toggle"]} id={styles["nav-toggle"]} onClick={navbarController}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};


export default NavBar;