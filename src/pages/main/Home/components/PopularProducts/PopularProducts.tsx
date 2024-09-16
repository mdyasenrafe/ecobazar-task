import React from "react";
import { productsData } from "../../../../../constant";
import { ProductCard } from "../../../../../components/atoms";

export const PopularProducts: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
