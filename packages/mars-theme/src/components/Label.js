import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
const Label = (props) => {
  const { link, name, index, labelPress, setLabelPress, state } = props;
  console.log({ state: state.router.link });
  useEffect(() => {
    //Runs only on the first render
    let tempArr = new Array(labelPress.length).fill(false);
    if (state.router.link === link) {
      tempArr[index] = true;
      setLabelPress(tempArr);
    }else if (state.router.link === '/'){
      let tempArr = new Array(labelPress.length).fill(false);
      setLabelPress(tempArr);
    }
    
  }, [state.router.link]);
  return (
    <>
      <Link link={link}>
        <StyledLabelButton
          active={labelPress[index]}
        >
          {name}
        </StyledLabelButton>
      </Link>
    </>
  );
};

export default connect(Label);
const StyledLabelButton = styled.div`
  border: 1px solid #757575;
  border-radius: 5px;
  padding: 6px 18px 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #757575;

  ${({ active }) =>
    active
      ? `
    border: 1px solid #e72b2c;
   background: #E72B2C;
   color: #FFFFFF;
  `
      : `:hover {
    border: 1px solid #e72b2c;
    color: #e72b2c;
  }`}
`;
