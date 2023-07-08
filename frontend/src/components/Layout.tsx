import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
        <hr className="divide-slate-400" />
      </header>

      <main className="px-20">
        <Outlet />
      </main>

      <footer className="px-5">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
