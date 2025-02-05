import ModalLayout from "./ModalLayout";

interface ModalProps {
    children: React.ReactNode,
}

export default function Modal({ children }: ModalProps) {
    return <ModalLayout>{children}</ModalLayout>;
};
