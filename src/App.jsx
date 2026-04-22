import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("0"); // Что на экране
  const [firstNumber, setFirstNumber] = useState(null); // Первое число
  const [operator, setOperator] = useState(null); // Знак (+, -, *, /)

  // Функция для нажатия на цифры
  const inputDigit = (digit) => {
    setDisplay(display === "0" ? String(digit) : display + digit);
  };

  // Функция для выбора операции
  const handleOperator = (nextOperator) => {
    setFirstNumber(parseFloat(display));
    setOperator(nextOperator);
    setDisplay("0");
  };

  // Функция "Равно"
  const calculate = () => {
    const secondNumber = parseFloat(display);
    if (operator === '+') setDisplay(String(firstNumber + secondNumber));
    if (operator === '-') setDisplay(String(firstNumber - secondNumber));
    if (operator === '*') setDisplay(String(firstNumber * secondNumber));
    if (operator === '/') setDisplay(String(firstNumber / secondNumber));
    setOperator(null);
  };

  // Функция сброса (C)
  const clear = () => setDisplay("0");

  return (
    <div className="calculator-container">
      <div className="display">{display}</div>
      
      <div className="buttons-grid">
        <button onClick={() => inputDigit(7)}>7</button>
        <button onClick={() => inputDigit(8)}>8</button>
        <button onClick={() => inputDigit(9)}>9</button>
        <button className="op" onClick={() => handleOperator('/')}>/</button>

        <button onClick={() => inputDigit(4)}>4</button>
        <button onClick={() => inputDigit(5)}>5</button>
        <button onClick={() => inputDigit(6)}>6</button>
        <button className="op" onClick={() => handleOperator('*')}>*</button>

        <button onClick={() => inputDigit(1)}>1</button>
        <button onClick={() => inputDigit(2)}>2</button>
        <button onClick={() => inputDigit(3)}>3</button>
        <button className="op" onClick={() => handleOperator('-')}>-</button>

        <button onClick={clear}>C</button>
        <button onClick={() => inputDigit(0)}>0</button>
        <button className="equals" onClick={calculate}>=</button>
        <button className="op" onClick={() => handleOperator('+')}>+</button>
      </div>
    </div>
  );
}

export default App;