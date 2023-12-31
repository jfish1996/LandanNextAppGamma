import React, { useEffect, useRef } from "react";
import { TOP_NAV_HEIGHT } from "../../../styles/constants";
import { useRouter } from "next/router";
import styled from "styled-components";
import GridItem from "../../atoms/GridItem/GridItem";
import PostBarItem from "../../atoms/PostBarItem/PostBarItem";
import Flex from "../../atoms/Styled-Containers/Flex/Flex";
import {
  MAX_WINDOW_WIDTH,
  TRANSITION_TIMES,
  Z_INDEXS,
} from "../../../styles/constants";
import { Link } from "react-scroll";
import { useStateContext } from "../../../lib/context";
import GridBox from "../../atoms/SVGs/GridBox";
const StyledPostBar = styled.div`
  z-index: ${Z_INDEXS.scrollBars};
  grid-row: ${(props) => (props.gridRow ? props.gridRow : 5)};
  overflow-y: scroll;
  transition: ease-in-out ${TRANSITION_TIMES.body}ms;
  padding: ${(props) => (props.withFilter ? "10px 0 10px 0" : "10px 0px")};
  border-top: ${(props) => (props.withFilter ? null : "1px solid lightgrey")};
  border-bottom: 1px solid lightgrey;
  position: sticky;
  top: ${(props) => props.topMobile};
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.body : props.theme.light.body};
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    top: ${(props) => props.topDesktop};
    grid-row: ${(props) => props.gridRowDesktop};
  }
`;

const PostBar = ({
  feedView,
  posts,
  currentId,
  filtering,
  topMobile,
  topDesktop,
  gridRow,
  gridRowDesktop,
  withFilter,
  setClickToElement,
  clickToElement,
  elementToShow,
  setElementScrollId,
}) => {
  const { darkMode } = useStateContext();
  const route = useRouter();
  const path = route.pathname;
  const scrolling = feedView?.feedViewProp;
  const setGridOrFeed = feedView?.setFeedViewProp;
  const feedRefs = useRef([]);
  useEffect(() => {
    let feedToScroll = feedRefs.current.filter(
      (value) => value.id === currentId
    );
    feedToScroll[0]?.scrollIntoView({
      block: "nearest",
      inline: "end",
    });
  }, [feedRefs, currentId, path, feedView.feedViewProp, clickToElement]);

  useEffect(() => {
    feedRefs.current = [];
  }, [feedView.feedViewProp]);

  const addToRefs = (el) => {
    if (el && !feedRefs.current.includes(el)) {
      feedRefs.current.push(el);
    }
  };
  return (
    scrolling && (
      <StyledPostBar
        gridRow={gridRow}
        gridRowDesktop={gridRowDesktop}
        withFilter={withFilter}
        topMobile={topMobile}
        topDesktop={topDesktop}
        darkMode={darkMode}
      >
        <Flex width={"100%"} overflow={"scroll"} alignItems={"center"}>
          <Flex alignItems={"center"}>
            <GridBox
              position={"sticky"}
              darkMode={darkMode}
              flexShrink={0}
              left={0}
              height={"inherit"}
              fill={"grey"}
              hover={"yellow"}
              onClick={() => {
                setGridOrFeed(!scrolling), setClickToElement(true);
              }}
            />

            {posts?.map((item, idx) => {
              const defaultURL =
                item?.attributes?.Img?.data[0]?.attributes?.url;
              const smallImgURL =
                item?.attributes?.Img?.data[0]?.attributes?.formats?.small?.url;
              return (
                <Link
                  to={item?.attributes?.Title}
                  // smooth={true}
                  offset={-120}
                  style={{ display: "flex" }}
                >
                  <PostBarItem
                    key={idx + item?.attributes?.Title}
                    width={"50px"}
                    height={"50px"}
                    defaultURL={defaultURL}
                    smallURL={smallImgURL}
                    margin={"0 5px"}
                    id={item.id}
                    ref={addToRefs}
                    active={item.id === currentId}
                  />
                </Link>
              );
            })}
          </Flex>
        </Flex>
      </StyledPostBar>
    )
  );
};

const forwardPostBar = React.forwardRef(PostBar);
export default forwardPostBar;
