import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as renderSlot, e as renderHead, f as addAttribute, r as renderComponent } from '../chunks/astro/server_DYpRLEJf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="container"></div> `;
}, "/Users/harshad/code/proto-equator/src/components/Welcome.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://iamharshad.github.io/fontend-blogs");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><title>Frontend Blogs: Harshad Prajapati</title><meta name="google-site-verification" content="rXS8COqwj4vmJkMQrCa-jYOABxEQjY5uZf3nBn_iOGU"><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-YWYM8FBTRX"><\/script><script lang="ts">\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n\n      gtag("config", "G-YWYM8FBTRX");\n    <\/script>', "</head> <body data-astro-cid-sckkx6r4> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/harshad/code/proto-equator/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://iamharshad.github.io/fontend-blogs");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "/Users/harshad/code/proto-equator/src/pages/index.astro", void 0);

const $$file = "/Users/harshad/code/proto-equator/src/pages/index.astro";
const $$url = "/fontend-blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
