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

        //font-family: 'STIX Two Text', serif;
        font-size: 1.5rem;
    }

    .taskToggle {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;

        background-color: $white;

        border-radius: 50%;
        border: 2px solid $black;
    }
</style>