import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import RecentBookings from "@/components/dashboard/RecentBookings";
import PopularThemes from "@/components/dashboard/PopularThemes";
import RecentMessages from "@/components/dashboard/RecentMessages";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
      <div className="space-y-8">

        <DashboardHeader />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
          <PopularThemes />

          </div>

          <QuickActions />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <UpcomingEvents />
          <RecentBookings />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <RecentMessages />
          <ActivityTimeline />
        </div>

      </div>
  );
}