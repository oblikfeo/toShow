import {Dispatch, SetStateAction, useState} from "react"
import styles from "./styles.module.css"
import {ITask, TASK_STATUS, TaskStatus} from "../../types/types.ts";

interface IItemProps {
    id: string
    text: string
    taskStatus: TaskStatus
    setTasks: Dispatch<SetStateAction<ITask[]>>
}

export const TaskItem = (props: IItemProps) => {

    const { text, id, taskStatus, setTasks } = props

    const [isChecked, setIsChecked] = useState(taskStatus === TASK_STATUS.completed)

    const setTaskStatus = () => {
        setIsChecked(!isChecked)
        setTasks(ts => ts.map(task => task.id === id ? {...task, taskStatus: isChecked ? TASK_STATUS.active : TASK_STATUS.completed} : task))
    }

    return  (
        <div className={styles.task}>
            <input id={id} className={styles.input} type="checkbox" onChange={setTaskStatus} checked={isChecked}/>
            <label className={styles.label} htmlFor={id} />
            <div className={isChecked ? styles.strikethrough : ''}>{text}</div>
        </div>
    )
}
