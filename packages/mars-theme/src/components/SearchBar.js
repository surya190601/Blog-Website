import React, { useState, useEffect } from "react";
import Image from "@frontity/components/image";
import { connect, styled } from "frontity";
import Link from "./link";
const SearchBar = ({ category, author, state }) => {
  const [searchText, setSearchText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [authorArray, setAuthorArray] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          width: "100%",
          background: "#FFFFFF",
          border: "1px solid #757575",
          borderRadius: "5px",
          marginTop: "20px",
          position: "relative",
        }}
      >
        <SearchLogo
          src="https://i.ibb.co/zZFhZbM/search.png"
          alt="Search Logo"
        />
        <StyledInput
          placeholder="Search"
          onChange={(e) => {
            e.preventDefault();
            if (e.target.value === "" || e.target.value === " ")
              setIsVisible(false);
            else setIsVisible(true);
            setSearchText(e.target.value);
            setAuthorArray(
              author.filter((author) =>
                author.name.toLowerCase().includes(e.target.value)
              )
            );
            setCategoryArray(
              category.filter((category) =>
                category.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
          }}
          value={searchText}
        />
      </div>
      {isVisible && (
        <SearchResultContainer>
          <StyledResultTitle>Author</StyledResultTitle>
          <hr />
          {authorArray.length ? (
            authorArray?.map(({ name, link, avatar_urls }) => {
              // console.log({name: name, link: link, avatar_urls: avatar_urls});
              return (
                <>
                  <Link link={link}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "16px 0px",
                      }}
                      onClick={() => {
                        setIsVisible(false);
                        setSearchText("");
                      }}
                    >
                      <AuthorAvatar src={avatar_urls[96]} alt="Avatar" />
                      <ResultText marginTop={"5px"}>{name}</ResultText>
                    </div>
                  </Link>
                </>
              );
            })
          ) : (
            <div
              style={{
                margin: "16px 0px",
              }}
            >
              <ResultText>No Result</ResultText>
            </div>
          )}
          <StyledResultTitle>Categories</StyledResultTitle>
          <hr />
          {categoryArray.length ? (
            categoryArray?.map(({ name, link }) => {
              return (
                <>
                  <Link link={link}>
                    <div
                      style={{
                        margin: "16px 0px",
                      }}
                      onClick={() => {
                        setIsVisible(false);
                        setSearchText("");
                      }}
                    >
                      <ResultText>{name}</ResultText>
                    </div>
                  </Link>
                </>
              );
            })
          ) : (
            <div
              style={{
                margin: "16px 0px",
              }}
            >
              <ResultText>No Result</ResultText>
            </div>
          )}
        </SearchResultContainer>
      )}
    </>
  );
};

export default connect(SearchBar);
const SearchLogo = styled(Image)`
  margin-top: 3px;
  height: 18px;
  width: 18px;
`;
const StyledInput = styled.input`
  background-color: transparent;
  border: 0px solid;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #757575;
  outline: none;
  resize: none;
  display: block;
  :focus {
    outline: none;
    color: #a4a4a4;
  }
  padding: 0px;
  margin-left: 25px;
  width: 100%;
`;
const SearchResultContainer = styled.div`
  position: absolute;
  width: 94%;
  top: 53px;
  left: 0px;
  background: #ffffff;
  box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.1);
  padding: 17px 24px 24px;
  z-index: 2;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;
const StyledResultTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
`;
const ResultText = styled.div`
  margin-top: ${(props) => props.marginTop || "0px"};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;
const AuthorAvatar = styled(Image)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 16px;
`;
