import React from "react";
import imgTitle1 from "../../../Assets/img-title-1.png";
import imgline from "../../../Assets/img-line.png";
import imgnews from "../../../Assets/img-bg-news.png";
import imgslide from "../../../Assets/img-bg-slider.png";
import icondotnews from "../../../Assets/icon-dot-news.png";
import icondotnewsactive from "../../../Assets/icon-dot-news-ac.png";
import imgviewmore from '../../../Assets/img-bnt-viewmore.png';
import "./Scss/NewFeed.scss";

const NewFeed = () => {
  return (
    <div className="newfeed-container">
      {/* Tiêu đề */}
      <div className="newfeed-title">
        <img src={imgTitle1} alt="Title" />
      </div>
      {/* Hình nền */}
      <div className="newfeed-content">
        <div className="newfeed-slide">
          <img src={imgslide} alt="imgslide" />
          <div className="newfeed-line">
            <img src={imgline} alt="imgline" />
          </div>
        </div>
        <div className="newfeed-news">
          <img src={imgnews} alt="imgnews" />
          <div className="newfeed-phanloai"> 
            <li>Tất Cả</li>
            <li>Tin Tức</li>
            <li>Sự Kiện</li>
            <li>Hướng Dẫn</li>
          <div className="xem-them">
            <a>Xem Thêm</a>
            <img src={imgviewmore} alt="imgviewmore" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeed;
