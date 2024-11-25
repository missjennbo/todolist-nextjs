'use server';

const headers = {'Content-type': 'application/json; charset=UTF-8',};
const backendUrl = `http://localhost:8080`;

export const addTask = async (userId: number, description: string) =>
    fetch(`${backendUrl}/task/create`, {
        method: 'POST',
        body: JSON.stringify({userId, description}),
        headers
    }).then((data) => {
        return data.json();
    }).catch((error) => console.log(`Error: ${error}`))

// TODO fix this
export const markTask = async (taskId: number) =>
    fetch(`${backendUrl}/task/mark`, {
        method: 'POST',
        body: JSON.stringify({taskId}),
        headers
    }).then((data) => {
        return data.json()
    }).catch((error) => console.log(`Error: ${error}`))