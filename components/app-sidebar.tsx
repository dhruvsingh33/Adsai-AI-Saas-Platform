"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { UserButton } from "@clerk/nextjs"
import {
  Home,
  Video,
  Settings,
  Sparkles,
  MessageSquare,
  Layout,
  Plus,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Dispatch, SetStateAction } from "react"

interface AppSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

export function AppSidebar({ isCollapsed, setIsCollapsed }: AppSidebarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [setIsCollapsed]);

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "md:hidden"
        )} onClick={() => setIsOpen(false)} />
        <Sidebar 
          isCollapsed={isCollapsed}
          className={cn(
            "fixed top-0 left-0 z-50 h-full transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full",
            "md:translate-x-0 md:relative",
            isCollapsed ? "w-[80px]" : "w-[240px]"
          )}>
          <SidebarHeader className="flex items-center justify-between px-4">
            {!isCollapsed && <h2 className="text-lg font-semibold">Adsai</h2>}
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="h-8 w-8 hidden md:flex"
              >
                {isCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </Button>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <nav className="space-y-2">
                <Button variant="ghost" className={cn(
                  "w-full justify-start",
                  isCollapsed && "justify-center px-2"
                )}>
                  <Home className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && "Dashboard"}
                </Button>
                <Button variant="ghost" className={cn(
                  "w-full justify-start",
                  isCollapsed && "justify-center px-2"
                )}>
                  <Video className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && "My Videos"}
                </Button>
                <Button variant="ghost" className={cn(
                  "w-full justify-start",
                  isCollapsed && "justify-center px-2"
                )}>
                  <Sparkles className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && "AI Templates"}
                </Button>
                <Button variant="ghost" className={cn(
                  "w-full justify-start",
                  isCollapsed && "justify-center px-2"
                )}>
                  <MessageSquare className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && "Chat"}
                </Button>
                <Button variant="ghost" className={cn(
                  "w-full justify-start",
                  isCollapsed && "justify-center px-2"
                )}>
                  <Layout className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && "Projects"}
                </Button>
              </nav>
            </SidebarGroup>
            <div className="px-4">
              <Button className={cn(
                "w-full",
                isCollapsed && "px-2"
              )}>
                <Plus className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                {!isCollapsed && "New Video"}
              </Button>
            </div>
          </SidebarContent>
          <SidebarFooter className="flex items-center justify-between px-4">
            <Button variant="ghost" className={cn(
              "w-full justify-start",
              isCollapsed && "justify-center px-2"
            )}>
              <Settings className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
              {!isCollapsed && "Settings"}
            </Button>
            <UserButton afterSignOutUrl="/" />
          </SidebarFooter>
        </Sidebar>
      </>
    );
  }

  return (
    <Sidebar 
      isCollapsed={isCollapsed}
      className={cn(
        "transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[80px]" : "w-[240px]"
      )}>
      <SidebarHeader className="flex items-center justify-between px-4">
        {!isCollapsed && <h2 className="text-lg font-semibold">Adsai</h2>}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <nav className="space-y-2">
            <Button variant="ghost" className={cn(
              "w-full justify-start",
              isCollapsed && "justify-center px-2"
            )}>
              <Home className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
              {!isCollapsed && "Dashboard"}
            </Button>
            <Button variant="ghost" className={cn(
              "w-full justify-start",
              isCollapsed && "justify-center px-2"
            )}>
              <Video className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
              {!isCollapsed && "My Videos"}
            </Button>
            <Button variant="ghost" className={cn(
              "w-full justify-start",
              isCollapsed && "justify-center px-2"
            )}>
              <Sparkles className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
              {!isCollapsed && "AI Templates"}
            </Button>
            <Button variant="ghost" className={cn(
              "w-full justify-start",
              isCollapsed && "justify-center px-2"
            )}>
              <MessageSquare className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
              {!isCollapsed && "Chat"}
            </Button>
            <Button variant="ghost" className={cn(
              "w-full justify-start",
              isCollapsed && "justify-center px-2"
            )}>
              <Layout className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
              {!isCollapsed && "Projects"}
            </Button>
          </nav>
        </SidebarGroup>
        <div className="px-4">
          <Button className={cn(
            "w-full",
            isCollapsed && "px-2"
          )}>
            <Plus className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
            {!isCollapsed && "New Video"}
          </Button>
        </div>
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-between px-4">
        <Button variant="ghost" className={cn(
          "w-full justify-start",
          isCollapsed && "justify-center px-2"
        )}>
          <Settings className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
          {!isCollapsed && "Settings"}
        </Button>
        <UserButton afterSignOutUrl="/" />
      </SidebarFooter>
    </Sidebar>
  );
} 