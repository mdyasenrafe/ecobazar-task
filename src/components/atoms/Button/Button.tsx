import React from "react";
import { Button as AButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import { ReactNode } from "react";
import { ColorKey, colors } from "../../../theme/theme";

interface ButtonProp extends ButtonProps {
  color?: ColorKey;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProp> = ({
  children,
  color,
  icon,
  ...props
}) => {
  const style = color
    ? {
        backgroundColor: colors[color],
        borderColor: colors[color],
        fontSize: 16,
      }
    : { fontSize: 16 };

  return (
    <AButton {...props} icon={icon} style={style}>
      {children}
    </AButton>
  );
};
