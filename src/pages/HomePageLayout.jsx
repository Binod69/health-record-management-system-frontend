import Footer from '../components/landingPage/Footer';
import Nav from '../components/landingPage/Navbar';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePageLayout;
