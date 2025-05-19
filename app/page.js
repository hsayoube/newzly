'use client';

import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import { Newspaper, Target, Zap } from 'lucide-react';
import { APP_NAME } from './config';
import GlobalAlert from './components/GlobalAlert';

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  });

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/get-news', fetcher);
  const news = data?.articles?.slice(0, 9) || [];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-800 dark:to-gray-900 transition duration-300">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute w-72 h-72 bg-blue-400 rounded-full opacity-50 blur-3xl animate-blob1" />
          <div className="absolute w-60 h-60 bg-indigo-400 rounded-full opacity-40 blur-2xl animate-blob2 top-2/3 left-2/3" />
          <div className="absolute w-52 h-52 bg-purple-500 rounded-full opacity-30 blur-2xl animate-blob3 bottom-0 right-1/4" />
        </div>

        {/* Content */}
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-800 hover:from-blue-800 hover:to-indigo-400 transition duration-700">
            {APP_NAME}
          </span>
        </h1>
        <p className="relative z-10 text-lg max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
          Your smart gateway to the latest and most reliable news — fast, clean, and clutter-free.
        </p>
      </section>

      {/* Latest News Section FIRST */}
      <section className="px-6 max-w-6xl mx-auto">

        {isLoading && (
          <>
            <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm p-4 animate-pulse"
                >
                  <div className="w-full h-40 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2" />
                </div>
              ))}
            </div>
          </>
        )}

        {error && (
          <GlobalAlert type='error' message="Failed to load news" />
        )}
        {!isLoading && !error && news.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
            <div className='flex flex-col items-center justify-center text-center space-y-10'>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                {
                  news.filter(
                    (article) =>
                      article.url &&
                      article.urlToImage &&
                      article.title &&
                      article.description &&
                      article.publishedAt
                  ).map((article) => (
                    <a
                      key={article.url}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative w-full h-40">
                        <Image
                          src={article.urlToImage}
                          alt={article.title || 'News image'}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:underline line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          {new Date(article.publishedAt).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </a>
                  ))}
              </div>
              <Link
                href="/general"
                className="bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-800 hover:to-indigo-400 transition duration-700 text-white font-medium px-6 py-3 rounded-lg shadow"
              >
                Explore News
              </Link>
            </div>
          </>
        )}
      </section>

      {/* Features Section */}
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why {APP_NAME}?</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          {[
            {
              icon: <Newspaper size={36} />,
              title: 'Real-Time Updates',
              desc: 'Stay informed with live news feeds from trusted sources worldwide.',
            },
            {
              icon: <Target size={36} />,
              title: 'Personalized Feeds',
              desc: 'Customize what you care about—technology, politics, entertainment, and more.',
            },
            {
              icon: <Zap size={36} />,
              title: 'Blazing Fast',
              desc: 'Built with performance in mind. Minimal design, maximum speed.',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center items-center text-blue-600 dark:text-blue-400">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 dark:bg-gray-800 text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Start exploring the world with {APP_NAME}</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Join thousands of informed readers today.
        </p>
        <Link
          href="/sub"
          className="inline-block cursor-pointer bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-800 hover:to-indigo-400 transition duration-700 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          Subscribe to our newsletter
        </Link>
      </section>
    </main>
  );
}
