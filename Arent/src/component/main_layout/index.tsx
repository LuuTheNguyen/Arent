import React from "react";
import { Header } from "./header";

export const MainLayout: React.FC<any> = ({ children }) => {
  return (
    <div style={{ width: "100vw" }}>
      <Header />
      {children}
    </div>
  );
};
