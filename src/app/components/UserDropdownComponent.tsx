import Link from "next/link";
import React from "react";

interface User {
    id: number,
    username: string,
    name: string
}

export const UserDropdownComponent = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await result.json();

    return <div className="p-5">
        <details className="dropdown">
            <summary className="btn m-1">choose user</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {users.map(user => <li key={user.id}>
                    <Link href={`/user/${user.id}`}>{user.username}</Link>
                </li>)}
            </ul>
        </details>
    </div>;
};