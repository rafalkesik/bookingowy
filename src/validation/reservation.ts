// The app barely uses the DB for now, so I leave the validations
// for when the app is developed enough to use it properly.

import { z } from "zod";

export const CreateReservationSchema = z.object({
  name: z.string().min(1, "Name required").max(255),
  platform: z.string().min(1, "Platform required").max(255),
  guestAmount: z.int().positive("Must be at least 1 guest"),
  startDate: z.date(),
  endDate: z.date(),
  note: z.string().max(255, "Note can have maximum 255 characters"),
}).refine((data) => data.endDate > data.startDate, {
  error: "End date must be after start date",
  path: ["endDate"],
});

export type CreateReservation = z.infer<typeof CreateReservationSchema>;