import React from "react";
import styled from "styled-components";
import StyledSvgContainer from "./StyledSvgContainer";

export default function Checkout({
  width,
  height,
  stroke,
  hover,
  fill,
  active,
}) {
  return (
    <StyledSvgContainer
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      fill={fill}
      height={height}
      width={width}
      stroke={stroke}
      hover={hover}
      active={active}
    >
      <g id="words">
        <path d="M277.58 138.26H22.42c-6.86 0-12.43-5.56-12.43-12.43V24.16c0-6.86 5.56-12.43 12.43-12.43h255.16c6.86 0 12.43 5.56 12.43 12.43v101.67c0 6.87-5.57 12.43-12.43 12.43z" />
        <g fill="#231f20">
          <path
            class="cls-2"
            d="M130.42 109.56H98.91a5.38 5.38 0 0 1-5.23-4.21l-7-32.17a1.9 1.9 0 0 0-1.85-1.49h-7.1a1.63 1.63 0 1 1 0-3.25h7.12a5.17 5.17 0 0 1 5 4l7 32.17a2.12 2.12 0 0 0 2 1.65h31.51a1.63 1.63 0 1 1 0 3.25Z"
          />
          <path
            class="cls-2"
            d="M128.62 99.26H93.79a1.63 1.63 0 1 1 0-3.26h34.83a2.05 2.05 0 0 0 2-1.61l3.08-14.12a1 1 0 0 0-.95-1.19H89.29a1.63 1.63 0 1 1 0-3.25h43.46a4.24 4.24 0 0 1 4.13 5.17l-3.08 14.08a5.34 5.34 0 0 1-5.18 4.18Z"
          />
          <circle class="cls-2" cx="99.7" cy="116.97" r="4.38" />
          <circle class="cls-2" cx="126.05" cy="116.97" r="4.38" />
          <path
            class="cls-2"
            d="m117.34 54.08 4.18.54a10.86 10.86 0 0 1-3.52 6.76 10.21 10.21 0 0 1-6.93 2.45 10.73 10.73 0 0 1-8.27-3.37q-3.14-3.36-3.13-9.64a17.41 17.41 0 0 1 1.33-7.11 9.31 9.31 0 0 1 4.09-4.56 12.11 12.11 0 0 1 6-1.53 10.39 10.39 0 0 1 6.68 2.07 9.49 9.49 0 0 1 3.33 5.87l-4.14.63a6.9 6.9 0 0 0-2.08-3.8 5.43 5.43 0 0 0-3.63-1.27 6.59 6.59 0 0 0-5.22 2.3q-2 2.3-2 7.28T106 58a6.3 6.3 0 0 0 5 2.33 5.94 5.94 0 0 0 4.17-1.53 7.61 7.61 0 0 0 2.17-4.72ZM125.15 63.26V28.65h4.25v12.42a9.49 9.49 0 0 1 7.51-3.45 10.14 10.14 0 0 1 4.84 1.1 6.43 6.43 0 0 1 2.94 3 14 14 0 0 1 .88 5.62v15.92h-4.25V47.37q0-3.18-1.38-4.64a5.15 5.15 0 0 0-3.9-1.45 6.94 6.94 0 0 0-3.56 1 5.54 5.54 0 0 0-2.37 2.66 12.23 12.23 0 0 0-.71 4.62v13.7ZM169.2 55.19l4.39.54a10.66 10.66 0 0 1-3.84 6 11.58 11.58 0 0 1-7.18 2.13 11.44 11.44 0 0 1-8.72-3.39q-3.22-3.39-3.23-9.5 0-6.33 3.26-9.82a11 11 0 0 1 8.45-3.5 10.7 10.7 0 0 1 8.22 3.43q3.18 3.42 3.19 9.63v1.13H155a9.61 9.61 0 0 0 2.33 6.33 7 7 0 0 0 5.24 2.19 6.55 6.55 0 0 0 4-1.22 8.16 8.16 0 0 0 2.63-3.95Zm-13.95-6.87h14a8.54 8.54 0 0 0-1.6-4.75 6.54 6.54 0 0 0-5.27-2.45 6.73 6.73 0 0 0-4.92 2 7.73 7.73 0 0 0-2.21 5.2ZM195.29 54.08l4.18.54a10.86 10.86 0 0 1-3.47 6.76 10.21 10.21 0 0 1-7 2.45 10.73 10.73 0 0 1-8.27-3.37q-3.13-3.36-3.13-9.64a17.41 17.41 0 0 1 1.4-7.11 9.31 9.31 0 0 1 4.09-4.56 12.11 12.11 0 0 1 6-1.53 10.39 10.39 0 0 1 6.68 2.07 9.49 9.49 0 0 1 3.33 5.87l-4.14.63a6.9 6.9 0 0 0-2.08-3.8 5.41 5.41 0 0 0-3.63-1.27 6.59 6.59 0 0 0-5.22 2.3q-2 2.3-2 7.28t1.9 7.3a6.3 6.3 0 0 0 5.07 2.33 5.94 5.94 0 0 0 4.17-1.53 7.61 7.61 0 0 0 2.12-4.72ZM203.13 63.26V28.65h4.25v19.74l10.05-10.2h5.5l-9.58 9.3 10.55 15.77h-5.24l-8.29-12.82-3 2.88v9.94ZM147.67 96.42q0-7 3.87-10.31a11.65 11.65 0 0 1 7.88-2.79 11.26 11.26 0 0 1 8.46 3.39q3.27 3.39 3.28 9.36a16.67 16.67 0 0 1-1.45 7.61 10.28 10.28 0 0 1-4.23 4.31 12.35 12.35 0 0 1-6.06 1.54 11.28 11.28 0 0 1-8.51-3.38q-3.24-3.37-3.24-9.73Zm4.36 0c0 3.21.71 5.62 2.11 7.22a7 7 0 0 0 10.55 0q2.1-2.4 2.1-7.34 0-4.65-2.11-7a7 7 0 0 0-10.54 0c-1.4 1.51-2.14 3.91-2.14 7.12ZM192.57 109v-3.68a9.19 9.19 0 0 1-8 4.25 10.22 10.22 0 0 1-4.14-.85 6.92 6.92 0 0 1-2.86-2.14 8 8 0 0 1-1.31-3.15 22 22 0 0 1-.26-4V83.89h4.25v13.9a25.12 25.12 0 0 0 .26 4.49 4.46 4.46 0 0 0 1.7 2.63 5.27 5.27 0 0 0 3.21 1 7 7 0 0 0 3.59-1 5.47 5.47 0 0 0 2.37-2.67 13.28 13.28 0 0 0 .7-4.9V83.89h4.25V109ZM212.3 105.16l.62 3.75a16 16 0 0 1-3.21.38 7.35 7.35 0 0 1-3.59-.73 4.13 4.13 0 0 1-1.8-1.93 15.41 15.41 0 0 1-.51-5V87.19h-3.12v-3.3h3.12v-6.21l4.19-2.55v8.76h4.27v3.3H208v14.66a7.82 7.82 0 0 0 .22 2.34 1.85 1.85 0 0 0 .74.83 2.85 2.85 0 0 0 1.45.3 13.65 13.65 0 0 0 1.89-.16Z"
          />
        </g>
      </g>
    </StyledSvgContainer>
  );
}
