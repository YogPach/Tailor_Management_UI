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
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover', // cover entire area
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: 'blur(3px)',
        width: '100%',
      }}
    />
  );
}
