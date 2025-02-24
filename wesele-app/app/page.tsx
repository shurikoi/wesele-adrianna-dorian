'use client';

import { useGuestAccess } from '@/components/contexts/GuestAccessProvider';
import { useModal } from '@/components/contexts/ModalProvider';
import FormRSVP from '@/components/FormRSVP';
import GuestModal from '@/components/GuestModal';
import InvitationInfo from '@/components/InvitationInfo';
import StartWelcomeContainer from '@/components/StartWelcomeContainer';

export default function Home() {
    const { isModalOpen } = useModal();
    const { guestAccess } = useGuestAccess();
    
    return (
        <>
            <StartWelcomeContainer className="mb-8 italic md:text-center">
                Adrianna & Dorian
            </StartWelcomeContainer>
            <InvitationInfo />
            {isModalOpen === "FormRSVP" && guestAccess ? <FormRSVP isAnsweredRSVP={isAnsweredRSVP} /> : <GuestModal />}
        </>);
}
