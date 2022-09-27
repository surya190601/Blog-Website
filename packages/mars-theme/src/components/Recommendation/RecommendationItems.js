import React from "react";
import { connect, styled } from "frontity";
import FeaturedMedia from "../featured-media";
import Link from "../link";
import Image from "@frontity/components/image";
const RecommendationItems = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const dataFormatConverter = (date) => {
    date = date.toDateString();
    date = date.substring(4, 10) + "," + date.substring(11, 15);
    return date;
  };
  return (
    <>
      <Link link={item.link}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "34px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <PostTitle>{item.title.rendered}</PostTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "305px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <PostAuthorAvatar src={author.avatar_urls[96]} alt="Avatar" />
                <PostAuthorName>{author.name}</PostAuthorName>
              </div>
              <PostDate>{dataFormatConverter(date)}</PostDate>
            </div>
          </div>
          <div style={{ marginLeft: "25px" }}>
            <ImageContainer>
              <FeaturedMedia id={item.featured_media} />
            </ImageContainer>
          </div>
        </div>
      </Link>
    </>
  );
};

export default connect(RecommendationItems);
const PostTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px
  color: #000000;
`;
const PostAuthorName = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  margin-left: 10px;
`;
const PostAuthorAvatar = styled(Image)`
  margin-top: 19px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const PostDate = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;
const ImageContainer = styled.div`
  width: 78px;
  height: 44px;
`;
