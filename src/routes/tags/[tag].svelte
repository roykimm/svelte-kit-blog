<script context="module">
	const allPosts = import.meta.glob('../blog/*.{md,svx}');

	let body = [];

	for (let path in allPosts) {
		//console.log(allPosts[path]);
		body.push(
			allPosts[path]().then(({ metadata }) => {
				//console.log(mod.metadata);
				console.log(metadata);
				return { path, metadata };
			})
		);
	}
	export const load = async ({ page }) => {
		const posts = await Promise.all(body);
		const tag = page.params.tag;

		const filterdPosts = posts.filter((post) => {
			return post.metadata.tags.includes(tag);
		});
		return {
			props: {
				filterdPosts,
				tag
			}
		};
	};
</script>

<script>
	export let filterdPosts;
	export let tag;
</script>

<h1>{tag}</h1>
{#each filterdPosts as { path, metadata: { title } }}
	<li>
		<a href={`/blog/${path.replace('.md', '').replace('.svx', '')}`}>{title}</a>
	</li>
{/each}
