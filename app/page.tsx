"use client";

import { useState } from "react";
import { Car, ShieldCheck, MapPin } from "lucide-react";
import RequestForm from "../components/RequestForm";

const services = [
  {
    title: "Pre-Purchase Inspections",
    description:
      "Buy your next vehicle with confidence using our comprehensive inspection and digital report.",
    image: "/ppi-service.png",
href: "/pre-purchase-inspections",
    featured: true,
  },
  {
    title: "Mobile Diagnostics",
    description:
      "Check engine lights, electrical faults, and drivability issues diagnosed at your home or workplace.",
    image: "/diagnostics-service.png",
    href: "#contact",
    featured: false,
  },
  {
    title: "Mobile Repairs",
    description:
      "Professional repairs completed on-site for many common automotive problems.",
    image: "/repairs-service.png",
    href: "#contact",
    featured: false,
  },
  {
    title: "Preventative Maintenance",
    description:
      "Batteries, oil changes, fluid services, and routine maintenance to keep your vehicle reliable.",
    image: "/maintenance-service.png",
    href: "#contact",
    featured: false,
  },
];

const trustItems = [
  {
    title: "ASE Certified",
    subtitle: "Professional Expertise",
    icon: "ase",
  },
  {
    title: "Mobile Service",
    subtitle: "We Come To You",
    icon: "car",
  },
  {
    title: "Honest & Transparent",
    subtitle: "No Pressure. No Surprises.",
    icon: "shield",
  },
  {
    title: "Local & Reliable",
    subtitle: "Serving RI & Surrounding Areas",
    icon: "location",
  },
];

