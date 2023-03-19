import { useState } from "react";
import { BsZoomIn } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

import { Sidebar } from "../../containers";

import { motion, AnimatePresence } from "framer-motion";

import shoeImg from "../../assets/images/shoe-2.jpg";
import "./home.scss";


export default function Home() {
  const [isStyleDetailsVisible, setIsStyleDetailsVisible] = useState<boolean>(false)
  const [isSizeAndFitVisible, setIsSizeAndFitVisible] = useState<boolean>(false)
  const [isUserReviewVisible, setIsUserReviewVisible] = useState<boolean>(false)
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false)

  function handleToggleExpandStyleDetails() {
    setIsSizeAndFitVisible(false)
    setIsUserReviewVisible(false)
    setIsStyleDetailsVisible(prevState => !prevState)
  }
  function handleToggleSizeAndFitDetails() {
    setIsStyleDetailsVisible(false)
    setIsUserReviewVisible(false)
    setIsSizeAndFitVisible(prevState => !prevState)
  }
  function handleToggleUserReviewDetails() {
    setIsSizeAndFitVisible(false)
    setIsStyleDetailsVisible(false)
    setIsUserReviewVisible(prevState => !prevState)
  }

  return (
    <div className="w-full h-full flex justify-center items-center" >
      <AnimatePresence>
        {isSidebarVisible && (
          <motion.div initial={{ x: "120%", height: "100%" }} animate={{ x: 0, height: "100%" }} exit={{ x: "120%", height: "100%" }} transition={{ duration: 0.25 }} className="fixed w-[15%] top-0 right-0 z-40 h-full" >
            <Sidebar setIsSidebarVisible={setIsSidebarVisible} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-1/2 h-full flex items-center justify-center" >
        <div className="relative w-[80%] h-[80%] border-[1px] flex items-center justify-center" >
          <div className="absolute top-5 right-5 cursor-pointer" >
            <BsZoomIn size={16} className="text-[var(--color-grey)] hover:text-[var(--color-dark)]" />
          </div>
          <img src={shoeImg} alt="" className="w-[70%] h-full object-contain" />
        </div>
      </div>
      <div className="w-1/2 h-full pt-14" >
        <div className="" >
          <h1 className="app__home-secondary-text text-[1.25rem] font-semibold underline" >UwU Shoes</h1>
          <p className="app__home-tertiary-text text-[1rem] font-regular text-[var(--color-grey)]" >By Kairen</p>
        </div>
        <p className="app__home-tertiary-text text-[1rem] font-regular text-[var(--color-grey)] mt-10" >Lace Up Low-Top Sneakers</p>
        <h1 className="app__home-secondary-text text-[1.75rem] my-6" >$90</h1>
        <div className="flex items-center gap-3 w-1/2 border-[1px] py-2 px-2 rounded-lg border-[var(--color-lighter)] cursor-pointer mb-5" >
          <p className="app__home-tertiary-text text-[1rem] font-regular text-[var(--color-dark)]" >Choose your size</p>
          <IoIosArrowDown size={18} className="text-[var(--color-dark)]" />
        </div>
        <div className="flex items-center gap-3" >
          <div className="flex items-center justify-between w-1/2 py-2 px-2 rounded-lg bg-[var(--color-dark)] cursor-pointer" onClick={() => setIsSidebarVisible(true)} >
            <p className="app__home-tertiary-text text-[1rem] font-regular text-[var(--color-white)] uppercase" >Add to cart shopping bag</p>
            <MdShoppingBag size={18} className="text-[var(--color-white)]" />
          </div>
          <div className="flex items-center justify-center w-[40px] aspect-square rounded-lg bg-[var(--color-white)] border border-[var(--color-grey)] cursor-pointer" >
            <FaRegHeart size={18} className="text-[var(--color-dark)]" />
          </div>
        </div>
        <div className="w-3/4 mt-10" >
          <div className="border-b-[1px] border-[var(--color-dark)] pb-2" >
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggleExpandStyleDetails} >
              <p className="app__home-tertiary-text text-[0.875rem] font-regular text-[var(--color-grey)]" >Style Details</p>
              <IoIosArrowDown size={18} className="text-[var(--color-grey)]" />
            </div>
            {isStyleDetailsVisible && (
              <p className="app__home-tertiary-text text-[0.8rem] font-regular text-[var(--color-grey)] text-justify mt-2" >
                Introducing the epitome of timeless style and comfort: the white unisex sneakers. Crafted with premium materials and designed for both fashion and function, these sneakers are the perfect addition to any wardrobe.
                The sleek, minimalist design features a crisp white color that adds a touch of elegance to any outfit. The unisex style is versatile, making it suitable for all genders and a variety of occasions, from casual outings to more formal events.
              </p>
            )}
          </div>
          <div className="border-b-[1px] border-[var(--color-dark)] pb-2 my-6" >
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggleSizeAndFitDetails} >
              <p className="app__home-tertiary-text text-[0.875rem] font-regular text-[var(--color-grey)]" >Size & Fit</p>
              <IoIosArrowDown size={18} className="text-[var(--color-grey)]" />
            </div>
            {isSizeAndFitVisible && (
              <p className="app__home-tertiary-text text-[0.8rem] font-regular text-[var(--color-grey)] text-justify mt-2" >
                These white unisex sneakers are available in a range of sizes to ensure a perfect fit for all wearers. They are designed to fit true to size, so we recommend ordering your usual shoe size.
                For those with wider feet, we suggest going up a half size for a more comfortable fit. The lace-up closure allows for a customized fit, so wearers can adjust the laces to achieve the perfect fit for their foot shape.
                The shoes have a standard width, which should accommodate most foot types. However, if you have particularly narrow or wide feet, we suggest trying on a pair in-store or ordering two sizes to find the best fit.
                Overall, these white unisex sneakers offer a comfortable and supportive fit, with a versatile design that is sure to complement any style.
              </p>
            )}
          </div>
          <div className="" >
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggleUserReviewDetails} >
              <p className="app__home-tertiary-text text-[0.875rem] font-regular text-[var(--color-grey)]" >User Review</p>
              <IoIosArrowDown size={18} className="text-[var(--color-grey)]" />
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
};

