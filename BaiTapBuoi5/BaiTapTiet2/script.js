function sayHello() {
    const name = document.getElementById('nameInput').value.trim();
  
    if (name) {
      document.getElementById('greeting').textContent = 'Xin chào, ' + name + '!';
    } else {
      document.getElementById('greeting').textContent = 'Vui lòng nhập tên!';
    }
  }
  