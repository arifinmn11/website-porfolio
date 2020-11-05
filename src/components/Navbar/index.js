import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElement';
// import {IconContext} from 'react-icons/lib';
// import {animateScroll as scroll} from 'react-scroll';
const NavBar = ({toggle}) => {
  const [scrollNav, setSrcollNav] = useState(false);
  const changeNav = () => {
    return window.scrollY >= 80 ? setSrcollNav(true) : setSrcollNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {};

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Logo
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                offset={-80}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                offset={-80}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                offset={-80}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                offset={-80}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="signin"> Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
