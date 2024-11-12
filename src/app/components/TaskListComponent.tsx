import React from "react";

interface Task {
    userId: number,
    id: number,
    title: string,
    completed: false
}

async function fetchTasksFor(userId: number) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    const tasks: Task[] = await result.json();
    return tasks;
}

interface User {
    username: string,
    name: string
}

async function fetchUserInfoFor(userId: number) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user: User = await result.json();
    return user;
}

export const TaskListComponent = async ({userId}: { userId: number }) => {
    const tasks = await fetchTasksFor(userId);
    const user = await fetchUserInfoFor(userId);

    console.log(user);

    return (
        <div className="container container-sm p-5">
            <p className="py-3">Aufgaben von {user.name}</p>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Done</th>
                    <th>Description</th>
                </tr>
                </thead>
                {tasks.map(task =>
                    <tr key={task.id}>
                        <td className="w-2">
                            <input type="checkbox" className="checkbox"/>
                        </td>
                        <td>{task.title}</td>
                    </tr>)}
            </table>
        </div>)
};