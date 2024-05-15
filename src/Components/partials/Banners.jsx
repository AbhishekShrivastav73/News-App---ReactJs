import React from "react";
import { Link } from "react-router-dom";

function Banners({ data,route }) {
  return (
    <div className="w-full  md:h-[70vh] flex overflow-x-auto items-center gap-3 h-1/3 p-4">
      {data.map((items, idx) => {
        return (
          <Link to={`/${route}/${idx}`}
            key={idx}
            style={{
              background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.6),rgba(0,0,0,.9)) ,url(${items.urlToImage || 'src/assets/noImage.png'})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-[90%] md:w-1/3 shrink-0 h-full rounded-xl text-white p-4 flex flex-col justify-end gap-3"
          >
            <p className="bg-zinc-100 text-blue-600 text-sm w-fit font-semibold px-4 py-1 rounded-full">
              {items.source.name}
            </p>
            <h1 className="text-xl md:text-2xl tracking-tight font-bold">{items.title}</h1>

            <p className="bg-zinc-100 text-black w-fit text-xs font-semibold px-4 py-1 rounded-full">
              {items.publishedAt}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Banners;
