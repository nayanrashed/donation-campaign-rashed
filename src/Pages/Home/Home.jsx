import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Donations from "../../components/Donations/Donations";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();
const Home = () => {
  const allDonations = useLoaderData();
  const [donations, setDonations] = useState([]);

  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const search = allDonations.filter(item=>item.category==inputData)
    // console.log(search);
    if(search.length===0){
      setDonations(allDonations)      
    }else{setDonations(search)}
    
          
  }, [allDonations,inputData]);

  

  return (
    <div>
      <SearchContext.Provider value={[inputData, setInputData]}>
        <Banner></Banner>
        <div className="">
          <Donations donations={donations}></Donations>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default Home;
