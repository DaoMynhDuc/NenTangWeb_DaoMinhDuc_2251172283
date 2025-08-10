import React, { useEffect, useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function StudentForm({ onAdd, onUpdate, editingStudent, onCancel }) {
  const [form, setForm] = useState({
    studentId: '',
    name: '',
    className: '',
    major: '',
    email: ''
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (editingStudent) {
      setForm({
        studentId: editingStudent.studentId,
        name: editingStudent.name,
        className: editingStudent.className,
        major: editingStudent.major,
        email: editingStudent.email
      })
      setErrors({})
    } else {
      setForm({
        studentId: '',
        name: '',
        className: '',
        major: '',
        email: ''
      })
      setErrors({})
    }
  }, [editingStudent])

  const validate = () => {
    const e = {}
    if (!form.studentId.trim()) e.studentId = 'Mã sinh viên không được để trống'
    if (!form.name.trim()) e.name = 'Họ tên không được để trống'
    if (!form.className.trim()) e.className = 'Lớp không được để trống'
    if (!form.major.trim()) e.major = 'Ngành không được để trống'
    if (!form.email.trim()) e.email = 'Email không được để trống'
    else if (!emailRegex.test(form.email.trim())) e.email = 'Email không hợp lệ'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    if (editingStudent) {
      onUpdate({ ...editingStudent, ...form })
    } else {
      onAdd(form)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h3>{editingStudent ? 'Sửa sinh viên' : 'Thêm sinh viên'}</h3>

      <div className="form-group">
        <label htmlFor="studentId">Mã sinh viên</label>
        <input id="studentId" name="studentId" value={form.studentId} onChange={handleChange} placeholder="Ví dụ: SV001" />
        {errors.studentId && <div className="error">{errors.studentId}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="name">Họ và tên</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Ví dụ: Nguyễn Văn A" />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="className">Lớp</label>
        <input id="className" name="className" value={form.className} onChange={handleChange} placeholder="Ví dụ: CNTT1" />
        {errors.className && <div className="error">{errors.className}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="major">Ngành</label>
        <input id="major" name="major" value={form.major} onChange={handleChange} placeholder="Ví dụ: Công nghệ thông tin" />
        {errors.major && <div className="error">{errors.major}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={form.email} onChange={handleChange} placeholder="ví dụ: abc@gmail.com" />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn submit">{editingStudent ? 'Cập nhật' : 'Thêm'}</button>
        <button type="button" className="btn cancel" onClick={onCancel}>Hủy</button>
      </div>
    </form>
  )
}

export default StudentForm
