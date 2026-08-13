export interface HostexReservation {
  channel_type: string;
  check_in_date: string;
  check_out_date: string;
  number_of_guests: number;
  guest_name: string;
  remarks: string;
  [key: string]: unknown;
}

export interface Reservation {
  startDate: string;
  endDate: string;
  name: string;
  guestAmount: number;
  platform: string;
  note: string;
}

export interface RbcReservation {
  start: Date;
  end: Date;
  title: string;
}