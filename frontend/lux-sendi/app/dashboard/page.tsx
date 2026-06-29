import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import RecentBookings from "@/components/dashboard/RecentBookings";
import PopularThemes from "@/components/dashboard/PopularThemes";
import RecentMessages from "@/components/dashboard/RecentMessages";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <DashboardHeader />

        <StatsCards />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>

          <QuickActions />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <UpcomingEvents />
          <RecentBookings />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <PopularThemes />
          <RecentMessages />
        </div>

        <ActivityTimeline />

      </div>
    </DashboardLayout>
  );
}