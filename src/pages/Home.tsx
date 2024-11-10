import React, { FC } from "react";
import Products from "../components/home/Products";
import FAQ from "../components/home/FAQ";
import Reviews from "../components/home/Reviews";

const Home: FC = () => {
  return (
    <div className="flex flex-col px-[10%] w-full self-stretch items-start">
      <Products />
      <Reviews />
      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
