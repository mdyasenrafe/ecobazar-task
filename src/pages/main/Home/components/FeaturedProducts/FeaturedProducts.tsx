import React from "react";
import { ProductCard, SeeAllSection } from "../../../../../components/atoms";
import { productsData } from "../../../../../constant";

export const FeaturedProducts = () => {
  return (
    <section className="my-[60px]">
      <SeeAllSection title="Featured Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {productsData.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
