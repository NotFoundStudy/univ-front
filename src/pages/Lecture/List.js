import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";
import {mock} from "../../mock/mock";

import LectureTable from "../../components/Table/LectureTable";

const data = mock.lecture.lists;

const LectureList = (props) => {

  const match = useRouteMatch();

  useEffect(()=>{
    appCreators.updateState({
      breadcrumbList:[
        {
          to: `${match.path}`,
          title: 'Lecture'
        }
      ],
    })
  },[])

    return (
        <Wrapper>
          <LectureTable data={data} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default LectureList;