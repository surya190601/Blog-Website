import React from "react";
import { connect, styled, decode } from "frontity";
import CardItems from "./CardItems";
const Card = ({ state }) => {
  const data = state.source.get(state.router.link);
  const item = state.source.get(state.router.link).items;
  
  return (
    <>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
      {!data.isAuthor && !data.isTaxonomy && (
        <Header>
          <b>Latest</b>
        </Header>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "40px 50px",
          borderTop: "1px solid #CECECE",
          marginTop:"20px",
          paddingTop:"40px",
        }}
      >
        {item.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <CardItems key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default connect(Card);
const Header = styled.h3`
  margin: 0px;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  color: #000000;
`;
