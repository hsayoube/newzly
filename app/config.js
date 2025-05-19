import { parse } from "tldts";

const getMainDomain = () => {
  if (typeof window === "undefined") return "newzly.com";

  const { domain, isIp, isLocalhost } = parse(window.location.hostname);

  // Fallback if invalid
  if (isIp || isLocalhost || !domain) return "newzly.com";

  return "newzly";
};


const getSiteName = () => {
    if (typeof window === "undefined") return "Newzly";

    const hostname = window.location.hostname;

    // Skip localhost or IP addresses
    const isIP = /^[\d.]+$/.test(hostname);
    const isLocalhost = hostname === "localhost";

    if (isIP || isLocalhost) return "Newzly";

    // Get domain without subdomains (e.g. www.example.com -> example.com)
    const parts = hostname.split(".");
    const domain = parts.length > 2 ? parts.slice(-2).join(".") : hostname;

    // Use the first part of the domain (before the TLD) as the name
    const name = domain.split(".")[0];

    return "Newzly";
};

const APP_NAME = getSiteName();
const APP_DOMAIN = getMainDomain();
const API_URL = "https://newsapi.org/v2"
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const CATEGORIES = ["general", "business", "entertainment", "health", "science", "sports", "technology"]

export { APP_NAME, APP_DOMAIN, API_URL, API_KEY, CATEGORIES };