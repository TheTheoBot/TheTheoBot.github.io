"use client";

import { Button } from "@heroui/react";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <Button
      aria-label="Farbmodus wechseln"
      className="border border-white/10 bg-white/70 text-slate-900 shadow-sm backdrop-blur dark:bg-white/5 dark:text-slate-100"
      radius="full"
      size="sm"
      startContent={isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
      variant="flat"
      onPress={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "Hell" : "Dunkel"}
    </Button>
  );
}
