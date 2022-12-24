import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/all';

import styles from './createNewTask.module.css';
import { NewTask } from './factories/NewTask';
import { TaskListEmpty } from './TaskListEmpty';
import { TasksCounter } from './TasksCounter';

export function CreateNewTask() {
  const [tasks, setTasks] = useState(['']);

  const [tasksDone, setTasksDone] = useState(['']);

  const [taskText, setTaskText] = useState('');

  function handleSetTasksDone(taskName: string) {
    if(tasksDone.includes(taskName)) {
      const tasksDoneWithoutDeletedOne = tasksDone.filter(task =>{
        return task!== taskName;
      })
      return setTasksDone(tasksDoneWithoutDeletedOne);
    }
    setTasksDone([...tasksDone, taskName]);
  }

  function handleDeleteTask(taskName: string) {
    const taskListWithoutDeletedOne = tasks.filter(task =>{
      return task !== taskName; 
    })
    const tasksDoneWithoutDeletedOne = tasksDone.filter(task =>{
      return task!== taskName;
    })

    setTasksDone(tasksDoneWithoutDeletedOne);
    setTasks(taskListWithoutDeletedOne);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, taskText]);
    setTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value)
  }

  const regex = /[a-zA-Z0-9]/;

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleCreateNewTask} className={styles.createNewTask}>
        <input 
          type="text" 
          value={taskText}
          placeholder="Adicione uma nova tarefa" 
          onChange={handleNewTaskChange}
        />
        <button disabled={!regex.test(taskText)} >
          Criar
          <AiOutlinePlusCircle />
        </button>
      </form>

      <TasksCounter 
        tasksCreated={tasks.length - 1} 
        tasksDone={tasksDone.length - 1} 
      />

      {tasks.length > 1 ? tasks.map(task => {
        if(task === '') return null;
        return (
          <NewTask 
            key={task} 
            name={task} 
            onHandleDeleteTask={handleDeleteTask}
            onHandleSetTasksDone={handleSetTasksDone}
          />
        )
      }) : <TaskListEmpty /> }
      

    </div>
  )
}
