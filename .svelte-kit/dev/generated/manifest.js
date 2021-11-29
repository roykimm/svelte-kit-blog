const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/projects.md"),
	() => import("../../../src/routes/about.md"),
	() => import("../../../src/routes/blog/index.svelte"),
	() => import("../../../src/routes/blog/2021-05-22-10.md"),
	() => import("../../../src/routes/blog/2021-05-26-11.md"),
	() => import("../../../src/routes/blog/2021-06-15-12.md"),
	() => import("../../../src/routes/blog/2021-06-15-13.md"),
	() => import("../../../src/routes/blog/2021-06-19-14.md"),
	() => import("../../../src/routes/blog/2021-06-20-15.md"),
	() => import("../../../src/routes/blog/2021-06-21-16.md"),
	() => import("../../../src/routes/blog/2021-06-23-17.md"),
	() => import("../../../src/routes/blog/2021-06-27-18.md"),
	() => import("../../../src/routes/blog/2021-06-28-19.md"),
	() => import("../../../src/routes/blog/2021-07-05-21.md"),
	() => import("../../../src/routes/blog/2021-07-18-22.md"),
	() => import("../../../src/routes/blog/2021-08-04-23.md"),
	() => import("../../../src/routes/blog/2021-09-03-24.md"),
	() => import("../../../src/routes/blog/2021-09-03-25.md"),
	() => import("../../../src/routes/blog/2021-09-03-26.md"),
	() => import("../../../src/routes/blog/2021-09-14-27.md"),
	() => import("../../../src/routes/blog/2021-09-15-28.md"),
	() => import("../../../src/routes/blog/2021-09-16-29.md"),
	() => import("../../../src/routes/blog/2021-09-16-30.md"),
	() => import("../../../src/routes/blog/2021-09-18-31.md"),
	() => import("../../../src/routes/blog/2021-09-18-32.md"),
	() => import("../../../src/routes/blog/2021-09-18-33.md"),
	() => import("../../../src/routes/blog/2021-09-18-34.md"),
	() => import("../../../src/routes/blog/2021-09-18-35.md"),
	() => import("../../../src/routes/blog/2021-09-22-36.md"),
	() => import("../../../src/routes/blog/2021-10-11-37.md"),
	() => import("../../../src/routes/blog/2021-10-12-38.md"),
	() => import("../../../src/routes/blog/2021-10-17-39.md"),
	() => import("../../../src/routes/blog/2021-10-17-40.md"),
	() => import("../../../src/routes/blog/2021-11-07-41.md"),
	() => import("../../../src/routes/blog/2021-11-07-42.md"),
	() => import("../../../src/routes/blog/2021-11-10-44.md"),
	() => import("../../../src/routes/blog/2021-11-10-45.md"),
	() => import("../../../src/routes/blog/2021-11-12-46.md"),
	() => import("../../../src/routes/blog/2021-11-12-47.md"),
	() => import("../../../src/routes/blog/2021-11-14-48.md"),
	() => import("../../../src/routes/blog/2021-11-21-49.md"),
	() => import("../../../src/routes/blog/2021-11-21-50.md"),
	() => import("../../../src/routes/blog/2021-11-23-51.md"),
	() => import("../../../src/routes/blog/2021-11-30-52.md"),
	() => import("../../../src/routes/blog/2021-05-03-2.md"),
	() => import("../../../src/routes/blog/2021-05-03-3.md"),
	() => import("../../../src/routes/blog/2021-05-04-4.md"),
	() => import("../../../src/routes/blog/2021-05-11-5.md"),
	() => import("../../../src/routes/blog/2021-05-12-6.md"),
	() => import("../../../src/routes/blog/2021-05-12-7.md"),
	() => import("../../../src/routes/blog/2021-05-12-8.md"),
	() => import("../../../src/routes/blog/2021-05-19-9.md"),
	() => import("../../../src/routes/blog/first-post.md"),
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

	// src/routes/blog/2021-05-22-10.md
	[/^\/blog\/2021-05-22-10\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/blog/2021-05-26-11.md
	[/^\/blog\/2021-05-26-11\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/blog/2021-06-15-12.md
	[/^\/blog\/2021-06-15-12\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/blog/2021-06-15-13.md
	[/^\/blog\/2021-06-15-13\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/blog/2021-06-19-14.md
	[/^\/blog\/2021-06-19-14\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/blog/2021-06-20-15.md
	[/^\/blog\/2021-06-20-15\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/blog/2021-06-21-16.md
	[/^\/blog\/2021-06-21-16\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/blog/2021-06-23-17.md
	[/^\/blog\/2021-06-23-17\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/blog/2021-06-27-18.md
	[/^\/blog\/2021-06-27-18\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/blog/2021-06-28-19.md
	[/^\/blog\/2021-06-28-19\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/blog/2021-07-05-21.md
	[/^\/blog\/2021-07-05-21\/?$/, [c[0], c[16]], [c[1]]],

	// src/routes/blog/2021-07-18-22.md
	[/^\/blog\/2021-07-18-22\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/blog/2021-08-04-23.md
	[/^\/blog\/2021-08-04-23\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/blog/2021-09-03-24.md
	[/^\/blog\/2021-09-03-24\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/blog/2021-09-03-25.md
	[/^\/blog\/2021-09-03-25\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/blog/2021-09-03-26.md
	[/^\/blog\/2021-09-03-26\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/blog/2021-09-14-27.md
	[/^\/blog\/2021-09-14-27\/?$/, [c[0], c[22]], [c[1]]],

	// src/routes/blog/2021-09-15-28.md
	[/^\/blog\/2021-09-15-28\/?$/, [c[0], c[23]], [c[1]]],

	// src/routes/blog/2021-09-16-29.md
	[/^\/blog\/2021-09-16-29\/?$/, [c[0], c[24]], [c[1]]],

	// src/routes/blog/2021-09-16-30.md
	[/^\/blog\/2021-09-16-30\/?$/, [c[0], c[25]], [c[1]]],

	// src/routes/blog/2021-09-18-31.md
	[/^\/blog\/2021-09-18-31\/?$/, [c[0], c[26]], [c[1]]],

	// src/routes/blog/2021-09-18-32.md
	[/^\/blog\/2021-09-18-32\/?$/, [c[0], c[27]], [c[1]]],

	// src/routes/blog/2021-09-18-33.md
	[/^\/blog\/2021-09-18-33\/?$/, [c[0], c[28]], [c[1]]],

	// src/routes/blog/2021-09-18-34.md
	[/^\/blog\/2021-09-18-34\/?$/, [c[0], c[29]], [c[1]]],

	// src/routes/blog/2021-09-18-35.md
	[/^\/blog\/2021-09-18-35\/?$/, [c[0], c[30]], [c[1]]],

	// src/routes/blog/2021-09-22-36.md
	[/^\/blog\/2021-09-22-36\/?$/, [c[0], c[31]], [c[1]]],

	// src/routes/blog/2021-10-11-37.md
	[/^\/blog\/2021-10-11-37\/?$/, [c[0], c[32]], [c[1]]],

	// src/routes/blog/2021-10-12-38.md
	[/^\/blog\/2021-10-12-38\/?$/, [c[0], c[33]], [c[1]]],

	// src/routes/blog/2021-10-17-39.md
	[/^\/blog\/2021-10-17-39\/?$/, [c[0], c[34]], [c[1]]],

	// src/routes/blog/2021-10-17-40.md
	[/^\/blog\/2021-10-17-40\/?$/, [c[0], c[35]], [c[1]]],

	// src/routes/blog/2021-11-07-41.md
	[/^\/blog\/2021-11-07-41\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/blog/2021-11-07-42.md
	[/^\/blog\/2021-11-07-42\/?$/, [c[0], c[37]], [c[1]]],

	// src/routes/blog/2021-11-10-44.md
	[/^\/blog\/2021-11-10-44\/?$/, [c[0], c[38]], [c[1]]],

	// src/routes/blog/2021-11-10-45.md
	[/^\/blog\/2021-11-10-45\/?$/, [c[0], c[39]], [c[1]]],

	// src/routes/blog/2021-11-12-46.md
	[/^\/blog\/2021-11-12-46\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/blog/2021-11-12-47.md
	[/^\/blog\/2021-11-12-47\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/blog/2021-11-14-48.md
	[/^\/blog\/2021-11-14-48\/?$/, [c[0], c[42]], [c[1]]],

	// src/routes/blog/2021-11-21-49.md
	[/^\/blog\/2021-11-21-49\/?$/, [c[0], c[43]], [c[1]]],

	// src/routes/blog/2021-11-21-50.md
	[/^\/blog\/2021-11-21-50\/?$/, [c[0], c[44]], [c[1]]],

	// src/routes/blog/2021-11-23-51.md
	[/^\/blog\/2021-11-23-51\/?$/, [c[0], c[45]], [c[1]]],

	// src/routes/blog/2021-11-30-52.md
	[/^\/blog\/2021-11-30-52\/?$/, [c[0], c[46]], [c[1]]],

	// src/routes/blog/2021-05-03-2.md
	[/^\/blog\/2021-05-03-2\/?$/, [c[0], c[47]], [c[1]]],

	// src/routes/blog/2021-05-03-3.md
	[/^\/blog\/2021-05-03-3\/?$/, [c[0], c[48]], [c[1]]],

	// src/routes/blog/2021-05-04-4.md
	[/^\/blog\/2021-05-04-4\/?$/, [c[0], c[49]], [c[1]]],

	// src/routes/blog/2021-05-11-5.md
	[/^\/blog\/2021-05-11-5\/?$/, [c[0], c[50]], [c[1]]],

	// src/routes/blog/2021-05-12-6.md
	[/^\/blog\/2021-05-12-6\/?$/, [c[0], c[51]], [c[1]]],

	// src/routes/blog/2021-05-12-7.md
	[/^\/blog\/2021-05-12-7\/?$/, [c[0], c[52]], [c[1]]],

	// src/routes/blog/2021-05-12-8.md
	[/^\/blog\/2021-05-12-8\/?$/, [c[0], c[53]], [c[1]]],

	// src/routes/blog/2021-05-19-9.md
	[/^\/blog\/2021-05-19-9\/?$/, [c[0], c[54]], [c[1]]],

	// src/routes/blog/first-post.md
	[/^\/blog\/first-post\/?$/, [c[0], c[55]], [c[1]]],

	// src/routes/tags/[tag].svelte
	[/^\/tags\/([^/]+?)\/?$/, [c[0], c[56]], [c[1]], (m) => ({ tag: d(m[1])})],

	// src/routes/Box.svelte
	[/^\/Box\/?$/, [c[0], c[57]], [c[1]]],

	// src/routes/lib/Nav.svelte
	[/^\/lib\/Nav\/?$/, [c[0], c[58]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];