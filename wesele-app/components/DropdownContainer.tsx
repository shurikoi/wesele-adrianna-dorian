'use client';

import { DropDownContainer } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import ExpandableMenuItem from "./ui/ExpandableMenuItem";

export default function DropdownContainer({ title, content }: DropDownContainer) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex justify-between items-center w-full bg-transparent border ${isOpen ? "rounded-t-xl border-b-0" : "rounded-xl"} border-white text-white px-4 py-3 focus:outline-none`}
            >
                <div className="text-xl/8 font-fellFrench text-start">{title}</div>
                <Image src="/vercel.svg" width={3} height={3} alt="arrow" className={`w-3 h-3 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <ExpandableMenuItem isOpen={isOpen} content={content} />
        </div>
    );
};