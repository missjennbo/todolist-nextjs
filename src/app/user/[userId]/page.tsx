import React from 'react';
import {TaskListComponent} from "@/app/components/TaskListComponent";
import {NavbarComponent} from "@/app/components/NavbarComponent";

const UserPage = async ({params}: { params: { userId: number } }) => {
    const {userId} = await params;
    return (
        <>
            <NavbarComponent/>
            <TaskListComponent userId={userId}/>
        </>
    );
};

export default UserPage;