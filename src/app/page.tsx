'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { HeartIcon, ScrollText, Download, Calendar } from 'lucide-react'

export default function Home() {
  
  const features = [
    {
      icon: <ScrollText className="w-6 h-6" />,
      title: "Easy Information Input",
      description: "Simple step-by-step form to collect all ceremony details"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Multiple Ceremonies",
      description: "Include dates for Haldi, Ganesh Puja, and Barat ceremonies"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Instant Download",
      description: "Get your beautifully designed invitation card instantly"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-800 via-amber-900 to-amber-800">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.3, 1, 0.3], 
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              ?
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-amber-100 mb-6">
            Create Your Perfect
            <br />
            <span className="text-amber-500">Wedding Invitation</span>
          </h1>
          <p className="text-xl text-amber-200/80 max-w-2xl mx-auto">
            Design elegant, traditional Indian wedding invitations in minutes. 
            Perfect for sharing your special moments with loved ones.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 border-amber-500/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-amber-500 text-amber-950 flex items-center justify-center mx-auto mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-amber-200/70">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <Link href="/create">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-amber-950 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20"
            >
              <HeartIcon className="mr-2 h-5 w-5" />
              Create Your Invitation Free
            </Button>
          </Link>
        </motion.div>

        {/* Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <Card className="w-full max-w-md transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <CardContent className="p-0">
              <img 
                src="/images/test.png"
                alt="Wedding Invitation Preview"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
