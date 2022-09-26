import React from "react";
import Banner from "./Banner";
import Post from "./post";
import { connect, styled } from "frontity";
import { useEffect } from "react";

const HomePage = ({ state}) => {
    console.log(state);
  return (
    <>
      <Banner />
      {/* <Post/> */}
    </>
  );
};

export default HomePage;
