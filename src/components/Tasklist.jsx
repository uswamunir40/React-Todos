import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="card mt-3 todo-item" style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
      <ul className="list-group list-group-flush" style={{ width: '100%' }}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => onDelete(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
