import { useEffect, useState } from "react";

export function TransitionImg({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1);
  }, []);

  return (
    <img
      src={src}
      className={
        isVisible
          ? `opacity-100 transition-opacity duration-300 ease-in-out ${className}`
          : `opacity-0 transition-opacity duration-300 ease-in-out ${className}`
      }
    />
  );
}
