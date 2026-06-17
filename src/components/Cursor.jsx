import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);
  const mx = useRef(0), my = useRef(0), rx = useRef(0), ry = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    const onMove = e => {
      mx.current = e.clientX; my.current = e.clientY;
      if (cursorRef.current) { cursorRef.current.style.left = e.clientX+"px"; cursorRef.current.style.top = e.clientY+"px"; }
    };
    document.addEventListener("mousemove", onMove);

    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = rx.current+"px"; ringRef.current.style.top = ry.current+"px"; }
      raf.current = requestAnimationFrame(animRing);
    };
    animRing();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="hl-cursor fixed z-[9999] w-3 h-3 rounded-full pointer-events-none"
        style={{ background:"#c9a84c", transform:"translate(-50%,-50%)", mixBlendMode:"difference", top:0, left:0 }} />
      <div ref={ringRef} className="hl-ring fixed z-[9998] w-10 h-10 rounded-full pointer-events-none opacity-60"
        style={{ border:"1px solid #c9a84c", transform:"translate(-50%,-50%)", top:0, left:0 }} />
    </>
  );
}
