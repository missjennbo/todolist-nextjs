'use server';

export const addTask = async (userId: number, description: string) =>
    fetch(`http://localhost:8080/task/create`, {
        method: 'POST',
        body: JSON.stringify({userId, description}),
        headers: {'Content-type': 'application/json; charset=UTF-8',},
    }).then((data) => {
        return data.json();
    }).catch((error) => console.log(`Error: ${error}`))