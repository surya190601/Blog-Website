import { connect, styled } from "frontity";
import Link from "./link";
import FeaturedMedia from "./featured-media";
import { ChevronSmallLeft } from "@styled-icons/entypo";
import { Share } from "@styled-icons/entypo";
import Recommendation from "./Recommendation";
import Image from "@frontity/components/image";
import Comments from "./Comments";
import AuthorDetail from "./AuthorDetail";
import MoreFromAuthor from "./MoreFromAuthor";

/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const dataFormatConverter = (date) => {
    date = date.toDateString();
    date = date.substring(4, 10) + "," + date.substring(11, 15);
    return date;
  };
  // Load the post, but only if the data is ready.
  console.log(post?.description);
  return data.isReady ? (
    <Container>
      <StyledLink link="/">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <StyledBackHomeIcon />
          <StyledBackHomeText>Back to Home</StyledBackHomeText>
        </div>
      </StyledLink>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ContentContainer>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PostAuthorAvatar src={author.avatar_urls[96]} alt="Avatar" />
            <PostAuthorName>{author.name}</PostAuthorName>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "4px",
              justifyContent: "space-between",
            }}
          >
            <PostDate>
              {"Last updated on " + dataFormatConverter(date)}
            </PostDate>
            <div>
              <StyledShareIcon />
            </div>
          </div>
          <Title>{post?.title?.rendered}</Title>
          {post?.description?.rendered ? (
            <PostDescription>{post.description.rendered}</PostDescription>
          ) : null}
          <ImageContainer>
            <FeaturedMedia id={post.featured_media} />
          </ImageContainer>
          <Content>
            <Html2React html={post.content.rendered} />
          </Content>
          <Comments postId={post.id} />
        </ContentContainer>
        <SideBarContainer>
          <AuthorDetail />
          <MoreFromAuthor />
          <Recommendation />
        </SideBarContainer>
      </div>
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  padding: 50px 120px 120px 110px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledBackHomeIcon = styled(ChevronSmallLeft)`
  height: 32px;
  width: 32px;
  color: #d9d9d9;
`;
const StyledBackHomeText = styled.div`
  margin-top: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #d9d9d9;
`;
const ContentContainer = styled.div`
  padding-left: 10px;
  width: 57.58%;
`;
const SideBarContainer = styled.div`
  margin-left: 80px;
  width: 35%;
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
const Title = styled.h1`
  font-weight: 500;
  font-size: 42px;
  line-height: 55px;
  color: #000000;
  margin: 18px 0px 12px;
`;
const PostDescription = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;

  color: #b0b0b0;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 402px;
`;
/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  margin-top: 50px;
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #000000;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
