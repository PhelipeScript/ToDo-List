import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/all';

import styles from './createNewTask.module.css';
import { NewTask } from './factories/NewTask';
import { TasksCounter } from './TasksCounter';

export function CreateNewTask() {
  const [tasks, setTasks] = useState(['']);

  const [tasksDone, setTasksDone] = useState(0);

  const [taskText, setTaskText] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, taskText]);
    setTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleCreateNewTask} className={styles.createNewTask}>
        <input 
          type="text" 
          value={taskText}
          placeholder="Adicione uma nova tarefa" 
          onChange={handleNewTaskChange}
        />
        <button>
          Criar
          <AiOutlinePlusCircle />
        </button>
      </form>

      <TasksCounter 
        tasksCreated={tasks.length - 1} 
        tasksDone={0} 
      />

      {tasks.length > 1 ? <NewTask /> : null}
      

    </div>
  )
}
