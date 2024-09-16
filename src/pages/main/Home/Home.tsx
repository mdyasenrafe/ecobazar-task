import React from "react";
import { Container } from "../../../components/atoms";
import {
  FeaturesSection,
  HeroSection,
  PopularCategories,
  PopularProducts,
} from "./components";

export const Home = () => {
  return (
    <Container>
      <div>
        <HeroSection />
        <FeaturesSection />
        <PopularCategories />
        <PopularProducts />
      </div>
    </Container>
  );
};
