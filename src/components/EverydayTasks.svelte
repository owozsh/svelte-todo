<script>
    import Task from "./Task.svelte";

    export let tasks;

    function handleDeleteTask(event) {
        tasks = tasks.filter(task => task.id !== event.detail.id);
    }
</script>

<ul>
    {#each tasks as task}
    <Task id={task.id} title={task.title} done={task.done} on:deleteTask={handleDeleteTask}/>
	{/each}
</ul>

<style lang="scss">
    @import "../styles/vars.scss";

    ul {
        margin: 0;
        padding: 1rem;
    }
</style>