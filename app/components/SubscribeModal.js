import { useState, useEffect } from 'react';
import Alert from './Alert';

export default function SubscribeModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger animation slightly after mount
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with an API call
    console.log('Subscribed:', email);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full p-6 relative transform transition-all duration-300 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          ✕
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
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
