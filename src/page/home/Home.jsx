import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/herosection/HeroSection";
import ProductCard from "../../components/productCard/Productcard";
import Track from "../../components/track/Track";

function Home() {
  const context = useContext(myContext);
  console.log(context);
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
    </Layout>
  );
}

export default Home;
