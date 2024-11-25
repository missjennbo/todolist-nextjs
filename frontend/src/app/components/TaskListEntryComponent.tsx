'use client';

import {Task} from "@/app/types/types";
import {markTask} from "@/app/serverMutations";

export const TaskListEntryComponent = ({task}: { task: Task }) => {
    const handleChange = () => {
        markTask(task.id).then((data) => console.log(data));
    }

    return <tr key={task.id}>
        <td>
            <input onChange={handleChange} checked={task.done} type="checkbox" className="checkbox"/>
        </td>
        <td>{task.description}</td>
    </tr>;
}