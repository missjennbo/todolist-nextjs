import React from 'react';
import {TaskListComponent} from "@/app/components/TaskListComponent";
import {NavbarComponent} from "@/app/components/NavbarComponent";
import {AddTaskFormComponent} from "@/app/components/AddTaskFormComponent";
import {fetchTasksFor, fetchUserInfoFor} from "@/app/fetchData";
import Link from "next/link";

const UserPage = async ({params}: { params: { userId: number } }) => {
    const {userId} = await params;
    const tasks = await fetchTasksFor(userId);
    const user = await fetchUserInfoFor(userId);

    return (
        <>
            <NavbarComponent text={`Tasks of ${user.name}`}/>
            <div className="p-6 space-y-10">
                <Link href={"/"} className="btn">Back</Link>
                <AddTaskFormComponent userId={user.id}/>
                <TaskListComponent tasks={tasks}/>
            </div>
        </>
    );
};

export default UserPage;