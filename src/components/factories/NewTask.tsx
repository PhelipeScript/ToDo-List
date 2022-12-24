import { ButtonHTMLAttributes, MouseEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/all";

import styles from './newTask.module.css';

interface NewTaskProps {
  name: string;
  onHandleDeleteTask: (taskName: string) => void;
  onHandleSetTasksDone: (taskName: string) => void;
}

export function NewTask({ name, onHandleDeleteTask, onHandleSetTasksDone }: NewTaskProps) {
  function handleSetTaskAsDone() {
    onHandleSetTasksDone(name)
  }

  function handleDeleteTask(event: MouseEvent<HTMLButtonElement>) {
    onHandleDeleteTask(event.currentTarget.name)
  }

  return (
    <div className={styles.task}>
      <input 
        onClick={handleSetTaskAsDone}
        type="checkbox" 
      />
      <p>{name}</p>
      <button name={name} onClick={handleDeleteTask} >
        <IoTrashOutline />
      </button>
    </div>
  )
}
