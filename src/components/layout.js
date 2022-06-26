import * as React from 'react';
import NavBar from './navbar';
import './layout.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
