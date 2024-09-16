import React from "react";
import { Container } from "../../../components/atoms";
import {
  FeaturedProducts,
  FeaturesSection,
  HeroSection,
  NewsSection,
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
        <NewsSection />
      </div>
    </Container>
  );
};
