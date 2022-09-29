import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
const CommentTemplate = (props) => {
  const { id, children } = props;
  const author = state.source.comment[id];
  const content = state.source.comment[id].content.rendered;
  const date = new Date(state.source.comment[id].date);
  return (
    <>
      <div style={{ borderBottom: "1px solid #CECECE", paddingBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "24px",
          }}
        >
          <PostAuthorAvatar src={author.author_avatar_urls[96]} alt="Avatar" />
          <div>
            <PostAuthorName>{author.author_name || "Anonymous"}</PostAuthorName>
            <PostDate>{dataFormatConverter(date)}</PostDate>
          </div>
        </div>
        <CommentContent>
          <Html2React html={content} />
        </CommentContent>
        {children &&
          children.map(({ id, child }) => {
            return (
              <>
                <ChildCommentContainer>
                  <CommentTemplate id={id} children={child} />
                </ChildCommentContainer>
              </>
            );
          })}
      </div>
    </>
  );
};

export default connect(CommentTemplate);
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
const ChildCommentContainer = styled.div`
  margin-left: 20px;
  border-left: 1px solid #bdbdbd;
  paddingleft: 20px;
`;
