import { c as createComponent } from './astro-component_DcekZAwj.mjs';
import { u as maybeRenderHead, k as addAttribute, B as renderTemplate, z as renderSlot, x as renderComponent, C as spreadAttributes, J as unescapeHTML, y as renderHead } from './entrypoint_jb8Q-nvW.mjs';
import { r as renderScript, $ as $$LangToggle, t as templateEnter, a as templateExit } from './tailwind_B2NnxpVQ.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", tagline, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hero stack gap-4", align], "class:list")} data-astro-cid-bbe6dxrz> <div class="stack gap-2" data-astro-cid-bbe6dxrz> <h1 class="title" data-astro-cid-bbe6dxrz>${title}</h1> ${tagline && renderTemplate`<p class="tagline" data-astro-cid-bbe6dxrz>${tagline}</p>`} </div> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/node_modules/.pnpm/@vercel+speed-insights@1.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/node_modules/.pnpm/@vercel+speed-insights@1.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MainHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainHead;
  const {
    title = "Rodrigo Camino: Web developer",
    description = "3+ years of experience in web design and development. I develop unique Web experiences."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<meta charset="UTF-8"><meta name="description" property="og:description"', '><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", `</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&family=Rubik:wght@500;600&display=swap" rel="stylesheet"><script>
	// This code is inlined in the head to make dark mode instant & blocking.
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('theme-dark');

	if (typeof localStorage !== 'undefined') {
		// Watch the document element and persist user preference when it changes.
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('theme-dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}
<\/script>`, ""])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "SpeedInsights", $$Index, {}));
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/MainHead.astro", void 0);

const iconPaths = {
  "terminal-window": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>`,
  trophy: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>`,
  strategy: `<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>`,
  "paper-plane-tilt": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
  "arrow-right": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>`,
  "arrow-left": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>`,
  code: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>`,
  "microphone-stage": `<circle cx="168" cy="88" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m213.3 133.3-90.6-90.6M100 156l-12 12m16.8-70.1L28.1 202.5a7.9 7.9 0 0 0 .8 10.4l14.2 14.2a7.9 7.9 0 0 0 10.4.8l104.6-76.7"/>`,
  "pencil-line": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 216H96l-55.5-55.5M164 92l-96 96"/>`,
  "rocket-launch": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
  list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
  heart: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>`,
  "moon-stars": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
  sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
  "X-logo": `<path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z">`,
  "codepen-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 101-104 59-104-59 100.1-56.8a8.3 8.3 0 0 1 7.8 0Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 165-100.1 56.8a8.3 8.3 0 0 1-7.8 0L24 165l104-59Zm0-64v64M24 101v64m104-5v62.8m0-179.6V106"/>`,
  "github-logo": `<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>`,
  "twitch-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M165 200h-42a8 8 0 0 0-5 2l-46 38v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v108a8 8 0 0 1-3 6l-43 36a8 8 0 0 1-5 2Zm3-112v48m-48-48v48"/>`,
  "youtube-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m160 128-48-32v64l48-32z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M24 128c0 30 3 47 5 56a16 16 0 0 0 10 11c34 13 89 13 89 13s56 0 89-13a16 16 0 0 0 10-11c2-9 5-26 5-56s-3-47-5-56a16 16 0 0 0-10-11c-33-13-89-13-89-13s-55 0-89 13a16 16 0 0 0-10 11c-2 9-5 26-5 56Z"/>`,
  "dribbble-logo": `<circle cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M71 205a160 160 0 0 1 137-77l16 1m-36-76a160 160 0 0 1-124 59 165 165 0 0 1-30-3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M86 42a161 161 0 0 1 74 177"/>`,
  "discord-logo": `<circle stroke="none" cx="96" cy="144" r="12"/><circle stroke="none" cx="160" cy="144" r="12"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M74 80a175 175 0 0 1 54-8 175 175 0 0 1 54 8m0 96a175 175 0 0 1-54 8 175 175 0 0 1-54-8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m155 182 12 24a8 8 0 0 0 9 4c25-6 46-16 61-30a8 8 0 0 0 3-8L206 59a8 8 0 0 0-5-5 176 176 0 0 0-30-9 8 8 0 0 0-9 5l-8 24m-53 108-12 24a8 8 0 0 1-9 4c-25-6-46-16-61-30a8 8 0 0 1-3-8L50 59a8 8 0 0 1 5-5 176 176 0 0 1 30-9 8 8 0 0 1 9 5l8 24"/>`,
  "linkedin-logo": `<rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
  "instagram-logo": `<circle cx="128" cy="128" r="40" fill="none" stroke-miterlimit="10" stroke-width="16"/><rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="48"/><circle cx="180" cy="76" r="12" stroke="none" />`,
  "tiktok-logo": `<path  fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M168 106a96 96 0 0 0 56 18V84a56 56 0 0 1-56-56h-40v128a28 28 0 1 1-40-25V89a68 68 0 1 0 80 67Z"/>`,
  "wordpress-logo": `<path d="M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM224,160c0,1.52-.07,3-.18,4.51l-50-50A80.14,80.14,0,0,0,176,98,63.81,63.81,0,0,1,224,160Zm-77.4-2.09,52.61,52.62A64,64,0,0,1,183,219.7l-51.86-51.86A80.5,80.5,0,0,0,146.6,157.91Zm11.31-11.31a80.5,80.5,0,0,0,9.93-15.44L219.7,183a64,64,0,0,1-9.17,16.19ZM32,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,32,96ZM98,176a80.14,80.14,0,0,0,16.5-2.13l50,50c-1.49.11-3,.18-4.51.18A63.81,63.81,0,0,1,98,176Z">`,
  "layout": `<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z">`,
  "whatsapp": `<path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z">`,
  "wand": `<path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z">`,
  "instagram": `<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z">`
};

const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Icon;
  const { color = "currentcolor", gradient, icon, size } = Astro2.props;
  const iconPath = iconPaths[icon];
  const attrs = {};
  if (size) attrs.style = { "--size": size };
  const gradientId = "icon-gradient-" + Math.round(Math.random() * 1e13).toString(36);
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true"${addAttribute(gradient ? `url(#${gradientId})` : color, "stroke")}${addAttribute(gradient ? `url(#${gradientId})` : color, "fill")}${spreadAttributes(attrs, void 0, { "class": "astro-patnjmll" })} data-astro-cid-patnjmll> <g data-astro-cid-patnjmll>${unescapeHTML(iconPath)}</g> ${gradient && renderTemplate`<linearGradient${addAttribute(gradientId, "id")} x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" data-astro-cid-patnjmll> <stop stop-color="var(--gradient-stop-1)" data-astro-cid-patnjmll></stop> <stop offset=".5" stop-color="var(--gradient-stop-2)" data-astro-cid-patnjmll></stop> <stop offset="1" stop-color="var(--gradient-stop-3)" data-astro-cid-patnjmll></stop> </linearGradient>`} </svg>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/Icon.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "data-astro-cid-x3pjskd3": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-astro-cid-x3pjskd3> <span class="sr-only" data-astro-cid-x3pjskd3>Dark theme</span> <span class="icon light" data-astro-cid-x3pjskd3>${renderComponent($$result, "Icon", $$Icon, { "icon": "sun", "data-astro-cid-x3pjskd3": true })}</span> <span class="icon dark" data-astro-cid-x3pjskd3>${renderComponent($$result, "Icon", $$Icon, { "icon": "moon-stars", "data-astro-cid-x3pjskd3": true })}</span> </button> ` })}  ${renderScript($$result, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/ThemeToggle.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Nav;
  const textLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work/" },
    { label: "About", href: "/about/" }
  ];
  const iconLinks = [
    { label: "LinkedIn", href: "https://linkedin.com/in/rodrigo-camino", icon: "linkedin-logo" },
    { label: "GitHub", href: "https://github.com/kirigaya97", icon: "github-logo" },
    { label: "Instagram", href: "https://instagram.com/rodri.camino", icon: "instagram" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-dmqpwcec> <div class="menu-header" data-astro-cid-dmqpwcec> <a href="/" class="site-title" data-astro-cid-dmqpwcec> ${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "1.6em", "gradient": true, "data-astro-cid-dmqpwcec": true })}
Rodrigo Camino
</a> ${renderComponent($$result, "menu-button", "menu-button", { "data-astro-cid-dmqpwcec": true }, { "default": () => renderTemplate` <template data-astro-cid-dmqpwcec>${templateEnter()} <button class="menu-button" aria-expanded="false" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": "list", "data-astro-cid-dmqpwcec": true })} </button> ${templateExit()}</template> ` })} </div> <noscript> <ul class="nav-items" data-astro-cid-dmqpwcec> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-dmqpwcec> ${label} </a> </li>`)} </ul> </noscript> <noscript> <div class="menu-footer" data-astro-cid-dmqpwcec> <div class="socials" data-astro-cid-dmqpwcec> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-dmqpwcec": true })} </a>`)} </div> </div> </noscript> <div id="menu-content" hidden data-astro-cid-dmqpwcec> <ul class="nav-items" data-astro-cid-dmqpwcec> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-dmqpwcec> ${label} </a> </li>`)} </ul> <div class="menu-footer" data-astro-cid-dmqpwcec> <div class="lang-toggle" data-astro-cid-dmqpwcec> ${renderComponent($$result, "LangToggle", $$LangToggle, { "data-astro-cid-dmqpwcec": true })} </div> <div class="socials" data-astro-cid-dmqpwcec> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-dmqpwcec": true })} </a>`)} </div> <div class="theme-toggle" data-astro-cid-dmqpwcec> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-dmqpwcec": true })} </div> </div> </div> </nav> ${renderScript($$result, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="group" data-astro-cid-sz7xmlte> <p class="credit" data-astro-cid-sz7xmlte>
Designed & Developed in Buenos Aires with <a href="https://astro.build/" data-astro-cid-sz7xmlte>Astro</a> ${renderComponent($$result, "Icon", $$Icon, { "icon": "rocket-launch", "size": "1.2em", "data-astro-cid-sz7xmlte": true })} </p> <p data-astro-cid-sz7xmlte>&copy; ${currentYear} Rodrigo Camino</p> </div> <p class="socials" data-astro-cid-sz7xmlte> <a href="https://x.com/RodrigoCamino8" data-astro-cid-sz7xmlte> X </a> <a href="https://github.com/kirigaya97" data-astro-cid-sz7xmlte> GitHub</a> <a href="https://instagram.com/rodri.camino" data-astro-cid-sz7xmlte> Instagram</a> <a href="https://linkedin.com/in/rodrigo-camino" data-astro-cid-sz7xmlte>LinkedIn</a> </p> </footer>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/Footer.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head>${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description, "data-astro-cid-37fxchfa": true })}${renderHead()}</head> <body data-astro-cid-37fxchfa> <div class="stack backgrounds" data-astro-cid-37fxchfa> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-37fxchfa": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </div> ${renderScript($$result, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Hero as a, $$Icon as b };
