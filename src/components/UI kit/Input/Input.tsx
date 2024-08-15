import { useState } from "react"
import styles from './styles.module.css'

interface IInputProps {
    addTask: (text: string) => void
}

export const Input = (props: IInputProps) => {
    const { addTask } = props

    const [value, setValue] = useState<string>('')

    const onClickHandler = () => {
        addTask(value)
        setValue('')
    }

    return <div className={styles.header}>
        <input className={styles.input} value={value} type="text" placeholder="What needs to be done?" onChange={(e) => setValue(e.target.value)} />
        <button className={styles.addBut} onClick={onClickHandler}>add</button>
    </div>
}
