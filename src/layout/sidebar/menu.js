import {
    ArrowRight,
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'All Product', icon: ArrowRight, type: 'link', path: `${process.env.PUBLIC_URL}/shopee/result`, active: false,
    },
]

export const MENUITEMS_TIKTOK = [
    {
        title: 'All Product', icon: ArrowRight, type: 'link', path: `${process.env.PUBLIC_URL}/tiktok/result`, active: false,
    },
    // {
    //     title: 'Top New Products', icon: ArrowRight, type: 'link', path: `${process.env.PUBLIC_URL}/tiktok/top`, active: false,
    // },
    // {
    //     title: 'Hot Affiliate', icon: ArrowRight, type: 'link', path: `${process.env.PUBLIC_URL}/tiktok/hot`, active: false,
    // },
]
