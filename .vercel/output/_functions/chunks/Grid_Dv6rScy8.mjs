import { c as createComponent } from './astro-component_DcekZAwj.mjs';
import { u as maybeRenderHead, k as addAttribute, B as renderTemplate, z as renderSlot } from './entrypoint_jb8Q-nvW.mjs';

const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, id } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/es/proyectos/${id}`, "href")} data-astro-cid-oqwpnakp> <span class="title" data-astro-cid-oqwpnakp>${data.title}</span> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-oqwpnakp> </a>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/es/PortfolioPreview.astro", void 0);

const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-oidzkedc> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/es/Grid.astro", void 0);

export { $$Grid as $, $$PortfolioPreview as a };
