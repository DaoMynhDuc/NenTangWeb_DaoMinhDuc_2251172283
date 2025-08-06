import React, { useState, useEffect } from "react";

const BookForm = ({ onAddBook, onClose, editingBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  // Gán dữ liệu nếu đang sửa
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title || "");
      setAuthor(editingBook.author || "");
      setYear(editingBook.year || "");
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = { title, author, year };

    // Nếu đang sửa, thêm id vào
    if (editingBook) {
      bookData.id = editingBook.id;
    }

    onAddBook(bookData); // gọi hàm thêm/cập nhật
    onClose(); // đóng form
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{editingBook ? "Sửa sách" : "Thêm sách"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Tác giả"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Năm"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />

          <div className="modal-footer">
            <button type="button" onClick={onClose}>
              Đóng
            </button>
            <button type="submit">{editingBook ? "Cập nhật" : "Thêm"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
