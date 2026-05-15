import { c as createComponent } from './astro-component_DcekZAwj.mjs';
import { u as maybeRenderHead, k as addAttribute, z as renderSlot, B as renderTemplate, x as renderComponent } from './entrypoint_jb8Q-nvW.mjs';
import { b as $$Icon } from './BaseLayout_Cz1PLEBJ.mjs';

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Interested in working together?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "https://wa.me/+5491132125484", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Shoot Me a Message
${renderComponent($$result2, "Icon", $$Icon, { "icon": "whatsapp", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside>`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/ContactCTA.astro", void 0);

export { $$CallToAction as $, $$ContactCTA as a };
