import React from "react";
import { ReactComponent as EmptyStarIcon } from "../../../assets/icons/home/products/emptyStarIcon.svg";
import { ReactComponent as FilledStarIcon } from "../../../assets/icons/home/products/FilledStarIcon.svg";
import { Star } from "./components";

interface RatingProps {
  rating: number;
  maxRating?: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          Icon={
            index < fullStars || (index === fullStars && hasHalfStar) ? (
              <FilledStarIcon width={12} height={12} />
            ) : (
              <EmptyStarIcon width={12} height={12} />
            )
          }
        />
      ))}
    </div>
  );
};
