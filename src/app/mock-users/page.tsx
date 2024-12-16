import { revalidatePath } from "next/cache";
type MockUser = {
  id: number;
  name: string;
};
export default async function MockUsers() {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    "https://675fdf311f7ad2426999b5b7.mockapi.io/users"
  );
  const users = await response.json();
  async function addUser(formData: FormData) {
    "use server";

    const name = formData.get("name");
    console.log("Form data name:", name);
    const response = await fetch(
      "https://675fdf311f7ad2426999b5b7.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application.json"
        },
        body: JSON.stringify({ name })
      }
    );
    const newUser = await response.json();
    console.log("this is the new user:", newUser);
    revalidatePath("/mock-users");
  }
  return (
    <div className="py-10 px-2">
      <form className="mb-4" action={addUser}>
        <input type="text" name="name" required className="border p-2 mr-2" />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Add user
        </button>
      </form>
      <div className="grid grid-cols-4 gap-2">
        {users.map((user: MockUser) => (
          <div key={user.id} className="bg-gray-100 p-2 rounded shadow">
            <p className="text-sm text-gray-600">{user.id}</p>
            <p className="text-lg font-semibold">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
