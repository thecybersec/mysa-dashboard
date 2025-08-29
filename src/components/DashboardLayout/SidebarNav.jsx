import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({ menuItems }) {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-4 py-6 space-y-2">
      {menuItems.map((item) => {
        const IconComponent = item.icon;

        // agar pathname item.href se start ho to active
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`
              flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-colors
              ${isActive ? "bg-pink-light text-pink" : "text-[#667085]"}
            `}
          >
            <div className="flex items-center space-x-3">
              <IconComponent className="h-5 w-5" />
              <span>{item.name}</span>
            </div>
            {item.badge && (
              <span className="bg-sidebar-primary text-sidebar-primary-foreground text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
