/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_BL3Jfbom.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$MainLayout } from './404_BECTP9x-.mjs';
import { $ as $$ArticleCard } from './__BaHs6vpC.mjs';
import { $ as $$SearchForm } from './index_ph4GaXwi.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  allBlogArticles.flatMap((article) => article.data.tags.map((tag) => "#" + tag));
  const searchResults = allBlogArticles.filter((article) => {
    const lowerCaseQuery = query.toLowerCase();
    const tagMatch = article.data.tags.some((tag) => ("#" + tag).toLowerCase() === lowerCaseQuery);
    const titleMatch = article.data.title.toLowerCase().includes(lowerCaseQuery);
    const bodyMatch = article.body.toLowerCase().includes(lowerCaseQuery);
    const slugMatch = article.slug.toLowerCase().includes(lowerCaseQuery);
    return titleMatch || slugMatch || bodyMatch || tagMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">All Articles</a> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <h1 class="text-2xl pb-3 mt-6">Results For <strong>${query}</strong></h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "/home/dave/projects/portfolio-astro-site/src/pages/articles/search.astro", void 0);

const $$file = "/home/dave/projects/portfolio-astro-site/src/pages/articles/search.astro";
const $$url = "/articles/search";

export { $$Search as default, $$file as file, $$url as url };
