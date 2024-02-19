import React from "react";
import Hero from "./component/Hero";
import { heroapi } from "./data/data";
import Sales from "./component/Sales";
import Footer from "./component/Footer";
import {
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";
import FlexComponent from "./component/FlexComponent";
import Stories from "./component/Stories";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";

const App = () => {
  return (
    <>
      <Cart />
      <Navbar />
      <main className="flex flex-col gap-16 relative ">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExist />
        <FlexComponent endpoint={highlight} ifExist />
        <Sales endpoint={toprateslaes} />
        <FlexComponent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  );
};

export default App;
