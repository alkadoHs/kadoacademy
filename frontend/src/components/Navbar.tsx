import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center gap-2 px-5 text-slate-300 py-2 font-semibold transition-all">
      <NavLink to="/" className="mr-auto text-xl">
        Home
      </NavLink>
      <NavLink
        to="/subscribe"
        className="py-2 px-5 hover:border hover:border-slate-300 hover:rounded-3xl "
      >
        Subscription
      </NavLink>
      <NavLink
        to="/courses"
        className="py-2 px-5 hover:border hover:border-slate-300 hover:rounded-3xl "
      >
        Courses
      </NavLink>
      <NavLink
        to="/mycourses"
        className="py-2 px-5 hover:border hover:border-slate-300 hover:rounded-3xl "
      >
        My Courses
      </NavLink>
      <NavLink
        to="/forum"
        className="py-2 px-5 hover:border hover:border-slate-300 hover:rounded-3xl "
      >
        Forum
      </NavLink>
      <div className="flex gap-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl">
        <NavLink
          to="/signup"
          className="py-2
          px-5 bg-indigo-500  rounded-3xl text-slate-100 font-semibold"
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/signin"
          className="py-2
          px-5 rounded-3xl text-slate-950 font-semibold"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
