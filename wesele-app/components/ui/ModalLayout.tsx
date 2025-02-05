'use client';

import { useModal } from "../contexts/ModalProvider";
import Portal from "./Portal";

interface ModalLayoutProps {
    children: React.ReactNode,
}

export default function ModalLayout({ children }: ModalLayoutProps) {
    const { isModalOpen, closeModal } = useModal();
    if (!isModalOpen) return null;
    return (
        <Portal>
            <div
                className={`md:flex h-full w-full right-0 left-0 top-0 fixed justify-center items-center`}
            >
                <div
                    className="absolute h-full w-full bg-black/20"
                    onClick={() => closeModal()}
                ></div>
                <div className="bg-white rounded-t-[32px] absolute md:relative bottom-0 left-0 w-full md:w-[27rem] md:rounded-[32px] overflow-hidden">
                    {children}
                </div>
            </div>
        </Portal>
    );
};
