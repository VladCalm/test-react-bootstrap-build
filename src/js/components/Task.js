import React from 'react';
export const Task = () => (
    <tr>
        <td>{this.props.id}</td>
        <td>{this.props.location}</td>
        <td>{this.props.subject}</td>
        <td>{this.props.deadline}</td>
        <td>{this.props.sum}</td>
    </tr>

)