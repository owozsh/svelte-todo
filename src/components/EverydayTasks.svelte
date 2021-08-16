<script>
    import Task from "./Task.svelte";

    export let tasks = ['test1', 'test2'];

    let handleDelete = (event) => {
        tasks = tasks.filter(task => task !== event.detail.taskTitle);
    }
</script>

<ul>
    {#each tasks as task}
    <Task taskTitle={task} on:deleteTask={handleDelete}/>
	{/each}
</ul>

<style lang="scss">
    @import "../styles/vars.scss";

    ul {
        margin: 0;
        padding: 1rem;
    }
</style>