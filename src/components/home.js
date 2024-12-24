import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#071919] text-white mb-5 text-center">
        <Image
          src="/2.jpg"
          alt="House of Flames Global"
          width={1500}
          height={250}
          className="mx-auto"
        />
        {/* <h1 className="text-5xl font-extrabold mt-4">Welcome to The House of Flames Global</h1> */}
        <p className="text-lg max-w-4xl mx-auto mt-4">
          Transforming lives across generations through liberation, revival, and equipping 
          for purpose-driven God-representation.
        </p>
        <div className="mt-6 pb-4">
          <a
            href="/about"
            className="inline-block bg-[#B41000] px-6 py-3 text-white rounded-lg font-medium hover:bg-[#2e5953] transition"
          >
            Learn More About Us
          </a>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">What We Do</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Reaching Out",
              description:
                "Connecting with the unsaved and unchurched through impactful outreaches.",
            },
            {
              title: "Transforming Lives",
              description:
                "Processing and teaching men into discipleship and revival.",
            },
            {
              title: "Equipping Disciples",
              description:
                "Preparing individuals for God-representation and purpose fulfillment.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            To prepare quality men who are liberated, revived, reformed, and equipped 
            to represent God across generations and territories.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Join Our Services</h2>
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

      {/* Call to Action Section */}
      <section className="bg-[#B41000] text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Be a Part of Our Mission</h2>
        <p className="text-lg mb-6">
          Whether you’re looking for spiritual growth, discipleship, or a way to contribute
          to transforming lives, we invite you to join us.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#3D7069] px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
