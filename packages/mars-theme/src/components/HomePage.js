import React from "react";
import Banner from "./Banner";
import { connect, styled } from "frontity";
import Card from "./Card/Card";
import Recommendation from "./Recommendation";

const HomePage = ({ state }) => {
  return (
    <>
      <Banner />
      <MainContainer>
        <ContentContainer>
          <Card />
        </ContentContainer>
        <SideBarContainer>
          <Recommendation />
        </SideBarContainer>
      </MainContainer>
    </>
  );
};

export default connect(HomePage);
const MainContainer = styled.div`
  padding: 35px 120px 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  width: 56.1%;
`;
const SideBarContainer = styled.div`
  padding-top: 15px;
  width: 35%;
`;
