/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_BL3Jfbom.mjs';
import 'kleur/colors';
import { b as $$Image, $ as $$MainLayout } from './404_BECTP9x-.mjs';

const aboutImg = new Proxy({"src":"/_astro/about.C1FZ3Rbp.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/dave/projects/portfolio-astro-site/src/images/about.jpg";
							}
							
							return target[name];
						}
					});

const team1 = new Proxy({"src":"/_astro/team1.CHXq7Isr.png","width":750,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/dave/projects/portfolio-astro-site/src/images/team1.png";
							}
							
							return target[name];
						}
					});

const team2 = new Proxy({"src":"/_astro/team2.Ccx9qtIf.png","width":750,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/dave/projects/portfolio-astro-site/src/images/team2.png";
							}
							
							return target[name];
						}
					});

const team3 = new Proxy({"src":"/_astro/team3.B0njnFun.png","width":750,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/dave/projects/portfolio-astro-site/src/images/team3.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About The TechPeople Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-5"> About TechPeople</h1> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div class="w-full md:w-1/2 mb-8 md:mb-0"> ${renderComponent($$result2, "Image", $$Image, { "src": aboutImg, "alt": "Tech People Team", "class": "w-full h-auto rounded-lg shadow-lg" })} </div> <div class="w-full md:w-1/2"> <h2 class="text-3xl font-extrabold text-gray-900 mb-4">
Who We Are
</h2> <p class="text-gray-700 leading-relaxed mb-6">
We are Tech People, a passionate team of tech enthusiasts dedicated to bringing you the latest news, articles, and tutorials on all things technology.
</p> <p class="text-gray-700 leading-relaxed mb-6">
Our mission is to empower and educate our readers, helping them stay up-to-date with the rapidly evolving world of technology. Whether you're a seasoned developer, a gadget enthusiast, or just curious about the latest tech trends, we've got you covered.
</p> </div> </div>  <div class="mt-10"> <h2 class="text-3xl font-extrabold text-gray-900 mb-8">
Our Team
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": team1, "alt": "Team Member 1", "class": "w-full h-auto" })} <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">John Doe</h3> <p class="text-gray-70">Founder & Editor-in-Chief</p> </div> </div> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": team2, "alt": "Team Member 2", "class": "w-full h-auto" })} <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">Paul Newman</h3> <p class="text-gray-70">Lead Writer</p> </div> </div> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": team3, "alt": "Team Member 3", "class": "w-full h-auto" })} <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">Johanna Johnson</h3> <p class="text-gray-70">Tech Analyst</p> </div> </div> </div> </div> ` })}`;
}, "/home/dave/projects/portfolio-astro-site/src/pages/about.astro", void 0);

const $$file = "/home/dave/projects/portfolio-astro-site/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
