-- AlterTable
ALTER TABLE "cleaning_event" ALTER COLUMN "date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "reservation" ALTER COLUMN "startDate" SET DATA TYPE DATE,
ALTER COLUMN "endDate" SET DATA TYPE DATE;
