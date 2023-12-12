import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  return (
    <React.Fragment>
      <div className="titleabout fw-bold text-center">
        <h2 className="text-black">Trang quản lí</h2>
      </div>
      <div className="editTable">
        <div className="box">
          <h4>Thêm sách mới</h4>
          <Link
            className="btn btn-danger rounded-pill mt-5 mr-5"
            to={"./addnewitem"}
          >
            Thêm <i className="fas fa-plus"></i>
          </Link>
        </div>
        <div className="box">
          <h4>Chỉnh sửa sách</h4>
          <Link className="btn btn-danger rounded-pill mt-5 mr-5" to={"./edit"}>
            Sửa
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
