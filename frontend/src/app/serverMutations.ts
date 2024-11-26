'use server';

import {revalidateTag} from "next/cache";

const headers = {'Content-type': 'application/json; charset=UTF-8',};

export const addTask = async (userId: number, description: string) =>
    fetch(`${process.env.BACKEND_URL}/task/create`, {
        method: 'POST',
        body: JSON.stringify({userId, description}),
        headers,
        next: {tags: ["tasks"]}
    }).then((data) => {
        revalidateTag("tasks");
        return data.json();
    }).catch((error) => console.log(`Error: ${error}`))

export const markTask = async (taskId: number) =>
    fetch(`${process.env.BACKEND_UR}/task/mark/${taskId}`, {
        method: 'POST',
        headers,
        next: {tags: ["tasks"]}
    }).then((data) => {
        revalidateTag("tasks");
        return data.json()
    }).catch((error) => console.log(`Error: ${error}`))

export const deleteTask = async (taskId: number) => {
    fetch(`${process.env.BACKEND_UR}/task/delete/${taskId}`, {
        method: 'DELETE',
        headers,
        next: {tags: ["tasks"]}
    }).then(() => {
        revalidateTag("tasks");
        return
    }).catch((error) => console.log(`Error: ${error}`))
}