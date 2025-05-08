const [loading, setLoading] = useState(false);

const saveUser = async () => {
  if (!user.username || !user.password) {
    return alert("Username and password are required.");
  }
  setLoading(true);
  try {
    const response = await axios.post('http://localhost:2000/user/add', user);
    console.log('User added:', response.data);
    navigate('/admin/user');
  } catch (error) {
    console.error('Error adding user:', error.response?.data || error.message);
    alert("Failed to add user.");
  } finally {
    setLoading(false);
  }
};
