import { useContext, useState } from "react";
import { SearchContext } from "../../Pages/Home/Home";

const Banner = () => {
//   const [inputData, setInputData] = useState("");
const [inputData, setInputData] =useContext(SearchContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setInputData(e.target.searchField.value);
  };
//   console.log(inputData);

  return (
    <div className="h-[70vh] bg-[url('/banner.jpg')] flex flex-col items-center justify-center bg-cover bg-center bg-slate-200 bg-blend-overlay gap-5">
      <h2 className="text-3xl md:text-5xl font-bold text-[#0B0B0B]">
        I Grow By Helping People In Need
      </h2>
      <form onSubmit={handleSearch} className="join">
        <input
          className="input input-bordered join-item "
          name="searchField"
          placeholder="Search here ..."
        />
        <button className="btn join-item bg-red-500 text-white font-semibold text-xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default Banner;
