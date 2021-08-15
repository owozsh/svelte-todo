<script lang="ts">
	import Sidebar from "./components/Sidebar.svelte";
</script>

<main>
	<Sidebar/>
</main>

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
		display: flex;
		height: 100%;
	}
</style>