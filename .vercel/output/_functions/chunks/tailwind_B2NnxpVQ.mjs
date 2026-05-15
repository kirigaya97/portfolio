import { m as createRenderInstruction, x as renderComponent, B as renderTemplate, u as maybeRenderHead } from './entrypoint_jb8Q-nvW.mjs';
import { c as createComponent } from './astro-component_DcekZAwj.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

function templateEnter(_result) {
  return createRenderInstruction({ type: "template-enter" });
}
function templateExit(_result) {
  return createRenderInstruction({ type: "template-exit" });
}

const $$LangToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "language-toggle", "language-toggle", { "data-astro-cid-bvxdwma5": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-astro-cid-bvxdwma5> <span class="sr-only" data-astro-cid-bvxdwma5>Switch Language</span> </button> ` })}  ${renderScript($$result, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/LangToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/rodrigo-camino/web/portfolio/.claude/worktrees/agent-a403cdf31b466407d/src/components/LangToggle.astro", void 0);

export { $$LangToggle as $, templateExit as a, renderScript as r, templateEnter as t };
