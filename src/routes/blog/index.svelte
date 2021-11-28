<script context="module">
	import { base } from '$app/paths';
	console.log(base);
	const allPosts = import.meta.glob('./*.{md,svx}');

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
	export const load = async () => {
		const posts = await Promise.all(body);
		console.log(posts);
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;

	const dateSortedPosts = posts.slice().sort((post1, post2) => {
		return new Date(post2.metadata.date) - new Date(post1.metadata.date);
	});
</script>

<h1>Blog</h1>
<ul>
	{#each dateSortedPosts as { path, metadata: { title, tags, date } }}
		<li>
			<a class="post-title" href={`${base}/blog/${path.replace('.md', '').replace('.svx', '')}`}
				>{title}</a
			>
			<p class="date">{new Date(date).toISOString().slice(0, 10)}</p>
			<p>
				{#each tags as tag}
					<a class="tag" href={`${base}/tags/${tag}`}># {tag}</a>
				{/each}
			</p>
		</li>
	{/each}
</ul>

<style>
	.post-title {
		font-size: 1rem;
	}
	p {
		margin: 0;
		font-size: 0.9rem;
	}
	li {
		margin-bottom: 20px;
	}

	.tag {
		text-decoration: none;
		margin-right: 10px;
		color: #555;
	}

	.tag:hover {
		color: blue;
	}

	.date {
		font-size: 0.7rem;
		color: gray;
	}
</style>
