import './App.css';
import { useState } from 'react';

export default function Player() {
  const playerStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '20px',
  };

  const btnStyle = {
    border: '2px solid green',
    backgroundColor: 'yellowgreen',
  };

  // Total
  const [score, setScore] = useState(0);

  // Individual
  const [singles, setSingles] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedScore = score + 1;
    setScore(updatedScore);
    const updatedSinglesScore = singles + 1;
    setSingles(updatedSinglesScore);
  };

  const handleFour = () => {
    const updatedScore = score + 4;
    setScore(updatedScore);
    const updatedFoursScore = fours + 4;
    setFours(updatedFoursScore);
  };

  const handleSix = () => {
    const updatedScore = score + 6;
    setScore(updatedScore);
    const updatedSixesScore = sixes + 6;
    setSixes(updatedSixesScore);
  };
  return (
    <div style={playerStyle}>
      {score >= 50 ? (
        <p>
          <span
            style={{
              color: 'forestgreen',
            }}
          >
            Congratulations
          </span>{' '}
          for Half Century !
        </p>
      ) : (
        <p>
          You need{' '}
          <span
            style={{
              color: 'orangered',
            }}
          >
            {50 - score}
          </span>{' '}
          for Half Century.
        </p>
      )}
      <h1>
        Score:{' '}
        <span
          style={{
            color: 'forestgreen',
            fontFamily: 'monospace',
            fontSize: '80px',
          }}
        >
          {score}
        </span>
      </h1>
      <p>
        <span className="btn-space" style={{ color: 'grey' }}>
          Singles : {singles}/{singles}
        </span>{' '}
        <span className="btn-space" style={{ color: 'grey' }}>
          Fours : {fours}/{fours / 4}
        </span>{' '}
        <span className="btn-space" style={{ color: 'grey' }}>
          Sixes : {sixes}/{sixes / 6}
        </span>
      </p>
      <h3>Player: Sakib Al Hasan</h3>
      <button onClick={handleSingle} className="btn-space" style={btnStyle}>
        Singles
      </button>
      <button onClick={handleFour} className="btn-space" style={btnStyle}>
        Four
      </button>
      <button onClick={handleSix} style={btnStyle}>
        Six
      </button>
    </div>
  );
}
