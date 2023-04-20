import { useSelector } from 'react-redux';
import Meta from './Meta';
import NavbarAppBar from '@/components/Navbar';
import { selectLoading } from '@/redux/reducers/loadingReducer';
import LoadingBox from './LoadingBox';
import TaiwanBox from '../TaiwanBox';
import { Container } from '@mui/material';

export default function Layout({ children }: { children: JSX.Element[] | JSX.Element }) {
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <Meta />
      <NavbarAppBar />
      {isLoading && <LoadingBox />}
      <Container fixed sx={{ position: 'relative', minHeight: '100vw', pt: 3 }}>
        {children}
        <TaiwanBox />
      </Container>
    </>
  );
}
