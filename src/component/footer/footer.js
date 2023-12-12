import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white shadow ">
        <div className="container-fluid pt-2">
          <div className="row footer-area">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <h6>Về chúng tôi</h6>
              <p>"Chuyển động từ trang sách, tạo dấu ấn trong tâm hồn."</p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <h6>Bản tin</h6>
              <p>
                "Kết nối tri thức, lan tỏa niềm đam mê - Bản tin sách, nguồn cảm
                hứng hàng ngày của bạn!"{" "}
              </p>
              <div className="d-inline-flex align-items-center">
                <input
                  className="form-control"
                  name="EMAIL"
                  placeholder="Nhập Email "
                  required=""
                  type="email"
                ></input>
                <button className="click-btn btn btn-default bg-warning">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <h6>Theo dõi tôi trên: </h6>
              <a
                className="btn btn-link btn-floating btn-lg text-white"
                href="https://www.linkedin.com"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-white "
                href="https://wallmiin.github.io/BeggarStore/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-white bg-dark p-4">
          <a className="text-white" href="https://github.com/PeterRizek009">
            BeggarStore
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
