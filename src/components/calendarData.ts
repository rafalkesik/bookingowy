import moment from "moment"

export const events = [
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Booking.com"
  },
  {
    start: moment()
      .add(1, "days")
      .toDate(),
    end: moment()
      .add(3, "days")
      .toDate(),
    title: "Airbnb"
  }
];
