import type { NextPage } from "next";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";

const Home: NextPage = () => {
  return (
    <div className="mx-16 my-9">
      <Header />

      <SearchBar />
      <Category />
    </div>
  );
};

export default Home;
