export default function Post({ post }) {
  const { id, title, body } = post;
  const postStyle = {
    border: '2px solid purple',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '20px',
  };
  return (
    <div style={postStyle}>
      <p style={{ textAlign: 'left', fontStyle: 'italic' }}>Post : {id}</p>
      <h2>Title: {title}</h2>
      <h4>Status: {body}</h4>
    </div>
  );
}
