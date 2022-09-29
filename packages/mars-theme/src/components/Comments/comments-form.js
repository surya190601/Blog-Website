import React, { useState } from "react";
import { connect, styled } from "frontity";
import Loading from "../loading";

const CommentsForm = ({ actions, state, postId }) => {
  const [commentText, setCommentText] = useState("");
  const form = state.comments.forms[postId];
  const UpdatingInput = (e) => {
    e.preventDefault();
    actions.comments.updateFields(postId, {
      content: commentText,
      authorEmail: "",
      authorName: "",
    });
    actions.comments.submit(postId);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          UpdatingInput(e);
        }}
        style={{
          marginTop: "25px",
          borderBottom: "1px solid #CECECE",
          paddingBottom: "20px",
        }}
      >
        {/* If the form is submitting, we can show some kind of a loading state */}
        {form?.isSubmitting && <Loading />}
        <label>
          <StyledInput
            name="content"
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
            value={commentText || ""}
            placeholder="Write your thoughts"
          />
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <StyledCancelButton
            onClick={() => {
              setCommentText("");
            }}
          >
            Cancel
          </StyledCancelButton>
          <StyledCommentButton type="submit" value="Comment" />
        </div>
      </form>
    </>
  );
};

export default connect(CommentsForm);
const StyledInput = styled.textarea`
  background-color: transparent;
  border: 0px solid;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #a4a4a4;
  outline: none;
  width: 99.5%;
  resize: none;
  display: block;
  :focus {
    outline: none;
    color: #a4a4a4;
  }
`;
const StyledCommentButton = styled.input`
  margin-left: 22px;
  background: #000000;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;
const StyledCancelButton = styled.div`
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 6px 16px;
  :hover {
    cursor: pointer;
  }
`;