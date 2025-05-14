"use client"

import { useEffect, useState } from 'react';
import Alert from '../components/Alert';
import Image from 'next/image';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/get-news');
      const data = await response.json()
      if (response.ok) {
        setNews(data.articles)
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch (err) {
      setError('Network error or unexpected issue')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {loading && (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-blue-600 dark:text-blue-400 font-medium">Loading News...</p>
        </div>
      )}

      {error && <Alert type="error" message={error} />}

      {!loading && !error && news.length > 0 && (
        <>
          <h1 className="text-3xl text-center font-bold mb-10 text-gray-800 dark:text-gray-100">
            Latest News
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {news
              .filter(
                (article) =>
                  article.url &&
                  article.urlToImage &&
                  article.title &&
                  article.description &&
                  article.publishedAt
              )
              .map((article) => (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
                >
                  <Image
                    src={article.urlToImage}
                    alt={article.title || 'News image'}
                    width={600}
                    height={300}
                    className="object-cover w-full h-48 rounded-t-xl"
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                  <div className="p-4">
                    <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:underline line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                      {article.description}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </>
      )}

      {/* Empty State (Optional) */}
      {!loading && !error && news.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-12">No news articles found.</p>
      )}
    </div>
  );
}
