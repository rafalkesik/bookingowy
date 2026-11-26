import getReservations from "@/lib/reservations";
import { HostexReservation } from "@/types/hostex";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

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
    start: dayjs.utc(event.startDate).toDate(),
    end: dayjs.utc(event.endDate).toDate(),
    title: event.name + " " + event.platform
  }));

  return rbcEvents
}

export const SampleRbcEvents = [
  {
    start: dayjs('2026-08-20').toDate(),
    end: dayjs('2026-08-26').toDate(),
    title: "Marcin Kowalski (booking.com)",
    guestAmont: 2,
    platform: "booking.com",
    note: "Requested early check-in",
  },
  {
    start: dayjs('2026-08-25').toDate(),
    end: dayjs('2026-08-28').toDate(),
    title: "Kowal Marciński (airbnb)",
    guestAmont: 1,
    platform: "airbnb",
  },
  {
    start: dayjs('2026-08-29').toDate(),
    end: dayjs('2026-09-03').toDate(),
    title: "Adam Adamczewski (booking.com)",
    guestAmont: 4,
    platform: "booking.com",
    note: "Business client",
  },
  {
    start: dayjs('2026-09-03').toDate(),
    end: dayjs('2026-09-09').toDate(),
    title: "Jan Kowalski (airbnb)",
    guestAmont: 3,
    platform: "airbnb",
    note: "Requested an invoice",
  },
  {
    start: dayjs('2026-09-12').toDate(),
    end: dayjs('2026-09-14').toDate(),
    title: "Jan Paweł Adamczewski (direct)",
    guestAmont: 3,
    platform: "direct",
  },
  {
    start: dayjs('2026-09-13').toDate(),
    end: dayjs('2026-09-20').toDate(),
    title: "Rafał Kęsik (booking.com)",
    guestAmont: 1,
    platform: "booking.com",
  },
  {
    start: dayjs('2026-09-29').toDate(),
    end: dayjs('2026-09-21').toDate(),
    title: "Andrzej Borycha (direct)",
    guestAmont: 2,
    platform: "direct",
  },
  {
    start: dayjs('2026-09-21').toDate(),
    end: dayjs('2026-09-25').toDate(),
    title: "Aniela Adamczewska (booking.com)",
    guestAmont: 2,
    platform: "booking.com",
    note: "Honeymoon",
  },
  {
    start: dayjs('2026-09-24').toDate(),
    end: dayjs('2026-09-27').toDate(),
    title: "John Scott (booking.com)",
    guestAmont: 3,
    platform: "booking.com",
  },
  {
    start: dayjs('2026-09-26').toDate(),
    end: dayjs('2026-10-02').toDate(),
    title: "Robert Anton Wilson (booking.com)",
    guestAmont: 1,
    platform: "booking.com",
    note: "Interesting fella",
  },
  {
    start: dayjs('2026-10-04').toDate(),
    end: dayjs('2026-10-07').toDate(),
    title: "Bob Ross (direct)",
    guestAmont: 1,
    platform: "direct",
    note: "Great human",
  },
]