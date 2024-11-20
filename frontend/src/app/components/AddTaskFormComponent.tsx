'use client';

import React from "react";
import {Task} from "@/app/types/types";
import {SubmitHandler, useForm} from "react-hook-form";
import {addTask} from "@/app/serverMutations";

type Inputs = {
    newTaskTitle: string
}

export const AddTaskFormComponent = ({userId}: { userId: number }) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const task: Task = {userId, title: data.newTaskTitle, completed: false}
        addTask(userId, task).then((data) => {
            console.log(data);
            reset();
        });
    }

    return <form id="add-task-form" onSubmit={handleSubmit(onSubmit)} className="space-x-2">
        <input {...register("newTaskTitle")} name="new-task-title" type="text" placeholder="Enter new task ..."
               className="input input-bordered"></input>
        <button type="submit" className="btn">Add task</button>
    </form>;
};