import { createContext, useState, useContext } from 'react';

import { Task, tasks } from '../data/Data';

const YourTasksContext = createContext({
    yourTasks: tasks,
    setYourTasks: (yourTasks: Task[]) => { }
});

export const useYourTasks = () => {
    return useContext(YourTasksContext);
}

export const YourTasksProvider = (props: any) => {
    const [yourTasks, setYourTasks] = useState(tasks);

    return (
        <YourTasksContext.Provider value={{ yourTasks: yourTasks, setYourTasks: setYourTasks }}>
            {props.children}
        </YourTasksContext.Provider>
    );
}