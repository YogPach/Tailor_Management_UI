import PropTypes from 'prop-types';

// project imports
import DrawerHeaderStyled from './DrawerHeaderStyled';
import logo from '../../../../assets/images/users/av-logo.png';

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  return (
    <DrawerHeaderStyled
      open={open}
      sx={{
        minHeight: '60px',
        width: 'initial',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: open ? '24px' : 0
      }}
    >
      {/* <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} /> */}
      <img
  src={logo}
  alt="Logo"
  style={{
    width: open ? 'auto' : 35,
    height: 35,
    objectFit: 'contain',
  }}
/>
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
