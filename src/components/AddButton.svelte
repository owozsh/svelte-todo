<script>
import TiPlus from 'svelte-icons/ti/TiPlus.svelte'
</script>

<style lang="scss">
    button {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        right: 20px;
        bottom: 20px;
        width: 3rem;
        height: 3rem;
        color: #1f1f1f;
    
        border: none;
        border-radius: 10px;
        background-color: #dddddd;
    }
    
    .icon {
        color: #1f1f1f;

        width: 1.5rem;
        height: 1.5rem;
    }
</style>

<button>
    <div class="icon">
        <TiPlus/>
    </div>
</button>