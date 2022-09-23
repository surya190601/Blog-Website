import { styled } from "frontity";
import React from "react";
const Footer = () => {
  return (
    <>
      <StyledFooterText>
        2022 © All rights reserved. Incresco Technology Solutions Private
        limited
      </StyledFooterText>
    </>
  );
};

export default Footer;

const StyledFooterText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #6D7886;
`;
