import React, { useEffect } from 'react';
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";

const Alumni = (props) => {

  const match = useRouteMatch();

  useEffect(()=>{
    appCreators.updateState({
      breadcrumbList:[
        {
          to: '',
          title: 'Member'
        },
        {
          to: `${match.path}`,
          title: 'Alumni'
        }
      ],
    })
  },[])

    return (
        <Wrapper>
           Alumni Memberdssdsds
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Alumni;