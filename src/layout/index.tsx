import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className="w-screen h-full xl:h-screen">{children}</div>;
}

export default Layout;
