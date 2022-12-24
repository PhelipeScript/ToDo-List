import { ButtonHTMLAttributes, MouseEvent } from "react";
import { IoTrashOutline } from "react-icons/all";

import styles from './newTask.module.css';

interface NewTaskProps {
  name: string;
  onHandleDeleteTask: (taskName: string) => void;
}

export function NewTask({ name, onHandleDeleteTask }: NewTaskProps) {
  function deleteTask(event: MouseEvent<HTMLButtonElement>) {
    onHandleDeleteTask(event.currentTarget.name)
  }

  return (
    <div className={styles.task}>
      <input 
        type="checkbox" 
      />
      <p>{name}</p>
      <button name={name} onClick={deleteTask} >
        <IoTrashOutline />
      </button>
    </div>
  )
}
