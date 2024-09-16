import React, { useState } from "react";
import { TProduct } from "../../../types";
import { Card } from "antd";
import { ReactComponent as BagIcon } from "../../../assets/icons/home/products/bagIcon.svg";
import { ReactComponent as HoverBagIcon } from "../../../assets/icons/home/products/hoverBagIcon.svg";
import { ReactComponent as HeartIcon } from "../../../assets/icons/home/heartIcon.svg";
import { ReactComponent as ViewIcon } from "../../../assets/icons/home/eyeIcon.svg";
import { Text } from "../Text";
import { Rating } from "../Rating";

interface ProductCardProps {
  product: TProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative rounded-none border border-[#E6E6E6] cursor-pointer"
      cover={
        <img
          alt={product.name}
          src={product.image}
          className="object-contain h-64 w-full"
        />
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-3 flex justify-between items-center">
        <div>
          <Text variant="P5" className="text-[#4D4D4D]">
            {product.name}
          </Text>
          <div className="flex items-center">
            <Text variant="P4" className="font-medium mr-2" color="black">
              {product.price}
            </Text>
            {product.originalPrice && (
              <Text
                variant="P4"
                className="font-medium text-[#999999] line-through"
              >
                {product.originalPrice}
              </Text>
            )}
          </div>
          <div className="pt-1.5">
            <Rating rating={product.rating} />
          </div>
        </div>
        <div
          className={`w-[40px] h-[40px] rounded-full justify-center flex items-center ${
            isHovered ? "bg-[#00b207]" : "bg-[#F2F2F2]"
          }`}
        >
          {isHovered ? <HoverBagIcon /> : <BagIcon />}
        </div>
        {product?.discount && (
          <div className="bg-danger w-[80px] h-[27px] flex items-center justify-center rounded absolute top-4">
            <Text variant="P4" color="white" className="!text-white">
              Sale {product.discount}
            </Text>
          </div>
        )}

        {isHovered && (
          <div className="absolute top-4 right-4  transition-opacity duration-300">
            <div className="w-[40px] h-[40px] bg-white rounded-full justify-center flex items-center border border-[#F2F2F2]">
              <HeartIcon />
            </div>
            <div className="w-[40px] h-[40px] bg-white rounded-full justify-center flex items-center border border-[#F2F2F2] mt-1.5">
              <ViewIcon />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
