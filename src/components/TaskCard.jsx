import React from 'react';
import './TaskCard.css';
import Tag from "./Tag";
import deleteIcon from "../assets/Screenshot 2025-01-01 at 15.09.35.png";

const TaskCard = ({title, tags}) => {
    return (
        <article className="task_card">
            <p className="task_text">{title}</p>

            <div className="task_card_bottom_line">
                <div className="task_card_tags">
                    {
                        tags.map((tag, index) => (
                        <Tag key={index} tagName={tag} selected={true} />
                        ))}
                </div>
                <div className="task_delete">
                    <img src={deleteIcon} className="delete_icon" alt="" />
                </div>
            </div>
        </article>
    )
}

export default TaskCard;