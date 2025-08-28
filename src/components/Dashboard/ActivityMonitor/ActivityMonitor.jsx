import NavigationBar from "@/components/Reusable/NavigationBar";
import ActivityDetails from "./ActivityDetails";
import PartnerDetails from "./PartnerDetails";

const bookingData = {
  activity: {
    id: "23-7894",
    title: "Dinner at Olive Bistro",
    date: "June 19, 2023",
    time: "7:30 PM",
    location: "Downtown Manhattan, NY",
    status: "Matched",
  },
  users: [
    {
      name: "Sarah Mitchell",
      id: "SM-7894",
      memberSince: "Mar 2023",
      avatar: "/diverse-woman-portrait.png",
    },
    {
      name: "John Doe",
      id: "JD-5678",
      memberSince: "Jan 2022",
      avatar: "/diverse-man-portrait.png",
    },
  ],
  partner: {
    name: "Olive Bistro",
    type: "Restaurant",
    rating: 4.8,
    bookingId: "OB785",
    amount: "$150.00",
    paymentStatus: "Paid",
    confirmationCode: "OB78912",
  },
  timeline: [
    { event: "Booking Confirmed", user: "by System", time: "7:30 PM" },
    { event: "Payment Received", user: "by Sarah Mitchell", time: "7:15 PM" },
    { event: "Booking Initiated", user: "by Sarah Mitchell", time: "2:00 PM" },
  ],
  feedback: {
    rating: 5,
    comment:
      "Great experience! The food was amazing and the service was excellent. Would definitely recommend!",
    images: ["/modern-restaurant-interior.png", "/delicious-food.png"],
  },
};
const ActivityMonitor = () => {
  const design = (
    <>
      <NavigationBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        <ActivityDetails
          activity={bookingData.activity}
          users={bookingData.users}
        />

        <PartnerDetails
          partner={bookingData.partner}
          timeline={bookingData.timeline}
          feedback={bookingData.feedback}
        />
      </div>
    </>
  );
  return design;
};

export default ActivityMonitor;
