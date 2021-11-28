import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" href=\"/bellalogo.png\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t" + head + "\n</head>\n\n<body>\n\t<div id=\"svelte\">" + body + "</div>\n</body>\n\n</html>";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-8fded90a.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-8fded90a.js",assets + "/_app/chunks/vendor-f01f4eb0.js",assets + "/_app/chunks/preload-helper-ec9aa979.js",assets + "/_app/chunks/paths-28a87002.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"bellalogo.png","size":429687,"type":"image/png"},{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"img/sh48.png","size":327006,"type":"image/png"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/projects\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/projects.md"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.md"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/blog\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/blog/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/blog\/second-post\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/blog/second-post.md"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/blog\/first-post\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/blog/first-post.md"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/blog\/forth-post\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/blog/forth-post.md"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/blog\/third-post\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/blog/third-post.md"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/tags\/([^/]+?)\/?$/,
						params: (m) => ({ tag: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/tags/[tag].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Box\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/Box.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/lib\/Nav\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/lib/Nav.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/projects.md": () => import("../../src/routes/projects.md"),"src/routes/about.md": () => import("../../src/routes/about.md"),"src/routes/blog/index.svelte": () => import("../../src/routes/blog/index.svelte"),"src/routes/blog/second-post.md": () => import("../../src/routes/blog/second-post.md"),"src/routes/blog/first-post.md": () => import("../../src/routes/blog/first-post.md"),"src/routes/blog/forth-post.md": () => import("../../src/routes/blog/forth-post.md"),"src/routes/blog/third-post.md": () => import("../../src/routes/blog/third-post.md"),"src/routes/tags/[tag].svelte": () => import("../../src/routes/tags/[tag].svelte"),"src/routes/Box.svelte": () => import("../../src/routes/Box.svelte"),"src/routes/lib/Nav.svelte": () => import("../../src/routes/lib/Nav.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-e3604554.js","css":["assets/pages/__layout.svelte-6645d7e9.css","assets/pages/lib/Nav.svelte-9f90fd1d.css"],"js":["pages/__layout.svelte-e3604554.js","chunks/vendor-f01f4eb0.js","pages/lib/Nav.svelte-c81b1a5d.js","chunks/paths-28a87002.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-30b8366b.js","css":[],"js":["error.svelte-30b8366b.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-b3020157.js","css":[],"js":["pages/index.svelte-b3020157.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/projects.md":{"entry":"pages/projects.md-7dac35f5.js","css":[],"js":["pages/projects.md-7dac35f5.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/about.md":{"entry":"pages/about.md-8ce581f4.js","css":[],"js":["pages/about.md-8ce581f4.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/blog/index.svelte":{"entry":"pages/blog/index.svelte-fe3e5ddc.js","css":["assets/pages/blog/index.svelte-4624fda0.css"],"js":["pages/blog/index.svelte-fe3e5ddc.js","chunks/preload-helper-ec9aa979.js","chunks/vendor-f01f4eb0.js","chunks/paths-28a87002.js"],"styles":[]},"src/routes/blog/second-post.md":{"entry":"pages/blog/second-post.md-6601f62d.js","css":[],"js":["pages/blog/second-post.md-6601f62d.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/blog/first-post.md":{"entry":"pages/blog/first-post.md-92a320e8.js","css":[],"js":["pages/blog/first-post.md-92a320e8.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/blog/forth-post.md":{"entry":"pages/blog/forth-post.md-633c0073.js","css":[],"js":["pages/blog/forth-post.md-633c0073.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/blog/third-post.md":{"entry":"pages/blog/third-post.md-b48b0803.js","css":[],"js":["pages/blog/third-post.md-b48b0803.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/tags/[tag].svelte":{"entry":"pages/tags/_tag_.svelte-99da8f28.js","css":[],"js":["pages/tags/_tag_.svelte-99da8f28.js","chunks/preload-helper-ec9aa979.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/Box.svelte":{"entry":"pages/Box.svelte-8b34daf3.js","css":["assets/pages/Box.svelte-a9182201.css"],"js":["pages/Box.svelte-8b34daf3.js","chunks/vendor-f01f4eb0.js"],"styles":[]},"src/routes/lib/Nav.svelte":{"entry":"pages/lib/Nav.svelte-c81b1a5d.js","css":["assets/pages/lib/Nav.svelte-9f90fd1d.css"],"js":["pages/lib/Nav.svelte-c81b1a5d.js","chunks/vendor-f01f4eb0.js","chunks/paths-28a87002.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}