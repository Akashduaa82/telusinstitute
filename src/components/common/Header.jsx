import React, { useState } from "react";
import LogoImg from "../assets/images/logo-black.png"; // Update the path to your logo
import { LinkData } from "../assets/data/data";
import { NavLink, Link } from "react-router-dom";
import { IoPersonSharp, IoMenu, IoClose } from "react-icons/io5";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-white py-3 text-black sticky z-50 shadow-md top-0 left-0 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and TelusInstitute Text */}
        <div className="logo flex items-center gap-4">
          <img src={LogoImg} alt="logo" className="h-10 lg:h-12" />
          <p className="m-0 font-extrabold text-[32px] tracking-wide">
            <span style={{ color: "red", fontSize: "38px", fontWeight: "bold" }}>
              T
            </span>
            elus
            <span style={{ color: "red", fontSize: "38px", fontWeight: "bold" }}>
              I
            </span>
            nstitute
          </p>
        </div>

        {/* Laptop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-lg">
          <ul className="flex gap-6">
            {LinkData.map((link) => (
              <li key={link.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold border-2 border-white px-3 py-1 rounded-md"
                      : "text-[18px] hover:text-primary transition duration-300 px-3 py-1 rounded-md"
                  }
                  to={link.url}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Laptop Account Section */}
        <div className="hidden lg:flex items-center gap-4">
          <button>
            <IoPersonSharp
              size={28}
              className="hover:text-primary transition duration-300"
            />
          </button>
          <Link to="/login">
            <button className="text-lg hover:text-primary transition duration-300">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile/Tablet Hamburger Menu Button */}
        <div className="flex items-center lg:hidden">
          <button onClick={toggleNav}>
            {navOpen ? (
              <IoClose
                size={28}
                className="hover:text-primary transition duration-300"
              />
            ) : (
              <IoMenu
                size={28}
                className="hover:text-primary transition duration-300"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Panel */}
      {navOpen && (
        <div className="lg:hidden bg-white w-full shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {LinkData.map((link) => (
              <li key={link.id}>
                <NavLink
                  onClick={() => setNavOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold border-2 border-white px-3 py-1 rounded-md"
                      : "text-[18px] hover:text-primary transition duration-300 px-3 py-1 rounded-md"
                  }
                  to={link.url}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
            <li className="flex flex-col items-center gap-2">
              <button>
                <IoPersonSharp
                  size={28}
                  className="hover:text-primary transition duration-300"
                />
              </button>
              <Link to="/login" onClick={() => setNavOpen(false)}>
                <button className="text-lg hover:text-primary transition duration-300">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
