import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import Confetti from './Confetti';
import { evaluate } from 'mathjs';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [confetti, setConfetti] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = evaluate(input);
        setResult(evalResult.toString());
        setInput(evalResult.toString());
        if (evalResult.toString().includes('5') && evalResult.toString().includes('6')) {
          setConfetti(true);
          setTimeout(() => setConfetti(false), 1500);
        }
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      {confetti && <Confetti />}
      <Display input={input} result={result} />
      <div className="buttons">
        {['7', '8', '9', '/', 'sin', 'cos', 'tan', 'log', '4', '5', '6', '*', 'exp', 'sqrt', '(', ')', '1', '2', '3', '-', '!', 'rnd', '0', '.', '=', '+', 'C'].map((button) => (
          <Button key={button} value={button} onClick={() => handleButtonClick(button)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
