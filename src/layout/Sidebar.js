import React, { Fragment, useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import { MENUITEMS as MENUSHOPEE, MENUITEMS_TIKTOK as MENUTIKTOK } from './sidebar/menu';
import {Link} from 'react-router-dom'
import configDB from '../data/customizer/config';
import img_product from '../assets/images/Product_Package.png';

const Sidebar = () => {
    const isTiktok = window.location.pathname.includes('/tiktok');
    const MENUITEMS = isTiktok ? MENUTIKTOK : MENUSHOPEE;

    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const switchToggle = useSelector(state => state.Common.switchToggle)
    const [margin, setMargin] = useState(0);
    const [width, setWidth] = useState(0);
    const [hideLeftArrowRTL, setHideLeftArrowRTL] = useState(true);
    const [hideRightArrowRTL, setHideRightArrowRTL] = useState(true);
    const [hideRightArrow, setHideRightArrow] = useState(true);
    const [hideLeftArrow, setHideLeftArrow] = useState(true);
    const wrapper = useSelector(content => content.Customizer.sidebar_types.type) || configDB.data.settings.sidebar.type;
    const layout = useSelector(content => content.Customizer.layout)
    const sidebar_background_color = configDB.data.settings.sidebar_background_setting;


    useEffect(() => {        
        window.addEventListener('resize', handleResize)
        handleResize();
      
        const currentUrl = window.location.pathname;
        (mainmenu || []).filter(items => {
            if (items.path === currentUrl)
                setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl){
                        setNavActive(subSubItems)
                        return true
                    }
                    else{
                        return false
                    }
                })
                return subItems
            })
            return items
        })

        const timeout = setTimeout(() => {
            const elmnt = document.getElementById("myDIV");
            const menuWidth = elmnt.offsetWidth;
            if (menuWidth > window.innerWidth || menuWidth < window.innerWidth ) {
                setHideRightArrow(false);
                setHideLeftArrowRTL(false);
            } else {
                setHideRightArrow(true);
                setHideLeftArrowRTL(true);
            }
        }, 500)

        return () => {
            // eslint-disable-next-line
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeout);
        }

        // eslint-disable-next-line
    }, []);

    const handleResize = () => {
        
        setWidth(window.innerWidth - 500);
        
    }

    const setNavActive = (item) => {
        MENUITEMS.filter(menuItem => {
            if (menuItem !== item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true
                        submenuItems.active = true
                        return true
                    }
                    else{
                        return false
                    }
                })
            }
            return menuItem
        })
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }

    const toggletNavActive = (item) => {        
        if (!item.active) {
            MENUITEMS.forEach(a => {
                if (MENUITEMS.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                    if (!b.children) return false
                    b.children.forEach(c => {
                        if (b.children.includes(item)) {
                            c.active = false
                        }
                    })
                })
            });
        }
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }

    const scrollToRight = () => {
        const elmnt = document.getElementById("myDIV");
        const menuWidth = elmnt.offsetWidth;
        const temp = menuWidth + margin;
        if (temp < menuWidth) {
            setMargin(-temp);
            setHideRightArrow(true);
        }
        else {
            setMargin(margin => margin += (-width));
            setHideLeftArrow(false);
        }
    }

    const scrollToLeft = () => {
        if (margin >= -width) {
            setMargin(0)
            setHideLeftArrow(true);
        }
        else {
            setMargin(margin => margin += width);
            setHideRightArrow(false);
        }
    }


    const scrollToLeftRTL = () => {
        
        if (margin < -width) {
            setMargin(margin => margin += -width);
            setHideLeftArrowRTL(true);
        }
        else {
            setMargin(margin => margin += -width);
            setHideRightArrowRTL(false);
        }
    }

    const scrollToRightRTL = () => {
        const temp = width + margin
        
        if (temp === 0) {
            setMargin(temp);
            setHideRightArrowRTL(true);
        }
        else {
            setMargin(margin => margin += width);
            setHideRightArrowRTL(false);
            setHideLeftArrowRTL(false);
        }
    }
  
    return (
        <Fragment>
            <div className={`page-sidebar ${switchToggle? 'open': sidebar_background_color}`}>
                <div className="main-header-left d-none d-lg-block custom-sidebar">
                    <div className="logo-wrapper compactLogo" style={{ textAlign: 'left' }}>
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/main`} style={{ color: 'white' }}>
                            <h4 style={{ fontWeight: 600, color: 'black', marginBottom: '0px' }}>Labroom111</h4>
                            <h6 style={{ fontWeight: 600, color: 'black' }}>Data</h6>
                        </Link>
                    </div>
                </div>
                <div className="sidebar custom-scrollbar custom-sidebar">
                    <div style={{ padding: '20px 20px 14px 20px', textAlign: 'center' }}>
                        <h4 style={{ fontWeight: 600, color: 'black' }}>{isTiktok ? 'TIKTOK DATA' : 'Shopee Data'}</h4>
                    </div>
                    <div style={{ padding: '0px 20px 0px 10px', display: 'flex', justifyContent: 'center' }}>
                        <img alt="product" src={img_product} style={{ height: '22px', width: 'auto' }} />
                        <h5 style={{ fontWeight: 600, color: 'black', fontSize: 18, marginLeft: '10px' }}>Product</h5>
                    </div>
                    
                    <ul
                        className="sidebar-menu"
                        id="myDIV"
                        style={wrapper === 'horizontal_sidebar' ? layout === 'rtl' ?
                        { 'marginRight': margin + 'px' } : { 'marginLeft': margin + 'px' } : { margin: '0px' }}
                    >
                         <li className={`left-arrow ${layout === 'rtl' ? hideLeftArrowRTL ? 'd-none' : '' : hideLeftArrow ? 'd-none' : ''}`}
                            onClick={(wrapper === 'horizontal_sidebar' && layout === 'rtl') ? scrollToLeftRTL : scrollToLeft}><i className="fa fa-angle-left"></i></li>
                         {
                            MENUITEMS.map((menuItem, i) => 
                               
                                <li className={`${menuItem.active ? 'active' : ''}`} key={i}>
                                    {(menuItem.sidebartitle) ? <div className="sidebar-title">{menuItem.sidebartitle}</div>
                                        : ''}
                                    {(menuItem.type === 'sub') ?
                                        <a className="sidebar-header" href="#javascript" onClick={() => toggletNavActive(menuItem)}>
                                            <menuItem.icon />
                                    <span>{menuItem.title}</span>
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </a>
                                        : ''}
                                    {(menuItem.type === 'link') ?
                                        <Link className={`sidebar-header ${menuItem.active ? 'active' :''}`}  onClick={() => toggletNavActive(menuItem)} to={menuItem.path}>
                                            <menuItem.icon /><span>{menuItem.title}</span>
                                            {menuItem.children ?
                                                <i className="fa fa-angle-right pull-right"></i> : ''}
                                        </Link>
                                        : ''}
                                    {menuItem.children ?
                                        <ul
                                            className={`sidebar-submenu ${menuItem.active ? '' : ''}`}
                                            style={menuItem.active ? {} : {}}
                                        >
                                            {menuItem.children.map((childrenItem, index) =>
                                                <li key={index} className={childrenItem.children ? childrenItem.active ? '' : '' : ''}>
                                                    {(childrenItem.type === 'sub') ?
                                                        <a href={childrenItem.path} onClick={() => toggletNavActive(childrenItem)} className='menu-link'>
                                                            <i className="fa fa-circle"></i>{childrenItem.title} <i className="fa fa-angle-down pull-right"></i></a>
                                                    : ''}

                                                    {(childrenItem.type === 'link') ?
                                                        <Link className={childrenItem.active ? '' : ''} onClick={() => toggletNavActive(childrenItem)} to={childrenItem.path}>
                                                            <i className="fa fa-circle"></i>{childrenItem.title}
                                                        </Link>
                                                    : ''}
                                                    
                                                    {childrenItem.children ?
                                                        <ul className={`sidebar-submenu ${childrenItem.active ? '' : ''}`}>
                                                            {childrenItem.children.map((childrenSubItem, key) =>
                                                                <li className={childrenSubItem.active ? '' : ''} key={key}>
                                                                    {(childrenSubItem.type === 'link') ?
                                                                        <Link  className={childrenSubItem.active ? '' : ''}
                                                                            onClick={() => toggletNavActive(childrenSubItem)} to={childrenSubItem.path} >
                                                                            <i className="fa fa-circle"></i>{childrenSubItem.title}
                                                                        </Link>
                                                                        : ''}
                                                                </li>
                                                            )}
                                                        </ul>
                                                    : ''}
                                                </li>
                                            )}
                                            
                                        </ul>
                                        : ''}   
                                </li>

                            )
                        }
                         <li className={`right-arrow ${layout === 'rtl' ? hideRightArrowRTL ? 'd-none' : '' : hideRightArrow ? 'd-none' : ''}`}
                            onClick={(wrapper === 'horizontal_sidebar' && layout === 'rtl') ? scrollToRightRTL : scrollToRight}><i className="fa fa-angle-right"></i></li>
                   </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;