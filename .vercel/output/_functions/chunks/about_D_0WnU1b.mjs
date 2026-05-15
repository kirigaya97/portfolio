import { c as createComponent } from './astro-component_DcekZAwj.mjs';
import { x as renderComponent, B as renderTemplate, u as maybeRenderHead } from './entrypoint_jb8Q-nvW.mjs';
import { $ as $$BaseLayout, a as $$Hero } from './BaseLayout_Cz1PLEBJ.mjs';
import { a as $$ContactCTA } from './ContactCTA_DMfXt2ef.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Rodrigo Camino", "description": "About Rodrigo Camino: I develop unique Web experiences.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="1553" height="873" src="/assets/pixelart.webp" alt="Rodrigo Camino Pixel art" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Background</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Rodrigo Camino is a seasoned web designer and developer
						specializing in creating visually impactful,
						user-centered websites and digital platforms. With
						expertise in branding, digital marketing strategies, and
						UX/UI design, Rodrigo combines a creative approach with
						data-driven insights to deliver functional, engaging
						digital experiences.
<br data-astro-cid-kh7btl4r><br data-astro-cid-kh7btl4r> </p><p data-astro-cid-kh7btl4r>His background spans a range of
						sectors, providing tailored solutions that align with
						client needs and business goals. Rodrigo is also
						experienced in business strategy, especially for bar
						consulting, and has a strong command of technology in
						both design and backend processes.</p>  </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Education</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>System analist specialist - ORT Argentina <span class="date" data-astro-cid-kh7btl4r>(2023 - present)</span></p> <p data-astro-cid-kh7btl4r>Wordpress development - Udemy <span class="date" data-astro-cid-kh7btl4r>(2021 - 2022)</span></p> <p data-astro-cid-kh7btl4r>Back-end developer - CoderHouse <span class="date" data-astro-cid-kh7btl4r>(2020 - 2021)</span></p> <p data-astro-cid-kh7btl4r>Front-end developer - EducacionIT <span class="date" data-astro-cid-kh7btl4r>(2019 - 2020)</span></p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>Web Development - WordPress, HTML, CSS, JavaScript, PHP</li> <li data-astro-cid-kh7btl4r>Design - Photoshop (Advanced), Adobe Premiere (Intermediate), Illustrator (Basic)</li> <li data-astro-cid-kh7btl4r>Marketing - Email Marketing (MailChimp), Social Media Strategies, SEO</li> <li data-astro-cid-kh7btl4r>Project Management - Business Strategy, Client Collaboration, Process Automation</li> <li data-astro-cid-kh7btl4r>Soft Skills - Proactive, Teamwork, Adaptable, Client-Oriented</li> </ul> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })}`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/about.astro", void 0);

const $$file = "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
