import React, { useEffect } from "react";
import { connect } from "frontity";
import CommentsList from "./comments-list";
import CommentsForm from "./comments-form";

const Comments = ({ actions, state, postId }) => {
  const data = state.source.get(`@comments/${postId}`);
  useEffect(() => {
    actions.source.fetch(`@comments/${postId}`);
  }, [data]);

  // console.log(postId);

  return (
    data.isReady && (
      <>
        <CommentsList postId={postId} />
        <CommentsForm postId={postId} />
      </>
    )
  );
};

export default connect(Comments);

