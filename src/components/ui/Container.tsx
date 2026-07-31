import type { ReactNode } from "react";
import clsx from "clsx";

export default function Container({
  children,
  className,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div className={clsx("mx-auto w-full px-6 md:px-10", narrow ? "max-w-3xl" : "max-w-7xl", className)}>
      {children}
    </div>
  );
}
