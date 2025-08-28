"use client";

import { useState } from "react";
import {
  Home,
  Users,
  Settings,
  Handshake,
  Activity,
  TableOfContents,
} from "lucide-react";
import Sidebar from "./Sidebar";

const menuItems = [
  { id: 1, name: "Dashboard", icon: Home, href: "/", active: true },
  {
    id: 2,
    name: "Users Management",
    icon: Users,
    href: "/users-management",
    active: false,
  },
  {
    id: 3,
    name: "Partner Management",
    icon: Handshake,
    href: "/partner-management",
    active: false,
  },
  {
    id: 4,
    name: "Activity Management",
    icon: Activity,
    href: "/activity-management",
    active: false,
  },
  {
    id: 5,
    name: "Content Management",
    icon: TableOfContents,
    href: "/content-management",
    active: false,
  },
  { id: 7, name: "Settings", icon: Settings, href: "/settings", active: false },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Main content */}
      <div className="w-full p-4 bg-pink-light overflow-y-auto  space-y-4">
        <main>{children}</main>
      </div>
    </div>
  );
}
