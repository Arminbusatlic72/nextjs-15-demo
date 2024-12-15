"use client";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
export default function UsersClient() {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch user data from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setUsers(data); // Update the state with fetched data
      } catch (error: any) {
        setError(error.message); // Set error state
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array ensures the effect runs once on component mount

  if (loading) return <p>Loading...</p>; // Show loading indicator
  if (error) return <p>Error: {error}</p>; // Show error message
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user: any) => (
          <li key={user.id} className="bg-gray-100 p-2 rounded shadow">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
