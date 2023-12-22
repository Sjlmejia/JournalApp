
import PropTypes from 'prop-types';
import { Drawer, Box, Toolbar, Typography, Divider } from '@mui/material';

export const SideBar = ({ drawerWidth =240 }) => {
  return (
    <Box
      component='nav'
      sx={{ 
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block'},
          '& .MuiDrawer-paper': { 
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
      <Toolbar>
        <Typography variant='h6' component='div'>
          Jorge Mejia
        </Typography>
      </Toolbar>
      <Divider/>
      </Drawer>
    </Box>
  )
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
};