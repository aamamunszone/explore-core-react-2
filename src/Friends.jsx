import Friend from './Friend';
import { use } from 'react';

export default function Friends({ fetchFriends }) {
  const friends = use(fetchFriends);
  //   console.log(friends);
  const friendsStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '20px',
  };
  return (
    <div style={friendsStyle}>
      <h3>Total Friends : {friends.length}</h3>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
