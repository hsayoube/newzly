import { useState, useEffect } from 'react';
import { APP_DOMAIN } from '../config';
import { X } from 'lucide-react';

export default function DisclaimerModal({ isOpen, onClose }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Trigger animation slightly after mount
            setTimeout(() => setVisible(true), 10);
        } else {
            setVisible(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg min-w-xs w-5xl p-6 relative transform transition-all duration-300 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Disclaimer</h2>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <p>
                        <strong>General Information:</strong><br />
                        The content provided on {APP_DOMAIN} is for general informational purposes only. The presence of links on this site does not imply endorsement by {APP_DOMAIN}, nor do we assume responsibility for the content or operations of any external websites.
                    </p>

                    <p>
                        <strong>Third-Party Vendors:</strong><br />
                        {APP_DOMAIN} is not liable for any offers, products, or services provided by third-party vendors. We do not control the legality, validity, or availability of any coupons, promotions, or offers made by these vendors. Additionally, we cannot guarantee vendors will fulfill transactions or the quality of their goods and services. If you encounter any disputes with a vendor, you agree to release {APP_DOMAIN} from any claims, losses, damages, or expenses that may arise.
                    </p>

                    <p>
                        <strong>Transaction Responsibility:</strong><br />
                        It is your responsibility to ensure the legitimacy and reputation of any merchant before making purchases. Always read the fine print of offers, terms, and conditions before proceeding with transactions.
                    </p>

                    <p>
                        <strong>&apos;AS IS&apos; Disclaimer:</strong><br />
                        All services, information, and materials on this site are provided &apos;AS IS&apos; without warranties of any kind. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and privacy expectations (unless otherwise stated in our Privacy Policy).
                    </p>

                    <p>
                        <strong>Liability Limitations:</strong><br />
                        {APP_DOMAIN} is not responsible for any damages, including indirect, incidental, or consequential losses that arise from using, or being unable to use, the website and its materials. This includes errors, omissions, performance failures, delays, viruses, unauthorized access, data alterations, or legal claims (contractual or negligence).
                    </p>

                    <p>
                        <strong>Accuracy of Information:</strong><br />
                        The content of this website may contain technical inaccuracies or typographical errors. {APP_DOMAIN} reserves the right to modify, update, or remove products, services, or information at any time without notice. We do not guarantee the accuracy or completeness of the information provided.
                    </p>

                    <p>
                        <strong>External Links:</strong><br />
                        This site may include links to third-party websites. We are not responsible for their privacy practices and encourage you to read their policies before sharing personal information.
                    </p>
                </div>
            </div>
        </div>
    );
}
