
import React , { useState,useEffect, useLayoutEffect} from 'react';
import creativeLogo from '../assets/images/logo3.png';
import Leftbar from './header/Leftbar'
import Rightbar from './header/Rightbar'
import { MoreHorizontal } from 'react-feather';
import { MobileRightToggle, SwitchToggle} from '../redux/common/actions'
import { Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import logo_light from '../assets/images/logo3.png'

export const Header = () => {
    const configDB = useSelector(content => content.Customizer.customizer);
    const sidebar_background_color = configDB.settings.sidebar_background_setting;

    const dispatch = useDispatch();
    const mobileRightTog = useSelector(state => state.Common.mobileRightToggle)
    const switchToggle= useSelector(state => state.Common.switchToggle) 
    const width = useWindowSize()
  
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }
    
    useEffect(() => {
        if (width <= 991) {
            document.querySelector(".page-main-header").className = 'page-main-header open' 
            document.querySelector(".page-sidebar").className = 'page-sidebar open' 
            if (localStorage.getItem("layout_version") === 'dark-only') {
                document.querySelector(".header-logo").className = 'header-logo light';
            }
            else {
                document.querySelector(".header-logo").className = 'header-logo normal';
            }
        }
        else {
            document.querySelector(".page-main-header").className = 'page-main-header ' 
            document.querySelector(".page-sidebar").className = 'page-sidebar ' + sidebar_background_color
        }
    }, [width,sidebar_background_color]);

    return(
      <div className={`page-main-header ${switchToggle? 'open': ''}`}>
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none col-auto p-0">
            <div className="logo-wrapper header-logo normal">
                <a href='/dashboard/main' style={{ color: 'black', fontSize: '16px', fontWeight: 600 }}>
                    Labroom111
                </a>
            </div>
          </div>
          <div className="mobile-sidebar d-block col-auto ps-0">
            <div className="media-body text-end switch-sm">
            <Label className="switch">
              <Input type="checkbox" onChange={() => dispatch(SwitchToggle(switchToggle))} checked={!switchToggle}/>
              <span className="switch-state"></span>
            </Label>
            </div>
          </div> 
          <Leftbar/>
          <Rightbar/>
          <div className="d-lg-none mobile-toggle pull-right col-auto p-0">
            <MoreHorizontal onClick={() => dispatch(MobileRightToggle(mobileRightTog))}/>
          </div>
        </div>
      </div>
    )
}

export default Header