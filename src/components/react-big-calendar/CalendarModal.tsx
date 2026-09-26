import dayjs from "dayjs";
import { slotInfoType } from "@/types/reactBigCalendar";
import pl from "dayjs/locale/pl";
import { toggleCleaningEventInDB } from "@/lib/cleaningEvents";
import { cleaningEvent } from "@/types/cleaningEvents";

dayjs.locale(pl);

type CalendarModalProps = {
  closeModal: () => void,
  slotInfo: slotInfoType | null,
  cleaningObjectsArray: cleaningEvent[],
  toggleCleaningEventLocally: (item: cleaningEvent) => void,
  saveInDB?: boolean, // If true, the cleaning events should be stored in DB. For now, only MyCalendar stores them in DB, and TestCalendar only in LocalStorage.
}

export default function CalendarModal(
  {
    closeModal,
    slotInfo,
    cleaningObjectsArray,
    toggleCleaningEventLocally,
    saveInDB
  }: CalendarModalProps
) {
  const pickedDay = dayjs(slotInfo?.start).format("YYYY-MM-DD");
  const pickedDayObject = cleaningObjectsArray.filter(
    (object) => { return object?.date === pickedDay }
  )[0];
  const cleaningDays = new Set(cleaningObjectsArray.map((object) => object?.date));
  const cleaningScheduled = cleaningDays.has(pickedDay);
  
  async function toggleCleaningEvent(action: "create" | "delete", formdata: FormData) {
    const newDayObject = {
      date: pickedDay,
      nights: Number(formdata.get('nights')),
      guests: Number(formdata.get('guests')),
      notes: String(formdata.get('notes')) ?? '',
    }

    saveInDB && await toggleCleaningEventInDB(newDayObject, action);
    closeModal();
    toggleCleaningEventLocally(newDayObject);
  }

  return (
    <div
      className="z-40 fixed inset-0 bg-gray-600/0
                 overflow-y-auto h-full w-full flex"
      onClick={closeModal}
    >
      <div
        className="z-50 py-5 border shadow-lg rounded-md
                 bg-white w-fit mx-auto my-auto"
        onClick={ (e) => e.stopPropagation() }
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            { pickedDay }
          </h1>
          <div className="mt-2 px-7 pb-4 max-w-60 md:max-w-96">
            {
              cleaningScheduled ?
              <>
                <p className="text-md">
                  🧹 Sprzątanie zaplanowane
                </p>
                <p>
                  Ilość dni: {pickedDayObject?.nights}
                </p>
                <p>
                  Ilość gości: {pickedDayObject?.guests}
                </p>
                <p>
                  Notatki: {pickedDayObject?.notes}
                </p>
                <form action={toggleCleaningEvent.bind(null, "delete")}>
                  <button
                    type="submit"
                    className="calendar-cancel-button"
                  >
                    Anuluj sprzątanie
                  </button>
                </form>
              </> :
              <>
                <p className="text-md mb-1">
                  Brak zaplanowanego sprzątania
                </p>
                <form
                  action={toggleCleaningEvent.bind(null, "create")}
                  className="form mx-auto max-w-44 md:mx-5 md:max-w-72"
                >
                  <label htmlFor="nights">Number of nights</label>
                  <input
                    id="nights"
                    name="nights"
                    type="number"
                    className="block mb-1"
                    required
                  />
                  <label htmlFor="guests">Number of guests</label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    className="block mb-1"
                    required
                  />
                  <label htmlFor="notes">Notes</label>
                  <input
                    id="notes"
                    name="notes"
                    type="text"
                    className="block mb-3"
                  />
                  <button
                    type="submit"
                    className="calendar-action-button"
                  >
                    Dodaj sprzątanie
                  </button>
                </form>
              </>
            }

            <button
              className="px-4 py-2 mt-3 bg-blue-500 text-white
                         text-base font-medium rounded-md shadow-sm
                         hover:bg-gray-400 focus:outline-none
                         focus:ring-2 focus:ring-gray-300"
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