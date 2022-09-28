import React from "react";
import { connect, styled } from "frontity";
import RecommendationItems from "./RecommendationItems";
const Recommendation = ({ state }) => {
  console.log(state.router.link);
  const item = state.source.get("/").items;
  console.log(item);
  return (
    <>
      <StyledTitle>Recommendation</StyledTitle>
      <Container>
        {item?.slice(0, 5)?.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <RecommendationItems key={item.id} item={item} />;
        })}
      </Container>
    </>
  );
};

export default connect(Recommendation);
const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: #000000;
`;
const Container = styled.div`
  border-top: 1px solid #cecece;
  margin-top: 20px;
`;
