import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetNews } from "../Actions/PopularActions";
import { useParams } from "react-router-dom";
import { asyncGetHeadlines } from "../Actions/HeadlinesActions";

function NewsContent() {
  const [topNews, settopNews] = useState([]);
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");
  const [popular, setPopular] = useState([]);
  const dispatch = useDispatch();
  const { id,route} = useParams();
  
  const data = useSelector((state) => state.headline.info);
  const popularData = useSelector((state) => state.popular.info);

  const setCategories = (e) => {
    setCategory(e);
  };
  useEffect(() => {
    dispatch(asyncGetNews());
    dispatch(asyncGetHeadlines(country, category));
  }, [country, category, id,route]);

  return (
    <div className="w-full h-screen overflow-x-none overflow-y-auto">
      <TopNav
        title={"Select country"}
        options={["us", "in"]}
        func={(e) => {
          return setCountry(e.target.value);
        }}
      />

      {route === 'news' ? data.map((i, idx) => {
        if (idx == id) {
          return (
            <div
              key={idx}
              className="w-full h-screen overflow-x-none overflow-y-auto"
            >
              <h1>{i.title}</h1>
              <p>{i.description}</p>
              <p className="text-blue-600">{i.content}</p>
            </div>
          );
        }
      }) : (
        popularData.map((i, idx) => {
          if (idx == id) {
            return (
              <div
                key={idx}
                className="w-full h-screen overflow-x-none overflow-y-auto"
              >
                <h1>{i.title}</h1>
                <p>{i.description}</p>
                <p className="text-blue-600">{i.content}</p>
              </div>
            );
          }
        })
      )}
    </div>
  );
}

export default NewsContent;

