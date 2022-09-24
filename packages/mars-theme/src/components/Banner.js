import React from "react";
import Image from "@frontity/components/image";
import { styled } from "frontity";
import Link from "./link";
const Banner = () => {
  return (
    <>
      <BannerContainer>
        <StyledBannerImage
          src="https://i.ibb.co/BPX85tD/fabio-oy-Xis2k-ALVg-unsplash-1-1.png"
          alt="Banner Image"
        />
        <BannerHeading>Dream to Digital</BannerHeading>
        <BannerText>
          We collaborate with brands to empower their ideas into reality <br />
          by design and build softwares in emerging platform
        </BannerText>
        <StyledLink link="/">
          <BannerReadMore>Read more</BannerReadMore>
          <VectorArrowImage
            src="https://i.ibb.co/N2Dpv9h/Vector.png"
            alt="Vector Arrow"
          />
        </StyledLink>
      </BannerContainer>
    </>
  );
};

export default Banner;
const StyledBannerImage = styled(Image)`
  width: 100%;
`;
const VectorArrowImage = styled(Image)`
  width: 14px;
  height: 9px;
  position: absolute;
  top: 230px;
  left: 235px;
`;
const BannerContainer = styled.div`
  position: relative;
  color: white;
`;
const BannerHeading = styled.h1`
  font-weight: 700;
  font-size: 42px;
  line-height: 63px;
  letter-spacing: 0.006em;
  color: #ffffff;
  position: absolute;
  top: 65px;
  left: 145px;
`;
const BannerText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.006em;
  color: #ffffff;
  position: absolute;
  top: 142px;
  left: 145px;
`;
const BannerReadMore = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.006em;
  color: #ffffff;
  position: absolute;
  top: 205px;
  left: 145px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
