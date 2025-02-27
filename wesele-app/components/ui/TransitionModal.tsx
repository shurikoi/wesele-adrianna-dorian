import { useRef } from "react";
import Modal from "./Modal";
import { CSSTransition, SwitchTransition } from 'react-transition-group'

interface TransitionModalProps {
    children: React.ReactNode,
    stateAsKey: string | number,
}

export default function TransitionModal({ children, stateAsKey }: TransitionModalProps) {
  const nodeRef = useRef(null)
    return (
      <Modal>
        <SwitchTransition mode={'out-in'}>
          <CSSTransition
            key={stateAsKey}
            timeout={300}
            classNames={{
              appear: 'opacity-0',
              appearActive: 'transition-opacity duration-300 opacity-100',
              enter: 'opacity-0',
              enterActive: 'transition-opacity duration-300 opacity-100',
              exitActive: 'transition-opacity duration-200 opacity-0',
            }}
            nodeRef={nodeRef}
          >
            <div ref={nodeRef}>{children}</div>
          </CSSTransition>
        </SwitchTransition>
      </Modal>
    )
  }