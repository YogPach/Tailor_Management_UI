import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

export default function AuthCard({ children, ...other }) {
  const theme = useTheme();

  return (
    <MainCard
      sx={{ 
        maxWidth: { xs: 300, sm: 400 }, 
        margin: { xs: 2.5, md: 3 }, 
        '& > *': { flexGrow: 1, flexBasis: '50%' },
        borderRadius: 3,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(35, 41, 99, 0.1)',
        '&:hover': {
          boxShadow: '0 12px 40px rgba(35, 41, 99, 0.15)',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease',
      }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={theme.customShadows.z1}
    >
      <Box sx={{ 
        p: { xs: 3, sm: 4, md: 5, xl: 6 },
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
        borderRadius: 3,
      }}>
        {children}
      </Box>
    </MainCard>
  );
}

AuthCard.propTypes = { children: PropTypes.any, other: PropTypes.any };
