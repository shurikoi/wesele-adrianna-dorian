import { useModal } from "./contexts/ModalProvider";
import RegularButton from "./ui/buttons/RegularButton";
import BackArrowIcon from "./ui/icons/BackArrowIcon";
import Modal from "./ui/Modal";

export default function GuestModal() {
    const {closeModal} = useModal();
    return (
            <Modal>
            <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.8rem] text-black">
                <BackArrowIcon onClick={() => closeModal()} />
                <div className="font-fellFrench italic text-2xl">A & D</div>
                <RegularButton label="Sign out" />
            </div>
            </Modal>
    );
};
