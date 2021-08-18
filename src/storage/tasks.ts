import { writable } from 'svelte/store';

type Task = {
    id: number;
    title: string;
    status: boolean;
}

export const tasks = writable([]);

export function addTask(title) {
    const newId = tasks.subscribe(tasks => tasks.length);
    tasks.update(tasks => tasks = [...tasks, {id: newId, title: title, status: false}]);
}

export function deleteTask(id) {
    setTimeout(
        () => tasks.update(tasks => tasks = tasks.filter(task => task.id !== id)),
        1000
    )
}