import dayjs from "dayjs";
import { slotInfoType } from "./CalendarComponent";
import pl from "dayjs/locale/pl";

dayjs.locale(pl);

type CalendarModalProps = {
  closeModal: () => void,
  slotInfo: slotInfoType | null,
}

export default function CalendarModal({ closeModal, slotInfo }: CalendarModalProps) {
  const x = slotInfo?.box?.clientX ?? 0;
  const y = slotInfo?.box?.clientY ?? 0;

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
              Brak zaplanowanego sprzątania
            </p>

            <button
              className="px-4 py-2 mr-1 bg-amber-300 font-medium rounded-md shadow-sm hover:bg-amber-200 focus:ring-2 focus:ring-amber-400"
            >
              Dodaj sprzątanie
            </button>

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