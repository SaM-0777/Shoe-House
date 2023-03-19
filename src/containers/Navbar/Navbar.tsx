import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenu } from "react-icons/cg";

import "./navbar.scss";
import { motion } from "framer-motion";


export default function Navbar() {
  const [isMenu, setIsMenu] = useState<boolean>(false)

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between py-6 px-6 xs:px-8 md:px-10" >
      <h1 className="app__navbar-brand-text text-[1.5rem] xs:text-[1.65rem] sm:text-[1.75rem] md:text-[2rem] font-bold text-[var(--color-dark)]" >Shoe <span className="text-[var(--color-brand)]" >House</span></h1>
      <ul className="hidden lg:flex items-center justify-center gap-10" >
        <div className="flex items-center justify-center gap-3 cursor-pointer" >
          <p className="app__navbar-text text-[1rem] text-[var(--color-grey)] hover:text-[var(--color-dark)]" >Our Services</p>
          <IoIosArrowDown size={18} className="text-[var(--color-grey)]" />
        </div>
        <Link to="soon" >
          <p className="app__navbar-text text-[1rem] text-[var(--color-grey)] hover:text-[var(--color-dark)] cursor-pointer" >Blogs</p>
        </Link>
        <Link to="soon" >
          <p className="app__navbar-text text-[1rem] text-[var(--color-grey)] hover:text-[var(--color-dark)] cursor-pointer" >Locations</p>
        </Link>
        <Link to="soon" >
          <p className="app__navbar-text text-[1rem] text-[var(--color-grey)] hover:text-[var(--color-dark)] cursor-pointer" >Company</p>
        </Link>
      </ul>
      <ul className="hidden lg:flex items-center justify-center gap-10" >
        <Link to="soon" >
          <p className="app__navbar-text text-[1rem] text-[var(--color-dark)] cursor-pointer" >Log in</p>
        </Link>
        <Link to="soon" className="bg-[var(--color-dark)] px-4 py-2 rounded-lg" >
          <p className="app__navbar-text text-[1rem] text-[var(--color-white)] cursor-pointer" >Sign up</p>
        </Link>
      </ul>
      <CgMenu size={22} className="block lg:hidden text-[var(--color-dark)] cursor-pointer" onClick={() => setIsMenu(true)} />
      {isMenu && (
        <div className="block lg:hidden" >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "spring", duration: 0.5 }} className="absolute block lg:hidden top-0 left-0 w-screen h-screen cursor-pointer backdrop-blur-sm z-40" onClick={() => setIsMenu(false)} />
          <motion.div className="absolute w-[250px] xs:w-[300px] md:w-[350px] h-fit flex flex-col gap-3 lg:hidden top-5 right-5 bg-[var(--color-lighter)] rounded-lg p-5 z-50" >
            <div className="flex items-center justify-start gap-3 cursor-pointer" >
              <p className="app__navbar-text text-[1rem] text-[var(--color-white)] hover:text-[var(--color-dark)]" >Our Services</p>
              <IoIosArrowDown size={18} className="text-[var(--color-white)]" />
            </div>
            <Link to="soon" >
              <p className="app__navbar-text text-[1rem] text-[var(--color-white)] hover:text-[var(--color-dark)] cursor-pointer" >Blogs</p>
            </Link>
            <Link to="soon" >
              <p className="app__navbar-text text-[1rem] text-[var(--color-white)] hover:text-[var(--color-dark)] cursor-pointer" >Locations</p>
            </Link>
            <Link to="soon" >
              <p className="app__navbar-text text-[1rem] text-[var(--color-white)] hover:text-[var(--color-dark)] cursor-pointer" >Company</p>
            </Link>
            <ul className="flex items-center justify-start gap-10" >
              <Link to="soon" >
                <p className="app__navbar-text text-[1rem] text-[var(--color-white)] hover:text-[var(--color-dark)] cursor-pointer" >Log in</p>
              </Link>
              <Link to="soon" className="bg-[var(--color-dark)] p-2 rounded-lg" >
                <p className="app__navbar-text text-[1rem] text-[var(--color-white)] cursor-pointer" >Sign up</p>
              </Link>
            </ul>
          </motion.div>
        </div>
      )}
    </nav>
  )
};

