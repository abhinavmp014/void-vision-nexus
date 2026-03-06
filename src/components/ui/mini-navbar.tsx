"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const AnimatedNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-block overflow-hidden text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full text-foreground">
        {children}
      </span>
    </a>
  );
};

interface MiniNavbarProps {
  brandName?: string;
  navLinks?: { label: string; href: string }[];
  className?: string;
}

export function MiniNavbar({
  brandName = "Abhinav.mp",
  navLinks = [],
  className,
}: MiniNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  return (
    <div className={cn("fixed top-4 left-1/2 -translate-x-1/2 z-[5000] w-[92%] max-w-3xl", className)}>
      <div
        className={cn(
          "border border-white/[0.1] bg-background/80 backdrop-blur-md shadow-lg transition-all duration-300",
          headerShapeClass
        )}
      >
        {/* Main bar */}
        <div className="flex items-center justify-between px-5 py-3">
          {/* Brand */}
          <a href="#" className="font-bold text-foreground text-sm whitespace-nowrap">
            {brandName}
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <AnimatedNavLink key={link.href} href={link.href}>
                {link.label}
              </AnimatedNavLink>
            ))}
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-3 px-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
