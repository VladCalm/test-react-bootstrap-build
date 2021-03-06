import React from 'react';

export const Task = ({ task }) => (
    <tr className='task'>
        <td>{task.id}</td>
        <td>{task.location}</td>
        <td>{task.subject}</td>
        <td>{task.deadline}</td>
        <td>{task.sum}</td>
    </tr>
)