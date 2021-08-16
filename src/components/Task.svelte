<script>
    export let taskTitle;
    let checked = false;

    let handleTick = () => {
        checked = !checked;
    }
</script>

<li>
    <button on:click={handleTick}>
        <div class="taskToggle {checked ? 'checked' : ''}"></div>
        {taskTitle}
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

    .checked {
        background-color: $black;
    }
</style>