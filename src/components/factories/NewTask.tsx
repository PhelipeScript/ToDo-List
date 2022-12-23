import { IoTrashOutline } from "react-icons/all";

import styles from './newTask.module.css';

interface TaskName {
  name: string;
}

export function NewTask({ name }: TaskName) {
  return (
    <div className={styles.task}>
      <input 
        type="checkbox" 
      />
      <p>{name}</p>
      <button>
        <IoTrashOutline />
      </button>
    </div>
  )
}
