interface Task {
    userId: number,
    id: number,
    title: string,
    completed: false
}

export const TaskListComponent = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
    const tasks: Task[] = await result.json();

    return (<table className="table table-bordered">
        <thead>
        <tr>
            <th>User ID</th>
            <th>Title</th>
        </tr>
        </thead>
        {tasks.map(task => <tr key={task.id}>
            <td>{task.userId}</td>
            <td>{task.title}</td>
        </tr>)}
    </table>)
};