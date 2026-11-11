"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#F6F7F4]/95 backdrop-blur-md shadow-sm border-b border-[#DFE3DF] py-3.5"
            : "bg-[#F6F7F4]/80 backdrop-blur-xs border-b border-transparent py-5"
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00504A] rounded-sm"
              aria-label={`${siteConfig.name} Home`}
            >
              <div
                className="relative h-9 sm:h-11 w-36 sm:w-44 transition-transform duration-200 group-hover:scale-[1.01]"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/brand/livora-logo.png"
                  alt={siteConfig.name}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 144px, 176px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {mainNav.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors rounded-sm",
                          isActive(item.href)
                            ? "text-[#00504A] font-semibold"
                            : "text-[#1D2322] hover:text-[#00504A]"
                        )}
                        aria-expanded={productsOpen}
                      >
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200",
                            productsOpen && "rotate-180"
                          )}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      <div
                        className={cn(
                          "absolute top-full left-0 w-80 p-2.5 bg-white border border-[#DFE3DF] shadow-xl rounded-md transition-all duration-200 origin-top-left z-50",
                          productsOpen
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        )}
                      >
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-[#5A6361] px-3 py-1.5 border-b border-[#EAECE8] mb-1">
                          Product Divisions
                        </div>
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block p-3 rounded-sm hover:bg-[#F6F7F4] transition-colors group"
                          >
                            <div className="text-sm font-semibold text-[#1D2322] group-hover:text-[#00504A] flex items-center justify-between">
                              {subItem.title}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00504A]" />
                            </div>
                            <p className="text-xs text-[#5A6361] mt-0.5 line-clamp-1">
                              {subItem.description}
                            </p>
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-[#EAECE8]">
                          <Link
                            href="/products"
                            className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold uppercase tracking-wider text-[#00504A] hover:bg-[#EAECE8] rounded-xs transition-colors"
                          >
                            View All Solutions <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 text-sm font-medium transition-colors rounded-sm relative",
                      isActive(item.href)
                        ? "text-[#00504A] font-semibold"
                        : "text-[#1D2322] hover:text-[#00504A]"
                    )}
                  >
                    {item.title}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-[#00504A] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button and Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Button
                href="/partners"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Partner With Us
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#1D2322] hover:text-[#00504A] hover:bg-black/5 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00504A]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 w-full max-w-sm bg-[#F6F7F4] shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out border-l border-[#DFE3DF]",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#DFE3DF]">
              <div className="relative h-8 w-32" style={{ position: "relative" }}>
                <Image
                  src="/images/brand/livora-logo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#1D2322] hover:text-[#00504A] rounded-sm"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {mainNav.map((item) => (
                <div key={item.href} className="border-b border-[#EAECE8] pb-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-2.5 text-base font-medium rounded-sm transition-colors",
                      isActive(item.href)
                        ? "text-[#00504A] font-bold"
                        : "text-[#1D2322] hover:text-[#00504A]"
                    )}
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#5A6361]" />
                  </Link>

                  {/* Mobile sublinks for products */}
                  {item.children && (
                    <div className="pl-4 pb-2 space-y-1.5">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "block py-1 text-sm transition-colors",
                            pathname === sub.href
                              ? "text-[#00504A] font-semibold"
                              : "text-[#5A6361] hover:text-[#00504A]"
                          )}
                        >
                          • {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#DFE3DF] space-y-3">
            <Button
              href="/partners"
              variant="primary"
              size="lg"
              className="w-full justify-center"
            >
              Partner With Us
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="w-full justify-center"
            >
              Contact & Enquiries
            </Button>
            <p className="text-center text-xs text-[#5A6361] pt-2 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00504A]" />
              Smart Solutions. Stronger Structures.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

