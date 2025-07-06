import rss from '@astrojs/rss';

export const GET = () => {
  const posts = [
    {
      title: 'SSR vs SSG and the Rise of Disappearing Frameworks in 2025',
      description:
        'Astro, Qwik, and the new wave of frontend frameworks are changing how we think about rendering. Here\'s what modern developers need to know.',
      pubDate: new Date('2025-07-06'),
      slug: 'ssr-ssg-disappearing-frameworks',
    },
    // Add more blog entries manually here...
  ];

  return rss({
    title: 'Frontend Blogs by Harshad',
    description: 'Stay updated on modern frontend frameworks and tools.',
    site: 'https://iamharshad.github.io/fontend-blogs',
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
      link: `/fontend-blogs/blog/${post.slug}`,
    })),
  });
};
