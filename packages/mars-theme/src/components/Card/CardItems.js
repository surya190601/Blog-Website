import React from "react";
import { connect, styled, decode } from "frontity";
import FeaturedMedia from "../featured-media";
import Link from "../link";
import Image from "@frontity/components/image";
import { Share } from "@styled-icons/entypo";
const CardItems = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  console.log({ author: author, date: date });
  //   console.log({ excerpt: item.excerpt.rendered });
  //   console.log(item.title.rendered);
  const reduceExcerpt = (excerpt) => {
    if (excerpt.length > 50) {
      excerpt = excerpt.substring(3, 88) + " ...";
    }
    return excerpt;
  };
  const dataFormatConverter = (date) => {
    date = date.toDateString();
    date = date.substring(4, 10) + "," + date.substring(11, 15);
    return date;
  };
  return (
    <>
      <div style={{ width: "320px", height: "366px" }}>
        <Link link={item.link}>
          <ImageContainer>
            <FeaturedMedia id={item.featured_media} />
            <Frame />
          </ImageContainer>
        </Link>
        <PostDetailsContainer>
          <PostTitle>{item.title.rendered}</PostTitle>
          <PostExcerpt>{reduceExcerpt(item.excerpt.rendered)}</PostExcerpt>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PostAuthorAvatar src={author.avatar_urls[96]} alt="Avatar" />
            <PostAuthorName>{author.name}</PostAuthorName>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "7px",
              justifyContent: "space-between",
            }}
          >
            <PostDate>{dataFormatConverter(date)}</PostDate>
            <div>
              <StyledShareIcon />
            </div>
          </div>
        </PostDetailsContainer>
      </div>
    </>
  );
};

export default connect(CardItems);

const ImageContainer = styled.div`
  position: relative;
  width: 320px;
  height: 180px;
`;
const Frame = styled.div`
  position: absolute;
  top: 0;
  height: 9px;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background: #e72b2c;
  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;
const PostDetailsContainer = styled.div`
  padding: 12px 31px 24px 19px;
  background: #fcfcfc;
`;
const PostTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
`;
const PostExcerpt = styled.div`
  margin-top: 13px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #000000;
`;
const PostAuthorName = styled.div`
  margin-top: 21px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  margin-left: 10px;
`;
const PostAuthorAvatar = styled(Image)`
  margin-top: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const PostDate = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;
const StyledShareIcon = styled(Share)`
  display: flex;
  justify-content: flex-end;
  height: 16px;
  width: 16px;
  :hover {
    color: red;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
