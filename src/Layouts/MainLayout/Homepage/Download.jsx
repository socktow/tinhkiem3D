import React from "react";
import imgbgdownload from "../../../Assets/img-bg-download.png";
import avatar from "../../../Assets/img-avata-gosu.png";
import iconios from "../../../Assets/icon-ios.png";
import iconandroid from "../../../Assets/icon-android.png";
import iconpc from "../../../Assets/icon-pc.png";
import napthe from "../../../Assets/img-napthe.png";
import giftcode from "../../../Assets/img-giftcode.png";
import btn from "../../../Assets/img-bnt.png";
import "./Scss/Download.scss";

const Download = () => {
  return (
    <div className="download-container">
      <img src={imgbgdownload} alt="imgbgdownload" className="download-bg" />

      <div className="download-avatar">
        <img src={avatar} alt="avatar" />
      </div>

      <div className="download-method">
        <a href="#" className="download-link">
          <div className="download-btn">
            <img src={btn} alt="btn" className="btn-background" />
            <div className="btn-icon">
              <img src={iconios} alt="iconios" className="icon" />
              <span className="download-text">
                Tải Xuống <br />
                IOS
              </span>
            </div>
          </div>
        </a>
        <a href="#" className="download-link">
          <div className="download-btn">
            <img src={btn} alt="btn" className="btn-background" />
            <div className="btn-icon">
              <img src={iconandroid} alt="iconios" className="icon" />
              <span className="download-text">
                Tải Xuống <br />
                Android
              </span>
            </div>
          </div>
        </a>
        <a href="#" className="download-link">
          <div className="download-btn">
            <img src={btn} alt="btn" className="btn-background" />
            <div className="btn-icon">
              <img src={iconpc} alt="iconios" className="icon" />
              <span className="download-text">
                Tải Xuống <br />
                PC
              </span>
            </div>
          </div>
        </a>
      </div>

      <div className="download-guide">
        <div className="Nap-the">
          <span>Nạp Thẻ</span>
          <img src={napthe} alt="napthe" />
        </div>
        <div className="Gift-code">
          <span>Gift Code</span>
          <img src={giftcode} alt="giftcode" />
        </div>
      </div>
    </div>
  );
};

export default Download;
