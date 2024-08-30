import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScheduleItem {
    time: string;
    subject: string;
    location: string;
}

interface ScheduleProps {
    day: string;
    items: ScheduleItem[];
}

const ScheduleCard = ({ day, items }: ScheduleProps) => {
    return (
        <Card className="bg-backgrond text-foreground shadow-md">
            <CardHeader className="border-b border-muted-foreground pb-2">
                <CardTitle className="text-lg font-semibold">{day}</CardTitle>
            </CardHeader>
            <CardContent>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "py-2 px-4 border-l-4 mb-2",
                            index % 2 === 0 ? "border-foreground" : "border-muted-foreground"
                        )}
                    >
                        <div className="text-sm font-medium">{item.time}</div>
                        <div className="text-base">{item.subject}</div>
                        <div className="text-sm text-gray-600">
                            {item.location}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

const Schedule = () => {
    const scheduleData: ScheduleProps[] = [
        {
            day: "Monday",
            items: [
                {
                    time: "9:00 AM - 10:30 AM",
                    subject: "Object-Oriented Programming 2",
                    location: "Room 101",
                },
                {
                    time: "11:00 AM - 12:30 PM",
                    subject: "Theoretical Physics",
                    location: "Room 202",
                },
            ],
        },
        {
            day: "Tuesday",
            items: [
                {
                    time: "10:00 AM - 11:30 AM",
                    subject: "Linear Algebra",
                    location: "Room 303",
                },
                {
                    time: "1:00 PM - 2:30 PM",
                    subject: "Artificial Intelligence",
                    location: "Room 404",
                },
            ],
        },
        // Add more days and items here as needed
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {scheduleData.map((daySchedule, index) => (
                <ScheduleCard
                    key={index}
                    day={daySchedule.day}
                    items={daySchedule.items}
                />
            ))}
        </div>
    );
};

export default Schedule;