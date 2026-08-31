/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `cleaning_event` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cleaning_event_date_key" ON "cleaning_event"("date");
