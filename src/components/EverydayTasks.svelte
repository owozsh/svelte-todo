<script>
    import Task from "./Task.svelte";

    let tasks = ['test1', 'test2'];
</script>

<ul>
    {#each tasks as task}
    <Task taskTitle={task}/>
	{/each}
</ul>

<style lang="scss">
    @import "../styles/vars.scss";

    ul {
        margin: 0;
        padding: 1rem;
    }
</style>