import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import "./index.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', year: 1936 },
    { id: 2, title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu', author: 'Rosie Nguyễn', year: 2016 },
    { id: 3, title: 'Nhà Giả Kim', author: 'Paulo Coelho', year: 1988 }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  // Load từ Local Storage khi khởi động
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // Cập nhật Local Storage mỗi khi books thay đổi
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAddOrUpdate = (book) => {
    if (editingBook) {
      // Cập nhật
      const updatedBooks = books.map((b) =>
        b.id === editingBook.id ? { ...book, id: editingBook.id } : b
      );
      setBooks(updatedBooks);
    } else {
      // Thêm mới
      const newBook = { ...book, id: Date.now() };
      setBooks([...books, newBook]);
    }
    setEditingBook(null);
    setShowForm(false);
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa sách này không?")) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <div className="app-container">
      <h1>Quản Lý Sách</h1>
      <button className="add-button" onClick={() => { setShowForm(true); setEditingBook(null); }}>
        Thêm Sách
      </button>

      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingBook ? "Sửa Sách" : "Thêm Sách"}</h2>
            <BookForm
              onAddBook={handleAddOrUpdate}
              editingBook={editingBook}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
