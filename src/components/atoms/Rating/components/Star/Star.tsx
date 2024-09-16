import React from "react";

interface StarProps {
  Icon: React.ReactNode;
}

export const Star: React.FC<StarProps> = ({ Icon }) => {
  return <span className="inline-block">{Icon}</span>;
};
