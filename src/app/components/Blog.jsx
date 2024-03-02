// components/Blog.js

import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="bg-gray-200 py-20 sm:py-32 md:py-40 lg:py-48">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Blog</h2>
        <ul className="space-y-4">
          <li><a href="/blog-post-1" className="text-blue-600">Blog Post 1</a></li>
          <li><a href="/blog-post-2" className="text-blue-600">Blog Post 2</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;