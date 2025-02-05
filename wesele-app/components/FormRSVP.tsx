'use client';

import { useState } from "react";
import TransitionModal from "./ui/TransitionModal";

export default function FormRSVP() {
    const [currentState] = useState('default');
    return (
        <TransitionModal stateAsKey={currentState}>
            <div>hi there!</div>
        </TransitionModal>
    )
};
