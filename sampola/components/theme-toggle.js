"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const currentTheme = theme === "light" || theme === "dark" ? theme : "light"

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="w-12 h-12 p-2 flex items-center justify-center text-[#f3f2e9] hover:bg-[#f3f2e9] hover:text-green rounded-full bg-green-dark focus-visible:ring-0"
    >
      {currentTheme === "light" ? (
        <Moon className="h-6 w-6" />
      ) : (
        <Sun className="h-6 w-6" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
