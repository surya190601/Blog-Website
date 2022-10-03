import React, { useState } from "react";
import { connect, styled } from "frontity";
import Label from "./Label";
import SearchBar from "./SearchBar";
const SearchComponent = ({ state }) => {
  const category = Object.keys(state.source.category).map(
    (key) => state.source.category[key]
  );
  const author = Object.keys(state.source.author).map(
    (key) => state.source.author[key]
  );
  console.log(author);
  let index = 0;
  const [labelPress, setLabelPress] = useState(
    new Array(category.length).fill(false)
  );
  return (
    <>
      <div>
        <StyledTitle>Discover more</StyledTitle>
      </div>
      <div style={{ position: "relative" }}>
        <SearchBar category={category} author={author} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px 24px",
          margin: "20px 0px 30px",
        }}
      >
        {category.map(({ link, name }) => {
          index += 1;
          //   console.log({ name: name, link: link, index: index });
          return (
            <Label
              link={link}
              name={name}
              index={index}
              labelPress={labelPress}
              setLabelPress={setLabelPress}
            />
          );
        })}
      </div>
    </>
  );
};

export default connect(SearchComponent);
const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
`;
