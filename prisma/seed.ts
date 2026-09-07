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
  await prisma.doctor.create({
    data: {
      name: 'Dr. Prasanthi',
      qualification: 'MDS',
      designation: 'Oral & Maxillofacial Surgeon',
      displayOrder: 1,
    }
  })

  await prisma.doctor.create({
    data: {
      name: 'Dr. Bharath Kumar',
      qualification: 'MDS',
      designation: 'Oral & Maxillofacial Surgeon',
      displayOrder: 2,
    }
  })

  // Services
  const services = [
    { name: 'Cosmetic Dentistry', isFeatured: true, displayOrder: 1 },
    { name: 'Pediatric Care', isFeatured: true, displayOrder: 2 },
    { name: 'Sedation Dentistry', isFeatured: true, displayOrder: 3 },
  ]

  for (const s of services) {
    await prisma.service.create({ data: s })
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
    { question: 'How do I book an appointment?', answer: 'You can book an appointment directly through our website by clicking the "Book Appointment" button, or you can call or WhatsApp us.', displayOrder: 1 },
    { question: 'What are the clinic timings?', answer: 'We are open from 10:00 AM to 2:00 PM and 5:00 PM to 8:30 PM.', displayOrder: 2 },
    { question: 'Where is Sri Dental Clinic located?', answer: 'We are located at Ground Floor, Sri Krishna Enclave, Meherababa Colony, Panchasheel Enclave, Yapral, Hyderabad.', displayOrder: 3 },
    { question: 'How can I contact the clinic?', answer: 'You can reach us by phone or WhatsApp at +91 98664 96237.', displayOrder: 4 },
  ]

  for (const f of faqs) {
    await prisma.faq.create({ data: f })
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
