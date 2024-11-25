export interface User {
    id: number,
    email: string,
    name: string
}

export interface Task {
    userId: number,
    id?: number,
    description: string,
    done: false
}
