'use client';

import { useState } from "react";
import TransitionModal from "./ui/TransitionModal";
import BackArrowIcon from "./ui/icons/BackArrowIcon";
import { useModal } from "./contexts/ModalProvider";
import { StatesRSVP, UserChoices } from "@/lib/types";
import ModalQuestions from "./ModalQuestions";
import SummaryRSVP from "./SummaryRSVP";

export default function FormRSVP() {
    const [currentState, setCurrentState] = useState<StatesRSVP>('questions');
    const { closeModal } = useModal();
    const [summary, setSummary] = useState<UserChoices>([]);

    const states = {
        questions: <ModalQuestions setCurrentState={setCurrentState} setSummary={setSummary} summary={summary} />,
        summary: <SummaryRSVP summary={summary} />
      }


    return (
        <TransitionModal stateAsKey={currentState}>
            <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.8rem] text-black">
                <BackArrowIcon onClick={() => closeModal()} />
                <div className="font-fellFrench italic text-2xl">A & D</div>
                {states[currentState]}
            </div>
        </TransitionModal>
    );
};
