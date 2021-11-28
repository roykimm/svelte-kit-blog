import { c as create_ssr_component, e as escape } from "./app-cabb3c0b.js";
const metadata = {
  "title": "are you ok?",
  "tags": ["tech article"],
  "date": "2021-02-28T00:00:00.000Z"
};
const { title, tags, date } = metadata;
const Forth_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(title)}</h1>
<p>This is forth post</p>`;
});
export { Forth_post as default, metadata };
