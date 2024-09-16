import React, { CSSProperties, HTMLAttributes } from "react";
import { Typography } from "antd";
import { ColorKey, TextStyles, TextVariant } from "../../../theme/theme";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TextVariant;
  className?: string;
  color?: ColorKey;
  style?: CSSProperties;
}

export const Text: React.FC<TextProps> = ({
  variant = "P4",
  children,
  className = "",
  color,
  ...props
}) => {
  const textStyle = `${TextStyles[variant]} ${className} block text-${color}`;
  return (
    <Typography.Text className={textStyle} {...props}>
      {children}
    </Typography.Text>
  );
};
