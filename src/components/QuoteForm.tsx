"use client";

import { useEffect, useRef, useState } from "react";
import { TURNSTILE_ACTION, TURNSTILE_SITE_KEY } from "@/lib/turnstile";

type TurnstileApi = {
  render: (el: HTMLElement, options: { sitekey: string; action: string }) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
  getResponse: (id: string) => string | undefined;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  return new Promise((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = TURNSTILE_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", () => (window.turnstile ? resolve(window.turnstile) : reject()));
    script.addEventListener("error", () => reject());
  });
}

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let cancelled = false;
    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !turnstileRef.current || widgetIdRef.current) return;
        widgetIdRef.current = turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: TURNSTILE_ACTION,
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const token = widgetIdRef.current ? window.turnstile?.getResponse(widgetIdRef.current) : undefined;
    if (widgetIdRef.current && !token) {
      setErrorMessage("Please complete the verification check.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      full_name: (form.elements.namedItem("full_name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service_type: (form.elements.namedItem("service_type") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      "cf-turnstile-response": token ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "");
      }
      setStatus("sent");
    } catch (err) {
      setErrorMessage((err instanceof Error && err.message) || "");
      setStatus("error");
      if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
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
          <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-1">
            Type of Service
          </label>
          <select id="service_type" name="service_type" className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition bg-white">
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
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div ref={turnstileRef} />
      {status === "error" && (
        <p className="text-red-600 text-sm">
          {errorMessage || "Something went wrong. Please try again or call us directly."}
        </p>
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
