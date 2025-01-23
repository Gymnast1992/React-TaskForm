import React from 'react';
// import Todo from "../assets/Screenshot 2025-01-01 at 15.09.35.png";
import "./TaskColumn.css";
import TaskCard from './TaskCard';

const TaskColumn = ({title, icon}) => {
    return (
        <section className='task_column'>
            <h2 className="task_column_heading">
                <img className="task_column_icon" src={icon} alt="" />{" "}{title}
            </h2>

            <TaskCard/>
        </section>
    )
}

export default TaskColumn