import { b as createAstro, c as createComponent, a as renderTemplate, d as renderSlot, e as renderHead, u as unescapeHTML, f as addAttribute } from './astro/server_DYpRLEJf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                   */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://iamharshad.github.io/fontend-blogs");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { content } = Astro2.props;
  const { title, pubDate, description, author, tags } = content;
  const fullUrl = new URL(Astro2.url.pathname, Astro2.site);
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author
    },
    datePublished: pubDate,
    publisher: {
      "@type": "Organization",
      name: author
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl.href
    }
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><title>', '</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="google-site-verification" content="rXS8COqwj4vmJkMQrCa-jYOABxEQjY5uZf3nBn_iOGU"><!-- \u2705 Basic Meta --><meta name="description"', '><meta name="author"', '><meta name="robots" content="index, follow"><!-- \u2705 Open Graph for Social Sharing --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="article"><meta property="og:url"', '><!-- Optional: Add image --><!-- <meta property="og:image" content="/images/cover.jpg" /> --><!-- \u2705 Twitter Cards --><meta name="twitter:card" content="summary"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:creator" content="@yourhandle"><!-- \u2705 Favicon --><link rel="icon" href="/favicon.ico" type="image/x-icon"><!-- \u2705 Font preload for better speed --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"><!-- \u2705 Canonical URL --><link rel="canonical"', '><script type="application/ld+json">', "<\/script>", '</head> <body class="bg-gray-100 text-gray-800 font-[Inter] leading-relaxed tracking-tight"> <main class="min-h-screen flex items-center justify-center px-4 py-12 prose prose-slate"> <div class="bg-white shadow-lg rounded-xl w-full max-w-3xl p-8 md:p-10 border border-gray-200"> <!-- Blog Header --> <header class="mb-8"> <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight"> ', ' </h1> <div class="text-sm text-gray-500 mt-2"> <span>\u{1F5D3} ', '</span> <span class="mx-2">\u2022</span> <span>\u270D\uFE0F ', '</span> </div> <p class="text-base text-gray-600 mt-3">', '</p> </header> <!-- Blog Content --> <article class="max-w-none"> ', " </article> ", ' <!-- Contact Box --> <footer class="mt-12 pt-6"> <div class="bg-gray-50 p-6 rounded-xl shadow-sm"> <h2 class="text-xl font-semibold text-gray-800 mb-2">\n\u{1F4EC} Like this post?\n</h2> <p class="text-sm text-gray-600 mb-4">\nReach out for collaboration, feedback, or questions!\n</p> <a href="mailto:iamharshad.prajapati@gmail.com" class="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition">\n\u2709\uFE0F Email Me\n</a> </div> </footer> </div> </main> </body></html>'])), title, addAttribute(description, "content"), addAttribute(author, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`https://iamharshad.github.io/fontend-blogs/`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`https://iamharshad.github.io/fontend-blogs/`, "href"), unescapeHTML(JSON.stringify(schemaData)), renderHead(), title, pubDate || "Unknown Date", author || "Unknown Author", description, renderSlot($$result, $$slots["default"]), tags.length > 0 && renderTemplate`<div class="mt-12 flex flex-wrap gap-2 text-sm text-gray-600"> ${tags.map((tag) => renderTemplate`<span class="px-2 py-1 bg-gray-100 rounded-md">#${tag}</span>`)} </div>`);
}, "/Users/harshad/code/proto-equator/src/layouts/BlogLayout.astro", void 0);

export { $$BlogLayout as $ };
