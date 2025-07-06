import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_DYpRLEJf.mjs';
import 'kleur/colors';
import { $ as $$BlogLayout } from '../../chunks/BlogLayout_DS04SOZq.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<p>When I first heard the term <strong>“disappearing frameworks”</strong>, I’ll admit — I rolled my eyes. Another flashy term for the same old thing?</p>\n<p>But this one? It’s actually a game-changer.</p>\n<hr>\n<h2 id=\"-ssr-vs-ssg-the-refresher-you-didnt-ask-for-but-need\">🔁 SSR vs SSG: The Refresher You Didn’t Ask For (but Need)</h2>\n<p>Let’s rewind real quick:</p>\n<ul>\n<li><strong>SSR (Server-Side Rendering)</strong>: The server builds the page every time someone visits. Great for dynamic stuff, not so much for speed.</li>\n<li><strong>SSG (Static Site Generation)</strong>: The pages are pre-built when you deploy. Super fast, but not great if your content changes often.</li>\n<li><strong>ISR (Incremental Static Regeneration)</strong>: A happy mix — pre-build most of it, re-build parts when needed. Next.js popularized this.</li>\n</ul>\n<p>A few years ago, that was the whole frontend rendering debate.</p>\n<p>But now? Things are shifting in a whole new direction.</p>\n<hr>\n<h2 id=\"-enter-the-disappearing-frameworks\">🚀 Enter the “Disappearing” Frameworks</h2>\n<p>Frameworks like <strong>Astro</strong> and <strong>Qwik</strong> are flipping the script. They’re not trying to just <em>optimize</em> what’s already there — they’re rethinking the whole idea.</p>\n<p>These frameworks:</p>\n<ul>\n<li>Ship <strong>almost no JavaScript</strong> by default</li>\n<li>Only hydrate the parts that need interactivity (aka <strong>island architecture</strong>)</li>\n<li>Or even better: <strong>resume app state</strong> instantly on load (Qwik’s thing)</li>\n</ul>\n<p>That’s what we mean by “disappearing” — the framework just fades out of the way after build time. Your user is left with fast, minimal, and SEO-friendly HTML.</p>\n<p>It’s not magic. It’s smart design.</p>\n<hr>\n<h2 id=\"️-framework-showdown-astro-vs-qwik-vs-nextjs\">⚔️ Framework Showdown: Astro vs Qwik vs Next.js</h2>\n<p>Let’s be honest — no one tool wins at everything. But here’s a side-by-side comparison that might help:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Feature</th><th>Astro</th><th>Qwik</th><th>Next.js (App Router)</th></tr></thead><tbody><tr><td>Default Strategy</td><td>SSG</td><td>Resumability</td><td>SSR / ISR / RSC</td></tr><tr><td>JS by default</td><td>0 KB</td><td>Lazy resume</td><td>Depends</td></tr><tr><td>Ideal For</td><td>Blogs, Docs</td><td>Dashboards</td><td>Full-stack Apps</td></tr><tr><td>Learning Curve</td><td>Low</td><td>Medium–High</td><td>Medium</td></tr></tbody></table>\n<p>Astro is simple and snappy.<br>\nQwik is ambitious and futuristic.<br>\nNext.js is the powerhouse — but it’s heavier and more complex.</p>\n<hr>\n<h2 id=\"-what-i-tried-real-project-notes\">🧪 What I Tried (Real Project Notes)</h2>\n<p>I did a fun experiment while building a small landing page for one of my side projects:</p>\n<ul>\n<li><strong>Astro</strong> loaded in ~0.8s with 0 JS. Wild.</li>\n<li><strong>Qwik</strong> resumed instantly, even with some interactivity like tabs and modals.</li>\n<li><strong>Next.js</strong>? Solid, but felt heavier and slower on the first load — especially without fine-tuning.</li>\n</ul>\n<p>I’m not ditching Next.js (yet). But I’m definitely rethinking when to use it.</p>\n<hr>\n<h2 id=\"-tldr--what-it-means-for-us-devs\">🧠 TL;DR — What It Means for Us Devs</h2>\n<p>2025 isn’t about picking <em>one</em> frontend strategy. It’s about using the right tool for the job:</p>\n<ul>\n<li>Want lightning-fast blogs/docs? → Go <strong>Astro</strong></li>\n<li>Need rich interactivity with minimal load? → Try <strong>Qwik</strong></li>\n<li>Building full-stack dashboards or marketing sites? → Stick with <strong>Next.js</strong></li>\n</ul>\n<p>Frontend isn’t one-size-fits-all anymore. And honestly? That’s a good thing.</p>\n<hr>\n<p>See you in the disappearing future 🪄</p>";

				const frontmatter = {"title":"Salary Trends for Senior Software Engineers in Karnataka: What to Expect in 2025","pubDate":"2025-07-07","description":"Explore the latest salary trends, insights, and what Senior Software Engineers can expect in Karnataka's booming tech market in 2025.","author":"Harshad Prajapati","layout":"../../layouts/BlogLayout.astro"};
				const file = "/Users/harshad/code/proto-equator/src/pages/blog/ssr-ssg-disappearing-frameworks.md";
				const url = "/fontend-blogs/blog/ssr-ssg-disappearing-frameworks";
				function rawContent() {
					return "   \n                                                                                         \n                     \n                                                                                                                                                    \n                           \n                                      \n   \n\n\nWhen I first heard the term **“disappearing frameworks”**, I’ll admit — I rolled my eyes. Another flashy term for the same old thing?\n\nBut this one? It's actually a game-changer.\n\n---\n\n## 🔁 SSR vs SSG: The Refresher You Didn’t Ask For (but Need)\n\nLet’s rewind real quick:\n\n- **SSR (Server-Side Rendering)**: The server builds the page every time someone visits. Great for dynamic stuff, not so much for speed.\n- **SSG (Static Site Generation)**: The pages are pre-built when you deploy. Super fast, but not great if your content changes often.\n- **ISR (Incremental Static Regeneration)**: A happy mix — pre-build most of it, re-build parts when needed. Next.js popularized this.\n\nA few years ago, that was the whole frontend rendering debate.\n\nBut now? Things are shifting in a whole new direction.\n\n---\n\n## 🚀 Enter the “Disappearing” Frameworks\n\nFrameworks like **Astro** and **Qwik** are flipping the script. They’re not trying to just *optimize* what’s already there — they’re rethinking the whole idea.\n\nThese frameworks:\n\n- Ship **almost no JavaScript** by default\n- Only hydrate the parts that need interactivity (aka **island architecture**)\n- Or even better: **resume app state** instantly on load (Qwik’s thing)\n\nThat’s what we mean by “disappearing” — the framework just fades out of the way after build time. Your user is left with fast, minimal, and SEO-friendly HTML.\n\nIt’s not magic. It’s smart design.\n\n---\n\n## ⚔️ Framework Showdown: Astro vs Qwik vs Next.js\n\nLet’s be honest — no one tool wins at everything. But here’s a side-by-side comparison that might help:\n\n| Feature            | Astro            | Qwik             | Next.js (App Router) |\n|--------------------|------------------|------------------|-----------------------|\n| Default Strategy   | SSG              | Resumability     | SSR / ISR / RSC       |\n| JS by default      | 0 KB             | Lazy resume      | Depends               |\n| Ideal For          | Blogs, Docs      | Dashboards       | Full-stack Apps       |\n| Learning Curve     | Low              | Medium–High      | Medium                |\n\nAstro is simple and snappy.  \nQwik is ambitious and futuristic.  \nNext.js is the powerhouse — but it's heavier and more complex.\n\n---\n\n## 🧪 What I Tried (Real Project Notes)\n\nI did a fun experiment while building a small landing page for one of my side projects:\n\n- **Astro** loaded in ~0.8s with 0 JS. Wild.\n- **Qwik** resumed instantly, even with some interactivity like tabs and modals.\n- **Next.js**? Solid, but felt heavier and slower on the first load — especially without fine-tuning.\n\nI’m not ditching Next.js (yet). But I’m definitely rethinking when to use it.\n\n---\n\n## 🧠 TL;DR — What It Means for Us Devs\n\n2025 isn’t about picking *one* frontend strategy. It’s about using the right tool for the job:\n\n- Want lightning-fast blogs/docs? → Go **Astro**\n- Need rich interactivity with minimal load? → Try **Qwik**\n- Building full-stack dashboards or marketing sites? → Stick with **Next.js**\n\nFrontend isn't one-size-fits-all anymore. And honestly? That’s a good thing.\n\n---\n\nSee you in the disappearing future 🪄\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-ssr-vs-ssg-the-refresher-you-didnt-ask-for-but-need","text":"🔁 SSR vs SSG: The Refresher You Didn’t Ask For (but Need)"},{"depth":2,"slug":"-enter-the-disappearing-frameworks","text":"🚀 Enter the “Disappearing” Frameworks"},{"depth":2,"slug":"️-framework-showdown-astro-vs-qwik-vs-nextjs","text":"⚔️ Framework Showdown: Astro vs Qwik vs Next.js"},{"depth":2,"slug":"-what-i-tried-real-project-notes","text":"🧪 What I Tried (Real Project Notes)"},{"depth":2,"slug":"-tldr--what-it-means-for-us-devs","text":"🧠 TL;DR — What It Means for Us Devs"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
