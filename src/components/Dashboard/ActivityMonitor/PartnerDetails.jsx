"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Star } from "lucide-react";
const PartnerDetails = ({ partner, timeline, feedback }) => {
  const design = (
    <>
      <div className="space-y-6">
        {/* Partner Details */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Partner Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <Building2 className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.type}</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(partner.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    {partner.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d58951.10007403045!2d88.5125542!3d22.5625006!3m2!1i1024!2i768!4f13.1!2m1!1srestaurant%20location!5e0!3m2!1sen!2sin!4v1756369615769!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Marker dot overlay */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin color="white" size={18} />
              </div>
            </div>

            <Button variant="link" className="h-auto p-0 text-pink">
              View Partner Profile
            </Button>
          </CardContent>
        </Card>

        {/* Booking Info */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Booking Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Booking ID</p>
                <p className="font-medium">{partner.bookingId}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Payment Status</p>
                <p className="font-medium text-green-600">
                  {partner.paymentStatus}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Amount</p>
                <p className="font-medium">{partner.amount}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Confirmation Code</p>
                <p className="font-medium">{partner.confirmationCode}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Activity Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">{item.event}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.user}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Feedback */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              User Feedback
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < feedback.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              &ldquo;{feedback.comment}&ldquo;
            </p>

            <div className="flex gap-2">
              {feedback.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Feedback image ${index + 1}`}
                  className="w-20 h-16 object-cover rounded"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
  return design;
};

export default PartnerDetails;
