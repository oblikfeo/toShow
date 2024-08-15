export enum TASK_STATUS  {
    all = 'all',
    active = 'active',
    completed = 'completed'
}

export type TaskStatus = keyof typeof TASK_STATUS

export interface ITask {
    id: string,
    text: string,
    taskStatus: TaskStatus,
}

