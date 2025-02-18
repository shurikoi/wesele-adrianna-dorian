'use client';

import { useModal } from '@/components/contexts/ModalProvider';
import FormRSVP from '@/components/FormRSVP';
import InvitationInfo from '@/components/InvitationInfo';
import StartWelcomeContainer from '@/components/StartWelcomeContainer';

export default function Home() {
    const { isModalOpen } = useModal();
    return (
        <>
            <StartWelcomeContainer className="mb-8 italic">
                Adrianna & Dorian
            </StartWelcomeContainer>
            <InvitationInfo />
            {isModalOpen === "FormRSVP" && <FormRSVP />}
        </>);
}
