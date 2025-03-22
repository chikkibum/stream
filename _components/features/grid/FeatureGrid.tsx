import React from "react";
import { Content } from "./Content";
import { CornerBlur } from "@/_components/utils/CornerBlur";
import { CornerGrid } from "@/_components/utils/CornerGrid";

export const FeatureGrid = () => {
  return (
    <div id="features" className="relative overflow-hidden">
      <Content />
      <CornerBlur />
      <CornerGrid />
    </div>
  );
};
