// Environment configuration for different deployment environments
const getServerUrl = () => {
    // Check if we're in development mode
    if (import.meta.env.DEV) {
        return "http://localhost:5000";
    }
    
    // Check for custom backend URL from environment variables
    if (import.meta.env.VITE_BACKEND_URL) {
        return import.meta.env.VITE_BACKEND_URL;
    }
    
    // Production fallback to Render backend
    return "https://chatapp-backend-u4at.onrender.com";
};

export const serverUrl = getServerUrl();
