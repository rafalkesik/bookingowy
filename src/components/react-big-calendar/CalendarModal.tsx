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
  const x = slotInfo?.box?.clientX ?? 0;
  const y = slotInfo?.box?.clientY ?? 0;
  const pickedDay = dayjs(slotInfo?.start).format("YYYY-MM-DD");
  const pickedDayObject = cleaningObjectsArray.filter(
    (object) => { return object?.date === pickedDay }
  )[0];
  const cleaningDays = new Set(cleaningObjectsArray.map((object) => object?.date));
  const cleaningScheduled = cleaningDays.has(pickedDay);
  
  async function toggleCleaningEvent(action: "create" | "delete", formdata: FormData) {
    saveInDB && await toggleCleaningEventInDB(pickedDay, action);
    closeModal();
    toggleCleaningEventLocally({
      date: pickedDay,
      days: Number(formdata.get('days')),
      guests: Number(formdata.get('guests')),
    });
  }

  return (
    <div
      className="z-40 fixed inset-0 bg-gray-600/0
                 overflow-y-auto h-full w-full"
      onClick={closeModal}
    >
      <div
        className="z-50 fixed py-5 border mx-5
                   shadow-lg rounded-md bg-white"
        style={{ top: y+20, left: x-50 }}
        onClick={ (e) => e.stopPropagation() }
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            { pickedDay }
          </h1>
          <div className="mt-2 px-7 pb-4">
            {
              cleaningScheduled ?
              <>
                <p className="text-md">
                  🧹 Sprzątanie zaplanowane
                </p>
                <p>
                  Ilość dni: {pickedDayObject?.days}
                </p>
                <p>
                  Ilość gości: {pickedDayObject?.guests}
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
                  className="form mx-auto md:mx-10"
                >
                  <label htmlFor="days">Number of days</label>
                  <input
                    id="days"
                    name="days"
                    type="number"
                    className="block mb-1"
                    required
                  />
                  <label htmlFor="guests">Number of guests</label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    className="block mb-3"
                    required
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