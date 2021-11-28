import { c as create_ssr_component, e as escape } from "./app-cabb3c0b.js";
const metadata = {
  "title": "learn svelte",
  "tags": ["gobella"],
  "date": "2021-02-20T00:00:00.000Z"
};
const { title, tags, date } = metadata;
const Third_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(title)}</h1>
<p>This is third post</p>`;
});
export { Third_post as default, metadata };
