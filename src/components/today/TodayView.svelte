<script>
    import { fly } from 'svelte/transition';

    import { tasks, addTask, deleteTask } from '../../storage/tasks';

    import AddButton from "../widgets/AddButton.svelte";
</script>

<div class="mainView">
    <ul>
        {#each $tasks as task}
            <li in:fly={{y:25}} out:fly={{x:25}}>
                <button on:click={
                    () => {
                        deleteTask(task.id);
                        task.status = !task.status;
                    }
                }>
                    <div class="taskToggle {task.status ? 'done' : ''}"></div>
                    {task.title}
                </button>
            </li>
        {/each}
    </ul>
    <AddButton on:click={() => addTask(prompt())}/>
</div>

<style lang="scss">
    @import '../../styles/vars.scss';

    .mainView {
        position: relative;
        display: flex;
        flex-direction: column;
        
        background-color: $black;
        border-radius: $roundedWindow;
    }

    ul {
        margin: 0;
        padding: 1rem;
    }

    li {
        list-style: none;

        margin-bottom: 1rem;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    button {
        display: flex;
        align-items: center;
        color: $black;

        width: 100%;

        background-color: $white;

        padding: 20px 20px;
        border: none;
        border-radius: $roundedElement;

        font-size: 1.5rem;

        cursor: pointer;

        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier();

        &:hover {
            transform: translate(0, -3px);
            background-color: $bright_white;

            .taskToggle {
                border: 2px solid $bright_white;
            }
        }
    }

    .taskToggle {
        width: 1rem;
        height: 1rem;
        margin-right: 1rem;

        border-radius: 50%;
        border: 2px solid $white;

        box-shadow: 0 0 0 3px $black;

        transition-duration: 0.1s;
        transition-timing-function: cubic-bezier();
    }

    .done {
        background-color: $black;
    }
</style>