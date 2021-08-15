<nav class="sidebar">
    <ul>
        <li>Today</li>
        <li>Everyday</li>
        <li>Someday</li>
    </ul>
</nav>

<style lang="scss">
    :global(ul) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        font-size: 36px;

        border: 0;
        margin: 0;
        padding: 50px;
        box-sizing: border-box;
        background-color: #1f1f1f;
    }

    :global(li) {
        border: 0;
        padding: 0;
        box-sizing: border-box;

        margin-bottom: 50px;
        
        &:last-of-type {
            margin-bottom: 0;
        }

        display: inline-block;

        cursor: pointer;
    }

    nav {
        display: flex;

        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        padding-right: 70px;

        height: 100%;
        width: 30%;
        
    }

    li {
        color: #FFF;
        list-style: none;
    }
</style>