import React from "react";
import styled from "styled-components";

const PrimaryText = ({ children, className }) => {
  return <PrimaryTextStyle className={className}>{children}</PrimaryTextStyle>;
};

const PrimaryTextStyle = styled.span`
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  background: var(
    --Gradient-2,
    linear-gradient(228deg, #e4fd84 -6.9%, #ebae79 98.89%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default PrimaryText;
