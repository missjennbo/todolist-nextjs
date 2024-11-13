import React from "react";
import {TaskListEntryComponent} from "@/app/components/TaskListEntryComponent";
import {Task, User} from "@/app/types/types";
import {AddTaskModalComponent} from "@/app/components/AddTaskModalComponent";

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
        <div className="flex flex-col space-y-5 p-5">
            <div className="flex flex-row items-center space-x-4">
                <p>Tasks of {user.name}</p>
                <AddTaskModalComponent userId={user.id}/>
            </div>
            <div className="overflow-y-auto scrollbar w-full">
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
            </div>
            <div className="py-6">the end.</div>
        </div>)
};