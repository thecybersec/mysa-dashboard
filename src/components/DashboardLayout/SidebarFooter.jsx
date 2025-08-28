"use client";

export default function SidebarFooter() {
  return (
    <div className="p-4 border-t absolute bottom-0 w-full">
      <div className="flex items-center space-x-3 px-3 py-2">
        <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center">
          <span className="text-sidebar-primary-foreground text-xs font-medium">
            JD
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-sidebar-foreground truncate">
            John Doe
          </p>
          <p className="text-xs text-muted-foreground truncate">
            john@example.com
          </p>
        </div>
      </div>
    </div>
  );
}
