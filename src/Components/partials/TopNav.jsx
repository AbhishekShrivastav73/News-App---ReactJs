import React, { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

function TopNav({ title, options, func,setCategories }) {
  const [filters, setFilters] = useState([
    {
      title: "For You",
      selected: true,
      to: "/",
      logo: <i class="ri-football-fill"></i>,
    },
    {
      title: "Sports",
      selected: false,
      to: "/",
      logo: <i class="ri-football-fill"></i>,
    },
    {
      title: "Business",
      selected: false,
      to: "/",
      logo: <i class="ri-line-chart-line"></i>,
    },
    {
      title: "Entertainment",
      selected: false,
      to: "/",
      logo: <i class="ri-emotion-happy-line"></i>,
    },
    {
      title: "Health",
      selected: false,
      to: "/",
      logo: <i class="ri-health-book-line"></i>,
    },
    {
      title: "Science",
      selected: false,
      to: "/",
      logo: <i class="ri-aliens-fill"></i>,
    },
    {
      title: "Tech",
      selected: false,
      to: "/",
      logo: <i class="ri-macbook-line"></i>,
    },
  ]);

  const handleClick = (idx) => {
    setCategories((filters[idx].title).toLowerCase())
    setFilters(
      filters.map((item, i) => {
        if (i === idx) {
          item.selected = true;
        
        } else {
          item.selected = false;
        }
        return item;
      })
    );
  };

  return (
    <div className="w-full px-4 py-2">
      <div className="topnav w-full h-16 flex items-center  justify-between">
        <img className="w-32" src="/src/assets/logo1.png" alt="" />
        <div className="hidden md:block w-full mt-2 md:w-1/2 h-12 rounded-2xl bg-zinc-200">
          <input
            className="outline-none md:mx-auto text-zinc-700 w-full h-full p-4 bg-transparent"
            type="text"
            placeholder="Find interesting news"
          />
        </div>
        <div className="flex items-center gap-4">
          <Filter title={title} options={options} func={func}/>
          <i className="ri-notification-line text-2xl"></i>
          <i class="ri-menu-3-line text-2xl"></i>
        </div>
      </div>
      <div className="w-full md:hidden mt-2 md:w-1/2 h-12 rounded-2xl bg-zinc-200">
        <input
          className="outline-none md:mx-auto text-zinc-700 w-full h-full p-4 bg-transparent"
          type="text"
          placeholder="Find interesting news"
        />
      </div>
      <div className="filters border-b-2 border-zinc-300 mt-2 w-full flex md:justify-center  items-center overflow-x-auto h-16 gap-3">
        {filters.map((items, idx) => {
          return (
            <Link
              onClick={(e) => handleClick(idx)}
              key={idx}
              className={`flex gap-2 px-4 shrink-0 py-2 rounded-full items-center  ${
                items.selected
                  ? `bg-blue-600  text-white font-semibold`
                  : `bg-zinc-200 `
              } `}
            >
              <span>{items.logo}</span>
              <h2>{items.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TopNav;
