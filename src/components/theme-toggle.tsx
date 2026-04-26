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
  const icon = isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />;

  return (
    <Button
      aria-label="Farbmodus wechseln"
      className="border border-slate-200/70 bg-white/80 text-slate-900 shadow-sm transition-colors hover:border-primary/40 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100 dark:hover:bg-white/[0.08]"
      isIconOnly
      radius="full"
      size="sm"
      variant="flat"
      onPress={() => setTheme(isDark ? "light" : "dark")}
    >
      {icon}
    </Button>
  );
}
