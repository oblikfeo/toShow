export interface ITaskProps {
    id: any,
    text: string,
    isDone: 'all' | 'active' | 'completed',
    compelteTask?: (any)
    completed?: (any)
}