<script>
    import TiPlus from 'svelte-icons/ti/TiPlus.svelte';
</script>

<button on:click>
    <div class="icon">
        <TiPlus/>
    </div>
</button>

<style lang="scss">
    @import '../../styles/vars.scss';

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        right: 20px;
        bottom: 20px;
        width: 3rem;
        height: 3rem;
        color: $black;
    
        border: none;
        border-radius: $roundedElement;
        background-color: $white;

        cursor: pointer;

        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier();

        &:hover {
            transform: translate(0, -3px);
            background-color: $bright_white;
        }
    }
    
    .icon {
        color: $black;

        width: 1.5rem;
        height: 1.5rem;
    }
</style>