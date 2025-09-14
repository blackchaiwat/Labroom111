import React, { useState, useEffect } from "react";
import man from "../../assets/images/dashboard/user.png";
import { Users, MessageSquare, FileText, Settings, LogOut } from "react-feather";
import { Admin, WebDesigner, Profile, Inbox, Taskboard, Setting, LogOuts } from "../../constant";
import { useNavigate } from "react-router-dom";
import useOutsideDropdown from "../../services/useOutsideDropdown";

const UserActivity = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [userInfo, setUserInfo] = useState({});

  // auth0 profile
  // const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  // const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"));

  useEffect(() => {
    // setProfile(localStorage.getItem("profileURL" || man));
    // setName(localStorage.getItem("Name"));
    const _userInfo = localStorage.getItem("userInfo") || '';
    if (_userInfo) {
      setUserInfo(JSON.parse(_userInfo));
    }
  }, []);

  const Logout_From_Auth0 = () => {
    localStorage.removeItem("auth0_profile");
    localStorage.setItem("authenticated", false);
    navigate(`${process.env.PUBLIC_URL}/login`);
  };
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);

  return (
    <div ref={ref} className={`dropdown  ${isComponentVisible && "show"}`}>
      <a
        // href='#javascript'
        onClick={() => {
          setIsComponentVisible(!isComponentVisible);
        }}
      >
        <span className='media user-header'>
          <img className='me-2 rounded-circle img-35' src={require('../../assets/images/user/user.png')} alt='user-header' />
          {/* <span className='media-body'>
            <span className='f-14 f-w-600'>{userInfo?.firstname || ''} {userInfo?.lastname || ''}</span>
          </span> */}
          <span className='f-14 f-w-600' style={{ marginTop: '7px' }}>{userInfo?.firstname || ''} {userInfo?.lastname || ''}</span>
        </span>
      </a>
      <div className={`p-0 dropdown-menu ${isComponentVisible && "show"} `}>
        <ul className='profile-dropdown'>
          {/* <li className='gradient-primary-1'>
            <h6 className='mb-0'>{name}</h6>
            <span>{WebDesigner}</span>
          </li> */}
          {/* <li>
            <Users />
            {Profile}
          </li>
          <li>
            <MessageSquare />
            {Inbox}
          </li>
          <li>
            <FileText />
            {Taskboard}
          </li>
          <li>
            <Settings />
            {Setting}
          </li> */}
          <li onClick={Logout_From_Auth0}>
            <LogOut />
            {LogOuts}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserActivity;
