import React, { Fragment, useRef } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Loader from "./Loader";
import ThemeCustomize from "../components/common/ThemeCustomize";
import { Outlet, useLocation } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ConfigDB from "../data/customizer/config";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, ...rest }) => {
  const location = useLocation();
  const animation =
    localStorage.getItem("animation") ||
    ConfigDB.data.router_animation ||
    "fade";
  const animationTheme =
    localStorage.getItem("animation") ||
    animation ||
    ConfigDB.data.router_animation;
  const nodeRef = useRef(null);
  return (
    <Fragment>
      <Loader />
      <div className="page-wrapper">
        <div className="page-body-wrapper">
          <Header />
          <Sidebar />
          <div className="page-body" ref={nodeRef}>
            <TransitionGroup {...rest}>
              <CSSTransition
                key={location.key}
                timeout={100}
                classNames={animationTheme}
                nodeRef={nodeRef}
                unmountOnExit
              >
                <div>
                  <Outlet />
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer />
        </div>
        <ThemeCustomize />
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Layout;
