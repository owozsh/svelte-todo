<script lang="ts">
import MainView from "../components/MainView.svelte";
import Sidebar from "../components/Sidebar.svelte";
</script>

<svelte:head>
	<main>
		<Sidebar/>
		<MainView/>
	</main>
</svelte:head>


<style lang="scss">
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		height: 100vh;
		background-color: #dddddd;
		
		margin: 0;
		padding: 0;
	}

	main {
		display: grid;
		grid-template-columns: 30% 40% 30%;
		height: 100%;

		padding: 50px;
	}
</style>