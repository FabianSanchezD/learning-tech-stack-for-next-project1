import React from 'react'

interface User {
    id: number;
    name: string;
}

const usersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'}); // it gets data from memory, data caching
  const users: User[] = await res.json(); // only implemented in fetch function

  console.log(users)

  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default usersPage