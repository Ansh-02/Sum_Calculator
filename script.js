function calculateSum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById('result').innerText = 'The sum is: ' + sum;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers';
    }
}