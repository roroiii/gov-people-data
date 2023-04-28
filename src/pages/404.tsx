import Meta from '@/components/Layout/Meta';
import NavbarAppBar from '@/components/Navbar/Navbar';
import TaiwanBox from '@/components/TaiwanBox';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Page404() {
  return (
    <>
      <Meta />
      <NavbarAppBar />
      <Container fixed sx={{ minHeight: '100vw', pt: 3, pl: { xs: 2 }, pr: { xs: 2 } }}>
        <TaiwanBox />
        <Grid item sx={{ textAlign: 'center' }} xs={8}>
          404
        </Grid>
      </Container>
    </>
  );
}
