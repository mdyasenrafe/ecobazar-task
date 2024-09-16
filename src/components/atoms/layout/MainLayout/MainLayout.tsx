import React from "react";
import { MainLayoutProps } from "./type";
import { Container } from "../../Container";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
