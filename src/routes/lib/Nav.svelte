<script>
	import { base } from '$app/paths';
</script>

<nav class="nav">
	<ul class="nav-ul">
		<li class="nav-li">
			<a class="nav-a" href={`${base}/`}>Home</a>
		</li>
		<li class="nav-li">
			<a class="nav-a" href={`${base}/blog`}>Blog</a>
		</li>
		<li class="nav-li">
			<a class="nav-a" href={`${base}/projects`}>Projects</a>
		</li>
	</ul>
</nav>

<style>
	.nav-ul {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
	}
	.nav-li {
		padding: 10px;
		margin: 0;
	}
</style>
