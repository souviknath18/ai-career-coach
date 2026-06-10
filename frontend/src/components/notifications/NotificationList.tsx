import {
  ChartColumn,
  Brain,
  Lightbulb,
  Mail,
} from "lucide-react";
import NotificationCard from "./NotificationCard";

export default function NotificationList() {
  return (
    <section className="space-y-4">
      <NotificationCard
        unread
        icon={ChartColumn}
        iconBg="bg-[#c6edbf]"
        iconColor="text-[#395937]"
        title="Resume Analysis Complete"
        time="2 mins ago"
        description="Your updated CV has been reviewed. We found 3 key areas to highlight for the Senior Product Designer role."
      />

      <NotificationCard
        unread
        icon={Brain}
        iconBg="bg-[#fde7d3]"
        iconColor="text-[#635445]"
        title="Mock Interview Reminder"
        time="1 hour ago"
        description="Your session starts in 15 minutes. Prepare your portfolio and find a quiet space for best results."
      />

      <NotificationCard
        icon={Lightbulb}
        iconBg="bg-[#e9e8e3]"
        iconColor="text-[#5e605b]"
        title="New Career Insight"
        time="Yesterday"
        description="The demand for sustainable design practices is growing. Check out our latest curated resources on the topic."
      />

      <NotificationCard
        muted
        icon={Mail}
        iconBg="bg-[#e9e8e3]"
        iconColor="text-[#5e605b]"
        title="Account Verified"
        time="3 days ago"
        description="Welcome to the inner circle. Your career trajectory analysis is now active."
      />
    </section>
  );
}