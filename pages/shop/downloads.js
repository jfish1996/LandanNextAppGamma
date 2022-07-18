import React, { useRef, useEffect, useState } from "react";
import { returnPosts } from "../../lib/returnposts";
import { returnShopSectionData } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Header from "../../components/atoms/List-Items/Header";
import PostBar from "../../components/molecules/PostBar/PostBar";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";
import { TOP_NAV_HEIGHT } from "../../styles/constants";
export default function Stickers({ feedView, currentId }) {
  const SECTION_NAME = "Downloads.shop";
  const SECTION = "downloads";
  const { products, markup } = returnShopSectionData(SECTION_NAME);
  const ref = useRef([]);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  //
  const [elementToShow, setElementToShow] = useState();
  const [clickToElement, setClickToElement] = useState(true);
  useEffect(() => {
    if (
      feedView.feedViewProp &&
      ref.current &&
      clickToElement &&
      elementToShow
    ) {
      const scrollElement = ref.current.findIndex(
        (el) => el.id === elementToShow
      );
      ref.current[scrollElement].scrollIntoView({ block: "center" });
      setClickToElement(false);
    }
  }, [feedView, clickToElement]);
  //
  useIntersectionArray(ref, feedView, currentId.setCurrentIdInView);
  return (
    <>
      <Header
        textAlign={"left"}
        padding={"16px 0 0 0"}
        fontWeight={"700"}
        color={"black"}
      >
        {SECTION.toUpperCase()}
      </Header>
      <PostBar
        gridRow={3}
        feedView={feedView}
        posts={products}
        currentId={currentId.currentIdInView}
        topMobile={`${TOP_NAV_HEIGHT}px`}
        topDesktop={0}
        clickToElement={clickToElement}
        setClickToElement={setClickToElement}
        elementToShow={elementToShow}
      />
      <RichTextParagraph markup={markup} />
      {returnPosts(products, feedView, addToRefs, setElementToShow)}
    </>
  );
}
