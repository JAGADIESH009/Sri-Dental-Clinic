const { execSync } = require('child_process');

if (process.env.VERCEL === "1") {
  console.log("🚀 Vercel environment detected. Initializing production database schema...");
  try {
    // prisma db push will safely create tables if they do not exist
    // We do not use --accept-data-loss to prevent accidental data deletion
    // We use --skip-generate because prisma generate is already handled in postinstall
    execSync("npx prisma db push --skip-generate", { stdio: "inherit" });
    console.log("✅ Database schema initialized successfully.");
  } catch (error) {
    console.error("❌ Failed to initialize database schema:", error.message);
    process.exit(1);
  }
} else {
  console.log("💻 Local environment detected. Skipping production database initialization.");
}
