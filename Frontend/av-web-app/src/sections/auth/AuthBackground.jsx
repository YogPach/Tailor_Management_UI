// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BgImage from '../../assets/images/bg-login.jpg';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

export default function AuthBackground() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0, // top, right, bottom, left = 0
        zIndex: -1,
        backgroundImage: `linear-gradient(180deg, rgb(35 41 99) 50%, rgb(255 255 255 / 50%) 0%)`,
        backgroundSize: 'cover', // cover entire area
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(35, 41, 99, 0.1) 0%, rgba(35, 41, 99, 0.05) 100%)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(35, 41, 99, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 2,
        }
      }}
    />
  );
}
