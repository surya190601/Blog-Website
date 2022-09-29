import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
const CommentsList = ({ state, libraries, postId }) => {
  const data = state.source.get(`@comments/${postId}`);
  const Html2React = libraries.html2react.Component;
  console.log(data);
  const dataFormatConverter = (date) => {
    date = date.toDateString();
    date = date.substring(4, 10) + "," + date.substring(11, 15);
    return date;
  };
  return (
    <>
      <Container>
        <Title>Comments</Title>
        {data.items.map(({ id }) => {
          const author = state.source.comment[id];
          const content = state.source.comment[id].content.rendered;
          const date = new Date(state.source.comment[id].date);
          return (
            <div style={{borderBottom: "1px solid #CECECE",paddingBottom:"20px"}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "24px",
                }}
              >
                <PostAuthorAvatar
                  src={author.author_avatar_urls[96]}
                  alt="Avatar"
                />
                <div>
                  <PostAuthorName>
                    {author.author_name || "Anonymous"}
                  </PostAuthorName>
                  <PostDate>{dataFormatConverter(date)}</PostDate>
                </div>
              </div>
              <CommentContent>
                <Html2React html={content} />
              </CommentContent>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default connect(CommentsList);

const Container = styled.div`
  margin-top: 50px;
  border-top: 1px solid #cecece;
  padding-top: 15px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: #000000;
`;
const PostAuthorAvatar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const PostAuthorName = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  margin-left: 11px;
`;
const PostDate = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  margin-left: 11px;
`;
const CommentContent = styled.div`
  margin-top: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  
  p {
    margin: 0;
  }
`;
