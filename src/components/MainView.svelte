<script>
    import AddButton from "./AddButton.svelte";
    import EverydayTasks from "./EverydayTasks.svelte";

    let tasks = [
        {'id': 1, 'title': 'test1', 'done': false},
        {'id': 2, 'title': 'test2', 'done': false}
    ];

    let addTask = () => {
        let newId = tasks[tasks.length - 1].id + 1;
		tasks = [...tasks, {id: newId, title: 'test3', done: false}];
		console.log('hello');
    }

</script>

<div class="mainView">
    <EverydayTasks tasks={tasks}/>
    <AddButton on:click={addTask}/>
</div>

<style lang="scss">
    @import '../styles/vars.scss';

    .mainView {
        position: relative;
        display: flex;
        flex-direction: column;
        
        background-color: $black;
        border-radius: $roundedWindow;
    }
</style>