"use client"

import { useState } from 'react';
import { X } from 'lucide-react';
import PrivacyPolicyModal from '@/app/components/PrivacyPolicyModal';
import DisclaimerModal from '@/app/components/DisclaimerModal';
import { useRouter } from 'next/navigation';
import Alert from '@/app/components/Alert';

export default function SubscribeModal() {
  const router = useRouter();

  const closeModal = () => router.back();

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    router.replace(`/sub?email=${email}`, { scroll: false, shallow: true });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full p-6 relative transform transition-all duration-300 ease-out`}>
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Subscribe to Newzly</h2>

        {submitted ? (
          <Alert type="success" message="Thank you for subscribing!" />
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="agree"
                required
                className="w-5 h-5"
              />
              <label htmlFor="agree" className="text-sm text-gray-700 dark:text-gray-300">
                I agree to{" "}
                <span
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  onClick={() => setShowPrivacyModal(true)}
                >
                  Privacy Policy
                </span>{" "}
                &{" "}
                <span
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  onClick={() => setShowDisclaimerModal(true)}
                >
                  Disclaimer
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition"
            >
              Subscribe
            </button>
            <PrivacyPolicyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
            <DisclaimerModal isOpen={showDisclaimerModal} onClose={() => setShowDisclaimerModal(false)} />
          </form>
        )}
      </div>
    </div>
  );
}
