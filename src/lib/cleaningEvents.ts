'use server'

import { prisma } from "./prisma";
import type { CleaningEvent as CleaningEventType } from "../../generated/prisma";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export async function createCleaningEventsInDB(date: string) {
  const newCleaningEvent = await prisma.cleaningEvent.create({
    data: { date: dayjs.utc(date).toDate() }  
  });

  console.log("New cleaning event created:", newCleaningEvent);
}

export async function deleteCleaningEvents(date: string) {
  const deletedEvent = await prisma.cleaningEvent.delete({
    where: { date: dayjs.utc(date).toDate() }
  })

  console.log("Deleted cleaning event: ", deletedEvent);
}

export async function fetchCleaningEventsFromDB() {
  let cleaningEvents: CleaningEventType[] = [];

  try {
    cleaningEvents = await prisma.cleaningEvent.findMany();
    console.log("Fetched cleaningEvents from DB: ", cleaningEvents);
  } catch (error) {
    console.error("Error while getting cleaningEvents from DB: ", error)
  }
  
  return (new Set(cleaningEvents.map((e) => dayjs(e.date).format("YYYY-MM-DD"))));
}
