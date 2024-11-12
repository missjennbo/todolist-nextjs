import React from "react";

interface Task {
    userId: number,
    id: number,
    title: string,
    completed: false
}

export const TaskListComponent = async ({userId}: { userId: number }) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    const tasks: Task[] = await result.json();

    return (
        <div className="container container-sm p-5">
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