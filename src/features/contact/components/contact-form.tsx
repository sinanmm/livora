"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/features/products/data/categories";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialType = searchParams.get("type") || "General Enquiry";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: initialType,
    productCategory: initialCategory,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseInfo, setResponseInfo] = useState<{
    delivered?: boolean;
    message?: string;
    mailtoUrl?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit enquiry.");
      }

      setStatus("success");
      setResponseInfo(data);
      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "General Enquiry",
        productCategory: "",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setResponseInfo({ message: err.message || "Something went wrong." });
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-[#00504A] text-white shadow-xl text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-white/20 text-[#C87535] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">
          Thank You for Contacting LIVORA
        </h3>
        <p className="text-sm text-white/90 max-w-md mx-auto leading-relaxed">
          Your enquiry has been submitted directly to our technical desk at <strong className="text-white">livorachemicals@gmail.com</strong>. We will review your requirements and respond promptly.
        </p>
        {responseInfo.mailtoUrl && (
          <p className="text-xs text-white/80">
            <a
              href={responseInfo.mailtoUrl}
              className="text-[#F4E7DC] underline hover:text-white"
            >
              Click here to send a duplicate copy from your email app &rarr;
            </a>
          </p>
        )}
        <div className="pt-2">
          <Button
            type="button"
            onClick={() => setStatus("idle")}
            variant="outline-white"
            size="sm"
          >
            Submit Another Query
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DFE3DF] shadow-xl space-y-5"
    >
      <div>
        <h3 className="text-2xl font-bold text-[#1D2322]">
          Send an Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#5A6361] mt-1">
          Reach our chemical engineering desk for product specifications, substrate advice, or dealer inquiries.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{responseInfo.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Anand Sharma"
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="yourname@domain.com"
          className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
            Enquiry Type *
          </label>
          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
          >
            <option value="General Enquiry">General Enquiry</option>
            <option value="Product Information">Product Information</option>
            <option value="Technical Guidance">Technical Guidance</option>
            <option value="Business Partnership">Business Partnership</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
            Product Category (Optional)
          </label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
          >
            <option value="">-- Select Division (Optional) --</option>
            {productCategories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
          Your Project or Question *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your tile dimensions, substrate type, moisture conditions, or specific chemical grade requirements..."
          className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full justify-center group"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Sending Enquiry...
          </>
        ) : (
          <>
            <span>Submit Enquiry</span>
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </>
        )}
      </Button>

      <p className="text-center text-[11px] text-[#5A6361]">
        Protected by LIVORA privacy standards. We never distribute your contact information.
      </p>
    </form>
  );
}

