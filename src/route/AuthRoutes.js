// Signin page
import Signin from '../auth/signin'

// Error page 
import Error400 from "../pages/errors/Error400";
import Error401 from "../pages/errors/Error401";
import Error403 from "../pages/errors/Error403";
import Error404 from "../pages/errors/Error404";
import Error500 from "../pages/errors/Error500";
import Error503 from "../pages/errors/Error503";


// Authentication
import Login from "../pages/authentication/Login";
import LoginWithBgImage from "../pages/authentication/LoginWithBgImage";
import LoginWithBgVideo from "../pages/authentication/LoginWithBgVideo";
import Register from "../pages/authentication/Register";
import RegisterWithBgImage from "../pages/authentication/RegisterWithBgImage";
import RegisterWithBgVideo from "../pages/authentication/RegisterWithBgVideo";
import UnlockUser from "../pages/authentication/UnlockUser";
import Forgetpwd from "../pages/authentication/Forgetpwd";
import Resetpwd from "../pages/authentication/Resetpwd";

// Comming soon
import Comingsoon from "../pages/comingSoon/Comingsoon";
import ComingsoonImg from "../pages/comingSoon/ComingsoonImg";
import ComingsoonVideo from "../pages/comingSoon/ComingsoonVideo";

// Maintenance
import Maintenance from "../pages/Maintenance";

export const authRoutes = [
    { path: `${process.env.PUBLIC_URL}/login`, element: <Signin /> },

    { path: `${process.env.PUBLIC_URL}/pages/errors/error400`, element: <Error400 /> },
    { path: `${process.env.PUBLIC_URL}/pages/errors/error401`, element: <Error401 /> },
    { path: `${process.env.PUBLIC_URL}/pages/errors/error403`, element: <Error403 /> },
    { path: `${process.env.PUBLIC_URL}/pages/errors/error404`, element: <Error404 /> },
    { path: `${process.env.PUBLIC_URL}/pages/errors/Error500`, element: <Error500 /> },
    { path: `${process.env.PUBLIC_URL}/pages/errors/error503`, element: <Error503 /> },

    { path: `${process.env.PUBLIC_URL}/pages/maintenance`, element: <Maintenance /> },

    { path: `${process.env.PUBLIC_URL}/pages/login`, element: <Login /> },
    { path: `${process.env.PUBLIC_URL}/pages/loginWithBgImg`, element: <LoginWithBgImage /> },
    { path: `${process.env.PUBLIC_URL}/pages/loginWithVideo`, element: <LoginWithBgVideo /> },
    { path: `${process.env.PUBLIC_URL}/pages/signup`, element: <Register /> },
    { path: `${process.env.PUBLIC_URL}/pages/signupWithImg`, element: <RegisterWithBgImage /> },
    { path: `${process.env.PUBLIC_URL}/pages/signupWithVideo`, element: <RegisterWithBgVideo /> },
    { path: `${process.env.PUBLIC_URL}/pages/forgetPwd`, element: <Forgetpwd /> },
    { path: `${process.env.PUBLIC_URL}/pages/unlockUser`, element: <UnlockUser /> },
    { path: `${process.env.PUBLIC_URL}/pages/resetPwd`, element: <Resetpwd /> },

    { path: `${process.env.PUBLIC_URL}/pages/comingsoon`, element: <Comingsoon /> },
    { path: `${process.env.PUBLIC_URL}/pages/comingsoonImg`, element: <ComingsoonImg /> },
    { path: `${process.env.PUBLIC_URL}/pages/comingsoonVideo`, element: <ComingsoonVideo /> },

]