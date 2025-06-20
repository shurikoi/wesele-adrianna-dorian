"use client";

import { TablesObject } from "@/lib/types";
import { useGuestAccess } from "../contexts/GuestAccessProvider";

export default function Chair({
    color = "bg-textPeach",
    className,
    classNameLabel,
    chairData,
    side = "left",
    label
}: {
    label?: string;
    side?: "left" | "right" | "top";
    color?: string;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
    classNameLabel?: React.HTMLAttributes<HTMLDivElement>["className"];
    chairData?: TablesObject;
}) {
    const { guestAccess } = useGuestAccess();
    const isMatched = guestAccess?.guests.some(g => g._id === chairData?.guestId._id);
    const sideClasses = {
        left: "-top-2 right-5",
        right: "-top-2 left-5",
        top: "bottom-5"
    }
    return (
        <div className={`relative h-[15px] w-[15px] rounded-xl ${isMatched ? "bg-orange-500" : color} ${className}`}>
            {isMatched && <div className={`absolute ${sideClasses[side]} bg-orange-500/40 px-2 ${classNameLabel}`}>{chairData?.guestId.name.split(" ")[0].startsWith("Osoba") ? "Osoba towarzyszącą": chairData?.guestId.name.split(" ")[0]}</div>}
            {label && <div className={`absolute ${color}/40 bottom-2 text-sm px-2 ${classNameLabel}`}>{label}</div>}
        </div>
    );
}