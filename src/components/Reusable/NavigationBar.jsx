"use client";

import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Languages, Settings, Grid, Bell } from "lucide-react";

// JSON config for icons
const navIcons = [
  { id: 1, name: "Language", icon: Languages },
  { id: 2, name: "Settings", icon: Settings },
  { id: 3, name: "Apps", icon: Grid },
  { id: 4, name: "Notifications", icon: Bell },
];

const NavigationBar = () => {
  const pathname = usePathname();

  // Convert pathname to heading text
  const getHeading = () => {
    if (!pathname || pathname === "/") return "Dashboard";

    return pathname
      .split("/") // split by /
      .filter(Boolean) // remove empty parts
      .map(
        (segment) =>
          segment
            .split("-") // split by -
            .map(
              (word) => word.charAt(0).toUpperCase() + word.slice(1) // capitalize each
            )
            .join(" ") // join back with space
      )
      .join(" "); // join segments with space
  };

  const design = (
    <>
      <div className="bg-white flex items-center justify-between border rounded-md px-4 py-2 shadow-sm w-full">
        {/* Heading from pathname */}
        <h2 className="text-md font-semibold">{getHeading()}</h2>

        {/* Right side icons + avatar */}
        <div className="flex items-center space-x-4">
          <TooltipProvider>
            {navIcons.map((item) => {
              const Icon = item.icon;
              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <button className="p-1 rounded-md hover:bg-gray-100">
                      <Icon className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>

          {/* Avatar */}
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
  return design;
};

export default NavigationBar;
