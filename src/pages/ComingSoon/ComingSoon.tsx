import { useState } from "react";

import "./comingsoon.scss";


export default function ComingSoon() {
  const [email, setEmail] = useState<string>("")
  
  return (
    <section className="w-full h-screen flex flex-1 flex-col items-center justify-center gap-8" >
      <h1 className="app__text-primary text-[3rem] sm:text-[4rem] md:text-[5rem] font-extrabold md:mb-6" >Coming Soon</h1>
      <div className="w-[90%] md:w-[500px] h-10 md:h-12 flex items-center justify-between p-1 rounded-md bg-[var(--color-light)]" >
        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" className="input w-[70%] sm:w-[75%] h-full app__text-secondary p-2 bg-transparent text-white outline-0" />
        <button className="w-[25%] sm:w-[20%] h-full text-center bg-[var(--color-dark)] text-[0.85rem] text-white font-bold rounded-md app__text-secondary" >Notify Me</button>
      </div>
      <p className="app__text-secondary text-[var(--color-dark)] md:mt-2" >-_ Notify me when app is launched _-</p>
    </section>
  )
};

