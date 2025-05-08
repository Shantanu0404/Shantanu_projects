const [loading, setLoading] = useState(false);

const updateUser = () => {
  if (!user.username) {
    return alert("Username is required.");
  }
  setLoading(true);
  const updatedUser = { username: user.username };
  if (user.password) updatedUser.password = user.password;

  axios.put(`http://localhost:2000/user/update/${id}`, updatedUser)
    .then(() => navigate('/admin/user'))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
};
