import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AdbIcon from '@mui/icons-material/Adb'; 
import WidgetsIcon from '@mui/icons-material/Widgets'; 
import {useSelector } from 'react-redux';
import CreateWidgetDialog  from '../CreateWidget'
const Header = () => {

    const widgetCount = useSelector((state) => state.widgets.widgets.length);
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleDialogOpen = () => {
        setDialogOpen(true);}
    const handleDialogClose = () => {
        console.log(' Parul widgetCount is ', widgetCount)
        setDialogOpen(false);}
  return (
    <div>
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          {/* Widget Manager text */}
          <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: 500 }}>
            Widget Manager
          </Typography>
        </Box>

        {/* Badge and + icon on the right with more space */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={handleDialogOpen} sx={{ marginRight: 3 }}>
            <AddIcon />
          </IconButton>
          <Badge 
            badgeContent={widgetCount} 
            color="secondary" 
            sx={{ marginRight: 3, display: 'flex', alignItems: 'center' }}
          >
            <WidgetsIcon sx={{ color: 'white' }} />  {/* Icon inside Badge */}
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
      <CreateWidgetDialog
        open={dialogOpen}
        onClose={handleDialogClose}
      />
    </div>
  );
};

export default Header;
