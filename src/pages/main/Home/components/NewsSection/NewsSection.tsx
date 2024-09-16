import React from "react";
import { NewsCard, Text } from "../../../../../components/atoms";
import { newsData } from "../../../../../constant";

export const NewsSection = () => {
  return (
    <section className="my-[60px]">
      <div className="flex justify-center items-center mb-8">
        <Text variant="H5" color="black">
          Latest News
        </Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
};
