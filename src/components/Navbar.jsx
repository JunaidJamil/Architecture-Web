import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { IoMdMenu } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const navItem = [
  { navlist: "MENU", href: "/" },
  { navlist: "GALLERY", href: "/Gallery" },
  { navlist: "PROJECTS", href: "/Project" },
  { navlist: "CERTIFICATION", href: "/Certification" },
  { navlist: "CONTACTS", href: "/Contacts" },
];

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Hide navbar on scroll down, show on scroll up
    if (scrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Change navbar color based on scroll position
    if (scrollTop >= 50) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }

    // Update last scroll position
    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]); // Correctly add lastScrollTop as a dependency

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <nav className={`navigation ${navColor ? 'nav-bg' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col">
              <div className='nav-list'>
                <ul className='navs'>
                  {navItem.map((item, i) => (
                    <li key={i}>
                      <NavLink
                        to={item.href}
                        onClick={closeMenu}
                        className={({ isActive }) => isActive ? 'active' : ''}
                      >
                        <span className="title">{item.navlist}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <button className='menu-btn' onClick={() => setMenu(!menu)}>
                  {menu ? (
                    <span className='nav-cancel'>
                      <GiCancel color='black' size={30} />
                    </span>
                  ) : (
                    <span className='nav-menu'>
                      <IoMdMenu color='black' size={30} />
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className={`side-menu ${menu ? 'option' : ''}`}>
              <ul className='menu-navs'>
                {navItem.map((item, i) => (
                  <li key={i} className="title">
                    <NavLink
                      to={item.href}
                      onClick={closeMenu}
                      className={({ isActive }) => isActive ? 'active' : ''}
                    >
                      <span className="title">{item.navlist}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
