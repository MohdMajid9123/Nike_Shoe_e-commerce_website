import React from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const CartCount = ({ onCartToggle, onClearCartItems, totalQTY }) => {
  return (
    <div className=" bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full  ">
      <div className="flex items-center gap-3">
        <div
          className=" grid items-center cursor-pointer "
          onClick={onCartToggle}
        >
          <FaAnglesLeft className="w-5 h-5 text-slate-900 hover:text-orange-500  stroke-[2] " />
        </div>
        <div className="grid items-center ">
          <h1 className=" text-base  font-normal  text-slate-900 ">
            Your Cart
            <span className="bg-theme-cart rounded text-xs px-1 py-0.5 text-slate-100">
              ( {totalQTY} items)
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={onClearCartItems}
          type="button"
          className=" rounded bg-theme-cart active:scale-90 p-0.5 "
        >
          <RxCross2 className="w-5 h-5 text-white stroke-[2]" />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
