"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function PartnerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    businessType: "Dealer / Retailer",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseInfo, setResponseInfo] = useState<{ mailtoUrl?: string; message?: string }>({});

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
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          enquiryType: "Business Partnership",
          productCategory: "Commercial Partnership",
          message: `[Company: ${formData.companyName}] [Business Type: ${formData.businessType}] [Location: ${formData.city}, ${formData.state}] Message: ${formData.message}`,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit partnership enquiry.");
      }

      setStatus("success");
      setResponseInfo(data);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        businessType: "Dealer / Retailer",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 rounded-3xl bg-[#00504A] text-white shadow-xl text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-white/20 text-[#C87535] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">
          Partnership Enquiry Received
        </h3>
        <p className="text-sm text-white/90 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to LIVORA CHEMICALS. Your details have been submitted to our commercial team at <strong className="text-white">livorachemicals@gmail.com</strong>.
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
            Submit Another Enquiry
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
          Partner With LIVORA
        </h3>
        <p className="text-xs sm:text-sm text-[#5A6361] mt-1">
          Complete the form below to begin a commercial dealership, distribution, or applicator partnership conversation.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Patel"
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
            Company or Business Name *
          </label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Patel Tiles & Sanitaryware"
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            placeholder="ramesh@company.com"
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
            City *
          </label>
          <input
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Ahmedabad"
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
            State *
          </label>
          <input
            type="text"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
            placeholder="e.g. Gujarat"
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
            Business Type *
          </label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
          >
            <option value="Dealer / Retailer">Dealer / Retailer</option>
            <option value="Regional Distributor">Regional Distributor</option>
            <option value="Contractor / Applicator">Contractor / Applicator</option>
            <option value="Builder / Developer">Builder / Developer</option>
            <option value="Other Stakeholder">Other Stakeholder</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1D2322] mb-1.5">
          Tell Us About Your Market & Requirements *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your existing distribution network, retail counter, or contractor project scope..."
          className="w-full px-3.5 py-2.5 rounded-sm bg-[#F6F7F4] border border-[#DFE3DF] text-sm text-[#1D2322] focus:bg-white focus:border-[#00504A] focus:outline-none transition-colors"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full justify-center"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Submitting Partnership Enquiry...
          </>
        ) : (
          "Submit Partnership Enquiry"
        )}
      </Button>

      <p className="text-center text-[11px] text-[#5A6361]">
        Your commercial information is strictly confidential and protected in accordance with our{" "}
        <a href="/privacy" className="underline hover:text-[#00504A]">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

