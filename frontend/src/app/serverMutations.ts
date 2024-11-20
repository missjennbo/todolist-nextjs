'use server';

import {Task} from "@/app/types/types";

export const addTask = async (userId: number, task: Task) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {'Content-type': 'application/json; charset=UTF-8',},
    }).then((data) => {
        return data.json();
    }).catch((error) => console.log(`Error: ${error}`))