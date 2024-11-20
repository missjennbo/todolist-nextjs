import React from "react";
import {TaskListEntryComponent} from "@/app/components/TaskListEntryComponent";
import {Task} from "@/app/types/types";

export const TaskListComponent = async ({tasks}: { tasks: Task[] }) =>
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
    </table>;