import { use } from 'react';
import Post from './Post';

export default function Posts({ fetchPosts }) {
    const posts = use(fetchPosts);
//   console.log(posts);
  const postsStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '20px',
  };
  return (
    <div style={postsStyle}>
      <h3>Total Post : {posts.length}</h3>
      {posts.slice(0, 20).map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
