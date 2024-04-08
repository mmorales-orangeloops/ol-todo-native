import { createContext } from 'react';

import { Task, tasks } from '../data/Data';

export const YourTasksContext = createContext({
    yourTasks: tasks,
    setYourTasks: (yourTasks: Task[]) => { }
});