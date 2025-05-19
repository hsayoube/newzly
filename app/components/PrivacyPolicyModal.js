import { useState, useEffect } from 'react';
import { APP_DOMAIN } from '../config';
import { X, Mail, Link, Ban, Gem, CircleCheck } from 'lucide-react';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
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

                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Privacy Policy</h2>
                <div className="overflow-y-auto max-h-[70vh] pr-4 custom-scrollbar">
                    <div className="space-y-4 text-gray-700 dark:text-gray-400">
                        <p>
                            <strong>Your Privacy Matters:</strong>
                            <br />
                            We value your trust and are committed to protecting your
                            personal information. This privacy policy explains how we
                            collect, use, and safeguard the data we receive from users and
                            third parties.
                        </p>

                        <p>
                            <strong>Policy Updates:</strong>
                            <br />
                            We may update this privacy policy periodically. Any changes
                            will be reflected on this page and, if significant,
                            communicated via email or a website notice.
                        </p>

                        <p>
                            <strong>Newsletter Subscription & Email Frequency:</strong>
                            <br />
                            By subscribing to our newsletter, you agree to receive daily
                            emails. We may adjust the frequency of these communications at
                            our discretion, without prior notice.
                        </p>

                        <div>
                            <strong>How We Collect & Use Your Information:</strong>
                            <br />
                            We collect information you provide directly (e.g., during
                            registration) and data received from affiliates. This
                            information is used for:
                            <ul className="list-none ml-6 mt-1">
                                <li className='flex justify-items-start items-center gap-2'><CircleCheck size={18} /> Sending newsletters and promotional updates.</li>
                                <li className='flex justify-items-start items-center gap-2'><CircleCheck size={18} /> Verifying age and distributing prizes.</li>
                                <li className='flex justify-items-start items-center gap-2'><CircleCheck size={18} /> Providing third-party offers (only when opted in).</li>
                            </ul>
                        </div>

                        <p>
                            We do not share your personal information with third-party
                            marketers. However, we may share aggregated, non-identifiable
                            statistical data (e.g., trends, demographics) with partners
                            and advertisers.
                        </p>

                        <div>
                            Additionally, we collect certain data automatically, such as:
                            <ul className="list-disc ml-6 mt-1">
                                <li>
                                    IP addresses, browser type, and ISP details (for trend
                                    analysis and security).
                                </li>
                                <li>Referral pages and timestamps (to improve user experience).</li>
                            </ul>
                        </div>

                        <p>
                            In cases where data is linked to personally identifiable
                            information for internal verification, it remains confidential
                            and is not shared externally.
                        </p>

                        <p>
                            <strong>Children&apos;s Privacy:</strong>
                            <span className='flex justify-items-start items-center gap-2'><Gem size={18} />Under 18? Obtain parental consent before submitting information.</span>
                            <span className='flex justify-items-start items-center gap-2'><Gem size={18} />Under 13? We require written parental permission before collecting any personal data.</span>
                        </p>

                        <p>
                            <strong>Cookies & Third-Party Advertisers:</strong>
                            <br />
                            <span className='flex justify-items-start items-center gap-2'><Ban size={18} />We do not use cookies on our site.</span>
                            <span className='flex justify-items-start items-center gap-2'><Link size={18} />However, third-party advertisers or linked websites may use cookies. Please review their privacy policies for details.</span>
                        </p>

                        <p>
                            <strong>Third-Party Links:</strong>
                            <br />
                            Our newsletters may include links to external websites. We are
                            not responsible for their privacy practices and encourage you
                            to read their policies before sharing personal information.
                        </p>

                        <p>
                            <strong>Security Measures:</strong>
                            <br />
                            We implement reasonable security measures to protect user
                            data. However, no internet-based system is completely secure.
                            If you have security concerns, contact us via email.
                        </p>

                        <p>
                            <strong>Business Transitions:</strong>
                            <br />
                            In the event of a merger, acquisition, or asset sale, your
                            personal information may be transferred. You will be notified
                            through a prominent notice on our website.
                        </p>

                        <p>
                            <strong>Opt-Out Policy:</strong>
                            <br />
                            You can unsubscribe from our newsletter or promotional emails
                            anytime by following the instructions in the email or
                            contacting us directly.
                        </p>

                        <p>
                            <strong>Acceptance of Terms:</strong>
                            <br />
                            By using our services and subscribing to our newsletter, you
                            agree to this privacy policy. If you do not agree, please
                            refrain from subscribing. We reserve the right to modify this
                            policy, and updates take effect upon posting.
                        </p>

                        <p>
                            <strong>Contact Us:</strong>
                            <br />
                            <span className='flex justify-items-start items-center gap-2 my-2'><Mail size={18} />Email: contact@{APP_DOMAIN.toLowerCase()}</span>
                            For any questions regarding this privacy policy, our website
                            practices, your data or your interactions with us, feel free
                            to reach out.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
