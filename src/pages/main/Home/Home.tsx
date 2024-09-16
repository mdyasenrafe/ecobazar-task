import React from "react";
import { Container } from "../../../components/atoms";
import { PopularCategories, PopularProducts } from "./components";

export const Home = () => {
  return (
    <Container>
      <PopularCategories />
      <PopularProducts />
    </Container>
  );
};
