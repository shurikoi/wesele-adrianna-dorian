import { useModal } from "../contexts/ModalProvider";
import ModalLayout from "./ModalLayout";

interface ModalProps {
    children: React.ReactNode,
}

export default function Modal({ children }: ModalProps) {
    const { isModalOpen } = useModal();
    if (!isModalOpen) return null;
    return <ModalLayout>{children}</ModalLayout>;
};
