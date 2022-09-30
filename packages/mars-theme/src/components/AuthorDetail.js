import React from "react";
import { styled, connect } from "frontity";
import Image from "@frontity/components/image";
const AuthorDetail = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state?.source?.author[post.author];
  console.log(author);
  return (
    <>
      <div style={{ marginBottom: "50px", marginTop: "10px" }}>
        <AuthorAvatar src={author.avatar_urls[96]} alt="Avatar" />
        <AuthorName>{author.name}</AuthorName>
        <AuthorDescription>{author.description}</AuthorDescription>
      </div>
    </>
  );
};

export default connect(AuthorDetail);

const AuthorName = styled.div`
  margin-top: 16px;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #000000;
`;
const AuthorAvatar = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const AuthorDescription = styled.div`
  margin-top: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
`;
