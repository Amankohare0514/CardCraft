'use client'

import { useSearchParams } from 'next/navigation'
import { useRef } from 'react'
import html2canvas from 'html2canvas'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Preview() {
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
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
            <div
                ref={cardRef}
                className="w-full max-w-[600px] aspect-[3/4] relative bg-cover bg-center rounded-lg overflow-hidden"
                style={{
                    backgroundImage: "url('/images/bg.png')",
                    boxShadow: '0 0 40px rgba(0,0,0,0.3)'
                }}
            >

                <div className="absolute inset-0 bg-black/10"></div>

         
                <div className="relative h-full w-full p-8 flex flex-col items-center text-white">
                    <Image
                        src="/images/hand.png"
                        alt="Praying hands"
                        width={54}
                        height={54}
                        className="mb-6 opacity-90"
                    />

                    {/* Main Content */}
                    <div className="text-center space-y-6 max-w-[80%]">
                        <div className="space-y-2 text-[#ffb950] ">
                            <h2 className="text-lg font-thin tracking-[0.2em]">
                                YOU ARE KINDLY INVITED TO THE
                            </h2>
                            <h1 className="text-xl font-thin tracking-wider mb-4">
                                MARRIAGE CEREMONY OF
                            </h1>
                        </div>

                        <div className="space-y-2 py-3 uppercase">
                            <p className="text-3xl text-[#ffb950] ">{boyName}</p>
                            <p className="text-2xl text-[#ffb950]">&</p>
                            <p className="text-3xl text-[#ffb950] ">{girlName}</p>
                        </div>

                        {/* Ceremony Details */}
                        <div className="flex items-center uppercase text-[#ffb950]  justify-center gap-4 ">
                            {/* Haldi Ceremony */}
                            <div className="border-2  border-amber-500 px-4 py-2 rounded-xl border-dashed text-center text-lg">
                                <h3 className="font-semibold">Haldi Ceremony</h3>
                                <p className="font-serif">{haldiDate}</p>
                            </div>

                            {/* Ganesh Puja */}
                            <div className="border-2  border-amber-500 px-4 py-2 rounded-xl border-dashed text-center text-lg">
                                <h3 className="font-semibold">Ganesh Puja</h3>
                                <p className="font-serif">{ganeshPujaDate}</p>
                            </div>

                            {/* Barat */}
                            <div className="border-2  border-amber-500 px-4 py-2 rounded-xl border-dashed text-center text-lg ">
                                <h3 className="font-semibold">BARAAT & RECEPTION</h3>
                                <p className="font-serif">{baratDate}</p>
                            </div>
                        </div>


                        <div className="py-2">
                            <p className="text-sm text-[#ffb950] font-bold uppercase">ADDRESS</p>
                            <p className="text-lg text-[#ffb950] font-thin uppercase">{address}</p>
                        </div>



                    </div>
                </div>
            </div>

            <Button
                onClick={handleDownload}
                size="lg"
                className="mt-8 bg-amber-600 hover:bg-amber-700 text-white"
            >
                Download Invitation
            </Button>
        </div>
    )
}
