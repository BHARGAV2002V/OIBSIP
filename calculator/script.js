let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function calculate() {
  try {
    displayValue = displayValue.replace('^', '**');
    displayValue = eval(displayValue).toString();
    document.getElementById('result').value = displayValue;
  } catch (error) {
    displayValue = '';
    document.getElementById('result').value = 'Error';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = displayValue;
}
