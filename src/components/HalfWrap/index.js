import styled from "styled-components";
import LeftWrap from "./LeftWrap";
import RightWrap from "./RightWrap";

const HalfWrap = styled.div`
  display: flex;
  //flex-grow: 1;
  width: 100%;
  align-items: center;
  > * {
    margin: 0 ${(props) => props.gutter}px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

export default HalfWrap;
export { LeftWrap, RightWrap };
