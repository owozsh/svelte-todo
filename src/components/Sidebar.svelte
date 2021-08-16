<script>

</script>

<nav class="sidebar">
    <ul>
        <li>Today</li>
        <li>Everyday</li>
        <li>Someday</li>
    </ul>
</nav>

<style lang="scss">
    @import '../styles/vars.scss';

    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-self: flex-end;
    
        padding-right: 70px;
    }
    
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        font-size: 36px;
        
        border: 0;
        margin: 0;
        padding: 50px;
        box-sizing: border-box;

        background-color: $black;
        border-radius: $roundedWindow;
    }

    li {
        color: $white;
        list-style: none;
        font-family: 'STIX Two Text', serif;

        border: 0;
        padding: 0;
        box-sizing: border-box;

        margin-bottom: 50px;
        
        &:last-of-type {
            margin-bottom: 0;
        }

        display: inline-block;

        cursor: pointer;

        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier();

        &:hover {
            transform: translate(3px, 0);
            color: $bright_white;
        }
    }
</style>