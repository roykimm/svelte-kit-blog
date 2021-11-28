const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/projects.md"),
	() => import("../../../src/routes/about.md"),
	() => import("../../../src/routes/blog/index.svelte"),
	() => import("../../../src/routes/blog/second-post.md"),
	() => import("../../../src/routes/blog/first-post.md"),
	() => import("../../../src/routes/blog/forth-post.md"),
	() => import("../../../src/routes/blog/third-post.md"),
	() => import("../../../src/routes/tags/[tag].svelte"),
	() => import("../../../src/routes/Box.svelte"),
	() => import("../../../src/routes/lib/Nav.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/projects.md
	[/^\/projects\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/about.md
	[/^\/about\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/blog/index.svelte
	[/^\/blog\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/blog/second-post.md
	[/^\/blog\/second-post\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/blog/first-post.md
	[/^\/blog\/first-post\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/blog/forth-post.md
	[/^\/blog\/forth-post\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/blog/third-post.md
	[/^\/blog\/third-post\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/tags/[tag].svelte
	[/^\/tags\/([^/]+?)\/?$/, [c[0], c[10]], [c[1]], (m) => ({ tag: d(m[1])})],

	// src/routes/Box.svelte
	[/^\/Box\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/lib/Nav.svelte
	[/^\/lib\/Nav\/?$/, [c[0], c[12]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];