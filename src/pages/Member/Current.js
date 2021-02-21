import React, { useEffect } from 'react';
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";
import store from "../../redux/store";
import { Card, Avatar, Pagination } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import './Current.scss';

const demo = [
  {
    id: 1,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  },
  {
    id: 2,
    name: '남승철',
    major: '컴퓨터공학',
    description: '컴퓨터 공학 전공 조교',
  },
  {
    id: 3,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  },
  {
    id: 4,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  },
  {
    id: 5,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  },
  {
    id: 6,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  },
  {
    id: 6,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  },
  {
    id: 6,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  },
  {
    id: 6,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  },
  {
    id: 6,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  },
  {
    id: 6,
    name: '남승철',
    major: '컴퓨터공학',
    description: '설명',
  }
]
const { Meta } = Card;

const Current = (props) => {
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
          title: 'Current Member'
        }
      ],
    })
  },[])

    return (
        <Wrapper className="wrapper">
          <Div className="inner-wrapper">
            {demo.map(el => 
                <Card
                style={{ width: 260 }}
                cover={
                  <Avatar
                    className="profile-img"
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<AntDesignOutlined />}
                  />
                }
              >
                <Meta
                  title={el.name}
                  description={el.major}
                />
                <CustomMeta>
                  {el.description}
                </CustomMeta>
              </Card>
              )
            }
            </Div>
          <Pagination defaultCurrent={1} total={20} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  display: flex; 
  max-width: 1500px;
  flex-wrap: wrap;
  align-items: center;
`
const CustomMeta = styled.span`
  color: rgba(0, 0, 0, 0.45);
`

export default Current;