import { Col, Row } from "antd";
import React from "react";
import { Button, Text } from "../../../../../components/atoms";
import { ReactComponent as ArrowRight } from "../../../../../assets/icons/arrowRight.svg";

export const HeroSection = () => {
  return (
    <section>
      <Row gutter={[24, 16]}>
        <Col xs={24} lg={12}>
          <div className="banner_1">
            <Text className="!text-white mb-7" variant="H2">
              Fresh & Healthy <br /> Organic Food
            </Text>
            <div className="border-l-2 border-l-[#84D187] pl-3">
              <div className="flex items-center">
                <Text variant="P5" className="!text-white">
                  Sale up to
                </Text>
                <div className="bg-warning w-[108px] h-[38px] flex items-center justify-center rounded-[5px] ml-2">
                  <Text variant="P4" color="white" className="!text-white">
                    30% OFF
                  </Text>
                </div>
              </div>
              <Text variant="P5" className="!text-white mt-2">
                Free shipping on all your order.
              </Text>
            </div>
            <Button
              icon={<ArrowRight />}
              iconPosition="end"
              className="w-[191px] h-[52px] rounded-full mt-7"
            >
              <Text>Shop Now</Text>
            </Button>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="banner_2">
            <Text variant="P5">SUMMER SALE</Text>
            <Text variant="H5" className="">
              {" "}
              75% OFF
            </Text>
            <Text className="mt-3 !text-[#666666]">Only Fruit & Vegetable</Text>
            <div className="flex items-center mt-8 cursor-pointer">
              <Text className="!text-[#00B207] mr-3 font-semibold">
                Shop Now
              </Text>
              <ArrowRight />
            </div>
          </div>

          <div className="banner_3">
            <Text className="!text-white text-center mb-3" variant="P5">
              Best Deal
            </Text>
            <Text className="!text-white text-center" variant="H5">
              Special Products <br /> Deal of the Month
            </Text>
            <div className="flex items-center justify-center mt-8 cursor-pointer">
              <Text className="!text-[#00B207] mr-3 font-semibold">
                Shop Now
              </Text>
              <ArrowRight />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
