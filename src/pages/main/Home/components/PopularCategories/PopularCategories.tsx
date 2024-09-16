import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { categoriesData } from "../../../../../constant";
import { CategoryCard, Text } from "../../../../../components/atoms";
import { ReactComponent as RightArrowIcon } from "../../../../../assets/icons/rightArrowIcon.svg";

export const PopularCategories: React.FC = () => {
  return (
    <section className="popular-categories py-10">
      <div className="flex justify-between items-center mb-8">
        <Text variant="H5" color="black">
          Popular Categories
        </Text>
        <div className="flex items-center cursor-pointer">
          <Text variant="P4" color={"primary"} className="mr-2 ">
            View All
          </Text>
          <RightArrowIcon />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categoriesData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
