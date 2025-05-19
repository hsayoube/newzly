import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { SidebarProvider } from "./context/SidebarContext";
import Sidebar from "./components/Sidebar";
import { APP_NAME } from "./config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${APP_NAME} - Real-Time Personalized News`,
  icon: "./favicon.ico",
  description:
    "Stay updated with real-time, AI-curated news tailored to your interests. Discover technology, politics, business, and entertainment stories that matter to you.",
  keywords: [
    APP_NAME,
    "real-time news",
    "news feed",
    "AI news app",
    "breaking news",
    "technology news",
    "politics",
    "business",
    "entertainment",
  ],
  creator: `${APP_NAME} Team`,
  publisher: `${APP_NAME} Team`,
  openGraph: {
    title: `${APP_NAME} - Real-Time News`,
    description:
      "AI-powered news aggregator delivering only what matters to you. Fast, and minimal.",
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - Real-Time News`,
    description:
      "AI-powered news app tailored to your interests. Stay ahead with fast, focused, and relevant updates.",
  }
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  } catch(e) {}
})();
          `,
          }}
        />
      </head>
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SidebarProvider>
            <Sidebar />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-200 flex-1">
                {children}
                {modal}
              </main>
              <Footer />
            </div>
          </SidebarProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
