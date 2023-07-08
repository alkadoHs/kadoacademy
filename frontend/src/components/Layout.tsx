import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header className="border-b border-slate-600">
        <Navbar />
      </header>

      <main className="px-5 md:px-10 lg:px-20">
        <Outlet />
      </main>

      <footer className="px-5">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
