import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen max-w-[1925px] mx-auto bg-page-background p-1">
      {/* HEADER */}
      <main>
        <Outlet />
      </main>
      {/* FOOTER */}
    </div>
  );
}
