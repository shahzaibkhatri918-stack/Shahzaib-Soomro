import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [active, setActive] = useState("home");

  const projects = [
    { title: "Talking Head Edit", desc: "High retention talking head video edit" },
    { title: "FB Ads Campaign Edit", desc: "Conversion focused Facebook ads" },
    { title: "Podcast Editing", desc: "Clean audio + cinematic cuts" },
    { title: "VSL Editing", desc: "High converting sales video" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-xl font-bold">Shahzaib Soomro</h1>
        <div className="flex gap-6 text-sm">
          {['home','work','services','contact'].map(item => (
            <button key={item} onClick={() => setActive(item)} className="hover:text-gray-400">
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      {active === "home" && (
        <div className="h-[80vh] flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Video Editor & Storyteller
          </motion.h1>
          <p className="mt-4 text-gray-400 max-w-xl">
            Specializing in Talking Head Videos, FB Ads, Podcasts & High-Converting VSLs.
          </p>
        </div>
      )}

      {/* Work */}
      {active === "work" && (
        <div className="p-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-400 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Services */}
      {active === "services" && (
        <div className="p-10 space-y-4">
          <h2 className="text-3xl font-bold">Services</h2>
          <ul className="text-gray-400 space-y-2">
            <li>• Talking Head Video Editing</li>
            <li>• Facebook Ads Editing</li>
            <li>• Podcast Editing</li>
            <li>• VSL / Sales Video Editing</li>
          </ul>
        </div>
      )}

      {/* Contact */}
      {active === "contact" && (
        <div className="p-10 text-center">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-400 mt-4">Email: shahzaibkhatri918@gmail.com</p>
          <p className="text-gray-400">WhatsApp: 03112224164</p>
        </div>
      )}
    </div>
  );
}
