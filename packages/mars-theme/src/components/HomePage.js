import React from "react";
import Banner from "./Banner";
import {  connect,styled } from "frontity";
import List from "./list";
import Card from "./Card/Card";

const HomePage = ({ state }) => {
  return (
    <>
      <Banner />
      <MainContainer>
        <List />
        <Card/>
      </MainContainer>
    </>
  );
};

export default connect(HomePage);
const MainContainer = styled.div`
  padding: 35px 120px 120px;
  
`;
