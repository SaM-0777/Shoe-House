import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingBag } from "react-icons/md";
import { IoMdClose, IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems, incrementQuantity, decrementQuantity, ICartItem } from "../../store/slices/cartItemSlice";

import "./sidebar.scss";


interface ISidebarProps {
  setIsSidebarVisible: (o: boolean) => void;
}

export default function Sidebar({ setIsSidebarVisible }: ISidebarProps) {
  const cartItemDispatch = useDispatch()
  const itemsInCart = useSelector(selectCartItems)
  const [subTotal, setSubTotal] = useState<number>(() => {
    let total: number = 0
    if (itemsInCart) {
      itemsInCart.map(item => {
        total += (item.price * item.quantity)
      })
    }
    return total
  })

  return (
    <aside className="shadow w-full h-full flex flex-col justify-start items-center bg-[var(--color-white)] border-l-[1px] border-[var(--color-dark)] " >
      <div className="w-[90%] flex justify-end mt-2" >
        <IoMdClose className="text-[1rem] text-[var(--color-dark)] cursor-pointer" onClick={() => setIsSidebarVisible(false)} />
      </div>
      {itemsInCart.length > 0 ? 
        <>
          <h3 className="app__tertiary-text text-[var(--color-dark)] font-semibold mt-10" >Subtotal</h3>
          <h1 className="app__secondary-text text-[1.75rem] my-6" >${subTotal}</h1>
          <p className="app__tertiary-text text-[0.8rem] font-regular text-[var(--color-grey)] text-center" >Your order is eligible for free Delivery. Select this option at checkout.</p>
          <Link to="soon" >
            <p className="app__tertiary-text text-[0.85rem] font-semibold text-[var(--color-dark)] text-center underline" >Details</p>
          </Link>
          <Link to="soon" className="w-[90%] flex items-center justify-center gap-2 py-3 px-1 my-6 rounded-lg bg-[var(--color-dark)] cursor-pointer" >
            <p className="app__home-tertiary-text text-[0.75rem] font-regular text-[var(--color-white)] uppercase" >Go to cart</p>
            <MdShoppingBag className="text-[1rem] text-[var(--color-white)]" />
          </Link>
          {itemsInCart.map((item, index) => (
            <div key={index.toString()} className="flex flex-col items-center justify-center" >
              <div className="w-[90%] border-2 rounded-lg mt-8" >
                <img src={item.productImageUri} alt="shoe" className="w-full object-contain" />
              </div>
              <h2 className="app__secondary-text text-[1.15rem] sm:text-[1.25rem] md:text-[1.5rem]" >${item.price}</h2>
            </div>
          ))}
        </>
        :
        <h1 className="app__secondary-text text-[1.75rem] mt-10" >Cart is empty</h1>
      }
    </aside>
  )
};

