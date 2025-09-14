// Labroom111
import DashboardMain from "../components/labroom/dashboard/Dashboard";
import ShopeeResult from "../components/labroom/shopee/ShopeeResult";
import TiktokResult from "../components/labroom/tiktok/TiktokResult";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/dashboard/main`, component: <DashboardMain /> },
  { path: `${process.env.PUBLIC_URL}/shopee/result`, component: <ShopeeResult /> },
  { path: `${process.env.PUBLIC_URL}/tiktok/result`, component: <TiktokResult /> },
];
