import Meta from './Meta';
import NavbarAppBar from '@/components/Navbar';

export default function Layout({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <>
      <Meta />
      <NavbarAppBar />
      {children}
    </>
  );
}
