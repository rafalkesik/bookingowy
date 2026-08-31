import dayjs from "dayjs";
import { slotInfoType } from "../CalendarComponent";
import pl from "dayjs/locale/pl";
import { Dispatch, SetStateAction } from "react";
import { createCleaningEvent, deleteCleaningEvents } from "@/lib/cleaningEvents";

dayjs.locale(pl);

type CalendarModalProps = {
  closeModal: () => void,
  slotInfo: slotInfoType | null,
  cleaningDays: Set<string>,
  setCleaningDays: Dispatch<SetStateAction<Set<string>>>,
  cleaningAllowed: boolean,
}

export default function CalendarModal(
  { closeModal, slotInfo, cleaningDays, setCleaningDays, cleaningAllowed }: CalendarModalProps
) {
  const x = slotInfo?.box?.clientX ?? 0;
  const y = slotInfo?.box?.clientY ?? 0;
  const pickedDay = dayjs(slotInfo?.start).format("YYYY-MM-DD");
  const cleaningScheduled = cleaningDays.has(pickedDay);

  async function addCleaningEvent(date: Date) {
    const dateOnly = dayjs(date).format("YYYY-MM-DD");

    setCleaningDays(
      prev => new Set(prev).add(dateOnly)
    );
    createCleaningEvent(dateOnly);
    closeModal();
  }

  async function removeCleaningEvent(date: Date) {
    const dateOnly = dayjs(date).format("YYYY-MM-DD");

    setCleaningDays(prev => {
      const updated = new Set(prev);
      updated.delete(dateOnly);
      return updated;      
    })
    deleteCleaningEvents(dateOnly);
    closeModal();
  }

  return (
    <div
      className="z-40 fixed inset-0 bg-gray-600/0 overflow-y-auto h-full w-full"
      onClick={closeModal}
    >
      <div
        className="z-50 fixed py-5 border mx-5 shadow-lg rounded-md bg-white"
        style={{ top: y+20, left: x-50 }}
        onClick={ (e) => e.stopPropagation() }
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">{ dayjs(slotInfo?.start).format("D MMMM") }</h1>
          <div className="mt-2 px-7 pb-4">
            <p className="text-md">
              {
                cleaningScheduled ?
                "🧹 Sprzątanie zaplanowane" :
                "Brak zaplanowanego sprzątania"
              }
            </p>

            { cleaningScheduled ?
              <button
                className="calendar-cancel-button"
                onClick={() => slotInfo && removeCleaningEvent(slotInfo.start)}
              >
                Anuluj sprzątanie
              </button> :
              <button
                className="calendar-action-button"              
                onClick={() => slotInfo && cleaningAllowed && addCleaningEvent(slotInfo.start)}
              >
                Dodaj sprzątanie
              </button>
            }

            <button
              className="px-4 py-2 mt-3 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={closeModal}
            >
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}