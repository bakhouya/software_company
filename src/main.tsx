
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./lib/queryClient";
// import { AuthProvider } from "./auth/AuthContext";
import App from "./App";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "aos/dist/aos.css";

import "./styles/main.scss";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  </StrictMode>,
);
