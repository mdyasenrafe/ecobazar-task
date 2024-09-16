import React from "react";
import { Card, Tag } from "antd";
import { TNews } from "../../../constant";
import { Text } from "../Text";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrowRight.svg";
import { ReactComponent as TagIcon } from "../../../assets/icons/home/news/tagIcon.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/home/news/userIcon.svg";
import { ReactComponent as CommentsIcon } from "../../../assets/icons/home/news/chatIcon.svg";

interface NewsCardProps {
  news: TNews;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const { image, day, title, month, category, comments } = news;

  const items = [
    {
      id: 1,
      key: "food",
      icon: <TagIcon />,
      label: (
        <Text variant="P5" className="!text-[#4d4d4d] ml-2">
          {category}
        </Text>
      ),
    },
    {
      id: 2,
      key: "by",
      icon: <UserIcon />,
      label: (
        <Text variant="P5" className=" ml-2">
          <span className="!text-[#808080]">By </span>
          <span className="!text-[#4d4d4d] ">Admin</span>
        </Text>
      ),
    },
    {
      id: 3,
      key: "comments",
      icon: <CommentsIcon />,
      label: (
        <Text variant="P5" className="!text-[#4d4d4d] ml-2">
          {comments} Comments
        </Text>
      ),
    },
  ];

  return (
    <Card
      hoverable
      cover={
        <div className="relative">
          <img alt={title} src={image} className="w-full object-contain" />{" "}
          <div className="flex justify-center items-center w-14 h-14 bg-white absolute bottom-6 left-6 rounded flex-col">
            <Text variant="P2" className="!font-medium">
              {day}
            </Text>
            <Text variant="P5" className="text-[#808080]">
              {month}
            </Text>
          </div>
        </div>
      }
      className="rounded-lg shadow "
    >
      <div className="p-6">
        <div className="flex mb-2 flex-wrap">
          {items.map((item) => (
            <div className="flex mr-4 pb-2">
              {item.icon} {item.label}
            </div>
          ))}
        </div>
        <Text variant="P3" color="primary" className="!font-medium">
          {title}
        </Text>
        <div className="flex items-center mt-6 cursor-pointer">
          <Text className="!text-[#00B207] mr-3 font-semibold">Read More</Text>
          <ArrowRight />
        </div>
      </div>
    </Card>
  );
};
