import React from 'react'
import { connect, styled, decode } from "frontity";
const Card = ({state}) => {
    console.log(state);
  return (
    <div>Card</div>
  )
}

export default connect(Card)