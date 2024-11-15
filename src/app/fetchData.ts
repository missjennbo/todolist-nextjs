import {Task, User} from "@/app/types/types";

export const fetchTasksFor = async (userId: number): Promise<Task[]> => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    return await result.json();
};

export const fetchUserInfoFor = async (userId: number): Promise<User> => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return await result.json();
};

export const fetchUsers = async (): Promise<User[]> => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return await result.json();
};