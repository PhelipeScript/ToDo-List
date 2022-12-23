import { Header } from "./components/Header";

import './app.module.css';
import { CreateNewTask } from "./components/CreateNewTask";

export function App() {
  return (
    <div>
      <Header />
      <CreateNewTask />
    </div>
  )
}
