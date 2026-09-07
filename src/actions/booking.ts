"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createAppointment(data: {
  serviceId: string;
  date: string;
  time: string;
  patientName: string;
  phone: string;
  email?: string;
  patientType: string;
  notes?: string;
}) {
  try {
    const bookingId = "BKG-" + Math.floor(100000 + Math.random() * 900000);

    // Find the requested service by name, or fallback to the first available service
    let service = await prisma.service.findFirst({
      where: { name: { contains: data.serviceId } }
    });

    if (!service) {
      service = await prisma.service.findFirst();
    }

    if (!service) {
      throw new Error("No services configured in database");
    }

    const appointment = await prisma.appointment.create({
      data: {
        bookingId,
        patientName: data.patientName,
        phone: data.phone,
        email: data.email || null,
        serviceId: service.id,
        date: data.date,
        time: data.time,
        notes: data.notes || null,
        patientType: data.patientType || "NEW",
      }
    });

    return { success: true, bookingId: appointment.bookingId };
  } catch (error) {
    console.error("Failed to create appointment:");
    console.error(error instanceof Error ? error.message : error);
    return { success: false, error: "Database error" };
  }
}

