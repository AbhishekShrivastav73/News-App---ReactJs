import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Banners from "./partials/Banners";
import Loader from "./partials/Loader";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetNews } from "../Actions/PopularActions";
import { asyncGetHeadlines } from "../Actions/HeadlinesActions";

function Home() {
  const [topNews, settopNews] = useState([]);
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");
  const [popular, setPopular] = useState([]);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.headline.info);
  const popularData = useSelector((state) => state.popular.info);

  const setCategories = (e) => {
    setCategory(e); 
  };

  useEffect(() => {
    dispatch(asyncGetHeadlines(country, category));
    dispatch(asyncGetNews());
  }, [country, category]);

  return data.length > 0 ? (
    <div className="w-full h-screen  overflow-y-auto relative">
      <TopNav
        setCategories={setCategories}
        title={"Select country"}
        options={["us", "in"]}
        func={(e) => {
          return setCountry(e.target.value);
        }}
      />
      <div className="flex items-center justify-between mx-4 py-2">
        <h1 className=" text-5xl font-bold  text-blue-600 tracking-tight">
          Top-Headlines
        </h1>
        <p className="text-lg text-blue-600 flex gap-1  items-center">
          <i class="ri-arrow-left-s-line  md:text-2xl"></i>
          <i class="ri-arrow-right-s-line  md:text-2xl"></i>
        </p>
      </div>
      <Banners data={data} route={'news'} />
      <div className="flex items-center justify-between mx-4 py-2">
        <h1 className=" text-5xl font-bold  text-blue-600 tracking-tight">
          Recommended
        </h1>
        <p className="text-lg text-blue-600 flex gap-1  items-center">
          <i class="ri-arrow-left-s-line  md:text-2xl"></i>
          <i class="ri-arrow-right-s-line  md:text-2xl"></i>
        </p>
      </div>
      <Banners data={popularData} route={'headline'} />

    </div>
  ) : (
    <Loader />
  );
}

export default Home;
