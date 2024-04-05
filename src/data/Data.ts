export interface Task {
    id: number;
    name: string;
    detail: string;
    completed: boolean;
}

export const tasks: Task[] = [
    {
        id: 0,
        name: 'Learn TypeScript',
        detail: 'Detail for Learn TypeScript',
        completed: false
    },
    {
        id: 1,
        name: 'Build a to-do list app',
        detail: 'Detail for Build a to-do list app',
        completed: false
    },
    {
        id: 2,
        name: 'Practice coding',
        detail: 'Detail for Practice coding',
        completed: false
    }
];