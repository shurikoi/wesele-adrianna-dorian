'use client';

import { signOut, useSession } from "next-auth/react";
import { useModal } from "./contexts/ModalProvider";
import RegularButton from "./ui/buttons/RegularButton";
import BackArrowIcon from "./ui/icons/BackArrowIcon";
import Modal from "./ui/Modal";
import { UnauthorizedGuestModal } from "./UnauthorizedGuestModal";

const AuthorizedGuestModal = () => {
    return (
        <RegularButton label="Sign out" onClick={() => signOut()} />
    );
};

export default function GuestModal() {
    const { data: session } = useSession();
    const { closeModal } = useModal();
    console.log(session)
    return (
        <Modal>
            <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.8rem] text-black">
                <BackArrowIcon onClick={() => closeModal()} />
                <div className="font-fellFrench italic text-2xl">A & D</div>
                {session?.user ? <AuthorizedGuestModal /> : <UnauthorizedGuestModal />}
            </div>
        </Modal>
    );
};
