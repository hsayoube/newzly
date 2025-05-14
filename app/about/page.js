import { Earth, Lightbulb, Zap } from "lucide-react";

export default function About() {
    return (
        <main className="px-6 pt-20 pb-18">
            <div className="max-w-4xl mx-auto space-y-12">
                <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-800 hover:from-blue-900 hover:to-indigo-300 transition duration-700">
                    About Newzly
                </h1>

                <p className="text-lg leading-relaxed text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    <strong>Newzly</strong> is your go-to platform for fast, reliable, and clutter-free news.
                    Whether you care about politics, tech, sports, or culture — we deliver the headlines
                    that matter, in real-time, without the noise.
                </p>

                <section className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-2 flex justify-center items-center gap-3"><Earth size={24} /> Global Sources</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Aggregated from trusted international news APIs — always fresh, always verified.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-2 flex justify-center items-center gap-3"><Lightbulb size={24} /> Smart Filtering</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Tailored feeds based on your interests. Discover only what matters to you.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-2 flex justify-center items-center gap-3"><Zap size={24} /> Lightning Fast</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Built with modern frameworks and minimal UI to prioritize speed and readability.
                        </p>
                    </div>
                </section>

                <div className="text-center mt-16">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Want to stay updated? Join our newsletter.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-800 hover:to-indigo-400 transition duration-700 text-white font-medium px-6 py-3 rounded-lg"
                    >
                        Subscribe Now
                    </a>
                </div>
            </div>
        </main>
    );
}
