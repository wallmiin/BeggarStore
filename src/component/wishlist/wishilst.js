import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../../images";
import "./wishlist.css";

const Wishlist = ({ books, onDelete }) => {
  const [wishBooks, setWishBooks] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWishBooks(books.filter((book) => book.wishlist === true));
    }, 1200);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wishlist container  mt-5 p-3 rounded cart">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="product-details mb-3">
            <h2>
              Đã <b>lưu</b>
            </h2>
            {wishBooks.length === 0 ? (
              <div className="conatiner text-center mt-5 mx-5">
                <h4>Bạn chưa lưu mục nào!</h4>
                <p className="mt-5 mr-5 h6 text-muted">
                  Tìm thấy thứ gì đó bạn thích? Hãy nhấn vào biểu tượng hình
                  trái tim bên cạnh sản phẩm để thêm nó vào danh sách yêu thích
                  của bạn! Tất cả các mục đã lưu của bạn sẽ xuất hiện ở đây.
                </p>
                <Link to={"/"}>
                  <button className="btn btn-dark rounded-3 mt-5">
                    Tiếp tục mua sắm
                  </button>
                </Link>
              </div>
            ) : (
              wishBooks.map((book) => (
                <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                  <div className="d-flex flex-row" key={book.id}>
                    <img
                      className="rounded"
                      src={images[book.id]}
                      width={60}
                      alt=""
                    />
                    <div className="ml-2  p-3">
                      <span className="font-weight-bold d-block mb-3 bookname">
                        {book.name}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <span className="d-block ml-5">{`${book.price}$`}</span>
                    <i
                      className="fas fa-trash mx-4 delete"
                      onClick={() => onDelete(book)}
                    ></i>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
