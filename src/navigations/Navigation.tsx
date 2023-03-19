import { Routes, Route } from "react-router-dom";
import { Home, Product, ComingSoon, Error } from "../pages"


export default function Navigation() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="soon" element={<ComingSoon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
