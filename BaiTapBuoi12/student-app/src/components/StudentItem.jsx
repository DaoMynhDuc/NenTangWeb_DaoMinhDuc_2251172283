import React from 'react'

function StudentItem({ student, index, onEdit, onDelete }) {
  return (
    <tr>
      <td style={{ width: 60, textAlign: 'center' }}>{index + 1}</td>
      <td>{student.studentId}</td>
      <td>{student.name}</td>
      <td>{student.className}</td>
      <td>{student.major}</td>
      <td>{student.email}</td>
      <td>
        <button className="btn small edit" onClick={onEdit}>Sửa</button>
        <button className="btn small del" onClick={onDelete}>Xóa</button>
      </td>
    </tr>
  )
}

export default StudentItem
