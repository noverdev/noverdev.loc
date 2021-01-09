export interface Task {
    id: number;
}

export interface TaskStatus {
    statusName: string,
    color: string,
    userRole: string[],
}