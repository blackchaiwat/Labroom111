import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getInfo } from "../util/profile";

const PrivateRoute = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const jwt_token = localStorage.getItem("token");

  useEffect(() => {
     async function fetch() {
        const res = await getInfo(jwt_token);
        if (res?.result === 'error') {
          setAuthenticated(false);
          localStorage.setItem('userInfo', '');
          localStorage.setItem('token', '');
        } else {
          console.log("res", res?.profileinfo)
          if (res?.profileinfo) {
            localStorage.setItem('userInfo', JSON.stringify(res?.profileinfo || ''));
          }
          setAuthenticated(true);
        }
      }
      fetch();
  }, []);

  return authenticated ? <Outlet /> : <Navigate exact to={`${process.env.PUBLIC_URL}/login`} />;
};
export default PrivateRoute;
