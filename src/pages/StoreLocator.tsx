import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type Store = {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  image: string; 
  lat?: number;
  lng?: number;
  location?: string;
  
};

const stores: Store[] = [
  {
    id: 1,
    name: "Coffeeo",
    address: "Patrehalli, Hiriyur, Karnataka 577511",
    city: "Hiriyur",
    phone: "+91 80 1234 5678",
    hours: "Mon–Sun: 7:00 AM – 10:00 PM",
    image: "/store/store1.jpg",
    lat: 12.9719,
    lng: 77.6412,
    location: "EaQJ2MAY8hnzpe4S7"   
  },
  {
    id: 2,
    name: "Coffeeo",
    address: "Sira, Dwaralu, Panjiganahally, Karnataka 572139",
    city: "Sira",
    phone: "+91 80 2345 6789",
    hours: "Mon–Sun: 7:30 AM – 11:00 PM",
    image: "/store/store2.jpg"    ,
    lat: 12.9352,
    lng: 77.6245,
    location: "Wikjii3A2y5WEuCP7"
  },

  {
    id: 3,
    name: "Coffeeo — Coming Soon",
    address: "New Premium Location • Opening Soon",
    city: "Bengaluru",
    phone: "—",
    hours: "Launching Soon",
    image: "/store/store3.jpg", // use an aesthetic placeholder image
    location: "",
  },
];

const glassCard = "bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6";

export default function StoreLocator() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Store | null>(null);

  // filter by name / address / city
  const filtered = stores.filter((s) => {
    const t = (s.name + " " + s.address + " " + s.city).toLowerCase();
    return t.includes(q.trim().toLowerCase());
  });

  return (
    <div className="min-h-screen py-16 bg-[linear-gradient(180deg,#fbfaf8, #f6f4f2)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-trueGray-900 font-sans">
            Find a Coffeeo store
          </h1>
          <p className="mt-3 text-lg text-trueGray-600 max-w-2xl mx-auto">
            Visit our premium cafés for a refined coffee experience. Search, preview, and get directions instantly.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by neighbourhood, address or store name"
              className="w-full rounded-full py-4 pl-5 pr-12 text-lg outline-none border border-white/10 bg-white/50 placeholder:italic placeholder:text-trueGray-400 focus:ring-2 focus:ring-amber-300 transition"
              aria-label="Search stores"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-trueGray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((store) => (
            <motion.article
              key={store.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(15,15,15,0.06)" }}
              transition={{ duration: 0.35 }}
              className={`${glassCard} relative overflow-hidden`}
            >
              {/* store image */}
              <div className="relative h-55 rounded-xl overflow-hidden mb-4">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* content */}
              <div>
                <h3 className="text-xl font-medium text-trueGray-900">{store.name}</h3>
                <p className="mt-2 text-sm text-trueGray-600">{store.address}</p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-200/90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-trueGray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L6.343 16.657A8 8 0 1117.657 16.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-trueGray-700">{store.city}</div>
                    <div className="text-xs text-trueGray-500">{store.hours}</div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setSelected(store)}
                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6b4f2e] text-white text-sm shadow-md hover:bg-[#5a4328] transition"
                  >
                    Preview
                  </button>

                 <a
                href={`https://maps.app.goo.gl/${store.location}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/6 text-sm text-trueGray-900 hover:bg-white/8 transition"
                >
                Get directions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </a>

                </div>
              </div>
            </motion.article>
          ))}

          {/* empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center p-12 rounded-2xl bg-white/5"
            >
              <div className="text-4xl mb-4">🔎</div>
              <h4 className="text-xl font-semibold">No results</h4>
              <p className="mt-2 text-trueGray-600">Try searching different neighbourhoods — Indiranagar, Koramangala, MG Road...</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.98, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 10 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="bg-white rounded-t-2xl overflow-hidden">
                <img src={selected.image} alt={selected.name} className="w-full h-64 object-cover" />
              </div>

              <div className="p-6 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold text-trueGray-900">{selected.name}</h3>
                    <p className="mt-2 text-trueGray-600">{selected.address}, {selected.city}</p>
                    <p className="mt-1 text-trueGray-500 text-sm">{selected.hours}</p>
                  </div>

                  <div className="ml-4 flex-shrink-0">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selected.address + ', ' + selected.city)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trueGray-900 text-white shadow"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-trueGray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8a2 2 0 012-2h3.28a1 1 0 01.95.69l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5A1 1 0 0121 21v1a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                    <span className="text-sm text-trueGray-700">{selected.phone}</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-full bg-white border border-trueGray-200 text-trueGray-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>

            {/* backdrop transparent */}
            <div
              className="fixed inset-0 bg-black/30"
              onClick={() => setSelected(null)}
              aria-hidden
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
