<script>
	import Nav from './lib/Nav.svelte';
	import '../github.css';
</script>

<div class="container">
	<Nav />
	<slot />
</div>

<style>
	.container {
		max-width: 800px;
		margin: 30px auto;
	}
</style>
