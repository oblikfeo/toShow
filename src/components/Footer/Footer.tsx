import styles from './styles.module.css'
import { Dispatch, SetStateAction } from "react";
import { ITask, TASK_STATUS, TaskStatus } from "../../types/types.ts";

interface IFooterProps {
    setTaskStatus: Dispatch<SetStateAction<TaskStatus>>
    tasks: ITask[]
    setTasks: Dispatch<SetStateAction<ITask[]>>
}

export const Footer = (props: IFooterProps) => {

    const { setTaskStatus, tasks, setTasks } = props

    const clearCompletedTasks = () => {
        setTasks(tasks.filter(task => task.taskStatus !== TASK_STATUS.completed))
    }

    return <div className={styles.footer}>

        <div className={styles.actions}>
            <span>{tasks.filter(task => task.taskStatus === TASK_STATUS.active).length} item left</span>
            <div>
                <span onClick={() => setTaskStatus(TASK_STATUS.all)}>All</span>
                <span onClick={() => setTaskStatus(TASK_STATUS.active)}>Active</span>
                <span onClick={() => setTaskStatus(TASK_STATUS.completed)}>Completed</span>
            </div>
            <span onClick={clearCompletedTasks}>Clear completed</span>
        </div>
    </div>
}
