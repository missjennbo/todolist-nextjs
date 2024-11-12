export interface User {
    username: string,
    name: string
}

export interface Task {
    userId: number,
    id: number,
    title: string,
    completed: false
}
