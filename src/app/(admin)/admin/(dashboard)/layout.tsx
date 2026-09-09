import { signOut } from "@/lib/auth";
import Link from "next/link";
import { LayoutDashboard, Users, CalendarDays, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-label">
            SD
          </div>
          <span className="font-heading font-semibold">Admin Panel</span>
        </div>
        <nav className="flex flex-col gap-2 p-4 text-ui font-medium flex-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/appointments"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <CalendarDays className="h-4 w-4" />
            Appointments
          </Link>
          <Link
            href="/admin/doctors"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <Users className="h-4 w-4" />
            Doctors
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 sm:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6 sm:px-8 shadow-sm">
          <h1 className="text-lead font-semibold tracking-tight">Sri Dental Clinic Admin</h1>
        </header>
        <div className="p-6 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
