"use client";

import { FormEvent, useEffect, useState } from "react";

type RequestFormProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
};

const serviceOptions = [
  "General Service Appointment",
  "Pre-Purchase Inspection",
  "Mobile Diagnostics",
  "Mobile Repair",
  "Preventative Maintenance",
  "General Question",
];

export default function RequestForm({
  isOpen,
  onClose,
  defaultService = "General Service Appointment",
}: RequestFormProps) {
  const [service, setService] = useState(defaultService);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setService(defaultService);
      setSubmitted(false);
      setErrorMessage("");
    }
  }, [isOpen, defaultService]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/maqrjraa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("The request could not be submitted.");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setErrorMessage(
        "Something went wrong while sending your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close request form"
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:border-orange-500 hover:bg-orange-500"
        >
          ×
        </button>

        <div className="border-b border-white/10 px-6 py-8 sm:px-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Fixpress Automotive Services
          </p>

          <h2 className="pr-12 text-3xl font-black text-white sm:text-4xl">
            Request Service
          </h2>

          <p className="mt-3 max-w-xl text-zinc-400">
            Tell us about your vehicle and the service you need. We’ll contact
            you as soon as possible to discuss availability.
          </p>
        </div>

        {submitted ? (
          <div className="px-6 py-14 text-center sm:px-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-3xl font-black text-black">
              ✓
            </div>

            <h3 className="text-2xl font-black text-white">
              Request Received
            </h3>

            <p className="mx-auto mt-3 max-w-md text-zinc-400">
              Thank you for contacting Fixpress. Your request has been sent,
              and we’ll reach out as soon as possible.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-xl bg-orange-500 px-8 py-4 font-black uppercase tracking-wide text-black transition hover:bg-orange-400"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 sm:px-10">
            <input
              type="hidden"
              name="_subject"
              value="New Fixpress Website Request"
            />

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-bold text-white"
              >
                Service Requested
              </label>

              <select
                id="service"
                name="Service Requested"
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white outline-none transition focus:border-orange-500"
                required
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-white"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="Name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-white"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="Phone Number"
                  type="tel"
                  autoComplete="tel"
                  placeholder="401-555-1234"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-500"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-white"
              >
                Email Address
              </label>

              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="vehicle"
                className="mb-2 block text-sm font-bold text-white"
              >
                Year, Make and Model
              </label>

              <input
                id="vehicle"
                name="Vehicle"
                type="text"
                placeholder="Example: 2021 Toyota Camry"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-bold text-white"
              >
                Brief Description
              </label>

              <textarea
                id="description"
                name="Customer Description"
                rows={5}
                placeholder="Tell us about the vehicle, concern, inspection, or service you’re requesting."
                className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-500"
                required
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-zinc-400">
              <input
                type="checkbox"
                name="Appointment Acknowledgement"
                value="Customer understands this is a request and not a confirmed appointment."
                className="mt-1 h-4 w-4 accent-orange-500"
                required
              />

              <span>
                I understand this is a service request and not a confirmed
                appointment. Fixpress will contact me to confirm availability.
              </span>
            </label>

            {errorMessage && (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-orange-500 px-6 py-4 font-black uppercase tracking-wide text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending Request..." : "Submit Request"}
            </button>

            <p className="text-center text-xs text-zinc-500">
              Your information will only be used to respond to your request.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}