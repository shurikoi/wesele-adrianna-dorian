'use client';

import { signOut } from "next-auth/react";
import { useModal } from "./contexts/ModalProvider";
import RegularButton from "./ui/buttons/RegularButton";
import BackArrowIcon from "./ui/icons/BackArrowIcon";
import Modal from "./ui/Modal";
import { UnauthorizedGuestModal } from "./UnauthorizedGuestModal";
import { useGuestAccess } from "./contexts/GuestAccessProvider";
import toast from "react-hot-toast";

const AuthorizedGuestModal = () => {
    const { closeModal } = useModal();
    return (
        <RegularButton label="Wyloguj się" onClick={() => {
            signOut({ redirect: false });
            toast.success("Wylogowano pomyślnie");
            closeModal();
        }} />
    );
};

export default function GuestModal() {
    const { guestAccess } = useGuestAccess();
    const { closeModal } = useModal();
    return (
        <Modal>
            <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.8rem] text-black">
                <BackArrowIcon onClick={() => closeModal()} />
                <div className="font-fellFrench italic text-2xl">A & D</div>
                {guestAccess ? <AuthorizedGuestModal /> : <UnauthorizedGuestModal />}
            </div>
        </Modal>
    );
};
