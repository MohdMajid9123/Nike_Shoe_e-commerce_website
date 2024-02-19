import React from "react";
import Title from "./utile/Title";
import Item from "./utile/Item";

const Sales = ({ ifExist, endpoint: { title, items } }) => {
  //   console.log(endpoint);
  return (
    <>
      <div className="nike-container">
        <Title title={title} ifExist />
      </div>
      <div
        className={`grid  items-center justify-items-center px-10 sm:px-2  gap-7 lg:gap-5 mt-7 ${
          ifExist
            ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
            : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        } `}
      >
        {items?.map((val, i) => (
          <Item {...val} key={i} ifExist={ifExist} />
        ))}
      </div>
    </>
  );
};

export default Sales;
