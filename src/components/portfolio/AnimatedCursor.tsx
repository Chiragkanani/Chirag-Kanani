import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { MousePointer2 } from "lucide-react";

const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!cursor || !hasFinePointer || prefersReducedMotion) return;

    document.body.classList.add("has-animated-cursor");

    const handlePointerMove = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.add("is-visible");
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const isTextEntry = Boolean(target?.closest("input, textarea, select, [contenteditable='true']"));
      const isInteractive = Boolean(target?.closest("a, button, [role='button'], summary"));

      cursor.classList.toggle("is-text-entry", isTextEntry);
      cursor.classList.toggle("is-interactive", isInteractive && !isTextEntry);
    };

    const hideCursor = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
      document.body.classList.remove("has-animated-cursor");
    };
  }, []);

  return createPortal(
    <div ref={cursorRef} className="animated-cursor" aria-hidden="true">
      <MousePointer2 size={22} strokeWidth={1.8} />
    </div>,
    document.body
  );
};

export default AnimatedCursor;
