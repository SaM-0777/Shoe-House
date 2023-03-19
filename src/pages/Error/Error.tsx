import { Link } from "react-router-dom";

import "./error.scss";


export default function Error() {  
  return (
    <section className="w-full h-screen flex flex-1 flex-col items-center justify-center gap-8" >
      <h1 className="app__text-primary text-center text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-extrabold mb-6" >404 Page not found</h1>
      <Link to="" className="py-2 sm:py-3 px-4 sm:px-5 text-center bg-[var(--color-dark)] text-[0.85rem] text-white font-bold rounded-md app__text-secondary" >Back to Home</Link>
    </section>
  )
};

