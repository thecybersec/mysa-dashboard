import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
const CardUI = ({ icon: Icon, value, label, change }) => {
  const design = (
    <Card className="border-sm shadow-sm border bg-white ">
      <CardContent className={cn("p-4", "h-full")}>
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-between gap-2 mb-8">
            <Icon className="h-5 w-5 text-pink-500" />
            <span className="text-sm font-medium text-green-600">{change}</span>
          </div>
          <p className="text-xl font-bold ">{value}</p>
          <p className="text-sm text-[#4B5563]">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
  return design;
};

export default CardUI;
