'use server'

import { prisma } from "./prisma";
import type { CleaningEvent as CleaningEventType } from "../../generated/prisma";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export async function toggleCleaningEventInDB(date: string, action: "create" | "delete") {
  (action === "create") && await createCleaningEventInDB(date);
  (action === "delete") && await deleteCleaningEventInDB(date);
}

export async function createCleaningEventInDB(date: string) {
  await prisma.cleaningEvent.create({
    data: { date: dayjs.utc(date).toDate() }  
  });
}

export async function deleteCleaningEventInDB(date: string) {
  await prisma.cleaningEvent.delete({
    where: { date: dayjs.utc(date).toDate() }
  })
}

export async function fetchCleaningEventsFromDB() {
  let cleaningEvents: CleaningEventType[] = [];

  try {
    cleaningEvents = await prisma.cleaningEvent.findMany();
  } catch (error) {
    console.error("Error while getting cleaningEvents from DB: ", error)
  }
  
  return (new Set(cleaningEvents.map((e) => dayjs(e.date).format("YYYY-MM-DD"))));
}
