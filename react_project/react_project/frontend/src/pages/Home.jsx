import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/posts');
        setPosts(res.data);
      } catch (err) {
        setError('Failed to load posts. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await api.delete(`/posts/${postId}`);
      setPosts((prev) => prev.filter(post => post._id !== postId));
    } catch (err) {
      console.error('Failed to delete post:', err);
      alert('Could not delete the post.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📚 All Blog Posts</h2>
        <Link to="/create" className="btn btn-success">Create New Post</Link>
      </div>

      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4 mb-4" key={post._id}>
              <div className="card h-100 shadow-sm border-0">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.content.slice(0, 100)}...</p>
                  <div className="mt-auto">
                    <Link to={`/posts/${post._id}`} className="btn btn-sm btn-primary me-2">Read More</Link>
                    <Link to={`/edit/${post._id}`} className="btn btn-sm btn-secondary me-2">Edit</Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
