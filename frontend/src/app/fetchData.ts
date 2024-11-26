import {Task, User} from "@/app/types/types";

export const fetchTasksFor = async (userId: number): Promise<Task[]> => {
    const result = await fetch(`${process.env.BACKEND_URL}/task/${userId}`);
    return await result.json();
};

export const fetchUserInfoFor = async (userId: number): Promise<User> => {
    const result = await fetch(`${process.env.BACKEND_URL}/user/${userId}`);
    return await result.json();
};

export const fetchUsers = async (): Promise<User[]> => {
    const result = await fetch(`${process.env.BACKEND_URL}/user`);
    return await result.json();
};