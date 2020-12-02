import React from "react";
import styled from "styled-components";
import Images from "../../assets/image";
import { BsPlusSquare } from "react-icons/all";
import { navigate } from "../../helper/historyHelper";

const Home = (props) => {
  return (
    <Wrapper>
      <section>
        <img src={Images.homeCover} alt="" className="cover-img" />
      </section>
      <section className="board-section">
        <div className="board-wrap">
          <div className="board">
            <div className="name">
              <span>Notice</span>
              <BsPlusSquare
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/community/notice")}
              />
            </div>
            <div className="row">
              <div className="title">
                반도체 소재연구 분야 전문가’, 이진균 고분 소재연구 분야 전문가’,
                이진균 고분 소재연구 분야 전문가’, 이진균 고분 소재연구 분야
                전문가’, 이진균 고분 소재연구 분야 전문가’, 이진균 고분
              </div>
              <div className="date">20.10.20</div>
            </div>
            <div className="row">
              <div className="title">
                ‘반도체 소재연구 분야 전문가’, 이진균 고분…
              </div>
              <div className="date">20.10.20</div>
            </div>
            <div className="row">
              <div className="title">
                ‘반도체 소재연구 분야 전문가’, 이진균 고분…
              </div>
              <div className="date">20.10.20</div>
            </div>
            <div className="row">
              <div className="title">
                ‘반도체 소재연구 분야 전문가’, 이진균 고분…
              </div>
              <div className="date">20.10.20</div>
            </div>
          </div>
        </div>
        <div className="board-wrap">
          <div className="board">
            <div className="name">
              <span>Gallery</span>
              <BsPlusSquare />
            </div>
            <div className="row">
              <div className="thumb">
                <img src="" alt="" />
              </div>
              <div className="desc"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="link-wrap">
        <Link
          src={Images.mainResearch}
          text={"Research"}
          onClick={() => navigate("/introduction/research")}
        />
        <Link
          src={Images.mainPublications}
          text={"publications"}
          onClick={() => navigate("/publication")}
        />
        <Link
          src={Images.mainMember}
          text={"Member"}
          onClick={() => navigate("/member/current")}
        />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  section {
    display: flex;
    justify-content: space-between;
    & + section {
      margin-top: 36px;
    }
    .cover-img {
      width: 100%; //tmp
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
    &.board-section {
      display: flex;
      margin-left: -15px;
      margin-right: -15px;
    }
    .board-wrap {
      flex: 0 0 50%; // 이거와 maxWidth 같이줘야 50% 채워짐
      max-width: 50%;
      padding: 0 15px;
    }
    .board {
      min-height: 251px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      background: #fff;
      .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 17px 9px 20px;
        border-bottom: 2px solid #999;
        font-size: 21px;
        font-weight: 500;
        color: #525252;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 12px 11px 13px;
        & + .row {
          border-top: 1px solid #ddd;
        }
        .title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 60px;
          font-size: 14px;
        }
        .date {
          flex-shrink: 0;
          font-size: 12px;
          opacity: 0.7;
        }
        .thumb {
          img {
            height: 100px;
          }
        }
        .desc {
        }
      }
    }
    &.link-wrap {
      margin-left: -15px;
      margin-right: -15px;
    }
  }
`;

const Link = styled.div`
  position: relative;
  width: 33.33%;
  margin: 0 15px;
  height: 150px;
  background-image: url(${(props) => props.src});
  background-position: 50% 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
  }
  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    z-index: 2;
    right: 20px;
    bottom: 7px;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
  }
  &:hover {
    background-size: 130%;
  }
`;

export default Home;
