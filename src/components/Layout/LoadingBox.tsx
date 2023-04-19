import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingBox() {
  return (
    <>
      <Backdrop
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <CircularProgress color="inherit" />
        <p>Loading...</p>
      </Backdrop>
    </>
  );
}
