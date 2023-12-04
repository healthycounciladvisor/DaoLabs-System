import React from "react";
import styled from "styled-components";

const PrimaryPtag = ({ children, className }) => {
  return <PrimaryPtagStyle className={className}>{children}</PrimaryPtagStyle>;
};

const PrimaryPtagStyle = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  line-height: 150%;
  white-space: pre-line;
  background: var(
    --Gradient-1,
    linear-gradient(228deg, #a2e6fb -6.9%, #f1c9de 98.89%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default PrimaryPtag;
