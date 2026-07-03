"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useEffect,
  startTransition,
} from "react";

const TransitionContext = createContext<{
  navigateWithTransition: (href: string) => void;
}>({
  navigateWithTransition: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (!document.startViewTransition) {
        router.push(href);
        return;
      }

      document.startViewTransition(() => {
        startTransition(() => {
          router.push(href);
        });
      });
    },
    [router]
  );

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}
