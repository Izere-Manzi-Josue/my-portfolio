import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";

async function main() {
  const password = await hashPassword("gahozo12");

  await prisma.user.upsert({
    where: {
      email: "izeremanzijosue2@gmail.com",
    },
    update: {
      password,
    },
    create: {
      email: "izeremanzijosue2@gmail.com",
      password,
    },
  });

  console.log("✅ Admin user is ready.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
