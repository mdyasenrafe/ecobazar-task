import React from "react";
import { Container } from "../../../components/atoms";
import {
  FeaturedProducts,
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
        <FeaturedProducts />
      </div>
    </Container>
  );
};
