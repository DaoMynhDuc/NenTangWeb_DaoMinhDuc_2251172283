document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const sum = num1 + num2;

    document.getElementById('result').textContent = 'Kết quả: ' + sum;
  });