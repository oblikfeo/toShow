import {useState} from 'react'
import { TaskItem } from '../ToDoItem/TaskItem.tsx'
import { Input } from '../UI kit/Input/Input'
import styles from './styles.module.css'
import { Footer } from '../Footer/Footer'
import {ITask, TASK_STATUS, TaskStatus} from "../../types/types.ts";



export const TasksList = () => {

    const [tasks, setTasks] = useState<ITask[]>([])
    const [taskStatus, setTaskStatus] = useState<TaskStatus>(TASK_STATUS.all)

    const createTask = (text: string) => ({
        id: String(Date.now()),
        text,
        taskStatus: TASK_STATUS.active
    })

    const addTask = (text: string) => {
        const newTask = createTask(text)
        setTasks([...tasks, newTask])
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>todos</h1>
            <div className={styles.container}>
                <Input addTask={addTask}/>
                {tasks.filter((item) => item.taskStatus === taskStatus || taskStatus === TASK_STATUS.all).map((task) => (
                    <TaskItem
                        id={task.id}
                        text={task.text}
                        key={task.id}
                        taskStatus={task.taskStatus}
                        setTasks={setTasks}
                    />
                ))}
            </div>
            <Footer setTaskStatus={setTaskStatus} tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}
