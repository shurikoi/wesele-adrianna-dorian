'use client';

import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {},
});

interface ModalProviderProps {
    children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const openModal: ModalContextType["openModal"] = () => setIsModalOpen(true);
    const closeModal: ModalContextType["closeModal"] = () => setIsModalOpen(false);

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
