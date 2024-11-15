'use client';

import React from "react";
import {Task} from "@/app/types/types";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    newTaskTitle: string
}

export const AddTaskFormComponent = ({userId}: { userId: number }) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()

    const addTask: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        const task: Task = {userId, title: data.newTaskTitle, completed: false}
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {'Content-type': 'application/json; charset=UTF-8',},
        }).then((data) => {
            console.log(data);
            reset();
        });
    }

    return <form id="add-task-form" onSubmit={handleSubmit(addTask)} className="space-x-2">
        <input {...register("newTaskTitle")} name="new-task-title" type="text" placeholder="Enter new task ..."
               className="input input-bordered"></input>
        <button type="submit" className="btn">Add task</button>
    </form>;
};