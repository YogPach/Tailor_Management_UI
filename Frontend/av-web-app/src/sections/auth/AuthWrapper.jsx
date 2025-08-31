import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// project imports
import AuthFooter from 'components/cards/AuthFooter';
// import Logo from '../../assets/images/users/av-logo.png';
import AuthCard from './AuthCard';

// assets
import AuthBackground from './AuthBackground';

import loginLogo from '../../assets/images/login-logo.png'
import profileMaster from '../../assets/images/users/avatar-1.png'

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function AuthWrapper({ children }) {
  return (
    <Box
     sx={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <AuthBackground />
      <Grid
        container
        direction="row"
        alignItems="left"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid
          size={7}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
          marginTop="50px"
            size={6}>
            <img
              src={loginLogo}
              alt="Logo"
              style={{
                width: '100%',
                objectFit: 'contain',
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                fontWeight: 500,
                textAlign: 'center'
              }}
            >
              By Palak Agrawal Gupta
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            size={6}
            marginBottom="50px">
            <Grid size={5}>
              <Box
                sx={{
                  backgroundColor: '#eff8ff',
                  borderRadius: '20px',
                  mb: 2,
                  mr: 3,
                  padding: 2,
                  border: '1px solid #dadadaff',
                  boxShadow: '0 4px 10px rgba(35, 41, 99, 0.3)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'black',
                    fontWeight: 500,
                    textAlign: 'center'
                  }}
                >
                  <img
                    src={profileMaster}
                    alt="Logo"
                    style={{
                      width: '100%',
                      borderRadius: '50%',
                      objectFit: 'contain',
                    }}
                  />
                  Admin<br />
                  Founder
                </Typography>
              </Box>
            </Grid>
            <Grid size={5}>
              <Box
                sx={{
                  backgroundColor: '#eff8ff',
                  borderRadius: '20px',
                  mb: 2,
                  mr: 3,
                  padding: 2,
                  border: '1px solid #dadadaff',
                  boxShadow: '0 4px 10px rgba(35, 41, 99, 0.3)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'black',
                    fontWeight: 500,
                    textAlign: 'center'
                  }}
                >
                  <img
                    src={profileMaster}
                    alt="Logo"
                    style={{
                      width: '100%',
                      borderRadius: '50%',
                      objectFit: 'contain',
                    }}
                  />
                  Tailor<br />
                  Master Suraj
                </Typography>
              </Box>
            </Grid>
          </Grid>

        </Grid>
        <Grid
          size={5}
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            minHeight: '100vh',
            py: 4,
          }}
        >
          <AuthCard>{children}</AuthCard>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <AuthFooter />
      </Box>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
