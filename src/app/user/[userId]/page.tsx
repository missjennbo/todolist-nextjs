import React from 'react';
import {TaskListComponent} from "@/app/components/TaskListComponent";
import Link from "next/link";

const UserPage = () => {
    return (
        <>
            <Link href="/">Back</Link>
            <h1>Todos of User 1</h1>
            <TaskListComponent></TaskListComponent>
        </>
    );
};

export default UserPage;