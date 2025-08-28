"use client";

import Image from "next/image";

export default function SidebarHeader() {
  return (
    <div className="flex items-center justify-between  px-6 border-b border-sidebar-border">
      {/* Logo */}
      <div className=" items-center  flex justify-center w-full py-5">
        <Image src="/assets/logo.svg" alt="Logo" width={150} height={150} />
      </div>
    </div>
  );
}
