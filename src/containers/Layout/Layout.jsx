import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="px-3 sm:px-20 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
