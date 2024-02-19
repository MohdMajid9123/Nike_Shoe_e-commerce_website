import React from "react";
import { FaPlus, FaMinusCircle, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setremoveItemFromCart,
} from "../../slice/counterSlicer";
const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setremoveItemFromCart({
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
        id,
      })
    );
  };

  //  onIncreaeItemQTY

  const onIncreaeItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
        id,
      })
    );
  };

  //  onDecreaeItemQTY

  const onDecreaeItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
        id,
      })
    );
  };

  return (
    <div className=" flex items-center justify-between w-full px-5 ">
      <div className=" flex items-center gap-5 ">
        <div
          className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 grid items-center`}
        >
          <img
            src={img}
            alt="cartimg"
            className="w-36 h-auto object-fill lg:w-28"
          />
          <div className=" absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded  ">
            ${price}
          </div>
        </div>

        <div className=" grid items-center gap-4">
          <div className=" grid items-center gap-4 leading-none">
            <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
              {title}
            </h1>
            <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
          </div>

          <div className="flex justify-around items-center w-full">
            <button
              className=" bg-theme-cart rounded w-6 h-6 lg:w-5 flex items-center justify-center active:scale-90 "
              type="button"
              onClick={onIncreaeItemQTY}
            >
              <FaPlus className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
            </button>
            <div className=" bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
              {cartQuantity}
            </div>
            <button
              className="bg-theme-cart rounded w-6 h-6 lg:w-5 flex items-center justify-center active:scale-90"
              type="button"
            >
              <FaMinusCircle
                onClick={onDecreaeItemQTY}
                className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="grid items-center gap-5">
        <div className="grid items-center justify-center">
          <h1 className="text-lg lg:text-base text-slate-900 font-medium">
            {price * cartQuantity}
          </h1>
        </div>
        <div className="grid items-center justify-center">
          <button
            type="button"
            className="bg-theme-cart rounded cursor-pointer p-1 lg:p-0.5 grid items-center justify-items-center"
            onClick={() => onRemoveItem()}
          >
            <FaRegTrashAlt className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
