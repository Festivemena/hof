export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#071919] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About The House of Flames Global</h1>
        <p className="text-lg max-w-4xl mx-auto">
          The House of Flames is a mandate raised to prepare quality men across generations
          who are liberated, revived, reformed, and equipped to represent God and raise others.
        </p>
      </div>

      {/* Mission Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our Mission Cycle</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Reaching Out</h3>
            <p>
              Reaching out to raw men – the unsaved, unreached, unchurched, and undisciplined –
              via effective outreaches.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Processing</h3>
            <p>
              Bringing men into the House of Flames for processing through effective publicity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Teaching</h3>
            <p>
              Teaching men to become effective disciples through our discipleship platforms.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Equipping</h3>
            <p>
              Equipping disciples to be effective witnesses for their individual assignment
              and God-representation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-200 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our Vision Cardinals</h2>
        <p className="text-center mb-8 max-w-4xl mx-auto">
          We believe that every man is complete when he is:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Saved", "Liberated", "Revived", "Transformed", "Equipped"].map((item, idx) => (
            <span
              key={idx}
              className="bg-[#3D7069] text-white px-4 py-2 rounded-full font-semibold shadow-lg"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our Services</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Sundays</h3>
            <p>First Service: 8AM</p>
            <p>Second Service: 3PM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Wednesdays</h3>
            <p>Acts of the Believers: 6PM</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-200 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { label: "G", value: "Growing" },
            { label: "O", value: "Open & Accountable" },
            { label: "D", value: "Disciplined" },
            { label: "S", value: "Servants" },
            { label: "R", value: "Respectful" },
            { label: "E", value: "Excellent" },
            { label: "P", value: "Pure" },
          ].map((core, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-[#3D7069] mb-2">{core.label}</h3>
              <p>{core.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">The Scope</h2>
        <p className="text-center max-w-4xl mx-auto mb-8">
          The House of Flames’ mandate is multifocal, extending to individuals, territories, nations, 
          and internationally.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Individual: Reaching each with the mandate.",
            "Territorial: Reaching cities, towns, and villages.",
            "National: Contributing to national prophecy fulfillment.",
            "International: Unto the uttermost parts of the earth (Acts 1:8).",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#3D7069] text-white px-6 py-4 rounded-lg shadow-lg max-w-xs text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
