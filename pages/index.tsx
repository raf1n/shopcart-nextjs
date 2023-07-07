import type { NextPage } from "next";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import Banner from "../components/Banner";
import HotDeals from "../components/HotDeals";

const Home: NextPage = () => {
  return (
    <div className="mx-16 my-9  font-poppins">
      <Header />
      <SearchBar />
      <Category />
      <div className="flex justify-between mt-6 items-center">
        <Banner />
        <HotDeals />
      </div>
    </div>
  );
};

export default Home;
