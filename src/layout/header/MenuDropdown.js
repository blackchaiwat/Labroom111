import React, {useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import img_tiktok from '../../assets/images/menu_tiktok.png';
import img_shopee from '../../assets/images/menu_shopee.png';
import img_down from '../../assets/images/menu_down.png';
import { useNavigate } from 'react-router';

const MenuDropdown = () =>  {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const isTiktok = window.location.pathname.includes('/tiktok');
    const navigate = useNavigate();

    const onClickMenu = (isTiktok) => {
        navigate(`${process.env.PUBLIC_URL}/${isTiktok ? 'tiktok' : 'shopee'}/result`);
    }

    return(
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle>
            <div style={{ background: 'black', padding: '4px 14px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
                <img src={isTiktok ? img_tiktok : img_shopee} alt="menu" 
                    style={{ height: '40px', width: 'auto' }} 
                />
                <img src={img_down} alt="menu" 
                    style={{ height: '10px', width: 'auto', marginLeft: '4px', marginTop: '7px' }} 
                />
            </div>
         </DropdownToggle>
         <DropdownMenu>
             <DropdownItem onClick={() => onClickMenu(true)}>Tiktok</DropdownItem>
             <DropdownItem onClick={() => onClickMenu(false)}>Shopee</DropdownItem>
         </DropdownMenu>
     </Dropdown>
    )
}

export default MenuDropdown