import React from "react";
import { productsData } from "../../../../../constant";
import { ProductCard, SeeAllSection } from "../../../../../components/atoms";

export const PopularProducts: React.FC = () => {
  return (
    <section className="py-20">
      <SeeAllSection title="Popular Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
