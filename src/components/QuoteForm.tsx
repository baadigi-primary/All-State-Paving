"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
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
          <select className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition bg-white">
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
          rows={4}
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        className="bg-red hover:bg-red-dark text-white font-bold px-8 py-3 rounded text-sm tracking-wide transition-colors"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
