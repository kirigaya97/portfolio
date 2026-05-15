import { c as createComponent } from './astro-component_DcekZAwj.mjs';
import { x as renderComponent, B as renderTemplate, u as maybeRenderHead } from './entrypoint_jb8Q-nvW.mjs';
import { g as getCollection } from './_astro_content_JdoiLFah.mjs';
import { $ as $$BaseLayout, c as $$Hero, b as $$ContactCTA } from './Hero_gQDgAVc9.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './Grid_Dv6rScy8.mjs';

const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("proyectos")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mi Trabajo | Rodrigo Camino", "description": "Mis proyectos más recientes." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mi Trabajo", "tagline": "Mira mis proyectos recientes para darte una idea de mi experiencia.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/es/proyectos.astro", void 0);

const $$file = "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/es/proyectos.astro";
const $$url = "/es/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Proyectos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
