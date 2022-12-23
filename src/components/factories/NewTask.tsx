import { IoTrashOutline } from "react-icons/all";

import styles from './newTask.module.css';

export function NewTask() {
  return (
    <div className={styles.task}>
      <input 
        type="checkbox" 
      />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <IoTrashOutline />
      </button>
    </div>
  )
}
