"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar({ menuItems }) {
  return (
    <div
      className={`
        fixed  w-72 inset-y-0 left-0 z-50 translate-x-0 lg:static lg:inset-0
      `}
    >
      <SidebarHeader />
      <SidebarNav menuItems={menuItems} />
      <SidebarFooter />
    </div>
  );
}
