import { PrismaClient } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const prisma = new PrismaClient();

export default async function DoctorsPage() {
  const doctors = await prisma.doctor.findMany({
    orderBy: { displayOrder: "asc" },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-heading font-semibold tracking-tight">Doctors</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Doctor
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <Card key={doc.id}>
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{doc.name}</CardTitle>
                  <p className="text-sm font-medium text-accent mt-1">{doc.qualification}</p>
                </div>
                <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                  {doc.photo && (
                    <img src={doc.photo} alt={doc.name} className="h-full w-full object-cover grayscale" />
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{doc.biography}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="w-full">Edit</Button>
                <Button variant="outline" size="sm" className="w-full text-destructive hover:bg-destructive/10 border-destructive/20">Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
