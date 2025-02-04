"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
    { id: "boyName", label: "Groom's Name" },
    { id: "girlName", label: "Bride's Name" },
    { id: "haldiDate", label: "Date of Haldi Ceremony" },
    { id: "ganeshPujaDate", label: "Date of Ganesh Puja" },
    { id: "address", label: "Marriage Ceremony Address" },
    { id: "baratDate", label: "Date of Barat" },
]

export default function CreateInvitation() {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const router = useRouter()

    const handleInputChange = (e: any) => {
        setFormData({ ...formData, [steps[currentStep].id]: e.target.value })
    }

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            router.push(`/preview?${new URLSearchParams(formData).toString()}`)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-red-800 via-amber-900 to-amber-800">
            <Card className="w-[350px] ">
                <CardHeader>
                    <CardTitle>
                        Step {currentStep + 1}: {steps[currentStep].label}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor={steps[currentStep].id}>{steps[currentStep].label}</Label>
                            <Input
                                id={steps[currentStep].id}
                                placeholder={`Enter ${steps[currentStep].label}`}
                                value={formData[steps[currentStep].id] || ""}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        disabled={currentStep === 0}
                    >
                        Previous
                    </Button>
                    <Button onClick={handleNext}>{currentStep === steps.length - 1 ? "Preview" : "Next"}</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

