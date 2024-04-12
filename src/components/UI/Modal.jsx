import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "", ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const modal = ref.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={ref} className={`modal ${className}`} {...props}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
