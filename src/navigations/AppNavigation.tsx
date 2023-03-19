import { Routes, Route } from "react-router-dom";
import { Navbar } from "../containers";

import { Home, Product } from "../pages";

export default function AppNavigation() {
  return (
    <div className="w-full h-full" >
      <Navbar />
      <div className="pt-24 w-full h-full" >
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </div>
    </div>
  )
}

