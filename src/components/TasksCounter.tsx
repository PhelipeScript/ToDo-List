import styles from './tasksCounter.module.css';

interface Counter {
  tasksCreated: number;
  tasksDone: number;
}

export function TasksCounter({ tasksCreated, tasksDone }: Counter) {
  return (
    <div className={styles.tasksCounter}>
      <div className={styles.tasksCreatedCounter}>
        <strong>Tarefas criadas</strong>
        <span className={styles.counter}>{tasksCreated}</span>
      </div>
      <div className={styles.tasksDoneCounter}>
        <strong>Concluídas</strong>
        <span className={styles.counter}>
          {tasksCreated == 0 ? '0' : `${tasksDone} de ${tasksCreated}`}
        </span>
      </div>
    </div>
  )
}
