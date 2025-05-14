import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { SidebarProvider } from "./context/SidebarContext";
import Sidebar from "./components/Sidebar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Newzly - Real-Time Personalized News",
  description:
    "Stay updated with real-time, AI-curated news tailored to your interests. Discover technology, politics, business, and entertainment stories that matter to you.",
  keywords: [
    "Newzly",
    "real-time news",
    "news feed",
    "AI news app",
    "breaking news",
    "technology news",
    "politics",
    "business",
    "entertainment",
  ],
  creator: "AYOUBE HSSI",
  publisher: "AYOUBE HSSI",
  openGraph: {
    title: "Newzly - Real-Time News",
    description:
      "AI-powered news aggregator delivering only what matters to you. Fast, and minimal.",
    siteName: "Newzly",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newzly - Real-Time News",
    description:
      "AI-powered news app tailored to your interests. Stay ahead with fast, focused, and relevant updates.",
  },
  themeColor: "#1e40af",
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Newzly - Real-Time News</title>
        <meta
          name="description"
          content="Stay updated with real-time, AI-curated news tailored to your interests."
        />
        <meta name="keywords" content="news, AI, real-time, Newzly" />
        <meta name="author" content="AYOUBE HSSI" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SidebarProvider>
            <Sidebar />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-200 flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
