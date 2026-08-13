import { prisma } from "@/lib/prisma";

async function main() {
  const deletedReservations = await prisma.reservation.deleteMany({});

  console.log("Deleted reservations: ", deletedReservations);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error: ", e);
    await prisma.$disconnect();
    process.exit(1);
  });