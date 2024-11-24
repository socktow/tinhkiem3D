import React from 'react';
import './Scss/Download.scss';  // Import SCSS

import imgbgdownload from '../Assets/img-bg-download.png';
import napthe from '../Assets/img-napthe.png';
import giftcode from '../Assets/img-giftcode.png';
import iconios from '../Assets/icon-ios.png';
import iconandroid from '../Assets/icon-android.png';
import iconpc from '../Assets/icon-pc.png';
import btn from '../Assets/img-bnt.png';
import avatar from '../Assets/img-avata.png';

const Download = () => {
  return (
    <div className="download-container">
      <img src={imgbgdownload} alt="download background" className="download-bg" />
      <div className="download-content">
        <img src={avatar} alt="avatar" className="download-avatar" />
        <div className="download-buttons">
          {/* Button 1 */}
          <div className="download-btn">
            <img src={btn} alt="btn" />
            <div className="btn-icon">
              <img src={iconios} alt="iconios" />
            </div>
          </div>

          {/* Button 2 */}
          <div className="download-btn">
            <img src={btn} alt="btn" />
            <div className="btn-icon">
              <img src={iconandroid} alt="iconandroid" />
            </div>
          </div>

          {/* Button 3 */}
          <div className="download-btn">
            <img src={btn} alt="btn" />
            <div className="btn-icon">
              <img src={iconpc} alt="iconpc" />
            </div>
          </div>
        </div>

        {/* Other images (napthe, giftcode) */}
        <div className="download-images">
          <img src={napthe} alt="napthe" />
          <img src={giftcode} alt="giftcode" />
        </div>
      </div>
    </div>
  );
};

export default Download;
