import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Carts from "./Carts";

const Navbar = () => {
  



  const navMenu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>register</NavLink>
      </li>
    </>
  );

  return (
    <div className=" max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-4 py-2">
      <div className="navbar bg-base-100 gap-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <Carts></Carts>
         <Link to={'/login'}><button className="btn focus:outline-none font-bold bg-amber-500 hover:bg-amber-500  focus:ring-amber-500  rounded-lg  px-5 py-2 mr-2 mb-2">
            Login
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
