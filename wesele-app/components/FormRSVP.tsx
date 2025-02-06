'use client';

import { useState } from "react";
import TransitionModal from "./ui/TransitionModal";
import BackArrowIcon from "./ui/icons/BackArrowIcon";
import { useModal } from "./contexts/ModalProvider";
import { UserChoice } from "@/lib/types";
import ModalQuestion from "./ui/ModalQuestion";

export default function FormRSVP() {
    const [currentState] = useState('default');
    const { closeModal } = useModal();

    const [guestPresence, setGuestPresence] = useState<UserChoice>();

    return (
        <TransitionModal stateAsKey={currentState}>
            <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.8rem] text-black">
                <BackArrowIcon onClick={() => closeModal()} />
                <div className="font-fellFrench italic text-2xl">A & D</div>
                <ModalQuestion
                    question="Czy będziecie mogli dołączyć do nas na naszym weselu?"
                    buttons={[{
                        title: 'Tak, z radością',
                        id: 'accept',
                        value: 'yes'
                    }, {
                        title: 'Niestety, nie będziemy mogli',
                        id: 'decline',
                        value: 'no'
                    }]}
                    setUserChoice={setGuestPresence}
                    userChoice={guestPresence} />
            </div>
        </TransitionModal>
    );
};
