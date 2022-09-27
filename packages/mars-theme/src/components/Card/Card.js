import React from "react";
import { connect, styled, decode } from "frontity";
import CardItems from "./CardItems";
const Card = ({ state }) => {
  const data = state.source.get(state.router.link);
  const item = state.source.get(state.router.link).items;
  console.log(state.source);
  item.sort(function (a, b) {
    return a.id - b.id;
  });
  console.log(item);
  const taxonomyCapitalized = (taxonomy) => {
    return taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);
  };
  return (
    <>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {taxonomyCapitalized(data.taxonomy)}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "40px 50px",
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
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  color: #000000;
`;