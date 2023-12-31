import React from "react";
import styled from "styled-components";
import { Markup } from "react-render-markup";
import {
  SMALL_SCREEN_FONTS,
  LARGE_SCREEN_FONTS,
  MAX_WINDOW_WIDTH,
  TOP_PARAGRAPH_SECTION_PADDING,
  GAP_BETWEEN_UL_ITEMS,
  HEADER_AND_SCROLLBAR_PADDING,
} from "../../../styles/constants";

const GridMap = styled.div`
  grid-column: 1/-1;
  min-height: 20px;
  font-size: 1.3rem;
  padding: ${HEADER_AND_SCROLLBAR_PADDING}px 0;
  line-height: 1.3;
  font-size: 1rem;
  border-bottom: ${(props) => props.borderBottom};
  margin: ${(props) => props.margin};
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    font-size: ${`${LARGE_SCREEN_FONTS}rem`};
    padding: ${(props) =>
      props.bigScreenPadding
        ? props.bigScreenPadding
        : `${HEADER_AND_SCROLLBAR_PADDING}px 0`};
  }
`;

export default function RichTextParagraph({
  markup,
  margin,
  borderBottom,
  bigScreenPadding,
}) {
  return (
    <GridMap
      margin={margin}
      borderBottom={borderBottom}
      bigScreenPadding={bigScreenPadding}
    >
      <Markup markup={markup} />
    </GridMap>
  );
}
