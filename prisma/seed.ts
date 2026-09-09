import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Admin credentials
  const passwordHash = await bcrypt.hash('SriDental@2026!Admin', 10)
  
  await prisma.admin.upsert({
    where: { email: 'admin@sridentalclinic.in' },
    update: {},
    create: {
      email: 'admin@sridentalclinic.in',
      passwordHash,
    },
  })

  // Doctors
  const doctors = [
    { name: 'Dr. Ananya Rao', qualification: 'MDS', designation: 'Oral & Maxillofacial Surgeon', displayOrder: 1 },
    { name: 'Dr. Rohan Mehta', qualification: 'MDS', designation: 'Oral & Maxillofacial Surgeon', displayOrder: 2 }
  ]

  for (const d of doctors) {
    const existing = await prisma.doctor.findFirst({ where: { name: d.name } })
    if (!existing) {
      await prisma.doctor.create({ data: d })
    }
  }

  // Services
  const services = [
    { name: 'Cosmetic Dentistry', isFeatured: true, displayOrder: 1 },
    { name: 'Pediatric Care', isFeatured: true, displayOrder: 2 },
    { name: 'Sedation Dentistry', isFeatured: true, displayOrder: 3 },
  ]

  for (const s of services) {
    const existing = await prisma.service.findFirst({ where: { name: s.name } })
    if (!existing) {
      await prisma.service.create({ data: s })
    }
  }

  // Clinic Settings
  await prisma.clinicSettings.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton'
    }
  })

  // FAQ
  const faqs = [
    { question: 'How do I book an appointment?', answer: 'You can book an appointment directly through our website by clicking the "Book Appointment" button, or you can call us.', displayOrder: 1 },
    { question: 'What are the clinic timings?', answer: 'We are open from 10:00 AM to 2:00 PM and 5:00 PM to 8:30 PM.', displayOrder: 2 },
    { question: 'Where is Sri Dental Clinic located?', answer: 'We are located in Bengaluru, Karnataka.', displayOrder: 3 },
    { question: 'How can I contact the clinic?', answer: 'You can reach us by phone at +91 90000 00000.', displayOrder: 4 },
  ]

  for (const f of faqs) {
    const existing = await prisma.faq.findFirst({ where: { question: f.question } })
    if (!existing) {
      await prisma.faq.create({ data: f })
    }
  }

  console.log('Database seeded successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
