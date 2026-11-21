


import { Outlet } from "react-router-dom";
import PublicHeader from "../components/layouts/public-layout/PublicHeader";
import PublicFooter from "../components/layouts/public-layout/PublicFooter";
import { PageLoaderProvider } from "@/providers/PageLoaderProvider";
// import LiveChat from "../components/layouts/public-layout/LiveChat";

export default function PublicLayout() {
  return (
    <PageLoaderProvider minimumDuration={5000}>
      <div className="public-layout">
        <PublicHeader />
        <main className="public-main">
          <Outlet />
        </main>
        <PublicFooter />
        {/* <LiveChat /> */}
      </div>
    </PageLoaderProvider>

  );
}
