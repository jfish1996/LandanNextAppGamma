import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FilterItem from "../../atoms/List-Items/FilterItem";
import {
  MAX_WINDOW_WIDTH,
  TOP_NAV_HEIGHT,
  TRANSITION_TIMES,
  Z_INDEXS,
  TOP_PARAGRAPH_SECTION_PADDING,
  HEADER_AND_SCROLLBAR_PADDING,
} from "../../../styles/constants";
import { motion } from "framer-motion";
import { returnSubSections } from "../../../lib/returnData";
import { useStateContext } from "../../../lib/context";

const StyledUL = styled(motion.ul)`
  z-index: ${Z_INDEXS.scrollBars};
  margin: 0 0 ${HEADER_AND_SCROLLBAR_PADDING}px 0;
  margin-right: 2px;
  display: flex;
  grid-column: 1/-1;
  overflow-x: scroll;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.body : props.theme.light.body};
  /* transition: ease-in 300ms; */
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  position: sticky;
  top: ${TOP_NAV_HEIGHT}px;
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    top: 0;
    margin-right: 0;
  }
`;

export default function Filterbar({
  setCurrentSubSection,
  setFiltering,
  filtering,
  currentSubSection,
}) {
  const { data } = returnSubSections();
  const [currentListItem, setCurrentListItem] = useState(null);
  const { darkMode } = useStateContext();

  const sub_sections = data?.subSections?.data;

  const onClick = (subSectionName, idx) => {
    if (currentSubSection === subSectionName) {
      setFiltering(false);
      setCurrentSubSection("");
      setCurrentListItem(null);
    } else {
      setFiltering(true);
      setCurrentSubSection(subSectionName);
      setCurrentListItem(idx);
    }
  };

  return (
    <StyledUL darkMode={darkMode}>
      <FilterItem
        onClick={() => {
          setFiltering(false), setCurrentListItem(null);
        }}
      >
        X
      </FilterItem>
      {sub_sections?.map((title, idx) => {
        const cleanedTitle = title.attributes.Name.split(".")[0];

        return (
          <FilterItem
            key={idx + title.attributes.Name}
            active={idx === currentListItem ? true : false}
            onClick={() => onClick(title.attributes.Name, idx)}
          >
            {cleanedTitle}
          </FilterItem>
        );
      })}
    </StyledUL>
  );
}
