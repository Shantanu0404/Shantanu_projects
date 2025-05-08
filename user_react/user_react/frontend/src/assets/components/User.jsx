import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const User = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // For loading state
    const [error, setError] = useState(""); // For error state
    const navigate = useNavigate();

    useEffect(() => {
        // Fetching users
        axios.get("http://localhost:2000/user/show")
            .then((res) => {
                setUsers(res.data);
                setLoading(false); // Stop loading after data is fetched
            })
            .catch((err) => {
                setError("Error fetching users. Please try again later.");
                setLoading(false); // Stop loading on error
                console.log('Error fetching users:', err);
            });
    }, []);

    const deleteUser = (id) => {
        // Confirm before deleting user
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        axios.delete(`http://localhost:2000/user/delete/${id}`)
            .then(() => {
                // After deleting, refetch users
                setUsers(users.filter(user => user._id !== id));
            })
            .catch((err) => {
                setError("Error deleting user. Please try again later.");
                console.log('Error deleting user:', err);
            });
    };

    if (loading) {
        return <div className="container text-center my-5"><h4>Loading users...</h4></div>;
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">User List</h2>

            {/* Error message */}
            {error && <div className="alert alert-danger text-center">{error}</div>}

            <div className="table-responsive">
                <table className="table table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="2">No users found.</td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.username}</td>
                                    <td>
                                        <NavLink className="btn btn-sm btn-dark mx-2" to={`/admin/user/edit/${user._id}`}>
                                            Edit
                                        </NavLink>
                                        <button className="btn btn-sm btn-danger" onClick={() => deleteUser(user._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
