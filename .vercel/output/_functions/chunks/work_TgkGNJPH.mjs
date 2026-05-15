import { c as createComponent } from './astro-component_DcekZAwj.mjs';
import { x as renderComponent, B as renderTemplate, u as maybeRenderHead } from './entrypoint_jb8Q-nvW.mjs';
import { g as getCollection } from './_astro_content_JdoiLFah.mjs';
import { $ as $$BaseLayout, a as $$Hero } from './BaseLayout_Cz1PLEBJ.mjs';
import { a as $$ContactCTA } from './ContactCTA_DMfXt2ef.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './Grid_ZbZLKlbx.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Rodrigo Camino", "description": "Learn about Rodrigo Camino's most recent projects" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/work.astro", void 0);

const $$file = "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
