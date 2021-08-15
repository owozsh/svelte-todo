<script>
import AddButton from "./AddButton.svelte";

</script>

<div class="mainView">
    <AddButton/>
</div>

<style lang="scss">
    @import '../styles/vars.scss';

    .mainView {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        background-color: $black;
        border-radius: 12px;
    }
</style>