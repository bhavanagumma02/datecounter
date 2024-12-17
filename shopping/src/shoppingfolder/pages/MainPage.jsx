import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import { Gents } from "../data";
import { Ladies } from "../data";
import { useState } from "react";
import WomenCollection from "../components/WomenCollection";

const MainPage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [ladiesFashion, setLadiesFashion] = useState(Ladies);
  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFasion={gentsFashion} />
      <WomenCollection ladiesFashion={ladiesFashion} />
      <Footer />
    </div>
  );
};
export default MainPage;
