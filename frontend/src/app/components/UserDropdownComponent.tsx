import Link from "next/link";
import React from "react";
import {fetchUsers} from "@/app/fetchData";

interface User {
    id: number,
    username: string,
    name: string
}

export const UserDropdownComponent = async () => {
    const users: User[] = await fetchUsers();

    return <details className="dropdown p-5">
            <summary className="btn m-1">choose user</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {users.map(user => <li key={user.id}><Link href={`/user/${user.id}`}>{user.username}</Link></li>)}
            </ul>
        </details>;
};