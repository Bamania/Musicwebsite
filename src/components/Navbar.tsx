"use client";
import React,{useState} from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}  
    > <Menu setActive={setActive}>
    <MenuItem setActive={setActive} active={active} item="Home">
      <div className="flex flex-col space-y-4 text-sm">
        
      </div>
    </MenuItem>
    <MenuItem setActive={setActive} active={active} item="Our Courses">
      <div className="  text-sm flex flex-col gap-4 p-4">
        <HoveredLink href="/hobby">All Courses</HoveredLink>
        <HoveredLink href="/individual">Basic Music Theory</HoveredLink>
        <HoveredLink href="/team">Advanced Composition</HoveredLink>
        <HoveredLink href="/enterprise">Songwriting</HoveredLink>
        <HoveredLink href="/enterprise">Music Production</HoveredLink>
      </div>
    </MenuItem>
    <MenuItem setActive={setActive} active={active} item="Pricing">
      <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="/web-dev">Web Development</HoveredLink>
        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
        <HoveredLink href="/branding">Branding</HoveredLink>
      </div>
    </MenuItem>
  </Menu></div>
  )
}

export default Navbar

