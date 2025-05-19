'use client';

import useSWR from 'swr';
import GlobalAlert from '@/app/components/GlobalAlert';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  });

export default function NewsPage() {
  const { category } = useParams();

  const { data, error, isLoading } = useSWR(`/api/get-news?category=${category}`, fetcher);

  const news = data?.articles || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {isLoading && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
            role="status"
            aria-label="Loading"
          ></div>
          <p className="mt-4 text-lg text-blue-600 dark:text-blue-400 font-medium">
            Fetching {category} news...
          </p>
        </div>
      )}

      {error && (
        <div className="mt-12">
          <GlobalAlert
            type="error"
            message={error.message || 'Something went wrong while loading the news.'}
          />
        </div>
      )}

      {!isLoading && !error && news.length > 0 && (
        <>
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-tight capitalize">
            {category} News
          </h1>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {news.filter(
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
                className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={article.urlToImage}
                    alt={article.title || 'News image'}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                    {article.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                    {new Date(article.publishedAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </>
      )}

      {!isLoading && !error && news.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-16">
          <p>No news articles found for this category.</p>
        </div>
      )}
    </div>
  );
}
