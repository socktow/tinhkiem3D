import React from 'react'
import dacquyenhuongdan from '../Assets/img-dacquyen-huongdan.png'
import dacquyennapthe from '../Assets/img-dacquyen-napthe.png'
import dacquyentanthu from '../Assets/img-dacquyen-tanthu.png'
import dacquyenvip from '../Assets/img-dacquyen-vip.png'
const InfoGuide = () => {
  return (
    <div className='infoguide-container'>
        <div className='infoguide-content'>
            <img src={dacquyenhuongdan} alt="dacquyenhuongdan" />
            <span>Hướng Dẫn <br /> Nhập Code </span>
            <img src={dacquyennapthe} alt="dacquyennapthe" />
            <span>Hướng Dẫn <br /> Nạp Thẻ</span>
            <img src={dacquyentanthu} alt="dacquyentanthu" />
            <span>Hướng Dẫn <br /> Tân Thủ</span>
            <img src={dacquyenvip} alt="dacquyenvip" />
            <span>Đặc Quyền <br /> VIP</span>
        </div>

    </div>
  )
}

export default InfoGuide