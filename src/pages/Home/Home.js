import React from "react";
import styled from "styled-components";
import Images from "../../assets/image";
import { BsPlusSquare } from "react-icons/all";
import { navigate } from "../../helper/historyHelper";
import NoList from "../../components/NoData/NoList";

const noticeList = [];
// [
//   {
//     id: 1,
//     title:
//       "반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가",
//     modified_date: "20.10.20",
//   },
//   {
//     id: 2,
//     title:
//       "반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가",
//     modified_date: "20.10.20",
//   },
//   {
//     id: 3,
//     title: "반도체 소재연구",
//     modified_date: "20.10.20",
//   },

//   {
//     id: 4,
//     title: "반도체 소재연구",
//     modified_date: "20.10.20",
//   },
// ];

const galleryItem = null;
// {
//   id: 1,
//   thumb:
//     "data:image/png;base64,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",
//   title:
//     "반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소전문가반도체 소재연구 분야 전문가반도체 소전문가반도체 소재연구 분야 전문가반도체 소전문가반도체 소재연구 분야 전문가반도체 소전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가반도체 소재연구 분야 전문가",
//   modified_date: "20.10.20",
// };

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
            <div className="inner-wrap">
              {noticeList.length > 0 ? (
                noticeList.map((item) => (
                  <div
                    className="row"
                    key={item.id}
                    onClick={() => navigate(`/community/notice/${item.id}`)}
                  >
                    <div className="title">{item.title}</div>
                    <div className="date">{item.modified_date}</div>
                  </div>
                ))
              ) : (
                <NoList
                  style={{ paddingTop: "34px" }}
                  description={"등록된 공지사항이 없습니다"}
                />
              )}
            </div>
          </div>
        </div>
        <div className="board-wrap">
          <div className="board">
            <div className="name">
              <span>Gallery</span>
              <BsPlusSquare
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/community/gallery")}
              />
            </div>
            <div className="inner-wrap">
              {galleryItem ? (
                <div
                  className="row for-gallery"
                  onClick={() =>
                    navigate(`/community/gallery/${galleryItem.id}`)
                  }
                >
                  <Thumb src={galleryItem.thumb} />
                  <div className="desc">
                    <div className="g-title">{galleryItem.title}</div>
                    <div className="date">{galleryItem.modified_date}</div>
                  </div>
                </div>
              ) : (
                <NoList
                  description={"등록된 포토가 없습니다"}
                  style={{ paddingTop: "34px" }}
                />
              )}
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
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      background: #fff;
      .inner-wrap {
        min-height: 220px;
        padding: 7px 0 15px;
      }
      .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 17px 9px 20px;
        border-bottom: 2px solid #999;
        font-size: 21px;
        font-weight: 500;
        color: #525252;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 13px;
        padding: 15px 12px 11px 13px;
        border-bottom: 1px solid #f1f1f1;
        cursor: pointer;
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
        &.for-gallery {
          border-bottom: none;
          .g-title {
            overflow: hidden;
            opacity: 0.8;
          }
          .desc {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100% - 290px);
            height: 170px;
          }
        }
      }
    }
    &.link-wrap {
      margin-left: -15px;
      margin-right: -15px;
    }
  }
`;

const Thumb = styled.div`
  width: 270px;
  height: 170px;
  background-image: url(${(props) => props.src || Images.defaultPhoto});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
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
    background-size: 110%;
  }
`;

export default Home;
