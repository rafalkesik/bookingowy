import getReservations from "@/lib/reservations";
import { HostexReservation } from "@/types/hostex";
import moment from "moment";

export async function hostexReservations() {
  let reservations: HostexReservation[] = [];

    try {
      reservations = await getReservations();
    } catch (error) {
      console.error("Failed to load reservations: ", error);
    }

  const filteredReservations = reservations.filter(
    (reservation) => reservation.status !== "cancelled"
  )

  return filteredReservations.map(
    (reservation: HostexReservation) => ({
      startDate: reservation.check_in_date,
      endDate: reservation.check_out_date,
      name: reservation.guest_name,
      guestAmount: reservation.number_of_guests,
      platform: reservation.channel_type,
      note: reservation.remarks,
    })
  );
}

export async function getRbcEvents() {
  const reservations = await hostexReservations();
  const rbcEvents = reservations.map((event) => ({
    start: moment(event.startDate).toDate(),
    end: moment(event.endDate)
      .add(1, "day")
      .toDate(),
    title: event.name + " " + event.platform
  }));

  return rbcEvents
}