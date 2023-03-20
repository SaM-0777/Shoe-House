import { useState } from "react";
import { BsZoomIn } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "../../store/slices/cartItemSlice";

import { Sidebar } from "../../containers";

import shoeImg from "../../assets/images/shoe-2.jpg";
import "./home.scss";


export interface IProduct {
  id: string,
  name: string,
  price: number,
  sizes: number[],
  productImageUri: string,
};

export default function Home() {
  const cartItemDispatch = useDispatch()
  const itemsInCart = useSelector(selectCartItems)
  const [product, setProduct] = useState<IProduct>({
    id: '1',
    name: 'UwU Shoes',
    price: 90,
    sizes: [3, 4, 5, 7, 8, 9, 10],
    productImageUri: shoeImg
  })
  const [isStyleDetailsVisible, setIsStyleDetailsVisible] = useState<boolean>(false)
  const [isSizeAndFitVisible, setIsSizeAndFitVisible] = useState<boolean>(false)
  const [isUserReviewVisible, setIsUserReviewVisible] = useState<boolean>(false)
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false)
  const [islike, setLike] = useState<boolean>(false)
  const [isSizeChartVisible, setIsSizeChartVisible] = useState<boolean>(false)
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(-1)

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
  function handleToggleLike() {
    setLike(prevState => !prevState)
  }
  function handleToggleSizeChartView() {
    setIsSizeChartVisible(prevState => !prevState)
  }

  function handleOnClickAddItem() {
    cartItemDispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      productImageUri: product.productImageUri,
      quantity: 1
    }))
    setIsSidebarVisible(true)
  }

  return (
    <div className="w-full h-full md:flex justify-center items-center overflow-x-hidden" >
      <AnimatePresence>
        {isSidebarVisible && (
          <motion.div initial={{ x: "120%", height: "100%" }} animate={{ x: 0, height: "100%" }} exit={{ x: "120%", height: "100%" }} transition={{ duration: 0.25 }} className="fixed w-[35%] sm:w-[30%] md:w-[20%] lg:w-[15%] top-0 right-0 z-40 h-full shadow" >
            <Sidebar setIsSidebarVisible={setIsSidebarVisible} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full md:w-1/2 md:h-full flex items-center justify-center" >
        <div className="relative w-[90%] h-[50%] md:w-[80%] md:h-[80%] border-[1px] flex items-center justify-center" >
          <div className="absolute top-5 right-5 cursor-pointer" >
            <BsZoomIn size={16} className="text-[var(--color-grey)] hover:text-[var(--color-dark)]" />
          </div>
          <img src={product.productImageUri} alt="" className="w-[70%] h-full object-contain" />
        </div>
      </div>
      <div className="w-[90%] md:w-1/2 h-full pt-10 md:pt-14 px-6 xs:px-8 sm:px-10 md:px-0" >
        <div className="" >
          <h1 className="app__home-secondary-text text-[1.5rem] md:text-[1.25rem] font-semibold underline" >{product.name}</h1>
          <p className="app__home-tertiary-text text-[1rem] font-regular text-[var(--color-grey)]" >By Kairen</p>
        </div>
        <p className="app__home-tertiary-text text-[1rem] font-regular text-[var(--color-grey)] mt-4 sm:mt-6 md:mt-10" >Lace Up Low-Top Sneakers</p>
        <h1 className="app__home-secondary-text text-[1.75rem] my-6" >${product.price}</h1>
        <div className="w-3/4 md:w-1/2 border-[1px] rounded-lg border-[var(--color-lighter)] cursor-pointer py-2 px-2 mb-5" >
          <div className="flex items-center gap-2 md:gap-3" onClick={handleToggleSizeChartView} >
            <p className="app__home-tertiary-text text-[0.8rem] xs:text-[0.875rem] md:text-[0.6rem] lg:text-[0.85rem] font-regular text-[var(--color-dark)]" >{product.sizes[selectedSizeIndex] ? product.sizes[selectedSizeIndex].toString() : "Choose your size"}</p>
            {isSizeChartVisible ? <IoIosArrowUp size={18} className="text-[var(--color-dark)]" /> : <IoIosArrowDown size={18} className="text-[var(--color-dark)]" />}
          </div>
          <AnimatePresence>
            {isSizeChartVisible && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="" >
                <div className="flex items-center justify-start gap-2 flex-wrap pt-5" >
                  {product.sizes.map((i, index) => (
                    <div key={index.toString()} className={`${selectedSizeIndex === index ? "bg-[var(--color-dark)]" : "bg-[var(--color-lighter)]"} w-[40px] flex items-center justify-center aspect-square rounded-lg`} onClick={() => setSelectedSizeIndex(index)} >
                      <p className={`app__home-tertiary-text text-[0.8rem] xs:text-[0.875rem] md:text-[0.6rem] lg:text-[0.85rem] font-semibold ${selectedSizeIndex === index ? "text-[var(--color-white)]" : "text-[var(--color-dark)]"}`} >{i.toString()}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-2 md:gap-3" >
          <div className="flex items-center justify-between w-3/4 md:w-1/2 py-2 px-2 rounded-lg bg-[var(--color-dark)] cursor-pointer" onClick={itemsInCart.find(item => item.id === product.id) ? () => setIsSidebarVisible(prevState => !prevState) : handleOnClickAddItem} >
            <p className="app__home-tertiary-text text-[0.8rem] xs:text-[0.875rem] md:text-[0.6rem] lg:text-[0.85rem] font-regular text-[var(--color-white)] uppercase" >{itemsInCart.find(item => item.id === product.id) ? "Added to Cart" : "Add to cart shopping bag"}</p>
            <MdShoppingBag size={18} className="text-[var(--color-white)]" />
          </div>
          <div className="flex items-center justify-center w-[34px] xs:w-[36px] sm:w-[38px] md:w-[40px] aspect-square rounded-lg bg-[var(--color-white)] border border-[var(--color-grey)] cursor-pointer" onClick={handleToggleLike} >
            {islike ? <FaHeart size={18} className="text-[var(--color-pink)]" /> : <FaRegHeart size={18} className="text-[var(--color-dark)]" />}
          </div>
        </div>
        <div className="w-full md:w-3/4 mt-10" >
          <div className="border-b-[1px] border-[var(--color-dark)] pb-2" >
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggleExpandStyleDetails} >
              <p className="app__home-tertiary-text text-[0.875rem] font-regular text-[var(--color-grey)]" >Style Details</p>
              {isStyleDetailsVisible ? <IoIosArrowUp size={18} className="text-[var(--color-grey)]" /> : <IoIosArrowDown size={18} className="text-[var(--color-grey)]" />}
            </div>
            <AnimatePresence>
              {isStyleDetailsVisible && (
                <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="app__home-tertiary-text text-[0.8rem] font-regular text-[var(--color-grey)] text-justify mt-2" >
                  Introducing the epitome of timeless style and comfort: the white unisex sneakers. Crafted with premium materials and designed for both fashion and function, these sneakers are the perfect addition to any wardrobe.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div className="border-b-[1px] border-[var(--color-dark)] pb-2 my-6" >
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggleSizeAndFitDetails} >
              <p className="app__home-tertiary-text text-[0.875rem] font-regular text-[var(--color-grey)]" >Size & Fit</p>
              {isSizeAndFitVisible ? <IoIosArrowUp size={18} className="text-[var(--color-grey)]" /> : <IoIosArrowDown size={18} className="text-[var(--color-grey)]" />}
            </div>
            {isSizeAndFitVisible && (
              <AnimatePresence>
                <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="app__home-tertiary-text text-[0.8rem] font-regular text-[var(--color-grey)] text-justify mt-2" >
                  These white unisex sneakers are available in a range of sizes to ensure a perfect fit for all wearers. They are designed to fit true to size, so we recommend ordering your usual shoe size.
                </motion.p>
              </AnimatePresence>
            )}
          </div>
          <div className="" >
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggleUserReviewDetails} >
              <p className="app__home-tertiary-text text-[0.875rem] font-regular text-[var(--color-grey)]" >User Review</p>
              {isUserReviewVisible ? <IoIosArrowUp size={18} className="text-[var(--color-grey)]" /> : <IoIosArrowDown size={18} className="text-[var(--color-grey)]" />}
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
};

