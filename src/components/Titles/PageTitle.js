import React from "react";
import styled from "styled-components";

const PageTitle = (props) => {
  const {
    title,
    color, // title font color
  } = props;

  return (
    <Wrapper>
      <Title color={color}>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 5px 25px;
`;

const Title = styled.div`
  padding-bottom: 13px;
  border-radius: 3px;
  border-bottom: 4px solid #2b2b2b;
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 700;
  color: #2b2b2b;
  /* color: ${(props) => props.color || "#fff"}; */
`;

export default PageTitle;
