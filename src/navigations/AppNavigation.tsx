import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "../containers";

import { Home, Product } from "../pages";

export default function AppNavigation() {
  const [isMenu, setIsMenu] = useState<boolean>(false)

  return (
    <div className="w-full h-full" >
      <Navbar setIsMenu={setIsMenu} />
      {isMenu && (
        <div className="block lg:hidden" >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "spring", duration: 0.5 }} className="absolute block lg:hidden top-0 left-0 w-screen h-screen cursor-pointer backdrop-blur-sm z-50" onClick={() => setIsMenu(false)} />
          <motion.div className="absolute w-[250px] xs:w-[300px] md:w-[350px] h-fit flex flex-col gap-3 lg:hidden top-5 right-5 bg-[var(--color-lighter)] rounded-lg p-5 z-[999]" >
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
      <div className="pt-24 w-full h-full -z-20" >
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </div>
    </div>
  )
}

