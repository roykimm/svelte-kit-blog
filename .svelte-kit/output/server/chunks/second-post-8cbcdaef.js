import { c as create_ssr_component, e as escape } from "./app-cabb3c0b.js";
const metadata = {
  "title": "Todo app go bella",
  "tags": ["personal", "tech"],
  "date": "2021-02-10T00:00:00.000Z"
};
const { title, tags, date } = metadata;
const Second_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(title)}</h1>
<p>This is second post</p>`;
});
export { Second_post as default, metadata };
