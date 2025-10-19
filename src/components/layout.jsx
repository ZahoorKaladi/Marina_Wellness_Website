// src/components/Layout.jsx
import React from 'react';
import navbar from './navbar';
import footer from './footer'; // <-- Import the new Footer component

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer /> {/* <-- Add the Footer here */}
    </div>
  );
};

export default Layout;
