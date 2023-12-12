import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div>
      <div className="text-secondary p-2 ">
        <div className="titleabout fw-bold text-center">
          <h2>
            Giới <b>Thiệu</b>
          </h2>
        </div>
      </div>
      <div className="about mx-auto">
        <div className="about-item">
          <h4 className="mx-3">Beggar Store</h4>
          <p className="mx-auto pt-5">
            "Mở cánh cửa tới một thế giới mới, nơi mà trang sách không chỉ là
            giấy và chữ, mà là cánh cửa mở ra những phiêu lưu, tri thức, và tận
            cùng sự khám phá."{" "}
          </p>
        </div>
        <div className="about-item">
          <h4 className="mx-3">Tài nguyên</h4>
          <ul className="mx-4">
            <li>React JS</li>
            <li>Framer Motion Library</li>
            <li>CSS</li>
            <li>Bootstrap 5</li>
          </ul>
        </div>
        <div className="about-item">
          <h4 className="mx-3">Theo dõi tôi trên:</h4>
          <section className="mx-auto">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://wallmiin.github.io/BeggarStore/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github" />
            </a>
          </section>
        </div>

        <div className="about-item">
          <h4 className="mx-3">Thông tin</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
