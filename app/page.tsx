"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Home() {
  let tabs = [
    {id: "world", label: "World"},
    {id: "ny", label: "N.Y."},
    {id: "business", label: "Business"},
    {id: "arts", label: "Arts"},
    {id: "science", label: "Science"},
  ]

  let [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div>
        {tabs.map((tab)=>(
          <button
            key={tab.id}
            onClick={()=> setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? "" : "hover:opacity-50"}
            relative rounded-full px-3 py-1.5 text-sm text-white outline-2 outline-sky-400 focus-visible:outline transition`}
          >
            {activeTab === tab.id && (
              <motion.div 
                layoutId="active-pill" 
                className="absolute inset-0 bg-white" 
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", duration: 0.75 }} 
                />
            )}
            <span className="relative z-10 mix-blend-exclusion">{tab.label}</span>
          </button>
        ))}
      </div>
    </main>
  )
}
