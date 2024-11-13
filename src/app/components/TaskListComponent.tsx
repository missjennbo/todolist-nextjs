import React from "react";
import {TaskListEntryComponent} from "@/app/components/TaskListEntryComponent";
import {Task, User} from "@/app/types/types";

async function fetchTasksFor(userId: number) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    const tasks: Task[] = await result.json();
    return tasks;
}

async function fetchUserInfoFor(userId: number) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user: User = await result.json();
    return user;
}

export const TaskListComponent = async ({userId}: { userId: number }) => {
    const tasks = await fetchTasksFor(userId);
    const user = await fetchUserInfoFor(userId);

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
                <tbody>
                {tasks.map(task => <TaskListEntryComponent key={task.id} task={task}/>)}
                </tbody>
            </table>
        </div>)
};