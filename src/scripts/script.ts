import { prisma } from "@/lib/prisma";

async function main() {
  const reservation = await prisma.reservation.create({
    data: {
      name: "Bob Budowniczy",
      platform: "booking.com",
      guestAmount: 2,
      startDate: "2026-09-12T12:00:00Z",
      endDate: "2026-09-20T12:00:00Z",
      note: "Przemiły Pan!"
    }
  });
  console.log("Reservation created: ", reservation);

  const allReservations = await prisma.reservation.findMany();
  console.log("All reservations: ", JSON.stringify(allReservations, null, 2));
}

main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });