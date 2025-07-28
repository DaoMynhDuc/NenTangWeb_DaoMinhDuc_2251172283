let selectedRow = null;

//them
document.getElementById("btnThem").addEventListener("click", function (e) {
  e.preventDefault();

  const id = document.getElementById("id").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const birth = document.getElementById("birth").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
  const note = document.getElementById("note").value;

  // validation
  if (id === "" ) {
    alert("Mã sinh viên không được để trống");
    return;
  }

  if (name === "" ) {
    alert("Tên sinh viên không được để trống");
    return;
  }

  if (email === "" ) {
    alert("Email không được để trống");
    return;
  }


  const regexEmail = /^\S+@\S+\.\S+$/;
  if (!regexEmail.test(email)) {
    alert("Email không hợp lệ");
    return;
  }

  const table = document.getElementById("bangSinhvien").getElementsByTagName("tbody")[0];
  const rowCount = table.rows.length;
  const newRow = table.insertRow();

  newRow.insertCell(0).innerText = rowCount + 1;
  newRow.insertCell(1).innerText = id;
  newRow.insertCell(2).innerText = name;
  newRow.insertCell(3).innerText = email;
  newRow.insertCell(4).innerText = gender;
  newRow.insertCell(5).innerText = birth;
  newRow.insertCell(6).innerHTML = `
    <button class="suaDong">Sửa</button>
    <button class="xoaDong">Xóa</button>
  `;

  document.getElementById("thongBao").innerText = "Thêm sinh viên thành công!";
  setTimeout(() => document.getElementById("thongBao").innerText = "", 3000);
  document.querySelector("form").reset();
});

// sua dong trong bang
document.getElementById("bangSinhvien").addEventListener("click", function (e) {
  if (e.target.classList.contains("xoaDong")) {
    xoaDong(e.target);
  } else if (e.target.classList.contains("suaDong")) {
    suaDong(e.target);
  }
});

function suaDong(btn) {
  selectedRow = btn.parentElement.parentElement;

  document.getElementById("id").value = selectedRow.cells[1].innerText;
  document.getElementById("name").value = selectedRow.cells[2].innerText;
  document.getElementById("email").value = selectedRow.cells[3].innerText;
  document.getElementById("birth").value = selectedRow.cells[5].innerText;

  const gender = selectedRow.cells[4].innerText;
  if (gender === "Nam") {
    document.getElementById("male").checked = true;
  } else if (gender === "Nữ") {
    document.getElementById("female").checked = true;
  }
}

//xu ly nut cap nhat
document.getElementById("btnSua").addEventListener("click", function (e) {
  e.preventDefault();

  if (!selectedRow) {
    alert("Vui lòng chọn một dòng để cập nhật.");
    return;
  }

  const id = document.getElementById("id").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const birth = document.getElementById("birth").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "";

  if (id === "" ) {
    alert("Mã sinh viên không được để trống");
    return;
  }

  if (name === "" ) {
    alert("Tên sinh viên không được để trống");
    return;
  }

  if (email === "" ) {
    alert("Email không được để trống");
    return;
  }

  const regexEmail = /^\S+@\S+\.\S+$/;
  if (!regexEmail.test(email)) {
    alert("Email không hợp lệ");
    return;
  }

  selectedRow.cells[1].innerText = id;
  selectedRow.cells[2].innerText = name;
  selectedRow.cells[3].innerText = email;
  selectedRow.cells[4].innerText = gender;
  selectedRow.cells[5].innerText = birth;

  document.getElementById("thongBao").innerText = "Cập nhật thành công!";
  setTimeout(() => document.getElementById("thongBao").innerText = "", 3000);

  selectedRow = null;
  document.querySelector("form").reset();
});

// Xoa
function xoaDong(btn) {
  if (confirm("Bạn có chắc chắn muốn xóa?")) {
    btn.parentElement.parentElement.remove();
    document.getElementById("thongBao").innerText = "Xóa thành công!";
    setTimeout(() => document.getElementById("thongBao").innerText = "", 3000);
  }
}
