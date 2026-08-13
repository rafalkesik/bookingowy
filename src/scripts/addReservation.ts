import { prisma } from "@/lib/prisma";
import { CreateReservationSchema } from "@/validation";
import moment from "moment";

async function main() {
  const input = {
      name: "Bob Budowniczy",
      platform: "booking.com",
      guestAmount: 2,
      startDate: moment("2026-09-12T12:00:00Z").toDate(),
      endDate: moment("2026-09-20T12:00:00Z").toDate(),
      note: "Przemiły Pan!"
    }

  const validData = CreateReservationSchema.parse(input);
      
  const reservation = await prisma.reservation.create({
    data: validData
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