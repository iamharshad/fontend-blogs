// src/pages/rss.xml.js
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET() {
  const posts = await getCollection('blog')

  return rss({
    title: 'Frontend Blogs by Harshad',
    description: 'Stay updated on modern frontend frameworks and tools.',
    site: 'https://iamharshad.github.io/fontend-blogs',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  })
}
