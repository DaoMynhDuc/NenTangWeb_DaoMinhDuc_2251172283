import React from "react";

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Tiêu đề</th>
          <th>Tác giả</th>
          <th>Năm</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>
              <button onClick={() => onEdit(book)}>Sửa</button>
              <button onClick={() => onDelete(book.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
