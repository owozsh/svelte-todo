<li>
    <div class="taskToggle"></div>
    Hellooooo
</li>

<style lang="scss">
    @import "../styles/vars.scss";

    li {
        display: flex;
        align-items: center;
        color: $black;
        list-style: none;

        background-color: $white;

        padding: 20px 20px;
        border-radius: 10px;

        font-size: 1.5rem;

        cursor: pointer;

        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier();

        &:hover {
            transform: translate(0, -3px);
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
</style>