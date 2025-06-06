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
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Dispatch, SetStateAction } from "react";

interface AppSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

export function AppSidebar({ isCollapsed, setIsCollapsed }: AppSidebarProps) {
  
  return (
    <Sidebar className={cn(
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
        <SidebarGroup>
          <div className="px-4">
            <Button className={cn(
              "w-full",
              isCollapsed && "px-2"
            )}>
              <Plus className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
              {!isCollapsed && "New Video"}
            </Button>
          </div>
        </SidebarGroup>
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
  )
} 