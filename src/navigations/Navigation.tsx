import { Routes, Route } from "react-router-dom";

import AppNavigation from "./AppNavigation";
import { Home, Product, ComingSoon, Error } from "../pages"


export default function Navigation() {
  return (
    <>
      <Routes>
        <Route path="" element={<AppNavigation />} />
        <Route path="soon" element={<ComingSoon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
