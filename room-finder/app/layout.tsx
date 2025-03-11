import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Building, Home, Menu, MessageSquare, Search, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Room Finder | Find Your Perfect Room in Kathmandu & Lalitpur",
  description:
    "Connect with verified room owners and find your ideal accommodation with ease in Kathmandu and Lalitpur.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-8">
                  <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <Building className="h-6 w-6 text-blue-600" />
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      RoomFinder
                    </span>
                  </Link>
                  <nav className="hidden md:flex md:gap-6">
                    <Link
                      href="/rooms"
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Search className="h-4 w-4" />
                      Find Rooms
                    </Link>
                    <Link
                      href="/list-room"
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Home className="h-4 w-4" />
                      List Your Room
                    </Link>
                    <Link
                      href="/chat"
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Messages
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex md:gap-2">
                    <Button variant="ghost" asChild>
                      <Link href="/login">Log In</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/register">Sign Up</Link>
                    </Button>
                  </div>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <nav className="flex flex-col gap-4">
                        <Link href="/rooms" className="flex items-center gap-2 text-sm font-medium">
                          <Search className="h-4 w-4" />
                          Find Rooms
                        </Link>
                        <Link href="/list-room" className="flex items-center gap-2 text-sm font-medium">
                          <Home className="h-4 w-4" />
                          List Your Room
                        </Link>
                        <Link href="/chat" className="flex items-center gap-2 text-sm font-medium">
                          <MessageSquare className="h-4 w-4" />
                          Messages
                        </Link>
                        <Link href="/login" className="flex items-center gap-2 text-sm font-medium">
                          <User className="h-4 w-4" />
                          Log In
                        </Link>
                        <Button asChild>
                          <Link href="/register">Sign Up</Link>
                        </Button>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-muted/40">
              <div className="container py-8 md:py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                      <Building className="h-6 w-6 text-blue-600" />
                      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        RoomFinder
                      </span>
                    </Link>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Connecting room seekers with room owners in Kathmandu and Lalitpur since 2023.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/rooms" className="text-muted-foreground transition-colors hover:text-foreground">
                          Find Rooms
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/list-room"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          List Your Room
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold">Popular Areas</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/rooms?location=Thamel"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Thamel, Kathmandu
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rooms?location=Patan"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Patan, Lalitpur
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rooms?location=Jhamsikhel"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Jhamsikhel, Lalitpur
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rooms?location=Baluwatar"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Baluwatar, Kathmandu
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold">Legal</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                          Terms of Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/cookies" className="text-muted-foreground transition-colors hover:text-foreground">
                          Cookie Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                  <p>© {new Date().getFullYear()} RoomFinder. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'