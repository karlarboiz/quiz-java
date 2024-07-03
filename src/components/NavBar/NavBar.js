
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../store/auth-action";
import "./NavBar.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NavBar = () => {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);

  const auth = useSelector(state => state.auth);
  let token;


  useEffect(() => {
    dispatch(logoutHandler);
  }, [dispatch, token])


  function navbarController() {

    setShowNav((val) => val ? false : true);

  }
  return (

    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <LazyLoadImage src={require("../../pictures/trivia.png")} alt="This is Trivia Logo" />
        </NavLink>

        <div
          className={showNav ? "nav__menu" : "nav__menu-hide"}
          id="nav-menu"
        >
          <ul className="nav__list">
            {!auth?.auth &&
              <>
                <li className="nav__item">
                  <NavLink to="/users" className="nav__link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                    </svg>
                    users
                  </NavLink>
                </li>

                <li className="nav__item">
                  <NavLink to="/about" className="nav__link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
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

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                  </svg>
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