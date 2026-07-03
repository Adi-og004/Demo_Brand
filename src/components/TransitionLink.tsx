"use client";

import NextLink from "next/link";
import { usePageTransition } from "./PageTransition";
import { ComponentProps, MouseEvent, useCallback } from "react";

type TransitionLinkProps = ComponentProps<typeof NextLink>;

export default function TransitionLink({
  href,
  onClick,
  children,
  ...props
}: TransitionLinkProps) {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      // Allow modifier-key clicks to open in new tab
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault();
      onClick?.(e as any);
      navigateWithTransition(href.toString());
    },
    [href, navigateWithTransition, onClick]
  );

  return (
    <NextLink href={href} onClick={handleClick} {...props}>
      {children}
    </NextLink>
  );
}
