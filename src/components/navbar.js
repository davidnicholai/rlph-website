import * as React from 'react';
import { Link } from 'gatsby';

const navbarStyles = {
  backgroundColor: 'rgb(15, 19, 33)',
  padding: '1rem',

  // Flex
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navbarIconStyles = {
  color: '#fff',
  fontSize: '2rem',
};

const navbarLinkContainerStyles = {
  color: '#fff',
};

const navbarLinkStyles = {
  color: '#fff',
  margin: '0 1rem',
  textDecoration: 'none',
};

const NavBar = () => {
  return (
    <nav style={navbarStyles}>
      <div style={navbarIconStyles}>RLPH</div>
      <div style={navbarLinkContainerStyles}>
        <Link to="/home" style={navbarLinkStyles}>
          Home
        </Link>
        <Link to="/home" style={navbarLinkStyles}>
          Apply as Staff
        </Link>
        <Link to="/home" style={navbarLinkStyles}>
          Sponsorships
        </Link>
        <Link to="/home" style={navbarLinkStyles}>
          Join Discord
        </Link>
        <Link to="/home" style={navbarLinkStyles}>
          YouTube
        </Link>
        <Link to="/home" style={navbarLinkStyles}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
