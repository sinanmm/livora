import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36 bg-[#F6F7F4] flex items-center justify-center">
      <Container size="narrow" className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-6">
          <Compass className="w-4 h-4 text-[#C87535]" />
          Page Not Found
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#1D2322] font-heading">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-[#1D2322] mt-4">
          This Page Could Not Be Located
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#5A6361] max-w-md mx-auto leading-relaxed">
          The requested route may have been relocated or updated. Explore our product divisions or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-1.5" />
            Return Home
          </Button>
          <Button href="/products" variant="outline" size="md">
            View Products
          </Button>
        </div>
      </Container>
    </div>
  );
}

