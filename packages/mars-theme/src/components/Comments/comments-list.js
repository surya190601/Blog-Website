import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import CommentTemplate from "./CommentTemplate";
const CommentsList = ({ state, libraries, postId }) => {
  const data = state.source.get(`@comments/${postId}`);
  const Html2React = libraries.html2react.Component;
  const dataFormatConverter = (date) => {
    date = date.toDateString();
    date = date.substring(4, 10) + "," + date.substring(11, 15);
    return date;
  };
  return (
    <>
      <Container>
        <Title>Comments</Title>
        {data.items.map(({ id, children }) => {
            const Html2React = libraries.html2react.Component;
          return (
            <>
              <CommentTemplate id={id} children={children} Html2React={Html2React}/>
            </>
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
  word-break: break-word;
  p {
    margin: 0;
  }
`;
