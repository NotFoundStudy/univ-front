import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import COMMON_CONST from "../../assets/constant/common";
import { RightWrap } from "../HalfWrap";

const RoleControl = (props) => {
  // 여기말고 로그인 화면에서 :: 유저 로그인 성공 => ls 에 토큰(키 따로), 로그인 시 user 백엔드로부터 정보 받아와 ls에 저장
  // eff에서 getLocalStorage('user')에서 role 꺼내오기
  // user(필요시 토큰도)가 null이면 렌더 return false

  const [role, setRole] = useState(null);

  useEffect(() => {
    // role꺼내오기
  }, [role]);

  return (
    <Wrapper>
      {/* examples */}
      {role === COMMON_CONST.USER_ROLE.admin && (
        <RightWrap gutter={4} style={{ paddingBottom: "20px" }}>
          <Button type="primary">Edit</Button>
          <Button>Del</Button>
        </RightWrap>
      )}
      {role === COMMON_CONST.USER_ROLE.professor && (
        <RightWrap gutter={4} style={{ paddingBottom: "20px" }}>
          <Button type="primary">Edit</Button>
          <Button>Del</Button>
        </RightWrap>
      )}
      {role === COMMON_CONST.USER_ROLE.user && (
        <RightWrap gutter={4} style={{ paddingBottom: "20px" }}>
          <Button type="primary">Edit</Button>
          <Button>Del</Button>
        </RightWrap>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default RoleControl;
