import React from "react";
import Footer from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
