import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";;

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
  });

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [client] = useState(new QueryClient());

    const [theme, setTheme] = useState('light');


    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    }, [])
  
    useEffect(() => {
      if(theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme])
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="fixed top-0 left-0 w-[100vw] h-[100vh] dark:bg-[#161B21] dark:text-white">
              <QueryClientProvider client={client}>{children}</QueryClientProvider>
            </div>
        </ThemeContext.Provider>
    );
}