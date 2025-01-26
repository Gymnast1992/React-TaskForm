import React, {useState} from 'react';

import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from "./assets/Screenshot 2025-01-01 at 15.09.35.png";
import doingIcon from "./assets/Screenshot 2025-01-01 at 15.09.35.png";
import doneIcon from "./assets/Screenshot 2025-01-01 at 15.09.35.png";

const App = () => {
  const [tasks, setTasks] = useState([]);

  console.log("tasks", tasks);
  
  return (
      <div className='app'>
          <TaskForm setTasks={setTasks} />
          <main className='app_main'>
            <TaskColumn title="To do" icon={todoIcon}/>
            <TaskColumn title="Doing" icon={doingIcon}/>
            <TaskColumn title="Done" icon={doneIcon}/>
          </main>
      </div>
  )
}

export default App