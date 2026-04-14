import { ReactNode } from "react";

interface VettingBulletProps {
  children: ReactNode;
  className?: string;
  textClassName?: string;
}

export function VettingBullet({ children, className, textClassName }: VettingBulletProps) {
  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "flex-start", gap: "16px", width: "100%" }}
    >
      <span
        aria-hidden="true"
        style={{ position: "relative", flex: "0 0 24px", width: "24px", height: "24px", marginTop: "6px" }}
      >
        <img
          src="/Ellipse 5.png"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <img
          src="/Vector 10.png"
          alt=""
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "12px",
            height: "12px",
            transform: "translate(-50%, -50%)",
            objectFit: "contain",
          }}
        />
      </span>
      <span className={textClassName} style={{ flex: 1 }}>
        {children}
      </span>
    </div>
  );
}