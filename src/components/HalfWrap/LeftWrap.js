import React from "react";
import styled from "styled-components";

const LeftWrap = ({ children, gutter, className, style }) => {
  return (
    <Wrapper gutter={gutter} className={className} style={style}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  ${(props) =>
    props.gutter &&
    `
     > * {
        margin : 0 ${props.gutter}px;
        &:first-child { 
            margin-left : 0 
        }
    `}
`;

export default LeftWrap;
