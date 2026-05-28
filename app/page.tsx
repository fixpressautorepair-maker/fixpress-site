export default function FixpressWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-gray-400 mb-4">
                Mobile Diagnostics • Inspections • Repair
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Fixpress Automotive Services
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional mobile automotive diagnostics, pre-purchase inspections,
                and repair services delivered directly to you.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                  Book Service
                </button>

                <button className="border border-gray-600 px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
                  Get an Inspection
                </button>
              </div>
            </div>

            <div>
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Trusted Automotive Expertise</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Experienced diagnostics and honest inspections from a seasoned
                      automotive professional.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black rounded-2xl p-4 border border-gray-800">
                      <p className="text-3xl font-bold">Mobile</p>
                      <p className="text-gray-400 text-sm mt-1">We come to you</p>
                    </div>

                    <div className="bg-black rounded-2xl p-4 border border-gray-800">
                      <p className="text-3xl font-bold">Expert</p>
                      <p className="text-gray-400 text-sm mt-1">Diagnostics first</p>
                    </div>
                  </div>

                  <div className="bg-black rounded-2xl p-5 border border-gray-800">
                    <p className="font-semibold mb-2">Specializing In:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Pre-Purchase Inspections</li>
                      <li>• No-Start Diagnostics</li>
                      <li>• Brake & Suspension Repair</li>
                      <li>• Battery & Charging Systems</li>
                      <li>• General Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Reliable automotive services focused on transparency, convenience, and smart vehicle ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Pre-Purchase Inspections</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Avoid expensive surprises. Comprehensive inspections before you buy a used vehicle.
              </p>
              <p className="font-semibold">Perfect for:</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Facebook Marketplace vehicles</li>
                <li>• Dealer purchases</li>
                <li>• Private party sales</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Mobile Diagnostics</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Accurate troubleshooting for warning lights, drivability issues, electrical concerns, and no-start conditions.
              </p>
              <p className="font-semibold">Diagnostic Focus:</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Check engine lights</li>
                <li>• Electrical issues</li>
                <li>• Battery & charging systems</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Mobile Repair</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Convenient repair services performed at your home or workplace when possible.
              </p>
              <p className="font-semibold">Common Repairs:</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Brakes</li>
                <li>• Suspension components</li>
                <li>• Starters & alternators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Customers Choose Fixpress</h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
            Fixpress Automotive Services combines real-world shop experience with the convenience of mobile service.
            The goal is simple: honest diagnostics, smart recommendations, and quality work without unnecessary upsells.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50">
              <h3 className="text-2xl font-semibold mb-3">Professional Experience</h3>
              <p className="text-gray-600">
                Years of hands-on repair and automotive management experience.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50">
              <h3 className="text-2xl font-semibold mb-3">Convenience</h3>
              <p className="text-gray-600">
                Mobile service saves time and helps reduce the stress of vehicle problems.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50">
              <h3 className="text-2xl font-semibold mb-3">Transparent Service</h3>
              <p className="text-gray-600">
                Clear communication and straightforward recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Need a Vehicle Inspection or Diagnostic?
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contact Fixpress Automotive Services today to schedule a mobile appointment.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition shadow-xl">
              Call Now
            </button>

            <button className="border border-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold">Fixpress Automotive Services</h3>
            <p className="text-gray-600 mt-1">
              Mobile Diagnostics • Inspections • Repair
            </p>
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>Serving local customers with honest automotive expertise.</p>
            <p className="mt-1">© 2026 Fixpress Automotive Services</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
