import { writable } from 'svelte/store';

export const tasks = writable([]);

if (typeof localStorage !== 'undefined') {
    tasks.set(JSON.parse(localStorage.getItem('tasks')) || []);
}

export function addTask(title) {
    tasks.update(tasks => {
        const newId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
        return [...tasks, {id: newId, title: title, status: false}];
    });

    tasks.subscribe(tasks => localStorage.setItem('tasks', JSON.stringify(tasks)));
}

export function deleteTask(id) {
    setTimeout(
        () => tasks.update(tasks => tasks = tasks.filter(task => task.id !== id)),
        1000
    );

    tasks.subscribe(tasks => localStorage.setItem('tasks', JSON.stringify(tasks)));
}