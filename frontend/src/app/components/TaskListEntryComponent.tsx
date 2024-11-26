'use client';

import {Task} from "@/app/types/types";
import {deleteTask, markTask} from "@/app/serverMutations";
import Image from 'next/image'

export const TaskListEntryComponent = ({task}: { task: Task }) => {
    const handleChange = () => {
        markTask(task.id).then((data) => {
            console.log(data);
        });
    }

    const onDeleteClick = () => {
        deleteTask(task.id).then(() => {
            console.log(`Successfully deleted task with id ${task.id}`)
        })
    }

    return <tr key={task.id}>
        <td>
            <input onChange={handleChange} checked={task.done} type="checkbox" className="checkbox"/>
        </td>
        <td>{task.description}</td>
        <td>
            <button onClick={onDeleteClick} className="btn btn-circle btn-sm">
                <Image src="/delete-icon.svg" alt="delete-icon" width={20} height={20}/>
            </button>
        </td>
    </tr>;
}