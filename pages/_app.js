import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Initialize dark mode on app load
  useEffect(() => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    
    // Check if user has a system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    
    // Apply theme to document
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Check if the Component has a getLayout function
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp; 
