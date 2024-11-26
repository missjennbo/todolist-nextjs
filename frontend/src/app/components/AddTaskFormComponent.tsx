'use client';

import React, {useTransition} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {addTask} from "@/app/serverMutations";

type Inputs = {
    newTaskDescription: string
}

export const AddTaskFormComponent = ({userId}: { userId: number }) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const [isPending, startTransition] = useTransition();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        startTransition(() => {
            addTask(userId, data.newTaskDescription).then((data) => {
                console.log(data);
                reset();
            });
        })
    }

    return <form id="add-task-form" onSubmit={handleSubmit(onSubmit)} className="space-x-2">
        <input {...register("newTaskDescription", {required: true})} placeholder="Enter new task ..."
               className="input input-bordered"></input>
        <button type="submit" className="btn">{isPending ? "Adding ..." : "Add task"}</button>
    </form>;
};