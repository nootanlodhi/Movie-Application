import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="fixed z-10"><Sidebar /></div>
      <div className="w-full bg-black">{children}</div>
    </div>
  );
};

export default Layout;
