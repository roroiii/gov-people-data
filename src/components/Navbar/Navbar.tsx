import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import SettingButton from './SettingButton';
import LogoText from './LogoText';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 48 }}>
        <Toolbar sx={{ minHeight: { xs: 48, md: 48 } }}>
          <LogoText />
          <SettingButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
