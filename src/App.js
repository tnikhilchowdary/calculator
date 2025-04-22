import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
    } else {
      setResult(number1 + number2);
    }
  };

  const handleSubtraction = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
    } else {
      setResult(number1 - number2);
    }
  };

  const handleMultiplication = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
    } else {
      setResult(number1 * number2);
    }
  };

  const handleDivision = () => {
    if (num1 === '' || num2 === '') {
      setResult("Please enter both numbers");
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
      return;
    }

    if (number2 === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(number1 / number2);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>React Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>−</button>
      <button onClick={handleMultiplication}>×</button>
      <button onClick={handleDivision}>÷</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
