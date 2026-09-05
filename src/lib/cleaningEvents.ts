'use server'

import { prisma } from "./prisma";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { cleaningEvent as CleaningEventType } from "@/types/cleaningEvents";
import { CleaningEvent as CleaningEventDBType } from "../../generated/prisma";
dayjs.extend(utc);

export async function toggleCleaningEventInDB(
  cleaningEvent: CleaningEventType,
  action: "create" | "delete"
) {
  (action === "create") && await createCleaningEventInDB(cleaningEvent);
  (action === "delete") && await deleteCleaningEventInDB(cleaningEvent);
}

export async function createCleaningEventInDB(event: CleaningEventType) {
  await prisma.cleaningEvent.create({
    data: {
      date: dayjs.utc(event.date).toDate(),
      guests: event.guests,
      nights: event.nights,
    }
  });
}

export async function deleteCleaningEventInDB(event: CleaningEventType) {
  await prisma.cleaningEvent.delete({
    where: { date: dayjs.utc(event.date).toDate() }
  })
}

export async function fetchCleaningEventsFromDB() {
  let cleaningEventsDB: CleaningEventDBType[] = [];

  try {
    cleaningEventsDB = await prisma.cleaningEvent.findMany();
  } catch (error) {
    console.error("Error while getting cleaningEvents from DB: ", error)
  }

  const cleaningEventsMap: Map<string, CleaningEventType> = new Map(
    cleaningEventsDB.map(
      (e) => [
        dayjs(e?.date).format("YYYY-MM-DD"),
        {
          date: dayjs(e.date).format("YYYY-MM-DD"),
          nights: e.nights,
          guests: e.guests,
        }
      ]
    )
  )
  
  return (cleaningEventsMap);
}
