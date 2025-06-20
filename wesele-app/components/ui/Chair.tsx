"use client";

import { TablesObject } from "@/lib/types";
import { useGuestAccess } from "../contexts/GuestAccessProvider";

export default function Chair({
    color = "bg-textPeach",
    className,
    chairData
}: {
    color?: string;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
    chairData?: TablesObject;
}) {
    const { guestAccess } = useGuestAccess();
    const isMatched = guestAccess?.guests.some(g => g._id === chairData?.guestId._id);
    return (
        <div className={`relative h-[15px] w-[15px] rounded-xl ${isMatched ? "bg-orange-500" : color} ${className}`}>
            {/* {index !== undefined && (
                <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                    {index}
                </span>
            )} */}
        </div>
    );
}