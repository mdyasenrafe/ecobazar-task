import React from "react";
import { Row, Col } from "antd";
import { Text } from "../../../../../components/atoms";
import { ReactComponent as DeliveryIcon } from "../../../../../assets/icons/home/features/deliveryIcon.svg";
import { ReactComponent as CustomerSupport } from "../../../../../assets/icons/home/features/headphoneIcon.svg";
import { ReactComponent as SecurePayment } from "../../../../../assets/icons/home/features/bagIcon.svg";
import { ReactComponent as MoneyBack } from "../../../../../assets/icons/home/features/moneyBackIcon.svg";

const featuresArray = [
  {
    icon: <DeliveryIcon />,
    title: "Free Shipping",
    description: "Free shipping on all your orders",
  },
  {
    icon: <CustomerSupport />,
    title: "Customer Support 24/7",
    description: "Instant access to Support",
  },
  {
    icon: <SecurePayment />,
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
  },
  {
    icon: <MoneyBack />,
    title: "Money-Back Guarantee",
    description: "30 Days Money-Back Guarantee",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow mt-6">
      <Row gutter={[16, 16]} justify="space-between" align="middle">
        {featuresArray.map((feature, index) => (
          <Col xs={24} sm={12} md={12} xl={6} key={index}>
            <div className="flex items-center space-x-4 mb-3 xl:mb-0">
              <div>{feature.icon}</div>
              <div>
                <Text variant="P4" className="font-semibold">
                  {feature.title}
                </Text>
                <Text variant="P5" className="text-[#999999]">
                  {feature.description}
                </Text>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
