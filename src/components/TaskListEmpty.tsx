import { TiClipboard } from "react-icons/all";

import styles from './taskListEmpty.module.css';

export function TaskListEmpty() {
  return (
    <div className={styles.taskListEmpty}>
      <TiClipboard className={styles.clipBoard} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
