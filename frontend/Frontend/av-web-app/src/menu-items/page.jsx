// assets
import { LoginOutlined, ProfileOutlined, SignatureOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  SignatureOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
     {
      id: 'MainOrderDetails',
      title: 'Main Order Details',
      type: 'item',
      url: '/MainOrderDetails',
      icon: icons.SignatureOutlined,
      target: false
    },
    {
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: false
    },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: false
    }
  ]
};

export default pages;
