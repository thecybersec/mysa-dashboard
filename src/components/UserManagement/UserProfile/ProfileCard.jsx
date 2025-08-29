"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Crown,
  Ban,
  Pencil,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Heart,
  Check,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const MetaItem = ({ icon: Icon, children }) => {
  return (
    <li className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-pink-600" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
};

const Stat = ({ icon: Icon, value, label, color = "text-foreground" }) => {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 rounded-md bg-pink-50 p-1.5 text-pink-600`}>
        <Icon size={18} aria-hidden="true" />
      </div>
      <div>
        <div className="text-lg font-semibold leading-none text-foreground">
          {value}
        </div>
        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <span className={`${color}`}>{"\u2713"}</span>
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <Card className="overflow-hidden rounded-2xl border border-pink-100 bg-background mt-5">
      {/* Banner */}
      <div
        className="h-28 w-full bg-cover bg-center md:h-36"
        style={{ backgroundImage: "url(/assets/profile-banner.png)" }}
        role="img"
        aria-label="Pink abstract banner"
      />

      {/* Content */}
      <div className="px-4 pb-6 md:px-6 md:pb-8">
        <div className="-mt-10 flex flex-col gap-4 md:-mt-12 md:flex-row md:items-start md:gap-6">
          {/* Avatar */}
          <Avatar className="h-20 w-20 ring-4 ring-background shadow-md md:h-24 md:w-24">
            <AvatarImage
              src={
                "/placeholder.svg?height=96&width=96&query=person%20portrait"
              }
              alt="Olivia Rhye"
            />
            <AvatarFallback>OR</AvatarFallback>
          </Avatar>

          {/* Main column */}
          <div className="flex-1 mt-20">
            {/* Top row: identity + actions */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-balance text-xl font-semibold text-foreground md:text-2xl">
                    Olivia Rhye
                  </h2>
                  <ShieldCheck
                    className="h-5 w-5 text-pink-600"
                    aria-label="Verified"
                  />
                </div>

                <Link
                  href="mailto:olivia@untitledui.com"
                  className=" inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>olivia@untitledui.com</span>
                </Link>

                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <MetaItem icon={ShieldCheck}>Olivia Rhye</MetaItem>
                  <MetaItem icon={MapPin}>Tokyo, Japan</MetaItem>
                  <MetaItem icon={Phone}>+81 9896131***</MetaItem>
                </ul>
              </div>

              {/* Desktop actions */}
              <div className="hidden shrink-0 items-center gap-2 md:flex">
                {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-9 w-9 border-gray-200 bg-transparent"
                      aria-label="More actions"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-44">
                    <DropdownMenuItem className="gap-2">
                      <Crown className="h-4 w-4 text-amber-600" />
                      Make Premium
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Pencil className="h-4 w-4" />
                      Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Ban className="h-4 w-4" />
                      Suspend User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}

                <Button
                  variant="secondary"
                  className="border border-amber-200 bg-amber-100 text-amber-700 hover:bg-amber-100/80"
                >
                  <Crown className="mr-2 h-4 w-4" />
                  Premium User
                </Button>

                <Button
                  variant="destructive"
                  className="bg-red-100 text-red-700 hover:bg-red-100/80"
                >
                  <Ban className="mr-2 h-4 w-4" />
                  Suspend User
                </Button>

                <Button
                  variant="outline"
                  className="border-gray-200 bg-transparent"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* Mobile actions */}
            <div className="mt-3 flex items-center gap-2 md:hidden">
              <Button
                variant="secondary"
                className="border border-amber-200 bg-amber-100 text-amber-700 hover:bg-amber-100/80"
              >
                <Crown className="mr-2 h-4 w-4" />
                Premium
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-200 bg-transparent"
                  >
                    <MoreHorizontal className="mr-2 h-4 w-4" />
                    Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-44">
                  <DropdownMenuItem className="gap-2">
                    <Pencil className="h-4 w-4" />
                    Edit Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <Ban className="h-4 w-4" />
                    Suspend User
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Partner + points + bio */}
            <div className="mt-4 space-y-3">
              <div className="text-sm">
                <span className="font-medium text-foreground">
                  Partner with
                </span>{" "}
                <Link
                  href="#"
                  className="font-medium text-pink-600 hover:underline"
                >
                  Jhon@untitledui.com
                </Link>{" "}
                <Users
                  className="ml-1 inline h-4 w-4 text-pink-600 align-[-2px]"
                  aria-hidden="true"
                />
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="font-medium text-foreground">
                  Couple Earned Points
                </span>
                <Star className="h-4 w-4 text-amber-500" aria-hidden="true" />
                <span className="font-semibold text-foreground">+50</span>
              </div>

              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-6 md:gap-10">
              <Stat
                icon={Heart}
                value="512"
                label="Saved"
                color="text-rose-600"
              />
              <Stat
                icon={Check}
                value="1012"
                label="Swipe"
                color="text-emerald-600"
              />
              <Stat
                icon={Sparkles}
                value="986"
                label="Match"
                color="text-blue-600"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
