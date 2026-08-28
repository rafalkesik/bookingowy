import { prisma } from "./prisma";
import type { CleaningEvent as CleaningEventType } from "../../generated/prisma";
import dayjs from "dayjs";

export async function fetchCleaningEventsFromDB() {
  let cleaningEvents: CleaningEventType[] = [];

  try {
    cleaningEvents = await prisma.cleaningEvent.findMany();
  } catch (error) {
    console.error("Error while getting cleaningEvents from DB: ", error)
  }
  
  return (new Set(cleaningEvents.map((e) => dayjs(e.date).format("YYYY-MM-DD"))));
}