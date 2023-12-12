import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./edit.css";
import { useState } from "react";

const Edit = ({ books, onDelete }) => {
  const [editBooks, setEditBooks] = useState(books);

  useEffect(() => {
    setEditBooks(books);
  }, [books]);

  return (
    <div>
      <table className="table mx-auto w-75">
        <thead className="thead-dark me-auto">
          <tr>
            <th scope="col">Sách ID</th>
            <th scope="col">Tên Sách</th>
            <th scope="col">Giá Sách</th>
            <th scope="col">Sửa</th>
            <th scope="col">Xóa</th>
          </tr>
        </thead>
        <tbody>
          {editBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.price}</td>
              <td>
                <Link to={"./"}>
                  <i className="fas fa-edit"></i>
                </Link>
              </td>
              <td>
                <i
                  className="fas fa-trash delete"
                  onClick={() => onDelete(book)}
                ></i>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Edit;
