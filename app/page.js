"use client";

import Link from 'next/link';
import SubscribeModal from './components/SubscribeModal';
import { useState } from 'react';
import { Newspaper, Target, Zap } from 'lucide-react'

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-sky-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 transition duration-300">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-transparent bg-clip-text font-bold bg-gradient-to-br from-blue-500 to-indigo-800 hover:from-blue-900 hover:to-indigo-300 transition duration-700">Newzly</span>
        </h1>
        <p className="text-lg max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
          Your smart gateway to the latest and most reliable news — fast, clean, and clutter-free.
        </p>
        <Link
          href="/news"
          className="bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-800 hover:to-indigo-400 transition duration-700 text-white font-medium px-6 py-3 rounded-lg"
        >
          Explore News
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Newzly?</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition">
            <div className="text-4xl mb-4 flex justify-center items-center">
              <Newspaper size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stay informed with live news feeds from trusted sources worldwide.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition">
            <div className="text-4xl mb-4 flex justify-center items-center">
              <Target size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Feeds</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Customize what you care about—technology, politics, entertainment, and more.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition">
            <div className="text-4xl mb-4 flex justify-center items-center">
              <Zap size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Blazing Fast</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with performance in mind. Minimal design, maximum speed.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Start exploring the world with Newzly</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Join thousands of informed readers today.
        </p>
        <button
          className="inline-block bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-800 hover:to-indigo-400 transition duration-700 text-white px-6 py-3 rounded-lg font-medium"
          onClick={() => setShowModal(true)}
        >
          Subscribe to our newsletter
        </button>
      </section>

      <SubscribeModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}
