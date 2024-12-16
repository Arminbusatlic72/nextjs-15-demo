import { use } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
export default async function UserServer() {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user: User) => (
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
