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
  const doctors: any[] = [
    // Replaced fictional doctors with generic services for seed purposes if needed,
    // or simply provide empty to avoid inventing doctors
  ];

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
    { question: 'What are your operating hours?', answer: 'We are open until 9 PM.', displayOrder: 2 },
    { question: 'Where is Unity Dental Clinics located?', answer: 'We are located at 43-106/1-60, Andhra Prabha Colony Rd, near Vishal Mart, Ajith, Ajit Singh Nagar, PNT Colony, Vijayawada, Andhra Pradesh 520015, India.', displayOrder: 3 },
    { question: 'How can I contact the clinic?', answer: 'You can reach us by phone at +91 87349 34747.', displayOrder: 4 },
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
