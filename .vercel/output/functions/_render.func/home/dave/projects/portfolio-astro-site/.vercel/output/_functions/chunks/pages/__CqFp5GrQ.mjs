/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_BL3Jfbom.mjs';
import 'kleur/colors';
import { c as capitalise, g as getEntry, f as formatDate, $ as $$MainLayout } from './404_BECTP9x-.mjs';
import 'clsx';
/* empty css                           */

const $$Astro$1 = createAstro();
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-2"> ${tags.map((tag, index) => renderTemplate`<span${addAttribute(index % 2 === 0 ? "px-2 py-1 bg-green-500 text-white rounded-full text-xs hover:opacity-90" : "px-2 py-1 bg-indigo-500 text-white rounded-full text-xs hover:opacity-90", "class")}><a${addAttribute(`/articles/tag/${tag}`, "href")}>#${capitalise(tag)}</a></span>`)} </div>`;
}, "/home/dave/projects/portfolio-astro-site/src/components/Tags.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("blog", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To Articles</a> <article> <h1 class="text-4xl font-bold mb-2">${entry.data.title}</h1> <h3 class="text-lg mb-2">${`Written by ${entry.data.author} on ${formatDate(entry.data.pubDate)}`}</h3> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} <img${addAttribute(`/images/${entry.data.image}`, "src")} alt="Article Image" class="my-6 w-full h-auto rounded-xl mb-6"> ${renderComponent($$result2, "Content", Content, {})} </article> ` })} `;
}, "/home/dave/projects/portfolio-astro-site/src/pages/articles/[...slug].astro", void 0);

const $$file = "/home/dave/projects/portfolio-astro-site/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Tags as $, ____slug_ as _ };
