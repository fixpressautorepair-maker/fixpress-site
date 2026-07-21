import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  BatteryCharging,
  CalendarDays,
  Camera,
  Car,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Droplets,
  FileCheck2,
  Gauge,
  MapPin,
  MessageCircle,
  Phone,
  ScanLine,
  Search,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Video,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pre-Purchase Inspections Rhode Island | Fixpress Automotive Services",
  description:
    "Mobile pre-purchase vehicle inspections throughout Rhode Island. Choose from Starter, Advanced, or Professional inspection packages performed by an ASE Certified technician.",
};

const packages = [
  {
    name: "Starter",
    price: "$129",
    time: "45–60 Minutes",
    tagline:
      "A professional essential inspection designed to uncover major concerns before you buy.",
    featured: false,
    features: [
      "Exterior and interior condition",
      "Engine compartment inspection",
      "Tire condition and tread evaluation",
      "Visual brake inspection",
      "Lights and safety equipment",
      "Road test",
      "Full OBD-II diagnostic scan",
      "Battery and charging check",
      "Fluid condition",
      "Visible leak inspection",
      "Basic suspension inspection",
      "Visual undercarriage inspection",
      "20+ inspection photos",
      "Digital inspection report",
      "Clear buy recommendation",
    ],
  },
  {
    name: "Advanced",
    price: "$229",
    time: "90–120 Minutes",
    tagline:
      "Our most popular package and the best balance of inspection depth, documentation, and value.",
    featured: true,
    features: [
      "Everything included in Starter",
      "Detailed suspension inspection",
      "Steering-system inspection",
      "Brake measurements",
      "Rotor-condition evaluation",
      "Exhaust-system inspection",
      "CV axle inspection",
      "Cooling-system inspection",
      "Belts and hoses",
      "Detailed charging-system evaluation",
      "Stored, pending, and permanent code review",
      "Freeze-frame data review",
      "VIN verification",
      "Recall check",
      "Available service-history review",
      "Maintenance forecast",
      "Repair-priority recommendations",
      "50+ inspection photos",
      "Phone consultation",
    ],
  },
  {
    name: "Professional",
    price: "$349",
    time: "120–180 Minutes",
    tagline:
      "Our most comprehensive inspection for buyers who want the clearest possible picture before purchasing.",
    featured: false,
    features: [
      "Everything included in Starter and Advanced",
      "Extended road test",
      "Cold-start evaluation",
      "Idle-quality assessment",
      "Restart testing",
      "Transmission analysis",
      "AWD and 4WD evaluation",
      "Turbocharger evaluation when equipped",
      "Hybrid-system observations when applicable",
      "Infotainment-system inspection",
      "HVAC inspection",
      "100+ inspection photos",
      "Walk-around video",
      "Underbody video",
      "Repair-cost estimates",
      "Negotiation points",
      "30-minute consultation",
    ],
  },
];

const comparisonRows = [
  {
    feature: "Exterior and interior inspection",
    starter: true,
    advanced: true,
    professional: true,
  },
  {
    feature: "Engine-compartment inspection",
    starter: true,
    advanced: true,
    professional: true,
  },
  {
    feature: "Full OBD-II scan",
    starter: true,
    advanced: true,
    professional: true,
  },
  {
    feature: "Road test",
    starter: true,
    advanced: true,
    professional: true,
  },
  {
    feature: "Battery, fluids, leaks, and safety checks",
    starter: true,
    advanced: true,
    professional: true,
  },
  {
    feature: "Detailed suspension and steering inspection",
    starter: false,
    advanced: true,
    professional: true,
  },
  {
    feature: "Brake and rotor measurements",
    starter: false,
    advanced: true,
    professional: true,
  },
  {
    feature: "Freeze-frame and advanced code review",
    starter: false,
    advanced: true,
    professional: true,
  },
  {
    feature: "Recall and available service-history review",
    starter: false,
    advanced: true,
    professional: true,
  },
  {
    feature: "Maintenance forecast and repair priorities",
    starter: false,
    advanced: true,
    professional: true,
  },
  {
    feature: "Cold start and extended road test",
    starter: false,
    advanced: false,
    professional: true,
  },
  {
    feature: "Transmission, AWD/4WD, turbo, and hybrid evaluation",
    starter: false,
    advanced: false,
    professional: true,
  },
  {
    feature: "Walk-around and underbody video",
    starter: false,
    advanced: false,
    professional: true,
  },
  {
    feature: "Repair-cost estimates and negotiation points",
    starter: false,
    advanced: false,
    professional: true,
  },
  {
    feature: "Inspection photos",
    starter: "20+",
    advanced: "50+",
    professional: "100+",
  },
  {
    feature: "Consultation",
    starter: "Report",
    advanced: "Phone",
    professional: "30 Minutes",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Schedule",
    description:
      "Choose your package and provide the vehicle and seller information.",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Meet the Seller",
    description:
      "We coordinate access at the residence, dealership, or agreed location.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Complete Inspection",
    description:
      "An ASE Certified technician evaluates the vehicle using the selected package.",
    icon: Search,
  },
  {
    number: "04",
    title: "Review Findings",
    description:
      "We organize the findings, photographs, recommendations, and priorities.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Receive Report",
    description:
      "You receive a clear digital report designed to support an informed decision.",
    icon: FileCheck2,
  },
];

