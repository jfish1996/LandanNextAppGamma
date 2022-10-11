import React from "react";
import SkeletonText from "../../atoms/SkeletonParts/SkeletonText";
import Flex from "../../atoms/Styled-Containers/Flex/Flex";

export default function SkeletonSideBar() {
  return (
    <Flex flexDirection={"column"}>
      {new Array(10).fill(1).map((item) => {
        return <SkeletonText isForSideBar={true} />;
      })}
    </Flex>
  );
}
