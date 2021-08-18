<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let id;
    export let title;
    export let done;
    
    const deleteEvent = createEventDispatcher();
    
    function deleteTask() {
        deleteEvent('deleteTask', {
            id: id,
            title: title,
            done: true
        });
    }
    
    let handleTick = () => {
        done = !done;

        setTimeout(deleteTask, 1000);
    }
</script>

<li out:fly={{x:25}}>
    <button on:click={handleTick}>
        <div class="taskToggle {done ? 'done' : ''}"></div>
        {title}
    </button>
</li>

<style lang="scss">
    @import "../styles/vars.scss";

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