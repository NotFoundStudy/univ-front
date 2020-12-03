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
import RoleControl from "../../components/RoleControls/RoleControl";

// textarea 저장 시 줄바꿈을 <br>로 치환 => $('#text').val().replace(/\n/g, "<br>"
// textarea로 값 받아올 때 텍스트로 출력되는 <br>을 줄바꿈으로 치환 => text.replaceAll("<br>", "\r\n");

const professorInfo = {
  name: "Hong Gil Dong",
  desc:
    "Assistant Professor/Ph.D.<br/>Department of Polymer Science and Engineering<br/>Pusan National University<br/>Tel) +82-51-510-2467<br/>E-mail) dgseong@pusan.ac.kr",
};

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
      {/* userType === 1 */}
      <RoleControl />
      <Head>
        {/* 작성 textarea로, view 스타일링은 이 파일에서 일괄 */}
        <div className="desc">
          <h1>Hong Gil Dong</h1>
          <p>Assistant Professor/Ph.D.</p>
          <p>Department of Polymer Science and Engineering</p>
          <p>Pusan National University</p>
          <p>Tel) +82-51-510-2467</p>
          <p>E-mail) dgseong@pusan.ac.kr</p>
        </div>

        <img
          className="thumb"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </Head>
      <hr />
      <Content>
        {/* Write를 어떻게 할지 생각, description 안에 작성해도 되는데 갯수가 다 다를거라서 +/- 버튼 필요햠  */}
        {/* 이것도 textarea로 하는게 좋을듯... 다른 사이트처럼, 쉽고 빠르게 처리하자 */}
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

const Wrapper = styled.div`
  hr {
    margin: 50px 0;
    border: 1px solid #f1f1f1;
  }
`;

const Head = styled(HalfWrap)`
  justify-content: space-between;
  padding: 20px 20px;
  border-radius: 5px;
  .thumb {
    width: 180px;
    height: 230px;
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
      font-size: 1.8rem;
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
