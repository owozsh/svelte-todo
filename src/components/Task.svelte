<script>
    let checked = false;
</script>

<li>
    <button on:click={() => console.log('clicked')}>
        <div class="taskToggle {checked ? 'checked' : ''}"></div>
        Hellooooo
    </button>
</li>

<style lang="scss">
    @import "../styles/vars.scss";

    li {
        list-style: none;
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
            //transform: translate(0, -3px);
            background-color: $bright_white;
        }
    }

    .taskToggle {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;

        border-radius: 50%;
        border: 2px solid $black;
    }

    .checked {
        background-color: $black;
    }
</style>