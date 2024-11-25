import {Task, User} from "@/app/types/types";

const backendUrl = "http://localhost:8080";

export const fetchTasksFor = async (userId: number): Promise<Task[]> => {
    const result = await fetch(`${backendUrl}/task/${userId}`);
    return await result.json();
};

export const fetchUserInfoFor = async (userId: number): Promise<User> => {
    const result = await fetch(`${backendUrl}/user/${userId}`);
    return await result.json();
};

export const fetchUsers = async (): Promise<User[]> => {
    const result = await fetch(`${backendUrl}/user`);
    return await result.json();
};