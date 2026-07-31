import type { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

/** Endless horizontal ticker. Content is duplicated (aria-hidden) so the CSS loop is seamless. */
export default function Marquee({
  children,
  speed = 40,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={clsx("marquee relative flex overflow-hidden", className)}>
      <div className="marquee-track" style={{ "--marquee-duration": `${speed}s` } as CSSProperties}>
        <div className="flex shrink-0 items-stretch">{children}</div>
        <div className="flex shrink-0 items-stretch" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
