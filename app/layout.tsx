"use client"

import { useState } from "react";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar" // Removed SidebarProvider import
import { AppSidebar } from "@/components/app-sidebar"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Removed SidebarProvider wrapper */}
            <div className="relative flex min-h-screen">
              <AppSidebar 
                isCollapsed={isSidebarCollapsed}
                setIsCollapsed={setIsSidebarCollapsed}
              />
              <main className={cn(
                "flex-1 transition-all duration-300 ease-in-out flex justify-center",
                "w-full",
                isSidebarCollapsed ? "md:ml-[80px]" : "md:ml-[240px]",
                "ml-0" // Remove margin on mobile
                )}>
                <div className="container mx-auto p-4 md:p-6">
                  {children}
                </div>
              </main>
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
} 