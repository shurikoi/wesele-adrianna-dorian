'use client';

import { useState } from "react";
import TransitionModal from "./ui/TransitionModal";
import BackArrowIcon from "./ui/icons/BackArrowIcon";
import { useModal } from "./contexts/ModalProvider";
import { UserChoices } from "@/lib/types";
import ModalQuestion from "./ui/ModalQuestion";
import { modalQuestions } from "@/lib/modalQuestions";

export default function FormRSVP() {
    const [currentState] = useState('default');
    const { closeModal } = useModal();

    const [summary, setSummary] = useState<UserChoices>([]);

    return (
        <TransitionModal stateAsKey={currentState}>
            <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.8rem] text-black">
                <BackArrowIcon onClick={() => closeModal()} />
                <div className="font-fellFrench italic text-2xl">A & D</div>
                {modalQuestions.map((question) => <ModalQuestion key={question.id} id={question.id} question={question.question} buttons={question.buttons} setUserChoices={setSummary} userChoices={summary} />)}
            </div>
        </TransitionModal>
    );
};
