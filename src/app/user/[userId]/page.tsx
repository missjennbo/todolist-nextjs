import React from 'react';
import {TaskListComponent} from "@/app/components/TaskListComponent";

const UserPage = () => {
    return (
        <>
            <h1>Todos of User 1</h1>
            <TaskListComponent></TaskListComponent>
        </>
    );
};

export default UserPage;