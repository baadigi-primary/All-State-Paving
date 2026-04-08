"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      full_name: (form.elements.namedItem("full_name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service_type: (form.elements.namedItem("service_type") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-600">We&apos;ll get back to you within 24 hours with your free quote.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            name="full_name"
            type="text"
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type of Service
          </label>
          <select name="service_type" className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition bg-white">
            <option value="">Select a service...</option>
            <option>Asphalt Paving</option>
            <option>Commercial Paving</option>
            <option>Residential Paving</option>
            <option>Asphalt Repair</option>
            <option>Driveway Paving</option>
            <option>Private Roads</option>
            <option>Farm Lane Paving</option>
            <option>Parking Lot Paving</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Details
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-red hover:bg-red-dark text-white font-bold px-8 py-3 rounded text-sm tracking-wide transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
