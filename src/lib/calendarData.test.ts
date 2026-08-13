import { getRbcEvents, hostexReservations } from "./calendarData";
import getReservations from "./reservations"
import dayjs from "dayjs";

jest.mock("./reservations");

const mockReservations = [
  {id: 1, check_in_date: "2027-01-01", check_out_date: "2027-01-07", guest_name: "Bob", number_of_guests: 2, channel_type: "booking", remarks: "wealthy", status: "accepted"},
  {id: 2, check_in_date: "2027-01-02", check_out_date: "2027-01-08", guest_name: "Alice", number_of_guests: 3, channel_type: "airbnb", remarks: "poor", status: "accepted"},
  {id: 3, check_in_date: "2027-01-03", check_out_date: "2027-01-09", guest_name: "Deletor", number_of_guests: 4, channel_type: "direct", remarks: "no comments", status: "cancelled"},
];

describe("hostexReservations", () => {
  beforeEach(() => {
    (getReservations as jest.Mock).mockResolvedValueOnce(mockReservations);
  })

  it("filters out the cancelled reservations", async () => {
    const result = await hostexReservations();
    const names = result.map((reservation) => reservation.name);

    expect(result).toHaveLength(2);
    expect(names).not.toContain("Deletor");
    expect(names).toContain("Bob");
    expect(names).toContain("Alice");
  });

  it("maps reservations data correctly", async () => {
    const result = await hostexReservations();

    expect(result[0]).toEqual({
      startDate: "2027-01-01",
      endDate: "2027-01-07",
      name: "Bob",
      guestAmount: 2,
      platform: "booking",
      note: "wealthy",
    })
  });
});

describe("getRbcEvents", () => {
  it("maps reservations data correctly", async () => {
    (getReservations as jest.Mock).mockResolvedValueOnce(mockReservations);

    const result = await getRbcEvents();

    expect(result[0]).toEqual({
      start: dayjs("2027-01-01").toDate(),
      end: dayjs("2027-01-07").add(1, "day").toDate(),
      title: "Bob booking"
    });
  });
});