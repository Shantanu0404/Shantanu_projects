import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        console.error('Failed to fetch post:', err);
        setError('Unable to load the post for editing.');
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/posts/${id}`, { title, content });
      navigate('/home');
    } catch (err) {
      console.error('Update failed:', err);
      setError(err.response?.data?.message || 'Failed to update post.');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.delete(`/posts/${id}`);
        navigate('/home');
      } catch (err) {
        console.error('Delete failed:', err);
        setError(err.response?.data?.message || 'Failed to delete post.');
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow border-0">
        <div className="card-body">
          <h2 className="card-title mb-4 text-center">✏️ Edit Post</h2>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                id="title"
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea
                id="content"
                className="form-control"
                rows="5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success">Update Post</button>
              <button type="button" onClick={handleDelete} className="btn btn-outline-danger">
                Delete Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
