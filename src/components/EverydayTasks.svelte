<script>
    import Task from "./Task.svelte";

    export let tasks = [
        {'title': 'test1', 'done': false},
        {'title': 'test2', 'done': false}
    ];

    let handleDelete = (event) => {
        tasks = tasks.filter(task => task.title !== event.detail.title);
    }
</script>

<ul>
    {#each tasks as task}
    <Task title={task.title} done={task.done} on:deleteTask={handleDelete}/>
	{/each}
</ul>

<style lang="scss">
    @import "../styles/vars.scss";

    ul {
        margin: 0;
        padding: 1rem;
    }
</style>