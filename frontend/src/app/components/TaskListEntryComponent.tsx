import {Task} from "@/app/types/types";

export const TaskListEntryComponent = ({task}: {task: Task}) => {
    return <tr key={task.id}>
        <td>
            <input type="checkbox" className="checkbox"/>
        </td>
        <td>{task.title}</td>
    </tr>;
}