import React from "react";
import { Container } from "../../../components/atoms";
import { PopularCategories, PopularProducts } from "./components";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";

export const Home = () => {
  return (
    <Container>
      <div>
        <FeaturesSection />
        <PopularCategories />
        <PopularProducts />
      </div>
    </Container>
  );
};
