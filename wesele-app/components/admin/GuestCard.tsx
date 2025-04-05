import { GuestAccessObject } from "@/lib/types";
import Skeleton from "react-loading-skeleton";

export default function GuestCard({ guestAccess }: { guestAccess?: GuestAccessObject }) {
  const needsAccommodation = guestAccess?.accommodation?.needsAccommodation;
  const accommodationResponse = guestAccess?.accommodation?.accommodationResponse;

  return (
    <div className="w-full bg-[#e2d3b9] border border-[#8e6944] rounded-2xl py-5 px-3 text-[#5A4636]">
      <div className="">Kod: {guestAccess?.code || <Skeleton width={100} />}</div>
      <div className="text-3xl font-fellFrench text-[#4c3827]">
        {guestAccess?.forGreeting || <Skeleton count={2} width={300} height={35}/>}
      </div>
      <hr className="border-t border-[#9c8568] my-4" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 font-sfPro">
          <div className="flex w-full flex-col items-center bg-[#ebe3d9] rounded-3xl p-3 gap-2">
            <div className="">kod</div>
            <div className="uppercase font-bold">{guestAccess?.code || <Skeleton width={50} />}</div>
          </div>
          <div className="flex w-full flex-col items-center bg-[#ebe3d9] rounded-3xl p-3 gap-2">
            <div className="">nocleg</div>
            <div className="uppercase font-bold">
              {guestAccess ? needsAccommodation  ? 'tak' : 'nie' : <Skeleton width={50} />}
            </div>
          </div>
        </div>
        {needsAccommodation && (
          <div
            className={`flex w-full flex-col items-center rounded-3xl p-3 gap-2 ${
              accommodationResponse
                ? 'bg-[#deebd9]'
                : 'bg-[#fcd4d4]'
            }`}
          >
            <div className="">potwiedzenie noclegu</div>
            <div className="uppercase font-bold">
              {accommodationResponse
                ? 'potwiedzone'
                : 'nie potwiedzone'}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
