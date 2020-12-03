import React, { useEffect } from "react";
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";
import HalfWrap, { LeftWrap, RightWrap } from "../../components/HalfWrap";
import PageTitle from "../../components/Titles/PageTitle";
import { Descriptions, Button } from "antd";
import {
  FcCollaboration,
  FcBriefcase,
  FcGraduationCap,
  FcKindle,
  FcMindMap,
  FcApproval,
  FcIdea,
  FcLibrary,
} from "react-icons/all";

const Detail = (props) => {
  const match = useRouteMatch();

  useEffect(() => {
    appCreators.updateState({
      breadcrumbList: [
        {
          to: `${match.path}`,
          title: "Professor",
        },
        {
          to: `${match.path}/${match.params.id}`,
          title: `${match.params.id}`,
        },
      ],
    });
  }, []);

  return (
    <Wrapper>
      <PageTitle title="Professor" />
      외주측에서 순서, 항목, 항목텍스트 받기
      {/* userType === 1 */}
      {true && (
        <RightWrap gutter={4} style={{ paddingBottom: "20px" }}>
          <Button type="primary">Edit</Button>
          <Button>Del</Button>
        </RightWrap>
      )}
      <Head>
        <img
          className="thumb"
          src="https://lh3.googleusercontent.com/proxy/EDVitibQ-ot7aaSRnuzeBZa8yCkSLd0cp8ZmMlpEMUYhf24BwuE92gGn5QPTTd4Xmpp2pVFMOqw2pgkmspG-aCZ5y1J6Yj5bWqRYqZpS4hm1GaMRQnIstia8-1nvDwx93JbKphrV_IkInt8r"
          alt=""
        />
        <div className="desc">
          <h1>Hong Gil Dong</h1>
          <p>Assistant Professor/Ph.D.</p>
          <p>Department of Polymer Science and Engineering</p>
          <p>Pusan National University</p>
          <p>Tel) +82-51-510-2467</p>
          <p>E-mail) dgseong@pusan.ac.kr</p>
        </div>

        {/* <LeftWrap className="left-wrap">
        </LeftWrap>
        <RightWrap className="right-wrap">
         
        </RightWrap> */}
      </Head>
      <Content>
        {/* 1 */}
        <Descriptions
          bordered
          title={
            <div className="subj-tit">
              <FcLibrary />
              Career
            </div>
          }
          size={"default"}
          column={1}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title={
            <div className="subj-tit">
              <FcGraduationCap />
              Education
            </div>
          }
          size={"default"}
          column={1}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title={
            <div className="subj-tit">
              <FcApproval />
              Award
            </div>
          }
          size={"default"}
          column={1}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title={
            <div className="subj-tit">
              <FcIdea />
              Research Interest
            </div>
          }
          size={"default"}
          column={1}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Head = styled(HalfWrap)`
  justify-content: center;
  border-radius: 3px;
  background: #f0f0f0;
  .thumb {
    height: 215px;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #adadad;
    background: #fff;
  }
  .desc {
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 10px;
      font-size: 1.6rem;
      font-weight: 600;
    }
    p {
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 400;
      & + & {
        margin-top: 5px;
      }
    }
  }
`;
const Content = styled.div``;
export default Detail;
