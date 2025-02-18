import { useState } from "react";
import { useModal } from "./contexts/ModalProvider";
import RegularButton from "./ui/buttons/RegularButton";
import BackArrowIcon from "./ui/icons/BackArrowIcon";
import Modal from "./ui/Modal";
import Paragraph from "./ui/Paragraph";
import ModalInput from "./ui/ModalInput";

const AuthorizedGuestModal = () => {
    return (
        <RegularButton label="Sign out" />
    );
};

const UnauthorizedGuestModal = () => {
    const [code, setCode] = useState("");
    return (
        <div className="flex flex-col gap-5 w-full items-center">
            <div className="flex flex-col gap-2 w-full items-center">
                <Paragraph className="font-bold">LOGOWANIE</Paragraph>
                <div className="font-sfPro italic text-center">Zeskanuj kod QR, lub wpisz kod z zaproszenia!</div>
            </div>
            <ModalInput placeholder="Enter code" value={code} setValue={setCode} handleSubmit={() => {}} />
            <RegularButton label="Sign in" />
        </div>
    );
};

export default function GuestModal() {
    const { closeModal } = useModal();
    return (
        <Modal>
            <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.8rem] text-black">
                <BackArrowIcon onClick={() => closeModal()} />
                <div className="font-fellFrench italic text-2xl">A & D</div>
                <UnauthorizedGuestModal />
            </div>
        </Modal>
    );
};
