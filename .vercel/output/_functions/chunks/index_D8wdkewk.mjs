import { c as createComponent } from './astro-component_DcekZAwj.mjs';
import { u as maybeRenderHead, z as renderSlot, B as renderTemplate, x as renderComponent } from './entrypoint_jb8Q-nvW.mjs';
import { g as getCollection } from './_astro_content_JdoiLFah.mjs';
import { b as $$Icon, $ as $$BaseLayout, a as $$Hero } from './BaseLayout_Cz1PLEBJ.mjs';
import { $ as $$CallToAction, a as $$ContactCTA } from './ContactCTA_DMfXt2ef.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './Grid_ZbZLKlbx.mjs';

const $$Pill = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pill" data-astro-cid-2qeywk4b>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/Pill.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-ab4ihpzs> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Wordpress development</h2> <p data-astro-cid-ab4ihpzs>With 3+ years of experience, I develop unique Wordpress online experiences.</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "wordpress-logo", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Design and Marketing</h2> <p data-astro-cid-ab4ihpzs>Having a keen eye for desing and out of the box marketing strategies have led many of my projects to success.</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Strategy-Minded</h2> <p data-astro-cid-ab4ihpzs>Driven by a strategic vision, I excel in aligning short-term actions with long-term objectives to optimize outcomes, anticipate challenges, and support sustained growth and innovation.</p> </div> <!--<div class="stack gap-2 lg:gap-4">
		<Icon icon="layout" color="var(--accent-regular)" size="2.5rem" gradient />
		<h2>Modern Frameworks</h2>
		<p>Incorporating modern frameworks and new technologies. i.E: Astro.</p>
	</div> --> </section>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/Skills.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello! my name is Rodrigo Camino :)", "tagline": "I'm a Creative Web Developer, now based in Buenos Aires, Argentina.", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Developer` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Creative` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "wand", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Ilusionist` })} </div> ` })} <img alt="Rodrigo Camino sonriendo con un fondo degrade celeste y púrpura." width="480" height="620" src="/assets/portrait.jpg" data-astro-cid-j7pv25f6> </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </div> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Selected Work</h3> <p data-astro-cid-j7pv25f6>Take a look below at some of my featured work for clients from the past few years.</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })} </li>`)}` })} </div> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
View All
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> ` })}`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/index.astro", void 0);

const $$file = "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
