import React from "react";
import NavigationBar from "./navbar";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <NavigationBar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
