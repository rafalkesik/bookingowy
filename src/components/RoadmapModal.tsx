import Link from "next/link";
import { functionalities } from "@/lib/roadmap"

export default function RoadmapModal({ modalIndex }: { modalIndex: number }) {
  return (
    <div className="z-4 fixed inset-0 bg-gray-600/10 overflow-y-auto h-full w-full rounded-xl flex items-center justify-center">
      <div className="p-8 border w-160 mx-5 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-[13px]">{ functionalities[modalIndex].subtitle.toUpperCase() }</h3>
          <h1 className="text-2xl font-bold text-gray-900">{ functionalities[modalIndex].title.toUpperCase() }</h1>
          <div className="mt-2 px-7 pb-4">
            <p className="text-md">
              { functionalities[modalIndex].body }
            </p>
            
            <h2 className="text-start font-bold mt-5 text-gray-800">Must-have:</h2>
            <ul className="text-gray-600 font-medium">
              { functionalities[modalIndex].mustHave?.map(
                  (point, index) => <li key={"must_have_" + index}>{point}</li>)
              }
            </ul>

            { functionalities[modalIndex].niceToHave ?
              <h2 className="text-start font-bold mt-5 text-gray-800">Nice-to-have:</h2> : ""
            }
            <ul className="text-gray-600">
              { functionalities[modalIndex].niceToHave?.map(
                  (point, index) => <li key={"nice_to_have_" + index}>{point}</li>)
              }
            </ul>
          </div>
          <div className="flex justify-center mt-4">

            {/* Navigates back to the base URL - closing the modal */}
            <Link
              href="/roadmap"
              scroll={false}
              className="px-4 py-2 bg-blue-500 text-white text-basefont-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Zamknij
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}