"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
const ActivityDetails = ({ activity, users }) => {
  const design = (
    <>
      <div className="space-y-6">
        <Card className="bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold">
                  Activity Details
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  ID: {activity.id}
                </p>
              </div>
              <Badge className="bg-green-500 hover:bg-green-600 text-white">
                {activity.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">{activity.title}</h2>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {activity.date} • {activity.time}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {activity.location}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium mb-3">Users Involved</h3>
              <div className="flex flex-wrap gap-3">
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 border w-fit p-3 rounded-md"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                      />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      {/* Avatar + Name in same line */}
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{user.name}</p>
                      </div>

                      {/* Details below */}
                      <p className="text-xs text-muted-foreground">
                        ID: {user.id}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Member since: {user.memberSince}
                      </p>
                    </div>

                    <Button
                      variant="link"
                      className="h-auto p-0 text-xs text-pink"
                    >
                      View Profile
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
  return design;
};

export default ActivityDetails;
