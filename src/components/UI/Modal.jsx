import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (open) {
      ref.current.showModal();
    }
  }, [open]);

  return createPortal(
    <dialog ref={ref} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
