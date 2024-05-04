function generateFibonacci() {
    var input = document.getElementById('termsInput').value;
    var errorMessage = document.getElementById('errorMessage');
    var fibonacciSeries = document.getElementById('fibonacciSeries');
  
    // Clear previous error message
    errorMessage.textContent = '';
  
    // Validate input
    if (!input || isNaN(input) || parseInt(input) <= 0 || parseInt(input) >= 100) {
      errorMessage.textContent = 'Please enter a valid integer less than 100.';
      fibonacciSeries.textContent = '';
      return;
    }
  
    var numTerms = parseInt(input);
    var fibonacci = [];
  
    // Generate Fibonacci sequence
    var a = 0, b = 1, temp;
    for (var i = 0; i < numTerms; i++) {
      fibonacci.push(a);
      temp = a + b;
      a = b;
      b = temp;
    }
  
    // Display Fibonacci sequence
    fibonacciSeries.textContent = 'Fibonacci Series: ' + fibonacci.join(', ');
  }