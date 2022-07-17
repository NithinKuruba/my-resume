import React from "react";

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className = `` }: LayoutProps) => {
  return (
    <>
      <main className={className}>{children}</main>
    </>
  );
};

export default Layout;
