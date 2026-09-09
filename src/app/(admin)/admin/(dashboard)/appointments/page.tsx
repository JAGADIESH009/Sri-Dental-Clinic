import { PrismaClient } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const prisma = new PrismaClient();

export default async function AppointmentsPage() {
  const appointments = await prisma.appointment.findMany({
    orderBy: { date: "asc" },
    include: { service: true },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-h2 font-heading font-semibold tracking-tight">Appointments</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <table className="w-full text-ui text-left">
              <thead className="text-label text-muted-foreground  bg-muted/50 border-b">
                <tr>
                  <th className="px-6 py-3">Booking ID</th>
                  <th className="px-6 py-3">Patient</th>
                  <th className="px-6 py-3">Date & Time</th>
                  <th className="px-6 py-3">Service</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  appointments.map((app) => (
                    <tr key={app.id} className="border-b last:border-0 hover:bg-muted/30">
                      <td className="px-6 py-4 font-medium">{app.bookingId}</td>
                      <td className="px-6 py-4">
                        <p>{app.patientName}</p>
                        <p className="text-label text-muted-foreground">{app.phone}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p>{app.date}</p>
                        <p className="text-label text-muted-foreground">{app.time}</p>
                      </td>
                      <td className="px-6 py-4">{app.service.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-label font-medium ${
                          app.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                          app.status === 'CONFIRMED' ? 'bg-blue-100 text-blue-800' :
                          app.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {/* Server Actions placeholder */}
                        <button className="text-label text-primary hover:underline">Manage</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
