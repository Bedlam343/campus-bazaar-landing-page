import { type MouseEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
    disableBackgroundClose?: boolean;
    cursorNotAllowed?: boolean;
    isOpen: boolean;
};

const modalContainer = document.getElementById("modal-root")!;

const Modal = ({
    isOpen,
    onClose,
    children,
    disableBackgroundClose,
    cursorNotAllowed,
}: ModalProps) => {
    if (!isOpen) return null;

    const onModalClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    const handleClose = () => {
        if (disableBackgroundClose) return;
        onClose();
    };

    return createPortal(
        <div
            className="fixed top-0 left-0 w-full flex justify-center
            items-center h-dvh bg-black/50 backdrop-blur-[1px]"
            onClick={handleClose}
            style={{
                zIndex: 30,
                cursor:
                    disableBackgroundClose && cursorNotAllowed
                        ? "not-allowed"
                        : "auto",
            }}
        >
            <div
                onClick={onModalClick}
                className="w-[95%] max-w-[650px] relative rounded-lg flex justify-center"
            >
                {children}
            </div>
        </div>,
        modalContainer
    );
};

export default Modal;
