let result = document.getElementById('result');

// Append character to result input
function appendChar(char) {
  result.value += char;
}

// Delete last character from result input
function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}

// Clear result input
function clearResult() {
  result.value = '';
}

// Calculate result
function calculateResult() {
  let input = result.value;
  let resultValue;

  try {
    resultValue = eval(input);
    if (isNaN(resultValue) || !isFinite(resultValue)) {
      throw new Error('Invalid input');
    }
    result.value = resultValue;
  } catch (error) {
    result.value = 'Error';
  }
}