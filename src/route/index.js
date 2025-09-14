import React, { Fragment, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LayoutRoutes from "./LayoutRoutes";
import { authRoutes } from "./AuthRoutes";
import Signin from "../auth/signin";
import { getInfo } from "../util/profile";
import ScrollToTop from "../components/labroom/ScrollToTop";

const Router = () => {    
  const [authenticated, setAuthenticated] = useState(true);
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    // async function fetch() {
    //   const res = await getInfo(token);
    //   console.log("info route", res);
    //   if (res?.result === 'error') {
    //     setAuthenticated(false);
    //   }
    //   else {
    //     setAuthenticated(true);
    //   }
    // }
    // fetch();
  }, []);

  return (
    <Fragment>
        <BrowserRouter basename="/">
          <Suspense>
            <ScrollToTop />
            <Routes>
              <Route path={"/"} element={<PrivateRoute />}>
                 {authenticated   ? (
                  <>
                    <Route exact path={`${process.env.PUBLIC_URL}`} element={ <Navigate to={`${process.env.PUBLIC_URL}/dashboard/main`}/>}/>
                    <Route exact path={`/`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/main`}/>}/>
                  </>
                ) : (
                  ""
                )} 
                <Route path={`/*`} element={<LayoutRoutes />} />
              </Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/login`}
                element={<Signin />}
              />
              {authRoutes.map(({ path, element }, i) => (
                <Route path={path} element={element} key={i} />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
    </Fragment>
  );
};

export default Router;
