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
              <BsPlusSquare />
            </div>
            <div className="row">
              <div className="title">
                반도체 소재연구 분야 전문가’, 이진균 고분…
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
        <div
          className="link"
          onClick={() => navigate("/introduction/research")}
        >
          <div className="img"></div>
        </div>
        <div className="link" onClick={() => navigate("/publication")}>
          <div className="img"></div>
        </div>
        <div className="link" onClick={() => navigate("/member/current")}>
          <div className="img"></div>
        </div>
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
      flex-grow: 1;
      padding: 0 15px;
    }
    .board {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      background: #fff;
      .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 5px;
        border-bottom: 2px solid #999;
        font-size: 21px;
        font-weight: 500;
        color: #525252;
      }
      .row {
        .title {
        }
        .date {
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
    .link {
      width: 33.33%;
      padding: 0 15px;
      .img {
        height: 150px;
        background-image: url(${(props) => props.src});
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background: pink;
        cursor: pointer;
      }
    }
  }
`;

export default Home;
