




/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import AOS from "aos";

import { useGlobalClickSound } from "@/utils/useGlobalClickSound";
import ClickSound  from "@/assets/sounds/click.wav" ;
/* ----------------------------------------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
function App() {
    useEffect(() => {AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 100,});}, []);
    
    useGlobalClickSound(ClickSound);
    
    return <RouterProvider router={router} />;
}
export default App
/* ----------------------------------------------------------------------------------------------------------- */

