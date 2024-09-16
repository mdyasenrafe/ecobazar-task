import React from "react";
import { TCategory } from "../../../constant";
import { Text } from "../Text";

type CategoryCardProps = {
  category: TCategory;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="category-card py-6 rounded-lg border hover:shadow-lg cursor-pointer">
      <img
        src={category.imageUrl}
        alt={category.name}
        className="w-full h-32 object-contain"
      />
      <Text variant="P3" className="text-center pt-4 category-card-text">
        {category.name}
      </Text>
    </div>
  );
};
