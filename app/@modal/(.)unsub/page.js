'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { X } from 'lucide-react';
import Alert from '@/app/components/Alert';

export default function UnsubscribeModal() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const closeModal = () => router.back();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/unsub?email=${email}`);
        setSubmitted(true);
    };
    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
        >
            <div
                className="bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6 relative"
            >
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Unsubscribe</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We&apos;re sorry to see you go! If you unsubscribe, you&apos;ll stop receiving all newsletters from us.
                </p>

                {submitted ? (
                    <Alert type="error" message="You have successfully unsubscribed.
                    We're sorry to see you go! If you change your mind, you're always welcome back.
                    
                    Thank you for being with us." />
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white py-2 rounded font-medium transition"
                        >
                            Unsubscribe
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
