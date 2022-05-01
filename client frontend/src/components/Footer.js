import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <footer className='section-p1'>
        <div className='col'>
            <img className='logo' src="images/logo.png" alt="" />
            <p> <strong>Address: </strong>Trường Đại Học Đà Lạt </p>
            <p> <strong>Home: </strong> DaLat Penhouse </p>
            <p> <strong>Phone: </strong>0901678971</p>
            <div className='follow'>
                <h4>Follow us</h4>
                <div className="icon">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        </div>

        <div className='col'>
            <h4>About us</h4>
            <a href="/">Giới thiệu</a>
            <a href="/">Tuyển dụng</a>
            <a href="/">Chính sách bảo mật thanh toán</a>
            <a href="/">Chính sách bảo mật thông tin cá nhân</a>
        </div>
        <div className='col'>
            <h4>Hỗ trợ</h4>
            <a href="/">Hotline: <strong>1900-6035</strong></a>
            <a href="/">Các câu hỏi thường gặp</a>
            <a href="/">Gửi yêu cầu hỗ trợ</a>
            <a href="/clae">Báo lỗi bảo mật: thiensoncva01@gmail.com</a>
        </div>

        <div className='col install'>
            <h4>Install</h4>
            <a href="/">From App Store or Google Play</a>
            <div className="row">
                <img src="images/app.jpg" alt="" />
                <img src="images/play.jpg" alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="images/pay.png" alt="" />
        </div>
    </footer>
      {/* Top Header */}
      <div className="Announcement">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+84901678971</p>
              <p>thiensoncva01@gmail.com</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
