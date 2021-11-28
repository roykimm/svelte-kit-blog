import { c as create_ssr_component, v as validate_component } from "./app-cabb3c0b.js";
import Nav from "./Nav-62488b69.js";
var github = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1dygz9d{max-width:800px;margin:30px auto}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1dygz9d"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
export { _layout as default };
