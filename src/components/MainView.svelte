<script>
import AddButton from "./AddButton.svelte";
import EverydayTasks from "./EverydayTasks.svelte";

</script>

<div class="mainView">
    <EverydayTasks/>
    <AddButton/>
</div>

<style lang="scss">
    @import '../styles/vars.scss';

    .mainView {
        position: relative;
        display: flex;
        flex-direction: column;
        
        background-color: $black;
        border-radius: $roundedWindow;
    }
</style>