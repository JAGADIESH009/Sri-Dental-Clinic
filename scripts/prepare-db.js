const fs = require('fs');
const path = require('path');

const prismaDir = path.join(__dirname, '..', 'prisma');
const schemaPath = path.join(prismaDir, 'schema.prisma');
const vercelSchemaPath = path.join(prismaDir, 'schema.vercel.prisma');

// VERCEL is automatically set to "1" in Vercel deployments
if (process.env.VERCEL === "1") {
  console.log("🚀 Vercel environment detected. Switching to PostgreSQL schema...");
  if (fs.existsSync(vercelSchemaPath)) {
    fs.copyFileSync(vercelSchemaPath, schemaPath);
    console.log("✅ Successfully copied schema.vercel.prisma to schema.prisma");
  } else {
    console.error("❌ schema.vercel.prisma not found!");
    process.exit(1);
  }
} else {
  console.log("💻 Local environment detected. Using default SQLite schema.");
}
