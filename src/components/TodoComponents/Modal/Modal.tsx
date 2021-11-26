import React, { useEffect, useRef, FunctionComponent } from "react";
import { createPortal } from "react-dom";
import { ModalWrapper } from "./Modal.style";

interface ModalProps {
  children: React.ReactNode;
}
const modalRoot = document.getElementById("modal") as HTMLElement;

const Modal: FunctionComponent<ModalProps> = ({ children }) => {
  const elRef = useRef<HTMLDivElement>(document.createElement("div"));
  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot?.removeChild(elRef.current);
    };
  }, []);
  return createPortal(<ModalWrapper>{children}</ModalWrapper>, elRef.current);
};

export default Modal;
