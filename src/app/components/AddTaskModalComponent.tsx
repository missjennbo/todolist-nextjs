'use client';

import React from "react";
import {Task} from "@/app/types/types";

const openAddTaskModal = () => {
    if (document) {
        (document.getElementById("add_task_modal") as HTMLDialogElement).showModal();
    }
};

export const AddTaskModalComponent =  ({userId}: { userId: number }) => {
    const onAddTaskClick = (formData: FormData) => {
        const taskTitle: string = formData.get("new-task-title")?.toString() || "";

        const task: Task = {userId, title: taskTitle, completed: false}

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {'Content-type': 'application/json; charset=UTF-8',},
        }).then((data) => console.log(data));

        (document.getElementById("add_task_modal") as HTMLDialogElement).close();
    };

    return <>
        <button className="btn" onClick={openAddTaskModal}>Add task</button>
        <dialog id="add_task_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add task</h3>
                <div className="modal-open">
                    <form action={onAddTaskClick} method="dialog">
                        <div className="py-3">
                            <input name="new-task-title" type="text" placeholder="Enter task ..."
                                   className="input-md w-full"></input>
                        </div>
                        <div className="flex space-x-2">
                            <button type="submit" className="btn">Submit</button>
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    </>;
};