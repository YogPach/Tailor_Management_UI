import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - other pages
const MainOrderDetails = Loadable(lazy(() => import('pages/MainOrderDetails')));
const OrderDetails = Loadable(lazy(() => import('pages/main-order-detail-tabs/OrderDetails')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'MainOrderDetails',
      element: <MainOrderDetails />
    },
    {
      path: 'OrderDetails',
      element: <OrderDetails />
    },
  ]
};

export default MainRoutes;