const commonFindings = [
  {
    title: "Oil Leaks",
    description: "Leaking gaskets, seals, pans, or worn engine components.",
    icon: Droplets,
  },
  {
    title: "Suspension Wear",
    description: "Worn shocks, control arms, bushings, bearings, and joints.",
    icon: Wrench,
  },
  {
    title: "Weak Batteries",
    description: "Aging batteries, charging problems, or low reserve capacity.",
    icon: BatteryCharging,
  },
  {
    title: "Tire Wear",
    description: "Uneven wear, low tread, dry rot, or alignment concerns.",
    icon: Gauge,
  },
  {
    title: "Previous Repairs",
    description: "Evidence of collision damage or poor-quality prior repairs.",
    icon: Car,
  },
  {
    title: "Fluid Leaks",
    description: "Transmission, coolant, brake, or power-steering leaks.",
    icon: TriangleAlert,
  },
];

const faqs = [
  {
    question: "How long does a pre-purchase inspection take?",
    answer:
      "Starter inspections generally take 45–60 minutes, Advanced inspections take 90–120 minutes, and Professional inspections take approximately 120–180 minutes. Vehicle condition and accessibility can affect the final inspection time.",
  },
  {
    question: "Can you inspect a vehicle at a dealership?",
    answer:
      "Yes. We can inspect vehicles at dealerships, private residences, workplaces, and other approved locations. The seller or dealership must authorize access to the vehicle.",
  },
  {
    question: "Do I need to be present?",
    answer:
      "No. Many customers are not present. We can coordinate directly with the seller and provide your digital report and consultation after the inspection.",
  },
  {
    question: "Will you tell me whether I should buy the vehicle?",
    answer:
      "We provide a clear professional recommendation based on the vehicle’s observed condition, safety concerns, repair needs, and likely ownership costs. The final purchasing decision remains yours.",
  },
  {
    question: "Do you negotiate the vehicle price?",
    answer:
      "We do not negotiate directly with the seller. Professional inspections include repair-cost information and negotiation points that you can use during the purchase process.",
  },
  {
    question: "Do you road test every vehicle?",
    answer:
      "A road test is included when the vehicle is registered, insured, safe to operate, and the seller permits it. If a road test cannot legally or safely be performed, that limitation will be documented.",
  },
  {
    question: "Can you inspect hybrid or electric vehicles?",
    answer:
      "We can perform general inspections and observations on many hybrid and electric vehicles. Some high-voltage battery and manufacturer-specific tests may require specialized dealership equipment.",
  },
  {
    question: "Can you inspect classic or modified vehicles?",
    answer:
      "Yes, but classic, heavily modified, exotic, commercial, or specialty vehicles may require additional time or a customized inspection scope.",
  },
  {
    question: "When will I receive my report?",
    answer:
      "Reports are normally delivered within 24 hours of the completed inspection. We prioritize clear documentation rather than rushing an incomplete report.",
  },
];

function ComparisonValue({
  value,
}: {
  value: boolean | string;
}) {
  if (value === true) {
    return (
      <Check
        aria-label="Included"
        className="mx-auto h-5 w-5 text-orange-500"
        strokeWidth={3}
      />
    );
  }

  if (value === false) {
    return (
      <span aria-label="Not included" className="text-gray-300">
        —
      </span>
    );
  }

  return (
    <span className="text-xs font-extrabold uppercase tracking-wide text-gray-700 sm:text-sm">
      {value}
    </span>
  );
}

export default function PrePurchaseInspectionsPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      {/* Hero */}
      <section className="relative isolate min-h-[740px] overflow-hidden bg-black text-white lg:min-h-[790px]">
        <Image
          src="/ppi-service.png"
          alt="Fixpress technician performing a mobile pre-purchase vehicle inspection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[160px]" />

        <div className="relative mx-auto flex min-h-[740px] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6 lg:min-h-[790px] lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-500 sm:text-base">
              Rhode Island Pre-Purchase Inspections
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Buy Your Next Vehicle With Confidence
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg lg:text-xl">
              Comprehensive mobile pre-purchase inspections designed to uncover
              hidden mechanical, safety, and ownership concerns before you
              invest thousands in your next vehicle.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#packages"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-orange-500 px-7 text-sm font-black uppercase tracking-[0.1em] text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Schedule Inspection
                <CalendarDays className="h-5 w-5" />
              </Link>

              <Link
                href="#comparison"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/35 bg-white/5 px-7 text-sm font-black uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:-translate-y-1 hover:border-white hover:bg-white/10"
              >
                Compare Packages
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs font-extrabold uppercase tracking-[0.08em] text-white/80 sm:flex-row sm:flex-wrap sm:gap-7">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-orange-500" />
                ASE Certified Technician
              </span>

              <span className="inline-flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                Mobile Service Throughout RI
              </span>

              <span className="inline-flex items-center gap-2">
                <Camera className="h-5 w-5 text-orange-500" />
                Detailed Digital Reports
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative bg-[#f7f7f7] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
              Why Every Used Vehicle Should Be Inspected
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.035em] sm:text-5xl">
              Don’t Buy Someone Else’s Problems
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Even vehicles that look excellent can hide mechanical, safety,
              electrical, or accident-related concerns. A professional
              inspection gives you facts before money changes hands.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Save Thousands",
                description:
                  "Avoid costly surprises, deferred maintenance, and immediate repair bills.",
                icon: BadgeDollarSign,
              },
              {
                title: "Buy With Confidence",
                description:
                  "Understand the vehicle’s true condition before making your decision.",
                icon: ShieldCheck,
              },
              {
                title: "Professional Evaluation",
                description:
                  "Your inspection is performed by an ASE Certified automotive technician.",
                icon: Sparkles,
              },
              {
                title: "Detailed Digital Report",
                description:
                  "Receive documented findings, photographs, priorities, and recommendations.",
                icon: Camera,
              },
            ].map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-2xl border border-black/10 bg-white p-7 text-center shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(0,0,0,0.12)]"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-500 bg-orange-50 text-orange-500 transition duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-lg font-black uppercase tracking-[-0.02em]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section
        id="packages"
        className="relative bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="pointer-events-none absolute right-0 top-20 h-[380px] w-[380px] rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
              Our Inspection Packages
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.035em] sm:text-5xl">
              Choose the Right Inspection for You
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Every package provides a professional evaluation. Choose the
              level of testing, documentation, and consultation that best fits
              your purchase.
            </p>
          </div>

          <div className="mt-16 grid items-start gap-8 lg:grid-cols-3">
            {packages.map((inspectionPackage) => (
              <article
                key={inspectionPackage.name}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl bg-white transition duration-300 hover:-translate-y-2 ${
                  inspectionPackage.featured
                    ? "border-2 border-orange-500 shadow-[0_24px_60px_rgba(249,115,22,0.2)] lg:-mt-5"
                    : "border border-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.09)]"
                }`}
              >
                {inspectionPackage.featured && (
                  <div className="bg-orange-500 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-white">
                    Most Popular
                  </div>
                )}

                <div className="bg-[#101010] px-7 py-6 text-center text-white">
                  <h3 className="text-3xl font-black uppercase tracking-[-0.035em]">
                    {inspectionPackage.name}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="min-h-[84px] text-center text-sm leading-7 text-gray-600">
                    {inspectionPackage.tagline}
                  </p>

                  <div className="mt-5 text-center">
                    <p
                      className={`text-5xl font-black tracking-[-0.04em] ${
                        inspectionPackage.featured
                          ? "text-orange-500"
                          : "text-black"
                      }`}
                    >
                      {inspectionPackage.price}
                    </p>

                    <p className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                      <Clock3 className="h-4 w-4 text-orange-500" />
                      {inspectionPackage.time}
                    </p>
                  </div>

                  <div className="my-7 h-px bg-black/10" />

                  <ul className="flex-1 space-y-3">
                    {inspectionPackage.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#schedule"
                    className={`mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-md px-5 text-center text-xs font-black uppercase tracking-[0.12em] transition hover:-translate-y-1 ${
                      inspectionPackage.featured
                        ? "bg-orange-500 text-white shadow-[0_14px_35px_rgba(249,115,22,0.3)] hover:bg-orange-600"
                        : "border-2 border-black bg-white text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    Schedule {inspectionPackage.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-gray-500">
            <ShieldCheck className="h-5 w-5 text-orange-500" />
            Reports are normally delivered within 24 hours of the completed
            inspection.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section
        id="comparison"
        className="bg-[#f5f5f5] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
                What’s Included
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.035em]">
                Compare Packages Side by Side
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Compare the testing, documentation, and consultation included
                with each inspection level.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              <table className="min-w-[760px] w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th className="bg-[#151515] px-5 py-5 text-xs font-black uppercase tracking-[0.12em] text-white">
                      Inspection Feature
                    </th>
                    <th className="bg-[#151515] px-5 py-5 text-center text-xs font-black uppercase tracking-[0.12em] text-white">
                      Starter
                    </th>
                    <th className="bg-orange-500 px-5 py-5 text-center text-xs font-black uppercase tracking-[0.12em] text-white">
                      Advanced
                      <span className="mt-1 block text-[9px] tracking-[0.14em]">
                        Most Popular
                      </span>
                    </th>
                    <th className="bg-[#151515] px-5 py-5 text-center text-xs font-black uppercase tracking-[0.12em] text-white">
                      Professional
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border-t border-black/5 px-5 py-4 text-sm font-semibold text-gray-800">
                        {row.feature}
                      </td>
                      <td className="border-t border-black/5 px-5 py-4 text-center">
                        <ComparisonValue value={row.starter} />
                      </td>
                      <td className="border-x border-t border-orange-500/15 bg-orange-50/40 px-5 py-4 text-center">
                        <ComparisonValue value={row.advanced} />
                      </td>
                      <td className="border-t border-black/5 px-5 py-4 text-center">
                        <ComparisonValue value={row.professional} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
                Our Inspection Process
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.035em]">
                Simple. Thorough. Professional.
              </h2>
            </div>

            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-9 hidden border-t-2 border-dashed border-black/10 lg:block" />

              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="relative text-center lg:text-left"
                  >
                    <div className="relative z-10 mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-full bg-black text-white shadow-lg lg:mx-0">
                      <Icon className="h-8 w-8" />
                    </div>

                    <span className="mt-4 block text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                      Step {step.number}
                    </span>

                    <h3 className="mt-2 text-lg font-black uppercase">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Health score and report */}
      <section className="bg-[#f5f5f5] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:p-9">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
              Vehicle Health Score
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.035em]">
              A Clear Overall Assessment
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              Advanced and Professional inspections include an organized
              condition assessment that helps you quickly understand the
              vehicle’s strengths, concerns, and repair priorities.
            </p>

            <div className="mt-9 grid items-center gap-8 rounded-2xl bg-[#f7f7f7] p-7 sm:grid-cols-[180px_1fr]">
              <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#16a34a_0deg,#16a34a_331deg,#e5e7eb_331deg)] p-4 shadow-xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">
                  <span className="text-6xl font-black tracking-[-0.06em]">
                    92
                  </span>
                  <span className="text-sm font-bold text-gray-500">/100</span>
                </div>
              </div>

              <div>
                <p className="text-2xl font-black uppercase text-green-600">
                  Excellent
                </p>

                <p className="mt-3 text-base leading-7 text-gray-700">
                  This vehicle is in excellent overall condition with only
                  minor maintenance recommended.
                </p>

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-green-600/20 bg-green-50 p-4 text-sm font-semibold text-green-800">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Clear priorities help you make a faster, better-informed
                  decision.
                </div>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
            <div className="grid h-full md:grid-cols-[1fr_0.9fr]">
              <div className="p-7 sm:p-9">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                  Sample Report
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.035em]">
                  Findings You Can Understand
                </h2>

                <p className="mt-5 text-base leading-7 text-gray-600">
                  Your report organizes inspection findings in plain language
                  so you can understand what matters now, what can wait, and
                  what may affect the purchase.
                </p>

                <ul className="mt-7 space-y-4">
                  {[
                    "Clearly organized inspection findings",
                    "Detailed vehicle photographs",
                    "Safety and repair priorities",
                    "Maintenance recommendations",
                    "Estimated repair costs when included",
                    "Digital delivery after completion",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-semibold text-gray-700"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[420px] overflow-hidden bg-[#151515] p-7">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/30 blur-[90px]" />

                <div className="relative mx-auto mt-5 max-w-[270px] rotate-2 rounded-xl bg-white p-4 shadow-2xl">
                  <div className="border-b border-black/10 pb-3">
                    <p className="text-xl font-black italic tracking-[-0.04em]">
                      <span className="text-orange-500">FIX</span>PRESS
                    </p>
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-500">
                      Vehicle Inspection Report
                    </p>
                  </div>

                  <div className="mt-4 rounded-lg bg-gray-100 p-3">
                    <p className="text-[8px] font-black uppercase text-gray-500">
                      Vehicle Health Score
                    </p>
                    <p className="mt-1 text-3xl font-black text-green-600">
                      92/100
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="aspect-[4/3] rounded-md bg-gradient-to-br from-gray-300 to-gray-500"
                      />
                    ))}
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-2 rounded bg-gray-200" />
                    <div className="h-2 w-5/6 rounded bg-gray-200" />
                    <div className="h-2 w-3/4 rounded bg-gray-200" />
                  </div>
                </div>

                <div className="relative mx-auto -mt-16 ml-auto w-[135px] -rotate-3 rounded-[24px] border-[7px] border-black bg-white p-3 shadow-2xl">
                  <div className="mx-auto h-1 w-10 rounded-full bg-black" />

                  <p className="mt-4 text-xs font-black italic">
                    <span className="text-orange-500">FIX</span>PRESS
                  </p>

                  <div className="mt-3 aspect-square rounded-lg bg-gradient-to-br from-gray-300 to-gray-500" />

                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 rounded bg-gray-200" />
                    <div className="h-1.5 w-4/5 rounded bg-gray-200" />
                    <div className="h-1.5 w-3/5 rounded bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Common findings */}
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
                What We Commonly Find
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.035em]">
                Hidden Issues That Could Cost You
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {commonFindings.map((finding) => {
                const Icon = finding.icon;

                return (
                  <article
                    key={finding.title}
                    className="group rounded-2xl border border-black/10 bg-[#f7f7f7] p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]"
                  >
                    <Icon className="h-9 w-9 text-orange-500 transition group-hover:scale-110" />

                    <h3 className="mt-5 text-lg font-black uppercase">
                      {finding.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {finding.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f5] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.035em]">
                Common Questions. Clear Answers.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Everything you need to know before scheduling your inspection.
              </p>
            </div>

            <div className="grid items-start gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm open:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-sm font-black uppercase tracking-[-0.01em]">
                    {faq.question}

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                      <ChevronDown className="h-4 w-4 transition duration-300 group-open:rotate-180" />
                    </span>
                  </summary>

                  <div className="border-t border-black/5 px-5 pb-5 pt-4 text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="schedule"
        className="relative isolate overflow-hidden bg-black px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
      >
        <Image
          src="/ppi-service.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
              Schedule Your Inspection
            </p>

            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Don’t Buy Someone Else’s Problems
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Schedule your pre-purchase inspection today and make your next
              vehicle purchase with facts, documentation, and confidence.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-orange-500 px-7 text-sm font-black uppercase tracking-[0.1em] text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Schedule Inspection
                <CalendarDays className="h-5 w-5" />
              </Link>

              <a
                href="tel:+14013840220"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/35 bg-white/5 px-7 text-sm font-black uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:-translate-y-1 hover:border-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call (401) 384-0220
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 border-t border-white/15 pt-7 text-xs font-extrabold uppercase tracking-[0.08em] text-white/75 sm:grid-cols-2 lg:grid-cols-4">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-orange-500" />
                ASE Certified
              </span>

              <span className="inline-flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                Mobile Service
              </span>

              <span className="inline-flex items-center gap-2">
                <FileCheck2 className="h-5 w-5 text-orange-500" />
                Digital Reports
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-5 w-5 text-orange-500" />
                Fast Turnaround
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}