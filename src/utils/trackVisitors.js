import axios from "axios";
import { BACKEND_API_URL } from "../config.js";
export const trackVisit = async () => {
  let visitorId = localStorage.getItem("visitor_id");

  if (!visitorId) {
    //new user
    const tempId = crypto.randomUUID();
    //   TODO build own UUID generator

    try {
      await axios.post(`${BACKEND_API_URL}/api/v1/visit/track`, {
        visitorId: tempId,
        userAgent: navigator.userAgent,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      localStorage.setItem("visitor_id", tempId);
    } catch (err) {
      console.error("Failed to track first visit:", err.message);
    }
  } else {
    try {
      await axios.post(`${BACKEND_API_URL}/api/v1/visit/track`, {
        visitorId,
        userAgent: navigator.userAgent,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
    } catch (err) {
      console.error("Visit tracking failed:", err.message);
    }
  }
};
