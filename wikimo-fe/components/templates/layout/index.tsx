import Head from "next/head";
// Components
import { Header, Footer } from "../../organisms";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="relative overflow-hidden">
      <Header />

      <div id="content" className="pb-20">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;