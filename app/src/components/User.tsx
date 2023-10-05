import { useState } from "react";

interface User {
  id?: string | undefined;
  name: string | undefined;
}

function User() {
  const [users, setUsers] = useState<User[]>([
    {
      id: undefined,
      name: undefined,
    },
  ]);

  const addUser = () => {
    setUsers((prevUsers) => [...prevUsers, { id: "", name: "" }]);
  };
  return (
    <>
      <h1>Welcome</h1>
      <button
        onClick={() => {
          addUser();
        }}
      >
        Add
      </button>
      <h1>Listof Users</h1>
      <input type="text" />
      <input type="text" />

      {users.map((user, index) => {
        return (
          <div key={index}>
            <div>
              id: {user.id} - name: {user.name}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default User;
