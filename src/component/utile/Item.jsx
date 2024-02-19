import React from "react";
import { FaStar } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../slice/counterSlicer";
const Item = ({
  isExast,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  //   console.log(id);

  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, color, shadow, title, text, img, price };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  return (
    <>
      <div
        className={` relative bg-gradient-to-b gap-6 ${color} ${shadow} grid items-center ${
          isExast ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-y-105 `}
      >
        <div
          className={` grid items-center ${
            isExast ? "justify-items-start" : "justify-items-center"
          } `}
        >
          <h1 className=" text-slate-200  text-xl lg:text-lg md:text-base font-medium ">
            {title}
          </h1>
          <p className="text-sky-200 filter drop-shadow text-base md:text-sm font-normal ">
            {text}
          </p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded">
              <h1 className=" text-black text-sm font-medium ">{price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="icon-style text-slate-100 w-5 h-5 md:w-4 md:h-4 " />
              <h1 className=" md:text-sm font-normal text-slate-200 ">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3  ">
            <button
              type="button"
              className=" bg-white/90 w-8 h-7 blur-effect-theme buttom-theme "
              onClick={() => onAddToCart()}
            >
              <IoBagAdd className="icon-style m-auto text-slate-900" />
            </button>

            <button
              onClick={() => {
                onAddToCart();
                onCartToggle();
              }}
              type="button"
              className=" bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black "
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            isExast ? "absolute top-5 right-1" : "justify-center"
          } `}
        >
          <img
            src={img}
            alt="shoe/img"
            className={`transitions-theme hover:-rotate-12 ${
              isExast
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64"
            }  `}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
