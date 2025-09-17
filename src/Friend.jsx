export default function Friend({ friend }) {
  const { id, name, username, email, phone } = friend;
  const friendStyle = {
    border: '2px solid violet',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '20px',
  };
  return (
    <div style={friendStyle}>
      <p style={{ textAlign: 'left', fontStyle: 'italic' }}>Friend : {id}</p>
      <h3>
        Name: <span style={{ color: 'orangered' }}>{name}</span>
      </h3>
      <h4>
        Username: <span style={{ color: 'blue' }}>{username}</span>
      </h4>
      <h4>
        Email: <span style={{ color: 'blueviolet' }}>{email}</span>
      </h4>
      <h4>
        Phone: <span style={{ color: 'green' }}>{phone}</span>
      </h4>
    </div>
  );
}
