import React from "react";
import Header from "../../atoms/List-Items/Header";
import SkeletonGrid from "../../atoms/SkeletonParts/SkeletonGrid";
import SkeletonHeader from "../../atoms/SkeletonParts/SkeletonHeader";
import SkeletonImage from "../../atoms/SkeletonParts/SkeletonImage";
import SkeletonText from "../../atoms/SkeletonParts/SkeletonText";
export default function SkeletonTemplate({ pageTitle, height }) {
  const array = new Array(12).fill(1);
  return (
    <>
      <SkeletonText />

      <SkeletonHeader />
      <SkeletonGrid />
    </>
  );
}
