import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import logo_2 from '../assets/1337_2.png';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
	<a href="/">
    <img
      src={logo}
      alt="1337-events Logo"
      className="w-32 h-18"
    />
	</a>
  );
};

export default function Header({inLoginPage = 0}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    "Home",
    "Events",
    "Blogs",
    "Sign Up",
  ];

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`border border-gray-100 bg-gray-50 transition-all ${isNavbarVisible ? 'top-0' : '-top-24'} fixed w-full`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/1337-events/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="foreground" href="/1337-events/Events">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/1337-events/Blogs">
            Blogs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
  {inLoginPage !== 1 && (
    <NavbarItem className="rounded-full hover:bg-gray-200 focus:outline lg:flex">
      <Button as={Link} href="/1337-events/Login" className="bg-slate-200 text-gray-900">
        Login
      </Button>
    </NavbarItem>
  )}
  {inLoginPage !== 2 && (
  <NavbarItem className="rounded-full hover:bg-gray-200 focus:outline flex">
    <Button as={Link} href="/1337-events/Register" className="bg-slate-900 text-gray-100">
      Register
    </Button>
  </NavbarItem>
  )}
</NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
