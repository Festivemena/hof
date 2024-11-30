"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../../web/bb.jpg";
import { FaFacebook, FaYoutube, FaTelegram, FaGoogle, FaWhatsapp, FaInstagram } from "react-icons/fa";
import axios from "axios";

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track the selected category
  const router = useRouter();

  const categories = [
    {
      name: "Business Buildup",
      description: `At Flamezone Academy, we are dedicated to transforming visionary ideas into successful businesses. Our tailored programs and expert guidance provide entrepreneurs with the tools and knowledge needed to navigate the complexities of the business world.`,
    },
    {
      name: "Ministry Buildup",
      description: `At Flamezone Academy, our Ministry Buildup program equips and trains individuals for impactful ministry work. Through in-depth biblical teachings and practical workshops, we prepare you to effectively serve and lead in God's kingdom.`,
    },
    {
      name: "Steward Buildup",
      description: `At Flamezone Academy, our Stewards Buildup program empowers individuals to become faithful stewards of God's gifts. Through biblical teachings and practical workshops, we help you recognize and develop your unique talents for God's glory.`,
    },
    {
      name: "Believer's Buildup",
      description: `At Flamezone Academy, we believe that a spark of faith can light up the darkest corners of the world. Our mission is to kindle that spark within each believer, equipping them with the knowledge and tools they need to grow spiritually.`,
    },
  ];

  const RegisterForm = ({ category }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      proposal: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("https://hofapi-brad.onrender.com/api/register", {
          ...formData,
          category, // Include the selected category in the registration data
        });
        alert("Registration Successful");
        console.log("Registration successful:", response.data);
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Register for {category}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Phone Number</label>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Proposal/Details</label>
              <textarea
                name="proposal"
                value={formData.proposal}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#ff4500" }}
              whileTap={{ scale: 0.9 }}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Register
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full flex flex-col items-center justify-center">
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-6 p-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCategory(cat.name)}
                className="bg-white rounded-lg border-4 border-red-500 hover:bg-[#B41000] p-6 shadow-lg text-center cursor-pointer"
              >
                <h1 className="text-xl text-[#B41000] font-semibold">{cat.name}</h1>
                <p className="text-sm text-black">{cat.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <RegisterForm category={selectedCategory} />
        )}
      </div>
      <footer className="footer footer-center bg-[#B41000] text-primary-content p-2 md:p-10">
        <aside>
          <Image src={Logo} width={50} height={50} />
          <p className="font-bold text-white">HOF Global</p>
          <p className="text-white">Copyright © 2024 - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default page;