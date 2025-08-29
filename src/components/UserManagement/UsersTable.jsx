"use client";
import React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Eye,
  Crown,
  Ban,
  ThumbsDown,
  MoreHorizontal,
  Bell,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Pagination } from "antd";
import Link from "next/link";

const usersData = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    email: "sarah.j@example.com",
    phone: "+1 234-567-8901",
    relationship: "In a Relationship",
    lastActive: "2 hours ago",
    datePlans: 12,
    subscription: "Premium",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Los Angeles, USA",
    email: "michael.c@example.com",
    phone: "+1 234-567-8902",
    relationship: "Single",
    lastActive: "1 day ago",
    datePlans: 5,
    subscription: "Free",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
];
const UsersTable = () => {
  const [users] = useState(usersData);

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const design = (
    <>
      <Card className="w-full overflow-hidden mt-5">
        <CardContent className="p-0">
          <div className="flex items-center justify-between w-full p-4">
            {/* Left Side Stats */}
            <div className="flex gap-8">
              {/* Total Users */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-pink-500"></span>
                <div>
                  <div className="font-semibold text-sm">24521</div>
                  <div className="text-xs text-muted-foreground">
                    Total User
                  </div>
                </div>
              </div>

              {/* Active Users */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <div>
                  <div className="font-semibold text-sm">24521</div>
                  <div className="text-xs text-muted-foreground">
                    Active User
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                Send Notification <Bell className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                Export <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-pink  text-white">
                <tr>
                  <th className="p-3 text-left">User Info</th>
                  <th className="p-3 text-left">Contact Details</th>
                  <th className="p-3 text-left">Relationship Status</th>
                  <th className="p-3 text-left">Last Active</th>
                  <th className="p-3 text-left">Date Plans</th>
                  <th className="p-3 text-left">Subscription</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <Link href={`/users-management/${user.id}`}>
                      <td className="p-3 flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-xs text-gray-500">
                            {user.location}
                          </p>
                        </div>
                      </td>
                    </Link>
                    <td className="p-3">
                      <p>{user.email}</p>
                      <p className="text-xs text-gray-500">{user.phone}</p>
                    </td>
                    <td className="p-3">{user.relationship}</td>
                    <td className="p-3">{user.lastActive}</td>
                    <td className="p-3">{user.datePlans}</td>
                    <td className="p-3">
                      <Badge
                        className={
                          user.subscription === "Premium"
                            ? "bg-purple-200 text-purple-700"
                            : "bg-gray-200 text-gray-700"
                        }
                      >
                        {user.subscription}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Badge className="bg-green-200 text-green-700">
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-5 h-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" /> View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Crown className="w-4 h-4 mr-2" /> Premium User
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Ban className="w-4 h-4 mr-2" /> Suspend User
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ThumbsDown className="w-4 h-4 mr-2" /> Bad User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>

        <div className="p-4 flex justify-end">
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
          />
        </div>
      </Card>
    </>
  );
  return design;
};

export default UsersTable;
