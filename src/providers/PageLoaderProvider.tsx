


import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import LOGO from "@/assets/images/Logo1.png"

interface PageLoaderContextType {isLoading: boolean;}
const PageLoaderContext = createContext<PageLoaderContextType>({isLoading: true});
interface PageLoaderProviderProps {children: ReactNode;isReady?: boolean;minimumDuration?: number;}

export function PageLoaderProvider({ children, isReady = true, minimumDuration = 5000}: PageLoaderProviderProps) {
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {setMinimumTimePassed(true);}, minimumDuration);
    return () => window.clearTimeout(timer);
  }, [minimumDuration]);

  const isLoading = !minimumTimePassed || !isReady;

  return (
    <PageLoaderContext.Provider value={{ isLoading }}>
      {isLoading && (
        <div className="global_loader">
          <div className="loader_content">
            <img src={LOGO} alt="logo"  loading="lazy"/>
            <div className="loader_progress"><span /></div>
            <p>Préparation de votre expérience...</p>
          </div>
        </div>
      )}

      <div className={`app_content ${isLoading ? "app_content_loading" : ""}`}>
        {children}
      </div>
    </PageLoaderContext.Provider>
  );
}

export function usePageLoader() {
  return useContext(PageLoaderContext);
}
