import React from "react";
import { Text } from "../Text";
import { ReactComponent as RightArrowIcon } from "../../../assets/icons/rightArrowIcon.svg";

type SeeAllSectionProps = {
  title: string;
};

export const SeeAllSection: React.FC<SeeAllSectionProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <Text variant="H5" color="black">
        {title}
      </Text>
      <div className="flex items-center cursor-pointer">
        <Text variant="P4" color={"primary"} className="mr-2 ">
          View All
        </Text>
        <RightArrowIcon />
      </div>
    </div>
  );
};
