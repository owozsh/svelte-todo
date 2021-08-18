<script lang="ts">
	import TodayView from "../components/today/TodayView.svelte";
	import Sidebar from "../components/widgets/Sidebar.svelte";
</script>

<svelte:head>
	<title>Aisaka</title>
</svelte:head>

<main>
	<Sidebar/>
	<TodayView/>
</main>

<style lang="scss">
	@import '../styles/vars';

	:global(#svelte) {
		height: 100%;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		height: 100vh;
		background-color: $white;
		
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