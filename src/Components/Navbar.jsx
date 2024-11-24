import React from "react";
import avatarImg from "../Assets/img-avata.png";
import logo from "../Assets/logo.png";
import iconhome from "../Assets/icon-home.png";

const Navbar = () => {
  const navItems = [
    { href: "news/tin-tuc", label: "Tin Tức" },
    { href: "news/su-kien", label: "Sự Kiện" },
    { href: "news/tinh-nang", label: "Tính Năng" },
    { href: "news/huong-dan", label: "Hướng Dẫn" },
    {
      href: "https://www.facebook.com/ichikayuumenaru",
      label: "Cộng Đồng",
      target: "_blank",
    },
    { href: "/home/login", label: "Đăng Nhập" },
  ];

  return (
    <div className="main-page">
      <nav className="header_pc">
        <ul className="navbar-logo">
          <li>
            <a href="home.html" className="navbar-logo-link">
              <img src={avatarImg} alt="Avatar" />
              <div className="navbar-logo-text">
                <span>Nhất Đại Thiên Tôn</span>
                <span>Nhà Phát Hành GOSU</span>
              </div>
            </a>
          </li>
        </ul>
        <ul className="navbar-links">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <a href={item.href} target={item.target || "_self"}>
                  {item.label}
                </a>
              </li>
              {index === Math.floor(navItems.length / 2) - 1 && (
                <li key="logo">
                  <a href="home.html">
                    <img src={logo} alt="Logo" />
                  </a>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>

        <ul className="navbar-icon">
          <li>
            <a href="home.html">
              <img src={iconhome} alt="Home Icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
