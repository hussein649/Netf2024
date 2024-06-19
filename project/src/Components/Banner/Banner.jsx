import React, { useEffect, useState } from "react";
import axios from "../../Utils/Axios";
import requests from "../../Utils/Request.js";


const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="text-white h-[80vh] t-[10vh] object-contain    "
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative pt-64 h-[80vh] bg-gradient-to-t from-[#111] to-[#252525e8 ">
        <h1 className=" font-extrabold text-4xl ml-10 mb-4">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="ml-10 mb-4 space-x-10">
          <button className=" text-black bg-white cursor-pointer font-bold  text-2xl border-0 border-solid box-border px-8 py-2 bg-origin-border hover:bg-origin-padding transition-all hover:bg-[#c6c6c6] ">
            Play
          </button>
          <button className=" cursor-pointer font-bold text-white bg-[#33333380] text-2xl border-0 border-solid box-border px-10 py-2 hover:text-black hover:bg-[#c6c6c6]  ">
            My List
          </button>
        </div>
        <h1 className="pt-4 ml-10  w-[400px]">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
