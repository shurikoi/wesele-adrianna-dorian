'use client';

import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
    isModalOpen: string | null;
    openModal: (content: string) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
    isModalOpen: null,
    openModal: () => {},
    closeModal: () => {},
});

interface ModalProviderProps {
    children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState<ModalContextType["isModalOpen"]>(null);

    const openModal: ModalContextType["openModal"] = (modalName: string) => setIsModalOpen(modalName);
    const closeModal: ModalContextType["closeModal"] = () => {
        setIsModalOpen(null);
        console.log(isModalOpen)
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
};

export function useModal() {
    const modal = useContext(ModalContext);

    return modal;
}
