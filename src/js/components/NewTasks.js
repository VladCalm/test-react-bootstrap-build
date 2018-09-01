import React from 'react';
import { SearchBar } from './SearchBar'
import {TaskTable} from "./TaskTable";

export const NewTasks = () => (
    <div>
        <SearchBar/>
        <TaskTable/>
    </div>
)
