import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from '@nextui-org/react';

import logo from '../../assets/img/landingPage/logo.png';

import { Link, useLocation } from 'react-router-dom';

export default function Navbars() {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    // <nav className="lg:bg-white lg:w-screen lg:h-14 shadow-sm lg:px-16 lg:py-3 flex justify-items-center items-center  w-full ">
    //   <img
    //     src={logo}
    //     alt="logo"
    //     className="lg:h-10 lg:pr-3 h-10 pr-4 pl-2 mt-2"
    //   />
    //   <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2">
    //     <Link to="/">Healthcare Management System</Link>
    //   </h1>
    //   <ul className="flex ml-auto lg:w-60 justify-evenly  font-lato font-semibold w-64 ">
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About us</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact us</Link>
    //     </li>
    //   </ul>

    //   <button className="bg-primary lg:py-2 lg:px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary py-1 px-2 mr-2">
    //     {location.pathname === '/register' ? (
    //       <Link to="/">Login</Link>
    //     ) : (
    //       <Link to="/register">Register</Link>
    //     )}
    //   </button>
    // </nav>

    <Navbar
      isBordered
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="lg:bg-white  lg:h-14 shadow-sm lg:px-16 lg:py-4 flex justify-items-center items-center  w-full overflow-hidden "
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Image
            src={logo}
            alt="logo"
            className="lg:h-10 lg:pr-3 h-10 pr-4 pl-2 mt-2"
          />
          <Link to="/">
            <p className="font-bold text-inherit">Health Management </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/" color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about" aria-current="page">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/contact">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button className=" lg:py-2 lg:px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary py-1 px-2 mr-2">
            {location.pathname === '/register' ? (
              <Link to="/">Login</Link>
            ) : (
              <Link to="/register">Register</Link>
            )}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link to="/" color="foreground" href="#">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/about" aria-current="page">
            About us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" to="/contact">
            Contact us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