export default function FixpressWebsite() {
  const [requestFormOpen, setRequestFormOpen] = useState(false);
  const [requestType, setRequestType] = useState(
    "General Service Appointment"
  );

  function openRequestForm(service: string) {
    setRequestType(service);
    setRequestFormOpen(true);
  }

  return (
    <main className="min-h-screen bg-[#090909] text-white">
     {/* Navigation */}
<header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
  <div className="mx-auto flex min-h-[118px] max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
    {/* Logo */}
    <a
      href="#home"
      aria-label="Fixpress Automotive Services home"
      className="flex shrink-0 items-center"
    >
      <img
        src="/fixpress-logo.png"
        alt="Fixpress Automotive Services"
        className="h-auto w-[230px] object-contain sm:w-[270px] lg:w-[315px]"
      />
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-7 xl:flex">
      <a
        href="#home"
        className="border-b-2 border-orange-500 py-3 text-sm font-black uppercase tracking-wide text-orange-500 transition"
      >
        Home
      </a>

      <a
        href="#services"
        className="py-3 text-sm font-bold uppercase tracking-wide text-gray-200 transition hover:text-orange-500"
      >
        Services
      </a>

<a
  href="/pre-purchase-inspections"
  className="py-3 text-sm font-bold uppercase tracking-wide text-gray-200 transition hover:text-orange-500"
>
  Inspections
</a>

      <a
        href="#about"
        className="py-3 text-sm font-bold uppercase tracking-wide text-gray-200 transition hover:text-orange-500"
      >
        About
      </a>

      <a
        href="#reviews"
        className="py-3 text-sm font-bold uppercase tracking-wide text-gray-200 transition hover:text-orange-500"
      >
        Reviews
      </a>

      <a
        href="#faq"
        className="py-3 text-sm font-bold uppercase tracking-wide text-gray-200 transition hover:text-orange-500"
      >
        FAQ
      </a>

      <a
        href="#contact"
        className="py-3 text-sm font-bold uppercase tracking-wide text-gray-200 transition hover:text-orange-500"
      >
        Contact
      </a>
    </nav>

    {/* Phone Button */}
    <a
      href="tel:14013840220"
      className="hidden shrink-0 items-center gap-3 rounded-md bg-orange-500 px-6 py-4 text-base font-black tracking-wide text-white shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-orange-400 lg:flex"
    >
      <span aria-hidden="true" className="text-xl">
        ☎
      </span>
      <span>(401) 384-0220</span>
    </a>

    {/* Mobile Call Button */}
    <a
      href="tel:14013840220"
      aria-label="Call Fixpress Automotive Services"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-orange-500 text-xl font-black text-white transition hover:bg-orange-400 lg:hidden"
    >
      ☎
    </a>
  </div>

  {/* Tablet Navigation */}
  <nav className="hidden border-t border-white/10 px-5 py-3 lg:flex xl:hidden">
    <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-7">
      {[
        ["Home", "#home"],
        ["Services", "#services"],
        ["Inspections", "/pre-purchase-inspections"],
        ["About", "#about"],
        ["Reviews", "#reviews"],
        ["FAQ", "#faq"],
        ["Contact", "#contact"],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          className={`text-xs font-bold uppercase tracking-wide transition hover:text-orange-500 ${
            label === "Home" ? "text-orange-500" : "text-gray-300"
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  </nav>
</header>

{/* Hero */}
<section
  id="home"
  className="relative isolate overflow-hidden border-b border-white/10 bg-black"
>
  {/* Background */}
  <div className="absolute inset-0 -z-30 bg-black" />

  {/* Hero Image */}
  <div className="absolute inset-y-0 right-0 -z-20 w-full lg:w-[64%]">
    <img
      src="/hero-inspection.png"
      alt="Fixpress technician performing a vehicle inspection beside a mobile service van"
      className="h-full w-full object-cover object-[58%_center]"
    />

    {/* Cinematic overlays */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/5" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
    <div className="absolute inset-0 bg-black/10" />
  </div>

  {/* Orange glow */}
  <div className="absolute -right-40 bottom-[-220px] -z-10 h-[560px] w-[560px] rounded-full bg-orange-500/20 blur-[130px]" />

  <div className="mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-16 sm:px-6 lg:min-h-[810px] lg:px-8 lg:py-20">
    <div className="relative z-10 w-full max-w-[780px]">
      <p className="mb-6 text-xs font-black uppercase tracking-[0.34em] text-orange-500 sm:text-sm">
        Mobile Repair • Inspections • Diagnostics
      </p>

      <h1 className="max-w-[760px] text-[48px] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-[62px] lg:text-[76px] xl:text-[84px]">
        Professional

        <span className="mt-2 block text-orange-500">
          Pre-Purchase
        </span>

        <span className="block text-orange-500">
          Vehicle Inspections
        </span>

        <span className="mt-5 block max-w-[760px] text-[30px] leading-[1.03] tracking-[-0.025em] text-white sm:text-[38px] lg:text-[48px]">
          & Mobile Automotive Services
        </span>
      </h1>

      <div className="mt-9 h-1 w-28 bg-orange-500" />

      <p className="mt-8 max-w-[650px] text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
        Buy with confidence. Fixpress provides professional vehicle
        inspections, diagnostics, maintenance, and repairs brought directly
        to you.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="tel:14013840220"
          className="inline-flex min-h-[58px] items-center justify-center rounded-md bg-orange-500 px-9 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_35px_rgba(249,115,22,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-orange-400"
        >
          Call Now
        </a>

        <button
          type="button"
          onClick={() => openRequestForm("General Service Appointment")}
          className="inline-flex min-h-[58px] items-center justify-center rounded-md border-2 border-orange-500 bg-black/35 px-9 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
        >
          Schedule an Appointment
        </button>
      </div>

      {/* Small trust statement */}
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
        <span>ASE Experience</span>
        <span className="hidden h-1 w-1 rounded-full bg-orange-500 sm:block" />
        <span>Mobile Convenience</span>
        <span className="hidden h-1 w-1 rounded-full bg-orange-500 sm:block" />
        <span>Honest Inspections</span>
      </div>
    </div>
  </div>

  {/* Mobile image treatment */}
  <div className="relative h-[340px] w-full lg:hidden">
    <img
      src="/hero-inspection.png"
      alt="Fixpress technician performing a vehicle inspection"
      className="h-full w-full object-cover object-[62%_center]"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

    <div className="absolute bottom-5 left-5 border-l-4 border-orange-500 bg-black/75 px-5 py-4 backdrop-blur-sm">
      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
        Honest • Reliable • Professional
      </p>

      <p className="mt-2 max-w-xs text-lg font-black uppercase leading-tight text-white">
        Automotive expertise delivered directly to your driveway.
      </p>
    </div>
  </div>
</section>
      {/* Trust Bar */}
      <section className="border-b border-white/10 bg-[#141414]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            
              <div
  key={item.title}
  className="group flex items-center gap-4 border-white/10 px-3 py-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
  {item.icon === "ase" && (
    <img
      src="/ase-logo.png"
      alt="ASE Certified"
      className="h-10 w-10 object-contain"
    />
  )}

  {item.icon === "car" && <Car size={30} />}

  {item.icon === "shield" && <ShieldCheck size={30} />}

  {item.icon === "location" && <MapPin size={30} />}
</div>

              <div>
                <p className="font-extrabold uppercase tracking-wide">
                  {item.title}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* Services */}
<section
  id="services"
  className="relative overflow-hidden bg-[#f4f4f4] px-5 py-20 text-black sm:px-6 lg:px-8 lg:py-28"
>
  {/* Background details */}
  <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[120px]" />
  <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-black/5 blur-[110px]" />

  <div className="relative mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
        What We Do
      </p>

      <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl">
        Professional Automotive Services
      </h2>

      <div className="mx-auto mt-6 h-1 w-24 bg-orange-500" />

      <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        From pre-purchase inspections to mobile diagnostics, repairs, and
        preventative maintenance, Fixpress brings professional automotive
        expertise directly to your driveway.
      </p>
    </div>

    {/* Service cards */}
    <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <article
          key={service.title}
          className={`group relative flex min-h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(0,0,0,0.16)] ${
            service.featured
              ? "border-2 border-orange-500 shadow-[0_18px_45px_rgba(249,115,22,0.14)]"
              : "border border-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
          }`}
        >
          {/* Featured badge */}
          {service.featured && (
            <div className="absolute left-4 top-4 z-20 rounded-full bg-orange-500 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-lg">
              Featured Service
            </div>
          )}

          {/* Image */}
          <div className="relative h-[245px] overflow-hidden bg-black">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition duration-300 group-hover:from-black/85" />

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
          </div>

          {/* Card content */}
          <div className="flex flex-1 flex-col p-7">
            <h3 className="text-2xl font-black uppercase leading-tight tracking-[-0.025em] text-black transition-colors duration-300 group-hover:text-orange-500">
              {service.title}
            </h3>

            <p className="mt-5 flex-1 text-base leading-7 text-gray-600">
              {service.description}
            </p>

            <a
              href={service.href}
              className="mt-7 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.12em] text-orange-500"
              aria-label={`Learn more about ${service.title}`}
            >
              Learn More

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* Inspection Feature */}
      <section
        id="inspections"
        className="border-y border-white/10 bg-[#101010] px-5 py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
              Our specialty
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl">
              Know What You Are Buying Before You Sign
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              A professional pre-purchase inspection can help identify
              mechanical, safety, maintenance, and electronic concerns before
              they become your responsibility.
            </p>

            <button
              type="button"
              onClick={() => openRequestForm("Pre-Purchase Inspection")}
              className="mt-8 inline-block rounded-md bg-orange-500 px-7 py-4 font-black uppercase tracking-wide transition hover:bg-orange-400"
            >
              Request an Inspection
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Full vehicle visual inspection",
              "Computerized system scan",
              "Tire and brake condition",
              "Fluid and maintenance review",
              "Road-test observations",
              "Detailed findings and photos",
            ].map((feature) => (
              <div
                key={feature}
                className="flex min-h-28 items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black">
                  ✓
                </span>

                <p className="font-bold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-orange-500 px-5 py-16 text-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em]">
              Fixpress Automotive Services
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
              Ready to schedule your service?
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:14013840220"
              className="rounded-md bg-black px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:bg-zinc-800"
            >
              Call (401) 384-0220
            </a>

            <button
              type="button"
              onClick={() => openRequestForm("General Question")}
              className="rounded-md border-2 border-black px-8 py-4 text-center font-black uppercase tracking-wide transition hover:bg-black hover:text-white"
            >
              Email Fixpress
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-5 py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Fixpress Automotive Services. All rights
          reserved.
        </p>
      </footer>

      <RequestForm
        isOpen={requestFormOpen}
        onClose={() => setRequestFormOpen(false)}
        defaultService={requestType}
      />
    </main>
  );
}