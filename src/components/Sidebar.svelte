<nav class="sidebar">
    <ul>
        <li>Today</li>
        <li>Everyday</li>
        <li>Someday</li>
    </ul>
</nav>

<style lang="scss">
    :global(ul) {
        border: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(li) {
        border: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        display: inline-block;
    }

    nav {
        display: flex;

        flex-direction: column;
        align-items: center;


        height: 100%;
        width: 300px;
        
        background-color: #1f1f1f;
    }

    li {
        color: #FFF;
        list-style: none;
    }
</style>