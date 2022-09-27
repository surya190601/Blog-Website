import React from "react";
import Banner from "./Banner";
import { connect, styled } from "frontity";
import Card from "./Card/Card";
import Recommendation from "./Recommendation/Recommendation";

const HomePage = ({ state }) => {
    
  return (
    <>
      <Banner />
      <MainContainer>
        <ContentContainer>
          <Card />
        </ContentContainer>
        <SideBarContainer>
          <div>
            <Recommendation/>
          </div>
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
`;
const ContentContainer = styled.div`
  width: 72%;
`;
const SideBarContainer = styled.div`
  width: 28%;
`;
