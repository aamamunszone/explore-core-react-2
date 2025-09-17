import Counter from './Counter';
import Player from './Batsman';
// import Users from './Users';
import Posts from './Posts';
import Friends from './Friends';
import './App.css';
import { Suspense } from 'react';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
//   (res) => res.json()
// );

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return await res.json();
};

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
};

function App() {
  function handleClick() {
    alert("I'm Clicked 1.");
  }

  const handleClick3 = () => {
    alert("I'm Clicked 3.");
  };

  const handleAdd5 = (num) => {
    const result = num + 5;
    alert(`Your Number is Now: ${result}`);
  };

  const handleBtnStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '20px',
  };

  return (
    <>
      <h1>Explore React</h1>

      <Suspense fallback={<h3>Friends Are Coming...</h3>}>
        <Friends fetchFriends={fetchFriends()}></Friends>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Posts Are Coming...</h3>}>
        <Posts fetchPosts={fetchPosts()}></Posts>
      </Suspense>

      {/* <button onClick="handleClick()">Click Me</button>
      <br />
      <br /> */}
      <div style={handleBtnStyle}>
        <button onClick={handleClick} className="btn-space">
          Click Me 1
        </button>
        <button
          onClick={function handleClick2() {
            alert("I'm Clicked 2.");
          }}
          className="btn-space"
        >
          Click Me 2
        </button>
        <button onClick={handleClick3} className="btn-space">
          Click Me 3
        </button>
        <button onClick={() => alert("I'm Clicked 4")}>Click Me 4</button>
        <br />
        <br />
        {/* <button onClick={handleAdd5(7)}>Click to Add 5</button> */}
        <button onClick={() => handleAdd5(12)}>Click to Add 5</button>
      </div>
      <Counter></Counter>
      <Player></Player>
    </>
  );
}

export default App;
