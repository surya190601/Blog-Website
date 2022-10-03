import React from "react";
import { styled, connect } from "frontity";
import Image from "@frontity/components/image";
import HorizontalCardItems from "./HorizontalCardItems";
const MoreFromAuthor = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state?.source?.author[post.author];
  console.log(author.id);
  const allPost = Object.keys(state.source.post).map(
    (key) => state.source.post[key]
  );
  console.log({ postid: post.id });
  const filterPost = allPost.filter(
    (FilterPost) => author.id == FilterPost.author && post.id !== FilterPost.id
  );
  console.log({ filterPost: filterPost });
  return (
    <>
      <StyledTitle>{`More from ${author.name}`}</StyledTitle>
      <Container>
        {filterPost.length ? (
          filterPost?.slice(0, 5)?.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <HorizontalCardItems key={item.id} item={item} />;
          })
        ) : (
          <div
            style={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "21px",
              color: "#D9D9D9",
              margin:"34px 0px 0px"
            }}
          >No post available</div>
        )}
      </Container>
    </>
  );
};

export default connect(MoreFromAuthor);
const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: #000000;
`;
const Container = styled.div`
  border-top: 1px solid #cecece;
  margin-top: 20px;
  margin-bottom: 50px;
`;
