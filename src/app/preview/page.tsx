'use client'

import { useSearchParams } from 'next/navigation'
import { useRef, Suspense } from 'react'
import html2canvas from 'html2canvas'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

function PreviewContent() {
    const searchParams = useSearchParams()
    const cardRef = useRef(null)

    const boyName = searchParams.get('boyName')
    const girlName = searchParams.get('girlName')
    const haldiDate = searchParams.get('haldiDate')
    const ganeshPujaDate = searchParams.get('ganeshPujaDate')
    const address = searchParams.get('address')
    const baratDate = searchParams.get('baratDate')

    const handleDownload = async () => {
        if (cardRef.current) {
            const canvas = await html2canvas(cardRef.current)
            const image = canvas.toDataURL('image/png')
            const link = document.createElement('a')
            link.href = image
            link.download = 'marriage-invitation.png'
            link.click()
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 sm:p-8">
            <div
                ref={cardRef}
                className="w-full max-w-[400px] sm:max-w-[600px] aspect-[3/4] relative bg-cover bg-center rounded-lg overflow-hidden"
                style={{
                    backgroundImage: "url('/images/bg.png')",
                    boxShadow: '0 0 40px rgba(0,0,0,0.3)'
                }}
            >

                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative h-full w-full p-4 sm:p-6 flex flex-col items-center text-white">
                    <Image
                        src="/images/hand.png"
                        alt="Praying hands"
                        width={50}
                        height={50}
                        className="sm:mb-8 opacity-90"
                    />

                    {/* Main Content */}
                    <div className="text-center space-y-4 sm:space-y-6 max-w-[80%] sm:max-w-[70%]">
                        <div className="space-y-2 text-[#ffb950] ">
                            <h2 className="text-xs sm:text-lg font-thin tracking-[0.2em]">
                                YOU ARE KINDLY INVITED TO THE
                            </h2>
                            <h1 className="text-sm sm:text-xl font-thin tracking-wider mb-3 sm:mb-4">
                                MARRIAGE CEREMONY OF
                            </h1>
                        </div>

                        <div className="sm:space-y-4  uppercase">
                            <p className="text-lg sm:text-3xl text-[#ffb950]">{boyName}</p>
                            <p className="text-sm sm:text-2xl text-[#ffb950]">&</p>
                            <p className="text-lg sm:text-3xl text-[#ffb950]">{girlName}</p>
                        </div>

                        {/* Ceremony Details */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[#ffb950]">
                            {/* Haldi Ceremony */}
                            <div className="border-2 border-amber-500 px-3 py-2 sm:px-4 sm:py-3 rounded-3xl border-dashed text-center text-xs sm:text-sm max-w-[120px] sm:max-w-[140px]">
                                <h3 className="">Haldi Ceremony</h3>
                                <p className="font-serif">{haldiDate}</p>
                            </div>

                            {/* Ganesh Puja */}
                            <div className="border-2 border-amber-500 px-3 py-2 sm:px-4 sm:py-3 rounded-3xl border-dashed text-center text-xs sm:text-sm max-w-[120px] sm:max-w-[140px]">
                                <h3 className="">Ganesh Puja</h3>
                                <p className="font-serif">{ganeshPujaDate}</p>
                            </div>

                            {/* Barat */}
                            <div className="border-2 border-amber-500 px-3 py-2 sm:px-4 sm:py-3 rounded-3xl border-dashed text-center text-xs sm:text-sm max-w-[120px] sm:max-w-[140px]">
                                <h3 className="">BARAAT & RECEPTION</h3>
                                <p className="font-serif">{baratDate}</p>
                            </div>
                        </div>

                        <div className="mt-3 sm:mt-6">
                            <p className="text-xs sm:text-sm text-[#ffb950] font-bold uppercase">ADDRESS</p>
                            <p className="text-xs sm:text-lg text-[#ffb950] font-thin uppercase">{address}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Button
                onClick={handleDownload}
                size="lg"
                className="mt-6 sm:mt-8 bg-amber-600 hover:bg-amber-700 text-white"
            >
                Download Invitation
            </Button>
        </div>
    )
}

export default function Preview() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PreviewContent />
        </Suspense>
    )
}
