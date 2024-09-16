import React from "react";
import { categoriesData } from "../../../../../constant";
import {
  CategoryCard,
  SeeAllSection,
  Text,
} from "../../../../../components/atoms";
import { Col, Row } from "antd";

export const PopularCategories: React.FC = () => {
  return (
    <section className="popular-categories py-10">
      <SeeAllSection title="Popular Categories" />
      <Row gutter={[16, 16]}>
        {categoriesData.map((category) => (
          <Col key={category.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <CategoryCard category={category} />
          </Col>
        ))}
      </Row>
    </section>
  );
};
