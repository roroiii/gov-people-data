import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SettingButton from './SettingButton';
import LogoText from './LogoText';
import styled from '@emotion/styled';
import theme from '@/utils/theme';

const AppToolbar = styled(Toolbar)`
  min-height: 48px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  ${theme.breakpoints.up('xs')} {
    min-height: 48px;
  }
`;

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 48 }}>
        <AppToolbar>
          <LogoText />
          <SettingButton />
        </AppToolbar>
      </AppBar>
    </Box>
  );
}
