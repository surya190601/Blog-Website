import React, { useState } from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import CommentsList from "./comments-list";
import CommentsForm from "./comments-form";
const CommentTemplate = (props) => {
  const {
    id,
    children,
    state,
    libraries,
    Html2React,
    line = true,
    postId,
  } = props;
  const author = state.source.comment[id];
  //   console.log(author);
  const content = state.source.comment[id].content.rendered;
  const date = new Date(state.source.comment[id].date);
  const dataFormatConverter = (date) => {
    date = date.toDateString();
    date = date.substring(4, 10) + "," + date.substring(11, 15);
    return date;
  };
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div>
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
          <ReplyText
            onClick={(line) => {
              console.log(id);
              setIsShown(true);
              line = false;
            }}
          >
            Reply
          </ReplyText>
          {isShown && (
            <CommentsForm
              setIsShown={setIsShown}
              line={false}
              Id={id}
              postId={postId}
            />
          )}
        </CommentContent>

        {children &&
          children.map(({ id, children }) => {
            return (
              <>
                <ChildCommentContainer>
                  <CommentTemplate
                    id={id}
                    children={children}
                    state={state}
                    Html2React={Html2React}
                    line={false}
                    postId={postId}
                  />
                </ChildCommentContainer>
              </>
            );
          })}
      </div>
      {line && <hr style={{ marginTop: "20px" }} />}
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
  padding-left: 20px;
`;
const ReplyText = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #757575;
`;
