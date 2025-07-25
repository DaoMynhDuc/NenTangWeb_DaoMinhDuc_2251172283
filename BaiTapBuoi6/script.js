document.getElementById("btnThem").addEventListener("click", function () {
    alert("Thêm thành công")
})

document.getElementById("btnThem").addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn form reload trang
      
        // Lấy dữ liệu từ form
        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const birth = document.getElementById("birth").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
        const note = document.getElementById("note").value;
      
        // Xác định bảng và số thứ tự
        const table = document.getElementById("bangSinhvien").getElementsByTagName("tbody")[0];
        const rowCount = table.rows.length;
        const newRow = table.insertRow();
      
        // Thêm các ô vào hàng mới
        newRow.insertCell(0).innerText = rowCount + 1;
        newRow.insertCell(1).innerText = id;
        newRow.insertCell(2).innerText = name;
        newRow.insertCell(3).innerText = email;
        newRow.insertCell(4).innerText = gender;
        newRow.insertCell(5).innerText = birth;
        newRow.insertCell(6).innerHTML = `
            <button class="suaDong">Sửa</button>
            <button class="xoaDong" onclick="xoaDong(this)">Xóa</button>
            `;
  
    // Thông báo thành công
    let thongBao = document.getElementById("thongBao");
    thongBao.innerText = "Thêm sinh viên thành công!";
    setTimeout(() => {
      thongBao.innerText = "";
    }, 3000);
  
    // Reset form
    document.querySelector("form").reset();
  });
  
  
  