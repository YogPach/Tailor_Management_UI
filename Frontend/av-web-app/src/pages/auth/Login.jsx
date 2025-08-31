import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/AuthLogin';

// ================================||  LOGIN ||================================ //

export default function Login() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        {/* Logo Section */}
        <Grid size={7}>
          <Box sx={{ textAlign: 'left', mb: 2 }}>
           
              <Typography
                variant="body2"
                sx={{
                  color: 'text.dark',
                  fontSize: '1rem',
                }}
              >
                Welcome to Arva Fashion
              </Typography>
           
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 0.5,
              }}
            >
              Sign in
            </Typography>

          </Box>
        </Grid>
        <Grid size={5}>
          <Box sx={{ textAlign: 'right' }}>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 1,
              }}
            >
              Don't have an account?
            </Typography>
            <Link
              to="/register"
              style={{
                color: '#232963',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.7rem',
              }}
            >
              Sign up
            </Link>
          </Box>

        </Grid>
        {/* Login Form */}
        <Grid size={12}>
          <AuthLogin />
        </Grid>

      </Grid>
    </AuthWrapper>
  );
}
