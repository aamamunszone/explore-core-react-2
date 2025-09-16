import { useState } from 'react';

export default function Counter() {
  const counterStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '20px',
  };

  const [count, setCount] = useState(0);

  const handleCounter = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div style={counterStyle}>
      <h3>Total: {count}</h3>
      <button onClick={handleCounter}>Count</button>
    </div>
  );
}
