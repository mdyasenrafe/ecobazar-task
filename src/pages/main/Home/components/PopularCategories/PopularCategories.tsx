import React from "react";
import { categoriesData } from "../../../../../constant";
import {
  CategoryCard,
  SeeAllSection,
  Text,
} from "../../../../../components/atoms";

export const PopularCategories: React.FC = () => {
  return (
    <section className="popular-categories py-10">
      <SeeAllSection title="Popular Categories" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categoriesData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
