import { c as createComponent } from './astro-component_DcekZAwj.mjs';
import { u as maybeRenderHead, z as renderSlot, B as renderTemplate, x as renderComponent } from './entrypoint_jb8Q-nvW.mjs';
import { g as getCollection } from './_astro_content_JdoiLFah.mjs';
import { d as $$Icon, $ as $$BaseLayout, c as $$Hero, a as $$CallToAction, b as $$ContactCTA } from './Hero_gQDgAVc9.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './Grid_Dv6rScy8.mjs';

const $$Pill = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pill" data-astro-cid-6sehh5ka>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/es/Pill.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-m6y5kzu6> <div class="stack gap-2 lg:gap-4" data-astro-cid-m6y5kzu6> ${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-m6y5kzu6": true })} <h2 data-astro-cid-m6y5kzu6>Desarrollo Wordpress</h2> <p data-astro-cid-m6y5kzu6>Con más de 3 años de experiencia, desarrollo experiencias Web únicas</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-m6y5kzu6> ${renderComponent($$result, "Icon", $$Icon, { "icon": "wordpress-logo", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-m6y5kzu6": true })} <h2 data-astro-cid-m6y5kzu6>Marketing y Diseño</h2> <p data-astro-cid-m6y5kzu6>Con un ojo audáz para el diseño y pensamiento tangencial para Marketing, he hecho triunfar muchos de mis proyectos.</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-m6y5kzu6> ${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-m6y5kzu6": true })} <h2 data-astro-cid-m6y5kzu6>Enfoque Estratégico</h2> <p data-astro-cid-m6y5kzu6>Guiado por una visión estratégica, sobresalgo en alinear acciones a corto plazo con objetivos a largo plazo para optimizar resultados, anticipar desafíos y fomentar un crecimiento e innovación sostenidos.</p> </div> </section>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/es/Skills.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("proyectos")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-7pewbour": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-7pewbour> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-7pewbour> <header class="hero" data-astro-cid-7pewbour> ${renderComponent($$result2, "Hero", $$Hero, { "title": "¡Hola! Mi nombre es Rodrigo Camino :)", "tagline": "Soy un Desarrollador Web Creativo, actualmente en Buenos Aires, Argentina.", "align": "start", "data-astro-cid-7pewbour": true }, { "default": async ($$result3) => renderTemplate` <div class="roles" data-astro-cid-7pewbour> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-7pewbour": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-7pewbour": true })} Desarrollador` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-7pewbour": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "data-astro-cid-7pewbour": true })} Creativo` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-7pewbour": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "wand", "size": "1.33em", "data-astro-cid-7pewbour": true })} Ilusionista` })} </div> ` })} <img alt="Rodrigo Camino sonriendo con un fondo degradado celeste y púrpura." width="480" height="620" src="/assets/portrait.jpg" data-astro-cid-7pewbour> </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-7pewbour": true })} </div> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-7pewbour> <section class="section with-background with-cta" data-astro-cid-7pewbour> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-7pewbour> <h3 data-astro-cid-7pewbour>Trabajos Seleccionados</h3> <p data-astro-cid-7pewbour>Descubre algunos de mis proyectos destacados realizados para clientes en los últimos años.</p> </header> <div class="gallery" data-astro-cid-7pewbour> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-7pewbour": true }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-7pewbour> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-7pewbour": true })} </li>`)}` })} </div> <div class="cta" data-astro-cid-7pewbour> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/es/proyectos/", "data-astro-cid-7pewbour": true }, { "default": async ($$result3) => renderTemplate`
Ver Todo
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-7pewbour": true })} ` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-7pewbour": true })} </div> ` })}`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/es/index.astro", void 0);

const $$file = "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
